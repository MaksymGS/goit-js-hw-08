const emailInput = document.querySelector("input");
const textInput = document.querySelector("textarea");

console.log(textInput);
console.log(emailInput);

const form = {
email: "",
textarea: "",
};
localStorage.setItem('feedback-form-state', form)

emailInput.addEventListener("input", (event) => {
    form.email = event.currentTarget.value;
  console.log(event.currentTarget.value);
});
textInput.addEventListener("input", (event) => {
    form.textarea = event.currentTarget.value;
  console.log(event.currentTarget.value);
});