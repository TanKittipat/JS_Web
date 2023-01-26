// ประกาศฟังก์ชัน
function appendImageElement(keyword, index) {
  const imgElement = document.createElement("img");
  imgElement.className = "img" + index;
  imgElement.src = `https://source.unsplash.com/225x225/?${keyword}&sig=${index}`;
  const galleryElement = document.querySelector(".gallery");
  galleryElement.appendChild(imgElement);
}

function removeAllImage() {
  const galleryElement = document.querySelector(".gallery");
  galleryElement.innerHTML = "";
}

function searchPhotos(event) {
  const keyword = event.target.value;
  if (event.key === "Enter" && keyword) {
    removeAllImage();
    for (let i = 1; i <= 9; i++) {
      appendImageElement(keyword, i);
    }
  }
}

function main() {
  //   const inputElement = document.getElementsByClassName("search");
  //   inputElement[0].addEventListener("keydown", searchPhoto);
  const inputElement = document.querySelector(".search");
  inputElement.addEventListener("keydown", searchPhotos);
}
// เรียกใช้ฟังก์ชัน
main();
