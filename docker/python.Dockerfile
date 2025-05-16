FROM python:3.10
WORKDIR /app
COPY ./server/python_service/requirements.txt .
RUN pip install -r requirements.txt
COPY ./server/python_service .
EXPOSE 8000
CMD ["python", "app.py"]