const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  console.log(images);
  selectRandomImage(images); // Call selectRandomImage and pass images to it
};
getImage();

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  //console.log(randomIndex);
  const randomImage = images[randomIndex]; // Create the randomImage variable and use randomIndex to grab a single image from the images array.
  console.log(randomImage);
  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  const author = randomImage.author; // Declare the author variable and access the author property from the randomImage object.
  const imageAddress = randomImage.download_url; // Declare the imageAddess variable and access the download_url property from the randomImage object.
  authorSpan.innerText = author; //change innerText of the authorSpan element to the value of the author variable.
  img.src = imageAddress; //Set the src attribute of the img variable to the value of the imageAddress variable.
  imgDiv.classList.remove("hide"); // Remove the "hide" class from the imgDiv element.
};

button.addEventListener("click", function () {
  getImage();
});

