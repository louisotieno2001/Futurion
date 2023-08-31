
//Form validation for connection requests
const uname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const classType = document.getElementById("lesson");
const course = document.getElementById("course");
const submit = document.getElementById("submit");
submit.addEventListener("click", async (e) => {
  e.preventDefault();

  //Get the values from the input fields
  const unameValue = uname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const classTypeValue = classType.value.trim();
  const courseValue = course.value.trim();
  const messageValue = message.value.trim();

  // Check if any of the fields is empty
  if (unameValue === "" && emailValue === "" && phoneValue === "" && classTypeValue === "" && courseValue === ""   && messageValue === "") {
    alert("Please fill all input fields");
  }
  else {
    let data = {
      name: unameValue,
      email: emailValue,
      phone: phoneValue,
      lesson:classTypeValue,
      course: courseValue,
      message: messageValue,
    }
    const res = await fetch('/student', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    // Reset the form after successful submission
    uname.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  }
  window.location.href = "success.html";
});


