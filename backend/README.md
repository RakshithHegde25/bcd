# Breast Cancer Detection Backend

This is the Flask backend for the Breast Cancer Detection system. It provides an API endpoint for analyzing mammogram images and detecting potential breast cancer.

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   flask run
   ```

The server will start at `http://localhost:5000`.

## API Endpoints

### POST /analyze

Analyzes a mammogram image and returns prediction results.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: Form data with 'image' field containing the image file

**Response:**
```json
{
  "prediction": "benign",
  "confidence": 0.95,
  "features": [
    {
      "name": "Mean Radius",
      "value": 15.78
    },
    ...
  ],
  "timestamp": "2024-02-20T10:30:45.123Z"
}
```