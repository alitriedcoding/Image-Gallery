const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("number_input");
const ImageGalleryEl = document.getElementById("image-Gallery");
const errorEl = document.getElementById("error");

btnEl.addEventListener("click", Creatimage);

async function Creatimage() {
  const inputValue = inputEl.value;
  if (inputValue > 10 || inputValue < 1) {
    errorEl.style.display = "block";
    errorEl.innerText = "number should between 0 and 11";
    return;
  }

  imgs = " ";
  try {
    ImageGalleryEl.style.display = "block";
    const loading = `<img src="loadingicon.svg" alt="loading icon"/>`;
    ImageGalleryEl.innerHTML = loading;
    errorEl.style.display = "none";

    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=xOKWReu1b43VeoRYWym9PNJDxTlX64fQQqpe-kQ2RIM`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += ` <img src=${pic.urls.small} alt="here is image"/>`;
            ImageGalleryEl.style.display = "block";
            ImageGalleryEl.innerHTML = imgs;
            btnEl.style.display = "block";
            errorEl.style.display = "none";
          });
        }
      })
    );
  } catch (error) {
    errorEl.style.display = "block";
    errorEl.innerText = "in error happand";
  }
}
