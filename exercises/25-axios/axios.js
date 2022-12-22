(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
  const getNewDog = () => {
    //url of the Dog API
    const apiUrl = "https://dog.ceo/api/breeds/image/random";
    axios({
      url: apiUrl,
      method: "get",
      headers: { "content-type": "application/json" },
    })
      // .get(apiUrl)
      .then((response) => {
        //extract URL from API response
        const newDogUrl = response.data.message;
        //update src of image tag
        document.querySelector("#image").src = newDogUrl;
      })
      .catch((err) => {
        //catch error
        console.log(err);
      });
  };
  //add event listener to button
  document.querySelector("button").addEventListener("click", getNewDog);
  
})();
