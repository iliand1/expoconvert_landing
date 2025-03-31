from PIL import Image

# Open the original image
img = Image.open('public/Logo BW.jpg')

# Convert to RGBA if it isn't already
img = img.convert('RGBA')

# Create multiple sizes
sizes = [16, 32, 48, 64, 96, 128, 192, 256]
for size in sizes:
    img_resized = img.resize((size, size), Image.Resampling.LANCZOS)
    img_resized.save(f'public/favicon-{size}x{size}.png', 'PNG')

# Also save the 32x32 as the default favicon.png
img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img_32.save('public/favicon.png', 'PNG') 