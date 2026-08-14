from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(
    title="NusaDagang Interactive Website",
    description="Official NusaDagang B2B Corporate & Product Showcase"
)

# Mount static directory for CSS, images, and brand assets
app.mount("/static", StaticFiles(directory="static"), name="static")

# Configure Jinja2 templates directory
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    """Serves the main 7-section interactive NusaDagang experience."""
    return templates.TemplateResponse(request=request, name="index.html")

# Fallback routes to ensure any bookmark/link to old subpages seamlessly loads the main interactive app
@app.get("/{catchall:path}", response_class=HTMLResponse)
async def read_all(request: Request, catchall: str):
    return templates.TemplateResponse(request=request, name="index.html")
