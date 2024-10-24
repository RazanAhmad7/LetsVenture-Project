document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const toggleButton = document.getElementById("toggleForm");
    const formTitle = document.getElementById("formTitle");
    const formSubtitle = document.getElementById("formSubtitle");
  
    toggleButton.addEventListener("click", () => {
      signInForm.classList.toggle("d-none");
      signUpForm.classList.toggle("d-none");
  
      if (signInForm.classList.contains("d-none")) {
        formTitle.textContent = "Welcome!";
        formSubtitle.textContent = "Already have an account?";
        toggleButton.textContent = "Sign In";
      } else {
        formTitle.textContent = "Welcome Back!";
        formSubtitle.textContent = "Don't have an account?";
        toggleButton.textContent = "Sign Up";
      }
    });
  });
  