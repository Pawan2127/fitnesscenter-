// Calorie Calculator Functionality
function calculateCalories() {
  const activity = document.getElementById("activity").value;
  const duration = parseFloat(document.getElementById("duration").value);

  // Define calories burned per minute for each activity
  let caloriesPerMinute;
  switch (activity) {
    case "cardio":
      caloriesPerMinute = 10;
      break;
    case "strength":
      caloriesPerMinute = 8;
      break;
    case "yoga":
      caloriesPerMinute = 5;
      break;
    default:
      caloriesPerMinute = 0;
  }

  // Calculate the total calories burned
  if (isNaN(duration) || duration <= 0) {
    document.getElementById("calorie-result").textContent =
      "Please enter a valid duration.";
  } else {
    const caloriesBurned = caloriesPerMinute * duration;
    document.getElementById(
      "calorie-result"
    ).textContent = `You burned approximately ${caloriesBurned.toFixed(2)} calories!`;
  }
}

// Form Validation for Membership Inquiry
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const phone = document.querySelector('input[type="tel"]').value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else if (!validatePhone(phone)) {
    alert("Please enter a valid phone number.");
  } else {
    alert("Thank you for your inquiry! We will get back to you soon.");
    // Optionally, you can reset the form after submission
    document.querySelector("form").reset();
  }
});

// Helper Function for Email Validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Helper Function for Phone Validation
function validatePhone(phone) {
  const regex = /^[+]?[0-9]{10,15}$/;
  return regex.test(phone);
}
