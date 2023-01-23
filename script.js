// tombol share diklik -> tampilkan kotak share
document.querySelector(".share-btn").addEventListener("click", () => {
  document.querySelector(".box-share").classList.toggle("appear");
  document.querySelector(".share-btn").classList.toggle("active");
});
