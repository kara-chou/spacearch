document.addEventListener("DOMContentLoaded", function () {
  // Create navigation buttons container
  const navButtons = document.createElement("div");
  navButtons.id = "nav-buttons";

  // Create "+" button (zooms into next layer)
  const plusButton = document.createElement("button");
  plusButton.textContent = "+";

  // Create "-" button (zooms out into previous layer)
  const minusButton = document.createElement("button");
  minusButton.textContent = "-";

  // Add "+" and "-" buttons to navigation buttons container
  navButtons.appendChild(plusButton);
  navButtons.appendChild(minusButton);

  // Add container to body
  document.body.appendChild(navButtons);

  // Get current page
  const currentPage =
    window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  // Setup "+" (zoom in) Button click functionality
  // If on index, navigate to layer2. If on layer2, navigate to layer3.
  plusButton.addEventListener("click", function () {
    if (currentPage === "index.html") {
      window.location.href = "layer2.html";
    } else if (currentPage === "layer2.html") {
      window.location.href = "layer3.html";
    }
  });

  // Setup "-" (zoom out) Button click functionality
  // If on layer2, navigate to index. If on layer3, navigate to layer2.
  minusButton.addEventListener("click", function () {
    if (currentPage === "layer2.html") {
      window.location.href = "index.html";
    } else if (currentPage === "layer3.html") {
      window.location.href = "layer2.html";
    }
  });

  // Disable "-" if already on index
  if (currentPage === "index.html") {
    minusButton.disabled = true;
  }
  // Disable "+" if already on layer3
  else if (currentPage === "layer3.html") {
    plusButton.disabled = true;
  }
});
