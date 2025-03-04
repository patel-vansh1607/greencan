 // Copyright popup functionality
 document.addEventListener('DOMContentLoaded', function() {
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const continueButton = document.getElementById('continue-button');
    const confirmButton = document.getElementById('confirm-button');
    const copyrightOverlay = document.getElementById('copyright-overlay');
    const confirmationOverlay = document.getElementById('confirmation-overlay');
    const mainContent = document.getElementById('main-content');
    const mainsecContent = document.getElementById('mainsec-content');

    // Enable continue button when checkbox is checked
    agreeCheckbox.addEventListener('change', function() {
      continueButton.disabled = !this.checked;
    });

    // Show second popup when continue is clicked
    continueButton.addEventListener('click', function() {
      copyrightOverlay.style.display = 'none';
      confirmationOverlay.style.display = 'flex';
    });

    // Show main content when confirm button is clicked
    confirmButton.addEventListener('click', function() {
      confirmationOverlay.style.display = 'none';
      mainContent.classList.remove('hidden');
    });
  });



lucide.createIcons(); // Initialize Lucide icons

