from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas, crud
from ..database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Property])
def read_properties(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    properties = crud.get_properties(db, skip=skip, limit=limit)
    return properties

@router.post("/", response_model=schemas.Property)
def create_property(property: schemas.PropertyCreate, db: Session = Depends(get_db)):
    return crud.create_property(db, models.Property(**property.dict()))

@router.get("/{property_id}", response_model=schemas.Property)
def read_property(property_id: int, db: Session = Depends(get_db)):
    property = crud.get_property(db, property_id)
    if property is None:
        raise HTTPException(status_code=404, detail="Property not found")
    return property
