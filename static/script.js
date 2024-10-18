// Preview the uploaded image before sending it to the server
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;

        const previewDiv = document.getElementById('imagePreview');
        previewDiv.innerHTML = "";
        previewDiv.appendChild(imgElement);
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});

// Analyze the image and fetch OCR results
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const imageInput = document.getElementById('imageUpload').files[0];

    if (!imageInput) {
        alert("Please upload an image.");
        return;
    }

    // Prepare form data and send it to the backend
    let formData = new FormData();
    formData.append("image", imageInput);

    // Send the image to the backend
    fetch('/ocr-analyze', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
    .then(data => {
        // Display the OCR output
        document.getElementById('ocrOutput').innerText = data.text;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
