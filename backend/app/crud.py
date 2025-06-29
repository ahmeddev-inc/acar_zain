from sqlalchemy.orm import Session
from . import models

def get_property(db: Session, property_id: int):
    return db.query(models.Property).filter(models.Property.id == property_id).first()

def get_properties(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Property).offset(skip).limit(limit).all()

def create_property(db: Session, property: models.Property):
    db.add(property)
    db.commit()
    db.refresh(property)
    return property
