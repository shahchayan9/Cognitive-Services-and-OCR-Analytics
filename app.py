# app.py
from flask import Flask, render_template, request, jsonify
import os
from ocr_service import extract_text_from_image  # Azure OCR helper

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ocr-analyze', methods=['POST'])
def ocr_analyze():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    image_file = request.files['image']
    if image_file.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    # Save the image locally
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename)
    image_file.save(image_path)
    
    # Call Azure OCR Service
    text = extract_text_from_image(image_path)
    
    return jsonify({'text': text})

if __name__ == "__main__":
    app.run(debug=True)
