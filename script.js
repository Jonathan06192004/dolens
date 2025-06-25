let overlayIndex = 0;

function openMessage() {
  document.body.classList.add("opened");
  const scrollArrow = document.getElementById("scrollArrow");
  scrollArrow.style.display = "block";
  overlayIndex = 1; // Set to 1 because first overlay will be shown now
  hideAllOverlays();

  // Add click event listener to videoButton to navigate to clickme.html
  const videoButton = document.getElementById("videoButton");
  if (videoButton) {
    videoButton.onclick = function() {
      window.location.href = "clickme.html";
    };
  }

  // Show the left and right frames containers with photos
  const leftFramesContainer = document.getElementById("leftFramesContainer");
  if (leftFramesContainer) {
    leftFramesContainer.style.display = "flex";
  }
  const rightFramesContainer = document.getElementById("rightFramesContainer");
  if (rightFramesContainer) {
    rightFramesContainer.style.display = "flex";
  }

  // Show the first overlay immediately
  const overlays = [
    document.getElementById("overlay1"),
    document.getElementById("overlay2"),
    document.getElementById("overlay3"),
    document.getElementById("overlay4"),
    document.getElementById("overlay5"),
    document.getElementById("overlay6"),
  ];
  if (overlays.length > 0) {
    overlays[0].style.display = "flex";
    overlays[0].scrollIntoView({ behavior: "smooth", block: "start" });
    overlays[0].parentNode.insertBefore(scrollArrow, overlays[0].nextSibling);
  }

  // Hide the video overlay initially
  const videoOverlay = document.getElementById("overlay6");
  if (videoOverlay) {
    videoOverlay.style.display = "none";
  }

  // Hide the heading when envelope is clicked
  const heading = document.getElementById("pageHeading");
  if (heading) {
    heading.style.display = "none";
  }

  // Move envelope up by adding class
  const envelopeContainer = document.querySelector(".envelope-container");
  if (envelopeContainer) {
    envelopeContainer.classList.add("move-up");
  }

  // Show the video frame
  const videoFrame = document.getElementById("videoFrame");
  if (videoFrame) {
    videoFrame.style.display = "block";
  }

  // Show the "Back to lobby" button when envelope is clicked
  const backToLobbyBtn = document.getElementById("backToLobby");
  if (backToLobbyBtn) {
    backToLobbyBtn.style.display = "none";
  }
}

const overlay6 = document.getElementById("overlay6");
if (overlay6) {
  overlay6.removeEventListener("click", function() {
    const videoButton = document.getElementById("videoButton");
    if (videoButton) {
      videoButton.style.display = "block";
    }
  });
}

function openMessage() {
  document.body.classList.add("opened");
  const scrollArrow = document.getElementById("scrollArrow");
  scrollArrow.style.display = "block";
  overlayIndex = 1; // Set to 1 because first overlay will be shown now
  hideAllOverlays();

  // Show the left and right frames containers with photos
  const leftFramesContainer = document.getElementById("leftFramesContainer");
  if (leftFramesContainer) {
    leftFramesContainer.style.display = "flex";
  }
  const rightFramesContainer = document.getElementById("rightFramesContainer");
  if (rightFramesContainer) {
    rightFramesContainer.style.display = "flex";
  }

  // Show the first overlay immediately
  const overlays = [
    document.getElementById("overlay1"),
    document.getElementById("overlay2"),
    document.getElementById("overlay3"),
    document.getElementById("overlay4"),
    document.getElementById("overlay5"),
    document.getElementById("overlay6"),
  ];
  if (overlays.length > 0) {
    overlays[0].style.display = "flex";
    overlays[0].scrollIntoView({ behavior: "smooth", block: "start" });
    overlays[0].parentNode.insertBefore(scrollArrow, overlays[0].nextSibling);
  }

  // Hide the video overlay initially
  const videoOverlay = document.getElementById("overlay6");
  if (videoOverlay) {
    videoOverlay.style.display = "none";
  }

  // Hide the heading when envelope is clicked
  const heading = document.getElementById("pageHeading");
  if (heading) {
    heading.style.display = "none";
  }

  // Move envelope up by adding class
  const envelopeContainer = document.querySelector(".envelope-container");
  if (envelopeContainer) {
    envelopeContainer.classList.add("move-up");
  }

  // Show the video frame
  const videoFrame = document.getElementById("videoFrame");
  if (videoFrame) {
    videoFrame.style.display = "block";
  }

  // Show the "Back to lobby" button when envelope is clicked
  const backToLobbyBtn = document.getElementById("backToLobby");
  if (backToLobbyBtn) {
    backToLobbyBtn.style.display = "none";
  }

  // Hide the videoButton initially when envelope is clicked
  const videoButton = document.getElementById("videoButton");
  if (videoButton) {
    videoButton.style.display = "none";
  }
}


function scrollDown() {
  const overlays = [
    document.getElementById("overlay1"),
    document.getElementById("overlay2"),
    document.getElementById("overlay3"),
    document.getElementById("overlay4"),
    document.getElementById("overlay5"),
    document.getElementById("overlay6"),
  ];

  // Hide the heading when arrow is clicked
  const heading = document.getElementById("pageHeading");
  if (heading) {
    heading.style.display = "none";
  }

  // Move envelope up by adding class when scrolling overlays
  const envelopeContainer = document.querySelector(".envelope-container");
  if (envelopeContainer) {
    envelopeContainer.classList.add("move-up");
  }

  if (overlayIndex < overlays.length) {
    overlays[overlayIndex].style.display = "flex";
    overlays[overlayIndex].scrollIntoView({ behavior: "smooth", block: "start" });

    // Move scrollArrow under the current overlay
    const scrollArrow = document.getElementById("scrollArrow");
    overlays[overlayIndex].parentNode.insertBefore(scrollArrow, overlays[overlayIndex].nextSibling);

    // Hide the videoButton for all overlays except the last one
    const videoButton = document.getElementById("videoButton");
    if (videoButton) {
      if (overlayIndex === overlays.length - 1) {
        videoButton.style.display = "block";
      } else {
        videoButton.style.display = "none";
      }
    }

    // Add highlight animation class to the current overlay only
    overlays.forEach((overlay, index) => {
      if (index === overlayIndex) {
        overlay.classList.add("overlay-button-highlight");
      } else {
        overlay.classList.remove("overlay-button-highlight");
      }
    });

    overlayIndex++;
  } else {
    // All overlays shown, optionally hide scroll arrow or reset
    // Remove move-up class to allow envelope to scroll naturally again
    if (envelopeContainer) {
      envelopeContainer.classList.remove("move-up");
    }
    // Hide scrollArrow after last overlay
    const scrollArrow = document.getElementById("scrollArrow");
    scrollArrow.style.display = "none";

    // Remove highlight animation from all overlays
    overlays.forEach(overlay => {
      overlay.classList.remove("overlay-button-highlight");
    });
  }
}

function hideAllOverlays() {
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay3").style.display = "none";
  document.getElementById("overlay4").style.display = "none";
  document.getElementById("overlay5").style.display = "none";
}
