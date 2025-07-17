// Help button functionality
document.addEventListener("DOMContentLoaded", function () {
  // Only create help button if it doesn't already exist
  if (!document.getElementById("helpButton")) {
    const helpButton = document.createElement("button");
    helpButton.id = "helpButton";
    helpButton.className = "help-button";
    helpButton.textContent = "?";
    helpButton.onclick = showPopup;
    document.body.appendChild(helpButton);
  }

  // Only create popup if it doesn't already exist
  if (!document.getElementById("popup")) {
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close" onclick="closePopup()">&times;</span>
            <p>How do we think about designing architecture for humans in space?</p>
            <p><strong>Human-Environment Connection & Interaction Atlas (HECIA)</strong> explores behavioral risks associated with isolated, confined, and extreme environments, in particular spaceflight. We visually depict the intricate connections between the human and the environment through a "Directed Acyclic Graph" -- meaning the connections never form a loop. Recognizing the complexity of human-environment relationship, this framework serves as a starting point to consider relationships between habitat and human, and where design can strengthen, modify, and interact with these relationships.</p>
            <p>The homepage is an overview of factors associated with designing human habitation in these environments. <strong>Zoom</strong> into each subsequent layer to add more complexity. <strong>Hover</strong> over each box for their definitions. <strong>Click</strong> on a factor and hover over its related boxes to read about their relationships.</p>
            <p>This framework is a point of departure. The relationships mapped here are just as important as the arguments, reactions, and agreements that follow. We welcome thoughts and dialogue sent to hecia-info@mit.edu. </p>
            <button id="launchWalkthroughBtn" class="launch-walkthrough">Launch Walkthrough</button>
        </div>
    `;
    document.body.appendChild(popup);
    const launchBtn = popup.querySelector("#launchWalkthroughBtn");
    if (launchBtn) {
      launchBtn.addEventListener("click", launchWalkthrough);
    }
  }
});

// Show popup
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Close popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Launch walkthrough from popup
function launchWalkthrough() {
  // Hide popup first
  closePopup();
  sessionStorage.removeItem("walkthroughCompleted");
  // Reload and navigate to 1st layer to trigger walkthrough logic
  window.location.href = "index.html";
}
