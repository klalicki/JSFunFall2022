(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character,, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * Use the AXIOS library to make AJAX requests.
   *
   */
  const populateList = async () => {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const pageCount = data.info.pages;
    for (let i = 1; i <= pageCount; i++) {
      const queryString = `https://rickandmortyapi.com/api/character?page=${i}`;
      const { data } = await axios.get(queryString);
      const characterList = data.results;
      const charSelectBox = document.querySelector("#dropdown");
      characterList.forEach((char) => {
        //extract id and name from element
        const curId = char.id;
        const curName = char.name;
        //create a new element with the name and id from element
        const elem = document.createElement("option");
        elem.value = curId;
        elem.textContent = curName;
        //add the element to the dropdown box
        charSelectBox.appendChild(elem);
      });
    }
  };

  const handleListChange = async () => {
    //get the value of the dropdown box
    const charSelectBox = document.querySelector("#dropdown");
    const id = charSelectBox.value;
    //get the character from the API using the ID
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    //extract character name and image URL from the API call result
    const imgUrl = data.image;
    const charName = data.name;
    //update the page elements with the character
    document.querySelector("#get-schwifty").src = imgUrl;
    document.querySelector("#title-head").textContent = charName;
  };
  populateList();

  const charSelectBox = document.querySelector("#dropdown");
  charSelectBox.addEventListener("change", handleListChange);
})();
