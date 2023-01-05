(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
  const getQuote = async () => {
    try {
      //get quote data from the API
      const { data } = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      //extract the quote string from the array the API returns
      const newQuote = data[0];
      //replace the quote on the webpage
      document.querySelector("#quote").textContent = newQuote;
    } catch {
      //error?
    }
  };
  //add event listener to button
  document.querySelector("button").addEventListener("click", getQuote);
})();
