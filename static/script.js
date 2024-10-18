// static/script.js
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const imageInput = document.getElementById('imageUpload').files[0];

    if (!imageInput) {
        alert("Please upload an image.");
        return;
    }

    // Prepare form data and send it to the backend (we'll do this in the next step)
    let formData = new FormData();
    formData.append("image", imageInput);

    // Send the image to the backend (we'll add the actual request later)
    fetch('/ocr-analyze', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
    .then(data => {
        // Display the OCR output (to be implemented)
        document.getElementById('ocrOutput').innerText = data.text;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
