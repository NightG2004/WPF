function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let industry = document.getElementById("industry").value;

  if (name === "" || email === "" || industry === "") {
    alert("All fields must be filled out!");
    return false;
  }

  let successMessage = "Thank you for your interest in the " + industry + " industry!";
  alert(successMessage);
  window.location.href = "page7.html"; // Redirect to successful submission page
  return false; // Prevent form submission
}
