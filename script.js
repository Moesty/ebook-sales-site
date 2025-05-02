// Open the popup
function openPopup() {
  document.getElementById('popupModal').style.display = 'flex';
}

// Close the popup
function closePopup() {
  document.getElementById('popupModal').style.display = 'none';
}

// Move to the next step in the popup
function nextStep() {
  const name = document.getElementById('nameInput').value;
  if (name) {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } else {
    alert('Please enter your name.');
  }
}

