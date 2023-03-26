rotageBtns1.addEventListener("click", () => {
  if (isRotated) {
    logo1.style.transform = "rotate(180deg)";
    // logo2.style.transform = "rotate(180deg)";
    isOpentext1.style.display = "none";
    isRotated = false;
  } else {
    logo1.style.transform = "rotate(0deg)";
    // logo2.style.transform = "rotate(0deg)";
    isOpentext1.style.display = "block";
    isRotated = true;
  }
});

rotageBtns2.addEventListener("click", () => {
  if (isRotated) {
    logo2.style.transform = "rotate(180deg)";
    isOpentext2.style.display = "none";
    isRotated = false;
  } else {
    logo2.style.transform = "rotate(0deg)";
    isOpentext2.style.display = "block";
    isRotated = true;
  }
});