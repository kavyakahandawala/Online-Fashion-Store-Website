document.getElementById("profile_form").addEventListener("submit", function (e) {
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if the new password and confirm password match
  if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      e.preventDefault(); // Prevent the form from submitting
  }
});

// Cancel button functionality
document.getElementById("cancel_btn").addEventListener("click", function() {
// Restore initial form state
document.getElementById('fname').value    = initialFormState.fname;
document.getElementById('lname').value    = initialFormState.lname;
document.getElementById('username').value = initialFormState.username;
document.getElementById('email').value    = initialFormState.email;
profileImage.src = initialFormState.profileImageSrc; // Restore profile image
});