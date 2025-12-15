const contactBtn = document.getElementById("contactBtn");
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

contactBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    return;
  }

  status.textContent = "Message sent successfully. I will contact you soon.";
  form.reset();
});
