from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, get_db
from . import models
from .routers import properties

# إنشاء الجداول في قاعدة البيانات
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS للسماح بالاتصال من الواجهة الأمامية
origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(properties.router, prefix="/api/properties")

@app.get("/")
def read_root():
    return {"message": "Welcome to Acar Zain API"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    try:
        db.execute("SELECT 1")
        return {"database": "connected"}
    except Exception as e:
        return {"database": "error", "detail": str(e)}
