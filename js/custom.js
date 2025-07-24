$(document).ready(function () {
  $("#sidebar-nav .nav-link").click(function () {
    var parent = $(this).closest(".nav-item");

    // Toggle active class for rotation
    parent.toggleClass("show");

    // Slide toggle the dropdown menu
    parent.find(".nav-content").slideToggle();
  });
});


$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $("body").toggleClass("toggle-sidebar");
  });
});






// Toggle functionality on nested table rows


document.querySelectorAll(".NestedToggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const targetRow = document.querySelector(targetId);
    const icon = btn.querySelector("i");

    if (targetRow.classList.contains("d-none")) {
      targetRow.classList.remove("d-none");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      targetRow.classList.add("d-none");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});