import os
import replicate
import time
import logging
import backoff  # for retrying on network errors
from dotenv import load_dotenv
from pathlib import Path
import base64
from PIL import Image
import requests
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

# Constants
POLL_INTERVAL = 10  # seconds
REQUIRED_SIZE = (1024, 1024)
MAX_RETRIES = 10  # Increased from 3 to 10
LATEST_MODEL_VERSION = "c4c7e5a657e2e1abccd57625093522a9928edeccee77e3f55d57c664bcd96fa2"
RESULTS_DIR = Path("public/test-images/results")

# Create results directory if it doesn't exist
RESULTS_DIR.mkdir(parents=True, exist_ok=True)

def on_backoff(details):
    """Callback function to log backoff retries."""
    logger.warning(f"Backing off {details['wait']:0.1f} seconds after {details['tries']} tries. Error: {details['exception']}")

def on_giveup(details):
    """Callback function when all retries are exhausted."""
    logger.error(f"Giving up after {details['tries']} tries. Last error: {details['exception']}")

def download_image(url, prediction_id):
    """Download image from URL and save it to results folder."""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        # Generate filename with timestamp
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"result_{timestamp}_{prediction_id[:8]}.png"
        filepath = RESULTS_DIR / filename
        
        # Save the image
        with open(filepath, "wb") as f:
            f.write(response.content)
            
        logger.info(f"Result image saved to: {filepath}")
        return filepath
    except Exception as e:
        logger.error(f"Failed to download image: {str(e)}")
        raise

@backoff.on_exception(backoff.expo, 
                     (replicate.exceptions.ReplicateError, ConnectionError),
                     max_tries=MAX_RETRIES,
                     on_backoff=on_backoff,
                     on_giveup=on_giveup)
def fetch_prediction_result(prediction_id):
    """Fetch results for an existing prediction ID with retry logic."""
    try:
        api_token = os.getenv("REPLICATE_API_TOKEN")
        if not api_token:
            logger.error("REPLICATE_API_TOKEN not found in environment variables")
            raise ValueError("REPLICATE_API_TOKEN not found in environment variables")
        
        client = replicate.Client(api_token=api_token)
        logger.info(f"Fetching results for prediction ID: {prediction_id}")
        
        prediction = client.predictions.get(prediction_id)
        
        if prediction.status == "succeeded":
            logger.info("Found successful prediction!")
            logger.info(f"Output URL: {prediction.output}")
            print(f"Output URL: {prediction.output}")
            return prediction.output
        else:
            logger.error(f"Prediction status is {prediction.status}")
            if prediction.error:
                logger.error(f"Error details: {prediction.error}")
            if hasattr(prediction, 'logs'):
                logger.error(f"Logs: {prediction.logs}")
            return None
            
    except Exception as e:
        logger.exception(f"Error fetching prediction: {str(e)}")
        raise

def check_image_size(image_path):
    """Check if image matches required dimensions."""
    with Image.open(image_path) as img:
        if img.size != REQUIRED_SIZE:
            logger.error(f"Image {image_path} has incorrect dimensions: {img.size}. Required: {REQUIRED_SIZE}")
            raise ValueError(f"Image {image_path} must be {REQUIRED_SIZE[0]}x{REQUIRED_SIZE[1]} pixels, but got {img.size[0]}x{img.size[1]}")
        logger.info(f"Image {image_path} has correct dimensions: {img.size}")

def encode_image_to_base64(image_path):
    try:
        # First check the image size
        check_image_size(image_path)
        
        with open(image_path, "rb") as image_file:
            encoded = base64.b64encode(image_file.read()).decode('utf-8')
            logger.info(f"Successfully encoded image: {image_path}")
            logger.debug(f"Encoded size: {len(encoded)} characters")
            return encoded
    except Exception as e:
        logger.error(f"Failed to process image {image_path}: {str(e)}")
        raise

@backoff.on_exception(backoff.expo, 
                     (replicate.exceptions.ReplicateError, ConnectionError),
                     max_tries=MAX_RETRIES,
                     on_backoff=on_backoff,
                     on_giveup=on_giveup)
def test_style_your_hair():
    try:
        api_token = os.getenv("REPLICATE_API_TOKEN")
        if not api_token:
            logger.error("REPLICATE_API_TOKEN not found in environment variables")
            raise ValueError("REPLICATE_API_TOKEN not found in environment variables")
        logger.info("API token configured successfully")

        client = replicate.Client(api_token=api_token)
        logger.info("Replicate client initialized")

        # Prepare both images
        source_path = Path("public/test-images/your-image.png")
        target_path = Path("public/test-images/target-image.png")
        
        logger.info(f"Checking source image at: {source_path}")
        if not source_path.exists():
            logger.error(f"Source image not found at {source_path}")
            raise FileNotFoundError(f"Source image not found at {source_path}")
            
        logger.info(f"Checking target image at: {target_path}")
        if not target_path.exists():
            logger.error(f"Target image not found at {target_path}")
            raise FileNotFoundError(f"Target image not found at {target_path}")
        
        logger.info("Converting images to base64")
        source_image = f"data:image/jpeg;base64,{encode_image_to_base64(source_path)}"
        target_image = f"data:image/jpeg;base64,{encode_image_to_base64(target_path)}"
        logger.info("Images converted successfully")

        logger.info("Starting hair styling process...")

        # Create the prediction with only documented parameters
        logger.info("Creating prediction request")
        prediction = client.predictions.create(
            version=LATEST_MODEL_VERSION,
            input={
                "source_image": source_image,
                "target_image": target_image
            }
        )
        logger.info(f"Prediction created with ID: {prediction.id}")

        # Wait for the prediction to complete
        start_time = time.time()
        while prediction.status not in ["succeeded", "failed", "canceled"]:
            elapsed_time = time.time() - start_time
            logger.info(f"Status: {prediction.status} (Elapsed time: {elapsed_time:.1f}s)")
            
            if hasattr(prediction, 'logs'):
                logger.info(f"Prediction logs: {prediction.logs}")
            if hasattr(prediction, 'error'):
                logger.error(f"Prediction error: {prediction.error}")
            
            time.sleep(POLL_INTERVAL)
            try:
                prediction.reload()
            except Exception as e:
                logger.warning(f"Failed to reload prediction status: {str(e)}. Will retry...")
                # Continue the loop - the backoff decorator will handle retries
                continue

        # Log final status
        if prediction.status == "succeeded":
            logger.info("Processing completed successfully!")
            logger.info(f"Total processing time: {time.time() - start_time:.1f} seconds")
            logger.info(f"Output URL: {prediction.output}")
            print(f"Output URL: {prediction.output}")
            
            # Save the prediction ID for future reference
            with open("last_successful_prediction.txt", "w") as f:
                f.write(prediction.id)
            
            # Download and save the result image
            saved_path = download_image(prediction.output, prediction.id)
            print(f"Result saved to: {saved_path}")
        else:
            logger.error(f"Prediction failed with status: {prediction.status}")
            if prediction.error:
                logger.error(f"Error details: {prediction.error}")
            if hasattr(prediction, 'logs'):
                logger.error(f"Final logs: {prediction.logs}")

    except Exception as e:
        logger.exception(f"Unexpected error occurred: {str(e)}")
        raise

if __name__ == "__main__":
    try:
        # Install required packages if not present
        os.system("pip install backoff >/dev/null 2>&1")
        
        # Run a new prediction
        test_style_your_hair()
    except Exception as e:
        logger.error(f"Script failed: {str(e)}")
        raise 