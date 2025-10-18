const button = document.getElementById("followbtn");

button.addEventListener("click", () => {
    
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.textContent = "Following";
    button.style.backgroundColor = "green";
    
  }
   else {
    button.textContent = "Follow";
    button.style.backgroundColor = "red";
    
  }
});
