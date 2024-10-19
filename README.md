# OCR Analytics Web Application

This is a web-based Optical Character Recognition (OCR) application that allows users to upload images and extract text from them using **Azure Cognitive Services**. The app is built using **Flask** for the backend, **JavaScript** for frontend interactivity, and **Azure Computer Vision** API for OCR processing.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Usage Instructions](#usage-instructions)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features
- Users can upload images in formats such as PNG, JPEG, etc.
- Provides a live preview of the uploaded image.
- Extracts text from the uploaded image using Azure Cognitive Services.
- Displays the extracted text in the web interface.
- Responsive design with a clean and intuitive user interface.

## Technologies Used
- **Flask**: Backend web framework for handling requests and serving the frontend.
- **JavaScript**: Used to add frontend interactivity and image preview functionality.
- **HTML/CSS**: For structuring and styling the web application.
- **Azure Cognitive Services**: Used for the OCR functionality to extract text from images.
- **Python**: Core language used in the backend.

## Project Setup

### Prerequisites
To run this project locally, ensure that you have the following installed:
- **Python 3.x**
- **pip** (Python package manager)
- Azure Subscription (for the Azure Cognitive Services API Key and Endpoint)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ocr-analytics.git
cd ocr-analytics
```

### 2. Install Required Python Packages
Run the following command to install the dependencies:
