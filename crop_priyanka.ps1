Add-Type -AssemblyName System.Drawing

$src = "D:\grox-project\smsm-engineers\public\images\priyanka_bhardwaj.jpg"
$dest = "D:\grox-project\smsm-engineers\public\images\priyanka_bhardwaj_cropped.jpg"

$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height

# Image is 1920 x 1920
# Her head is approx at: x = 1450, y = 850
# Let's crop a square region centered on her upper body/bust:
# X center = 1500, Y center = 1050
# Size = 750x750 (captures head, shoulders, and chest nicely)
$cropSize = 720
$cropX = [Math]::Max(0, [Math]::Min($w - $cropSize, 1480 - [int]($cropSize / 2)))
$cropY = [Math]::Max(0, [Math]::Min($h - $cropSize, 980 - [int]($cropSize / 2)))

Write-Host "Crop: X=$cropX, Y=$cropY, Size=$cropSize"

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)
$cropped = $bmp.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)

$bmp.Dispose()
$cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$cropped.Dispose()

Write-Host "Saved cropped original to $dest"
