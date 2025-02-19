let inputs = document.querySelectorAll(".code");

for (let i = 0; i < inputs.length; i++) {
  // Handle typing forward
  inputs[i].addEventListener("input", () => {
    if (inputs[i].value.length === 1 && i < inputs.length - 1) {
      inputs[i + 1].focus(); // Move focus to the next field
    }
  });

  // Handle backspace
  inputs[i].addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && inputs[i].value === "" && i > 0) {
      inputs[i - 1].value = ""; // Clear the previous field
      inputs[i - 1].focus(); // Move focus to the previous field
    }
  });
}