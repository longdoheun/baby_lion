import EVENTS from "./event.js"

//DOM
const ALARM_IMG = document.querySelector(".alarm");
const TABLE = document.querySelector(".table");
const TIMETABLE_CONTAINER = document.querySelector(".timetable");

//function
const renderHourRow = (hour, when) =>{
  const HOUR_ROW = document.createElement("li");
  HOUR_ROW.classList.add("row-hour");

  const HOUR_TITLE = document.createElement("h3");
  HOUR_TITLE.classList.add("hour");

  const hour_text = document.createTextNode(hour);
  const hour_br = document.createElement("br");
  const detail_text = document.createTextNode(when);

  HOUR_TITLE.appendChild(hour_text);
  HOUR_TITLE.appendChild(hour_br);
  HOUR_TITLE.appendChild(detail_text);

  HOUR_ROW.appendChild(HOUR_TITLE);
  TABLE.appendChild(HOUR_ROW);
}

const change_notation = (string) =>{
  const [ hour, min ] = string.split(":");
  const hourNotation = Number(hour)%12 === 0 ? 12 : Number(hour)%12
  return parseInt(Number(hour)/12) === 0 ? `${hour}:${min} am` : `${hourNotation}:${min} pm`
}

const change_total_min = (start, finish) => {
  const [ startHour, startMin ] = start.split(":");
  const [ finishHour, finishMin ] = finish.split(":");
  return (Number(finishHour) - Number(startHour))*60 + (Number(finishMin) - Number(startMin));
}

const calculateMarginTop = (start) => {
  const [ startHour, startMin ] = start.split(":");
  return 76*Number(startHour) + 75/60*Number(startMin)
}

const calculateHeight = (start, finish) => {
  const totalMin = change_total_min(start,finish);
  const fisrtTerm = 75/60*totalMin;
  return parseInt(totalMin/60)-1 >= 0 ? fisrtTerm + parseInt(totalMin/60)-1 : fisrtTerm ;
}

const DESIGN = [
  {
    locationColor: "#FDE461",
    eventColor: "#FFFFFF",
    bgColor: "#10675B",
    blColor: "#FDE461",
  },
  {
    locationColor: "#01BEB1",
    eventColor: "#10675B",
    bgColor: "#FDE461",
    blColor: "#10675B",
  },
]
const renderEvent = () => {
  EVENTS.forEach((event) => {
    //1. 장소
    const LOCATION = document.createElement("h5");
    const LOCATION_text = document.createTextNode(event.location);
    LOCATION.appendChild(LOCATION_text);
    LOCATION.classList.add("location");
    
    //2. 이벤트 이름
    const TO_DO = document.createElement("h4");
    const TO_DO_text = document.createTextNode(event.name);
    TO_DO.appendChild(TO_DO_text);
    TO_DO.classList.add("to-do");
  
    // 3. 이벤트 진행 시간
    const DURATION = document.createElement("h5");
    const duration_text =`${change_notation(event.start)} - ${change_notation(event.finish)}`;
    const DURATION_text = document.createTextNode(duration_text);
    DURATION.appendChild(DURATION_text);
    DURATION.classList.add("duration");
  
    //1,2,3을 담을 부모 div태그(.schedule)
    const SCHEDULE = document.createElement("div");
    SCHEDULE.appendChild(LOCATION);
    SCHEDULE.appendChild(TO_DO);
    SCHEDULE.appendChild(DURATION);
    SCHEDULE.classList.add("schedule")
  
    const design = DESIGN[event.designType]
    LOCATION.style.color = design.locationColor;
    TO_DO.style.color = design.eventColor;
    DURATION.style.color = design.eventColor;
    SCHEDULE.style.backgroundColor = design.bgColor;
    SCHEDULE.style.borderLeftColor = design.blColor;
    SCHEDULE.style.marginTop = calculateMarginTop(event.start) + "px";
    SCHEDULE.style.height = calculateHeight(event.start, event.finish) + "px";
  
    TABLE.appendChild(SCHEDULE)
  })
}
//init
renderEvent();
renderHourRow(12, "Am");
for (let i=1; i<12; i++){
  renderHourRow(i, "Am")
};

renderHourRow(12, "Pm");

for (let i=1; i<12; i++){
  renderHourRow(i, "Pm")
};



TIMETABLE_CONTAINER.scrollTo(0,684);

//누르면 오전 9시로 이동
ALARM_IMG.addEventListener("click",()=>{
  TIMETABLE_CONTAINER.scrollTo({
    top: 684,
    left: 0,
    behavior: "smooth"
  });
})