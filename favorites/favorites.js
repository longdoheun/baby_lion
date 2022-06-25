import FAVORITES from "./building.js";

// DOM
const FAVOR_LIST = document.querySelector(".favorites-list");

const renderFavoriteList = () => {
  FAVORITES.forEach((favorite) => {
    //1. 건물 이름을 담은 span 태그
    const BUILDING_NAME_SPAN = document.createElement("span");
    const BUILDING_NAME_TEXT = document.createTextNode(favorite.name);
    BUILDING_NAME_SPAN.appendChild(BUILDING_NAME_TEXT);
    BUILDING_NAME_SPAN.classList.add("favorite-building");
  
    // 2-1. like의 개수를 표시해주는 span태그
    const NLIKES_SPAN = document.createElement("span");
    const NLIKES_TEXT = document.createTextNode( `${favorite.nlikes} likes`);
    NLIKES_SPAN.appendChild(NLIKES_TEXT);
    NLIKES_SPAN.classList.add("nlikes");
  
    // 2-2. 즐겨찾기 여부를 표시해주는 span 태그
    const HEART_IMG = document.createElement("img");
    HEART_IMG.src = favorite.isheart ? "../svg/filled_heart.svg" : "../svg/empty_heart.svg";
    HEART_IMG.classList.add("heart");
    
    //heart click event #change icon #change likes 
    HEART_IMG.addEventListener("click",(e)=>{
      favorite.isheart = favorite.isheart ? false : true;
      HEART_IMG.src = favorite.isheart ? "../svg/filled_heart.svg" : "../svg/empty_heart.svg";
      favorite.nlikes = favorite.isheart ? favorite.nlikes+1 : favorite.nlikes-1;
      e.target.parentElement.childNodes[0].innerText = `${favorite.nlikes} likes`;
      console.dir(e.target.parentElement.childNodes[0].innerText);
    })
  
    // 2. 2-1,2-2를 담을 부모 span 태그
    const LIKES_CONTAINER_SPAN = document.createElement("span");
    LIKES_CONTAINER_SPAN.appendChild(NLIKES_SPAN);
    LIKES_CONTAINER_SPAN.appendChild(HEART_IMG);
    LIKES_CONTAINER_SPAN.classList.add("likes");
  
    // 1과 2를 담을 부모 li 태그
    const FAVORITE = document.createElement("li");
    FAVORITE.appendChild(BUILDING_NAME_SPAN);
    FAVORITE.appendChild(LIKES_CONTAINER_SPAN);
    FAVORITE.classList.add("favorite");
  
    // ul태그에 li 태그 담아서 마무리
    FAVOR_LIST.appendChild(FAVORITE);
  });
};


renderFavoriteList();
// renderFavoriteList();