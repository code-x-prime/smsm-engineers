Add-Type -AssemblyName System.Drawing

$srcPath = "D:\grox-project\smsm-engineers\public\images\raw_dispenser.jpeg"
$outPath = "D:\grox-project\smsm-engineers\public\images\product_automatic_dispenser_cleaned.png"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $bmp.Width
$h = $bmp.Height

Write-Host "Width: $w, Height: $h"

# Create editable copy
$newBmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($newBmp)
$g.Clear([System.Drawing.Color]::White)
$g.DrawImage($bmp, 0, 0)

$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)

# 1. Clear top-left logo area:
# Logo is in top-left: x from 0 to 300, y from 0 to 180
$logoRect = New-Object System.Drawing.Rectangle(0, 0, [int]($w * 0.3), [int]($h * 0.2))
$g.FillRectangle($whiteBrush, $logoRect)

# 2. Clear bottom-right paint can / bucket:
# The bucket is on the right side: x from ~0.6*w to w, y from ~0.5*h to h
# Let's check dispenser rightmost bound in the lower half:
# Dispenser body ends around x = 550 (dispenser wheel is at bottom center/left, mouse tray is at x ~ 650, y ~ 450)
# Below the mouse tray (y > 520), the right area (x > 560) is just the bucket!
$bucketRect = New-Object System.Drawing.Rectangle([int]($w * 0.58), [int]($h * 0.52), [int]($w * 0.42), [int]($h * 0.48))
$g.FillRectangle($whiteBrush, $bucketRect)

# Save
$newBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$whiteBrush.Dispose()
$g.Dispose()
$newBmp.Dispose()
$bmp.Dispose()

Write-Host "Saved cleaned dispenser to $outPath"
