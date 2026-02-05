document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "images/two-dolls.jpg",
    "images/green-mermaid.jpg",
    "images/white-mermaid.jpg",
    "images/urban-standing.jpg",
    "images/urban-sitting.jpg"
  ];

  let index = 0;
  const imgElement = document.querySelector(".slideshow img");

  setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
  }, 3000);
});
