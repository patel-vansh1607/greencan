document.addEventListener('DOMContentLoaded', function() {
  const agreeCheckbox = document.getElementById('agree-checkbox');
  const continueButton = document.getElementById('continue-button');
  const confirmButton = document.getElementById('confirm-button');
  const copyrightOverlay = document.getElementById('copyright-overlay');
  const confirmationOverlay = document.getElementById('confirmation-overlay');
  const mainContent = document.getElementById('main-content');
  const mainsecContent = document.getElementById('mainsec-content');
  
  if (agreeCheckbox && continueButton && confirmButton) {
      agreeCheckbox.addEventListener('change', function() {
          continueButton.disabled = !this.checked;
      });

      continueButton.addEventListener('click', function() {
          console.log("Continue button clicked!");
          copyrightOverlay.style.display = 'none';
          confirmationOverlay.style.display = 'flex';
      });

      confirmButton.addEventListener('click', function() {
          console.log("Confirm button clicked!");
          confirmationOverlay.style.display = 'none';
          if (mainContent) mainContent.classList.remove('hidden');
          if (mainsecContent) mainsecContent.classList.remove('hidden');
      });
  }

  // Initialize Lucide icons after the DOM is fully loaded
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  } else {
      console.error("Lucide is not loaded!");
  }
});
