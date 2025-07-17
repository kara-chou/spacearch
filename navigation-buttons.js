document.addEventListener("DOMContentLoaded", function () {
  // Create navigation buttons container
  const navButtons = document.createElement("div");
  navButtons.id = "nav-buttons";

  // Create + button
  const plusButton = document.createElement("button");
  plusButton.textContent = "+";
  plusButton.title = "Next layer";

  // Create - button
  const minusButton = document.createElement("button");
  minusButton.textContent = "-";
  minusButton.title = "Previous layer";

  // Add buttons to container
  navButtons.appendChild(plusButton);
  navButtons.appendChild(minusButton);

  // Add container to body
  document.body.appendChild(navButtons);

  // Get current page
  const currentPage =
    window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  // Set up navigation logic
  plusButton.addEventListener("click", function () {
    if (currentPage === "index.html") {
      window.location.href = "layer2.html";
    } else if (currentPage === "layer2.html") {
      window.location.href = "layer3.html";
    }
  });

  minusButton.addEventListener("click", function () {
    if (currentPage === "layer2.html") {
      window.location.href = "index.html";
    } else if (currentPage === "layer3.html") {
      window.location.href = "layer2.html";
    }
  });

  // Disable buttons based on current page
  if (currentPage === "index.html") {
    minusButton.disabled = true;
  } else if (currentPage === "layer3.html") {
    plusButton.disabled = true;
  }
});
