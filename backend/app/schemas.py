from pydantic import BaseModel
from enum import Enum

class PropertyType(str, Enum):
    rent = "rent"
    sale = "sale"

class PropertyBase(BaseModel):
    title: str
    description: str
    price: float
    type: PropertyType
    image_url: str | None = None

class PropertyCreate(PropertyBase):
    pass

class Property(PropertyBase):
    id: int

    class Config:
        orm_mode = True
