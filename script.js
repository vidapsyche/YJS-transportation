document.addEventListener("DOMContentLoaded", function() {
  const imageGallery = document.querySelector(".image-gallery");
  const images = imageGallery.querySelectorAll("img");
  const nextButton = document.querySelector("#next-button");
  const prevButton = document.querySelector("#prev-button");
  const imageCount = images.length;
  const imagesPerPage = 5;
  let currentPage = 1;

  function showImages(page) {
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    images.forEach(function(image, index) {
      if (index >= startIndex && index < endIndex) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function updateButtons() {
    if (currentPage === 1) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentPage === Math.ceil(imageCount / imagesPerPage)) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  nextButton.addEventListener("click", function() {
    currentPage++;
    showImages(currentPage);
    updateButtons();
  });

  prevButton.addEventListener("click", function() {
    currentPage--;
    showImages(currentPage);
    updateButtons();
  });

  showImages(currentPage);
  updateButtons();

  function toggleService(heading) {
    const paragraph = heading.nextElementSibling;
    paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
  }
});