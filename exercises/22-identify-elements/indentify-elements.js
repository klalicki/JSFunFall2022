!(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here
  //event handler for purchase buttons
  const handlePurchase = (event) => {
    //get the text from the button's data attribute
    const dataPlanName = event.target.getAttribute("data-plan-name");
    const dataMessageString = `Thank you for purchasing the ${dataPlanName} plan`;
    //set the notification to show the correct text
    document.querySelector("#notification").textContent = dataMessageString;
    // display the notification
    document.querySelector(".notification").classList.remove("is-hidden");
  };
  // event handler for notification close button
  const handleClose = (event) => {
    document.querySelector(".notification").classList.add("is-hidden");
  };
  //add event listeners
  document.querySelector(".delete").addEventListener("click", handleClose);
  document.querySelectorAll(".pricing-plan button").forEach((element) => {
    element.addEventListener("click", handlePurchase);
  });
})();
