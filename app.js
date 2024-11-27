const menuBar = document.getElementById("menubar");
const closeBtn = document.getElementById("closebtn");
const hamburgerBtn = document.getElementById("hamburgerbtn");

hamburgerBtn.addEventListener('click', () => {
  menuBar.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  menuBar.classList.add('hidden');
})