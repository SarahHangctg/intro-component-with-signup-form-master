console.log("Hello")

document.getElementById("contact_form").addEventListener("submit", (event) => {

  const inputs = ["fname", "lname", "email", "password"]
  
    inputs.forEach(id => {
      console.log(id)
      const input = document.getElementById(id);
      const errMessage = document.getElementById(id + "_err")
      console.log("Password value:", input.value.trim())
      if (input.value.trim() === '') {
        console.log(input)
        event.preventDefault();
        console.log("Test")
        input.removeAttribute("placeholder");
        errMessage.style.display = "block";
        input.style.borderColor = "hsl(0, 100%, 74%)";
      }
      else {
        errMessage.style.display = "none"
        input.style.borderColor = "";
      }
    })
  });