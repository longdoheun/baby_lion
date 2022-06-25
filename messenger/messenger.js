import MESSAGES from "./message.js"

//DOM
 const MS_CONTAINER = document.querySelector(".ms-container");

 const renderMessageList = () => {
  MESSAGES.forEach((message) => {
    //1. 프로필 이미지를 담은 img 태그
    const PROFILE_IMG = document.createElement("img");
    PROFILE_IMG.src = message.profile_img_src;
    PROFILE_IMG.classList.add("profile");
  
    //3. 휴지통 이미지를 담은 img 태그
    const TRASHCAN_IMG = document.createElement("img");
    TRASHCAN_IMG.src = "../svg/empty_heart.svg";
    TRASHCAN_IMG.classList.add("trashcan");

    // 2-1-1. 송신자의 이름을 담은 span태그
    const NAME_SPAN = document.createElement("span");
    const NAME_TEXT = document.createTextNode( message.name);
    NAME_SPAN.appendChild(NAME_TEXT);
    NAME_SPAN.classList.add("name");

    // 2-1-2. 타임스탬프를 담은 span태그
    const TIMESTAMP_SPAN = document.createElement("span");
    const TIMESTAMP_TEXT = document.createTextNode( message.timeStamp);
    TIMESTAMP_SPAN.appendChild(TIMESTAMP_TEXT);
    TIMESTAMP_SPAN.classList.add("time-stamp");
    
    //2-1.  2-1-1과 2-1-2를 담을 부모 div 태그(.status)
    const STATUS = document.createElement("div");
    STATUS.appendChild(NAME_SPAN);
    STATUS.appendChild(TIMESTAMP_SPAN);
    STATUS.classList.add("status");
  
    // 2-2. 메시지 내용을 담은 div 태그
    const TEXT_DIV = document.createElement("div");
    const TEXT_text = document.createTextNode( message.text);
    TEXT_DIV.appendChild(TEXT_text);
    TEXT_DIV.classList.add("ms-text");

    // 2. 2-1,2-2를 담을 부모 div 태그(.ms-info)
    const MS_INFO = document.createElement("div");
    MS_INFO.appendChild(STATUS);
    MS_INFO.appendChild(TEXT_DIV);
    MS_INFO.classList.add("ms-info");
  
    // 1,2,3을 담을 부모 li 태그
    const MS = document.createElement("li");
    MS.appendChild(PROFILE_IMG);
    MS.appendChild(MS_INFO);
    MS.appendChild(TRASHCAN_IMG);
    MS.classList.add("ms");
  
    // ul태그에 li 태그 담아서 마무리
    MS_CONTAINER.appendChild(MS);
  });
};

renderMessageList();