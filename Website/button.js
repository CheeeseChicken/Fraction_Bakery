const textarea1 = document.getElementById('textarea1');
const textarea2 = document.getElementById('textarea2');
const textarea3 = document.getElementById('textarea3');
const textarea4 = document.getElementById('textarea4');
const status1 = document.getElementById('status');

function checkTextboxesAndRedirect() {
  // Check if both textareas have content
  if (textarea1.value.trim() !== "" && textarea2.value.trim() !== "" && textarea3.value.trim() !== "" && textarea4.value.trim() !== "") {
    status1.textContent = "All text boxes are filled! Redirecting...";
    
    // Redirect to the next page (replace 'newpage.html' with your target URL)
    setTimeout(function() {
      window.location.href = "GetScammed.html";
    }, 1000); // Redirect after 1 second
  } else {
    status1.textContent = "Please fill out all boxes.";
  }
}

textarea1.addEventListener('input', checkTextboxes);
textarea2.addEventListener('input', checkTextboxes);
textarea3.addEventListener('input', checkTextboxes);
textarea4.addEventListener('input', checkTextboxes);