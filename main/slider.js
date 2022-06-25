import BANNER from "./banner.js"

//DOM
const IMGCON = document.querySelector(".banner-container");
const SLIDER = document.querySelector(".slider");
const CIRCLE_CONTAINER = document.querySelector(".info-circles");

BANNER.forEach((banner) => {
  const img = document.createElement("div");

  const img_info = document.createElement("div");

  const TITLE = document.createElement("h1")
  const h1_text = document.createTextNode( banner.title );
  TITLE.appendChild(h1_text)

  const PARAGRAPH = document.createElement("p")
  const p_text = document.createTextNode( banner.paragraph );
  PARAGRAPH.appendChild(p_text)

  img_info.appendChild(TITLE);
  img_info.appendChild(PARAGRAPH);
  
  const building_img = document.createElement("img");
  building_img.src = banner.img;
  building_img.alt = "banner.img";

  img.appendChild(img_info);
  img.appendChild(building_img);
  IMGCON.appendChild(img);

  //클래스 추가
  img.classList.add("img");
  img_info.classList.add("img-info");
  building_img.classList.add("building-img");
})

const IMG = document.querySelectorAll(".img");

// 슬라이더 가로 길이 조절을 위해 interval 설정(반응형)
setInterval(() => {
  IMG.forEach((image)=>{
    image.style.width = `${SLIDER.offsetWidth}px`;
  })
  IMGCON.style.width = `${SLIDER.offsetWidth*IMG.length}px`;
}, 10);


// 페이지의 엘레먼트대로 인덱스써클 형성
IMG.forEach((image)=>{
  const CIRCLE = document.createElement("div");
  CIRCLE.classList.add("circle");
  CIRCLE_CONTAINER.appendChild(CIRCLE);
})

//DOM에 추가
const CIRCLES = document.querySelectorAll(".circle");

const resetCircles = () => {
  CIRCLES.forEach((circle)=>{
    circle.style.opacity = 0.2;
  })
}

// default value
let displayIDX = 0
resetCircles();
CIRCLES[displayIDX].style.opacity = 0.5;

//x-scroll 위치 변경 event handler
const changeDisplay = () => {
  displayIDX = displayIDX + 1 >= IMG.length ? 0 : displayIDX + 1
  resetCircles()
  CIRCLES[displayIDX].style.opacity = 0.5;
  SLIDER.scrollTo({
    top: 0,
    left: SLIDER.offsetWidth*displayIDX,
    behavior: "smooth"
  });
  console.log(SLIDER.scrollLeft);
}

// every 5s change bannner 
setInterval(() => {
  changeDisplay()
}, 5000);

// Event Listener
SLIDER.addEventListener("click", changeDisplay);
