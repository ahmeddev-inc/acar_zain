from sqlalchemy import Column, Integer, String, Float, Enum
from .database import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    type = Column(Enum('rent', 'sale', name='property_type'))
    image_url = Column(String, nullable=True)
    # يمكن إضافة المزيد من الحقول: location, bedrooms, bathrooms, etc.
