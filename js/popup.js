console.log("im in here")
document.addEventListener("DOMContentLoaded", function() {
    var popupButton = document.getElementById("popup-button");
    var popupContainer = document.getElementById("popup-container");
    var closeButton = document.getElementById("close-button");
    var darkOverlay = document.getElementById("dark-overlay");

    function showPopup() {
      popupContainer.style.display = "block";
      darkOverlay.style.display = "block";
    }

    function closePopup() {
      popupContainer.style.display = "none";
      darkOverlay.style.display = "none";
    }

    popupButton.addEventListener("click", showPopup);
    closeButton.addEventListener("click", closePopup);
    darkOverlay.addEventListener("click", closePopup); // Close on clicking the dark overlay as well
  });