// fancy Box
Fancybox.bind('[data-fancybox="gallery"]', {
  // Custom options for the first gallery
});

Fancybox.bind('[data-fancybox="plans"]', {
  // Custom options for the first gallery
});

Fancybox.bind('[data-fancybox="internal_amenities"]', {
  // Custom options for the first gallery
});

Fancybox.bind('[data-fancybox="external_amenities"]', {
  // Custom options for the first gallery
});

// Popup Auto
// $(window).ready(function () {
//   setTimeout(function () {
//     $("#popupModal").modal("show");
//   }, 5000);
// });

// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
