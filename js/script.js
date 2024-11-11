var btn = document.querySelectorAll(".copied");
btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById("alertModal").style.display = "flex";
  });
});

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}