# ocr_service.py
import os
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from msrest.authentication import CognitiveServicesCredentials

# Replace with your Azure details
AZURE_OCR_ENDPOINT = "" #  enter your endpoint 
AZURE_OCR_KEY = ""  # enter your key

# ocr_service.py
def extract_text_from_image(image_path):
    client = ComputerVisionClient(AZURE_OCR_ENDPOINT, CognitiveServicesCredentials(AZURE_OCR_KEY))
    
    with open(image_path, "rb") as image_stream:
        ocr_result = client.recognize_printed_text_in_stream(image_stream)
    
    extracted_text = []

    # Extract text from regions, lines, and words
    for region in ocr_result.regions:
        for line in region.lines:
            # Join the words together to form each line of text
            line_text = " ".join([word.text for word in line.words])
            extracted_text.append(line_text)  # Add the line to the overall text
    
    # Join all lines together into a single text block
    return "\n".join(extracted_text)

