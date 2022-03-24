const message = "Merci ! Nous vous recontacterons dans les meilleurs délais !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });