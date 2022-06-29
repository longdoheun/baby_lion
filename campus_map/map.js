//DOM
const toggle = document.querySelector(".toggle-cover");
const toggleBtn = document.querySelector(".toggle-btn");
const MAP_CONTAINER =document.querySelector(".map-container");
const MAPS = document.querySelector(".maps")

var slider = document.getElementById("myRange");

slider.oninput = function() {
  MAPS.style.transform = `scale(${slider.value})`;
  MAPS.style.marginTop = `${50*(slider.value-1)}%`
  MAPS.style.marginLeft = `${80*(slider.value-1)+5*slider.value}%`
}
//scroll bar default value
MAP_CONTAINER.scrollTo( ( MAPS.offsetWidth - MAP_CONTAINER.offsetWidth)/2,0 )
const enlarge = () =>{
  console.log("hello");
  MAPS.style.transform = "scale(1.5)";
}
MAP_CONTAINER.ondblclick = enlarge;

// MAP_CONTAINER.addEventListener('dblclick', enlarge)

//dark mode 변환
let current = "light"
toggle.addEventListener("click",()=>{
  switch (current) {
    case "light" :
      current ="dark"
      toggle.style.backgroundColor = "#FDE461";
      document.documentElement.setAttribute('color-theme', 'dark');
    toggleBtn.animate(
      { transform : [ "translateX(0px)", "translateX(24px)"] },
      {
        duration: 1000,
        fill: "forwards",
        easing: "ease"
      }
    )
    break;

    case "dark":
      current = "light"
      toggle.style.backgroundColor = "#ffff";
      document.documentElement.setAttribute('color-theme', 'light');
      toggleBtn.animate(
        {
          transform : [ "translateX(24px)", "translateX(0px)" ]
        },
        {
          duration: 1000,
          fill: "forwards",
          easing: "ease"
        }
      )
      break;
  }
})