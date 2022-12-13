(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  document
    .querySelector("#mystery-text-source")
    .addEventListener("input", (e) => {
      document.querySelector("#mystery-text-target").textContent =
        e.target.value;
    });

  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const searchQuery = document.querySelector("#ocean-search-box").value;
    document.querySelector("#ocean-search-results").textContent = `No results for ${searchQuery} found`;
  });
  // Write your answer here
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  document.querySelector("#tc-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.querySelector("#tc-checkbox").checked) {
      document.querySelector("#tc-checkbox").classList.remove("is-invalid");
      document.querySelector("#tc-text-warning").classList.add("hidden");
      document.querySelector("#tc-text-success").classList.remove("hidden");
    } else {
      document.querySelector("#tc-checkbox").classList.add("is-invalid");
      document.querySelector("#tc-text-warning").classList.remove("hidden");
    }
  });
})();
