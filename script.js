document.getElementById('docForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const files = document.getElementById('files').files;
  
    if (files.length === 0) {
      document.getElementById('uploadStatus').innerText = "❌ Please select at least one document.";
      return;
    }
  
    // Display selected file names (optional)
    let uploadedFiles = [];
    for (let i = 0; i < files.length; i++) {
      uploadedFiles.push(files[i].name);
    }
  
    // Simulated upload success
    document.getElementById('uploadStatus').innerText =
      `✅ ${files.length} document(s) selected:\n${uploadedFiles.join(", ")}`;
  });
  
  function contactUs() {
    window.location.href = "mailto:support@travelservice.com";
  }
  