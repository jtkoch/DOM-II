// Your code goes here

// Event 1 - Makes the bus image change sizes when moused over
const busImg = document.querySelector(".busTop");
busImg.addEventListener("mouseenter", () => {
  busImg.style.transform = "scale(0.5)";
  busImg.style.transition = "all 1s";
});

// Event 2 - Makes bus image go back to original size when the cursor leaves the image
busImg.addEventListener("mouseleave", () => {
  busImg.style.transform = "scale(1)";
  busImg.style.transition = "all 1s";
});

// Event 3 - Changes "Fun Bus" color to purple when clicked
const logoChange = document.querySelector(".logo-heading");
logoChange.addEventListener("click", () => {
  logoChange.style.color = "purple";
});

// Event 4 - Changes the image when the page is resized
const adventureImg = document.querySelector(".adventure");
window.addEventListener("resize", () => {
  adventureImg.src = "img/fun-bus.jpg";
});

// Event 5 - Changes all of the images on the page to get bigger when clicked and back to normal when double clicked
const allImg = document.querySelectorAll("img").forEach(all => {
  all.addEventListener("click", () => {
    all.style.transform = "scale(1.4)";
    all.style.transition = "all 0.5s"
  })
  all.addEventListener("dblclick", () => {
    all.style.transform = "scale(1)";
    all.style.transition = "all 0.5s"
  })
});

// Event 6 - Changes sizes of the h1 elements when the page is scrolled
const h1Size = document.querySelector("h1");
document.addEventListener("wheel", () => {
  h1Size.style.fontSize = "8rem";
});

// Event 7 - Changes the font color when screen is resized
const textColor = document.querySelectorAll("p").forEach(allTxt => {
  window.addEventListener("resize", () => {
    allTxt.style.color = "yellow";
  });
});

// Event 8 - Makes an alert pop up when you try and copy the paragraph text
const cutAndCopy = document.querySelector("p");
cutAndCopy.addEventListener("copy", (event) => {
  window.alert("Please do not copy that text!");
})

// Event 9 - An alert pops up after being on the page for so long
window.onload = () =>{
  setTimeout(() =>{
    alert("Welcome to FunBus!");
  }, 3000); 
};

// Event 10 - Changes the backround color when you sroll down the page
const body = document.querySelector("body");
  window.addEventListener("scroll", () => {
    body.style.backgroundColor = "skyblue";
});

// Prevent event propagation
document.querySelector(".btn").addEventListener("click", function(event){
  event.currentTarget.innerText = "You clicked the 1st button!";
  event.stopPropagation();
});

// Stop nav items from refreshing page
const prevent = document.querySelector(".main-navigation");
prevent.addEventListener("click", (event) => {
  event.preventDefault();
});