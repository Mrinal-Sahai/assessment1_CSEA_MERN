
document.addEventListener("DOMContentLoaded", function() {
  
    const generateResumeBtn = document.getElementById("generateResumeBtn");
    const entryDiv = document.querySelector(".Entry");
    const previewDiv = document.getElementById("previewDiv");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const linkedinInput = document.getElementById("linkedin");
    const githubInput = document.getElementById("github");
    const experienceInput = document.getElementById("experience");
    const educationInput = document.getElementById("education");
    const imageInput = document.getElementById("imageInput");
  

    generateResumeBtn.addEventListener("click", function(event) {
      event.preventDefault(); 
  
    
      const name = nameInput.value;
      const email = emailInput.value;
      const phone = phoneInput.value;
      const linkedin = linkedinInput.value;
      const github = githubInput.value;
      const experience = experienceInput.value;
      const education = educationInput.value;
      
     
      let imagePreview = "";
      if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          imagePreview = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 150px; height: auto; margin-bottom: 20px;">`;
          updatePreview();
        };
        reader.readAsDataURL(imageInput.files[0]);
      } else {
        updatePreview();
      }
  
      function updatePreview() {
        previewDiv.innerHTML = `
          <div style="text-align: center;">
            ${imagePreview}
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        `;
        entryDiv.style.display = "none";
        previewDiv.style.display = "block";
      }
    });
  });
  