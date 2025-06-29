#!/bin/bash

# تنشيط البيئة الافتراضية (إن وجدت)
if [ -d "venv" ]; then
    source venv/bin/activate
fi

# تثبيت المتطلبات
pip install -r requirements.txt

# تشغيل الباك إند
uvicorn app.main:app --reload --port 8000
