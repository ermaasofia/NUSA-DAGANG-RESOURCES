import os
import glob

html_files = glob.glob('templates/*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('href="/about"', 'href="/rtc"')
    content = content.replace('href="/services"', 'href="/product_service"')
    
    content = content.replace('<title>About Us | Nusa Dagang Resources</title>', '<title>Ready-to-Cook (RTC) | Nusa Dagang Resources</title>')
    content = content.replace('<title>Services | Nusa Dagang Resources</title>', '<title>Product & Service | Nusa Dagang Resources</title>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if os.path.exists('templates/about.html'):
    os.rename('templates/about.html', 'templates/rtc.html')
if os.path.exists('templates/services.html'):
    os.rename('templates/services.html', 'templates/product_service.html')

print('HTML replaced and files renamed')
