from PIL import Image

# Open the original image
img = Image.open('public/expoiq_logo.jpg')

# Convert to RGBA if it isn't already
img = img.convert('RGBA')

# Resize to 48x48 with high quality
img_resized = img.resize((48, 48), Image.Resampling.LANCZOS)

# Save as PNG
img_resized.save('public/favicon.png', 'PNG') 