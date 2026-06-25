from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(title="Nusa Dagang Resources")

# Mount the static directory to serve CSS and other assets
app.mount("/static", StaticFiles(directory="static"), name="static")

# Configure Jinja2 templates directory
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse(request=request, name="index.html")

@app.get("/about", response_class=HTMLResponse)
async def read_rtc(request: Request):
    return templates.TemplateResponse(request=request, name="Ready-to-Cook(RTC).html")

@app.get("/services", response_class=HTMLResponse)
async def read_product_service(request: Request):
    return templates.TemplateResponse(request=request, name="ProductService.html")

@app.get("/contact", response_class=HTMLResponse)
async def read_contact(request: Request):
    return templates.TemplateResponse(request=request, name="contact.html")
