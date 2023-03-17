const feedbackEl = document.querySelectorAll(".feedback");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedfeedback = "";

feedbackEl.forEach((feedbackEl) => {
  feedbackEl.addEventListener("click", (e) => {
    removeActive();
    selectedfeedback = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedfeedback !== "") {
    containerEl.innerHTML = `
        <strong>Thank You! </strong>
        <br>
        <br>
        <strong>Feedback: ${selectedfeedback}</strong>
        <br>
        <br>
        <p>We'll use your feedback to improve our customer support.
        `;
  }
});

function removeActive() {
  feedbackEl.forEach((feedbackEl) => {
    feedbackEl.classList.remove("active");
  });
}
