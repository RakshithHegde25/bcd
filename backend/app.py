from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from PIL import Image
import numpy as np
import io
import os

app = Flask(__name__)
CORS(app)

def extract_features(image):
    # Convert image to grayscale and extract features
    img = Image.open(io.BytesIO(image)).convert('L')
    img_array = np.array(img)
    
    # Example feature extraction (replace with your actual feature extraction logic)
    features = [
        {"name": "Mean Radius", "value": np.mean(img_array)},
        {"name": "Texture", "value": np.std(img_array)},
        {"name": "Perimeter", "value": np.sum(img_array > 128)},
        {"name": "Area", "value": img_array.size},
        {"name": "Smoothness", "value": np.var(img_array)},
        {"name": "Compactness", "value": np.mean(np.abs(img_array - np.mean(img_array)))},
    ]
    
    return features

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    image = request.files['image'].read()
    
    try:
        # Extract features from the image
        features = extract_features(image)
        
        # Example prediction (replace with your actual model prediction)
        # In a real application, you would load your trained model here
        prediction = 'benign'  # or 'malignant' based on model prediction
        confidence = 0.95  # example confidence score
        
        result = {
            'prediction': prediction,
            'confidence': confidence,
            'features': features,
            'timestamp': datetime.now().isoformat()
        }
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)