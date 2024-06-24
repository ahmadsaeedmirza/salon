
const toggleBtns = document.querySelectorAll('.toggle-btn');
const dropdowns = document.querySelectorAll('.dropdown');

toggleBtns.forEach((toggleBtn, index) => {
  toggleBtn.onclick = function () {
    dropdowns[index].classList.toggle('open');
  };
});
 