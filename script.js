
function preloadImages(imageArray) {
  imageArray.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function changeBg() {
   
  const images = [
    'assets/bg1.png',
    'assets/bg2.png',
    'assets/bg3.png',
    'assets/bg4.png',
    'assets/bg5.png',
    'assets/bg6.png',
    'assets/bg7.png',
    'assets/bg8.png',
  ];

  // Preload images
  preloadImages(images);

  const mainbody = document.querySelector("body");
  const bg = images[Math.floor(Math.random() * images.length)];

  mainbody.style.backgroundImage = `url(${bg})`;
  mainbody.style.backgroundRepeat = "no-repeat";
  mainbody.style.backgroundSize = "cover";
  mainbody.style.backgroundPosition = "center";
  mainbody.style.transitionDuration = "4s";
  mainbody.style.transitionDelay = "0s";
  mainbody.style.transitionTimingFunction = "ease-in-out";
  mainbody.style.transitionProperty = "all";
}

setInterval(changeBg, 20000);

changeBg();


const timeElement = document.querySelector("#time");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const ampmElement = document.querySelector("#ampm");
const dateElement = document.querySelector("#date");
const date = new Date();

function updateTime() {
   const date = new Date();
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();
   let temphours = null;
   let ampm = hours < 12 ? 'AM' : 'PM';
   if (hours > 12) {
      temphours = (hours.toString().padStart(2, '0') - 12);
   } else if (hours == 0) {
      temphours = 12;
   } else {
      temphours = hours.toString().padStart(2, '0');
   }
   const Hours = temphours;
   const Minutes = minutes.toString().padStart(2, '0');
   const Seconds = seconds.toString().padStart(2, '0');
   const Dates = date.toDateString();

   hoursElement.innerHTML = Hours
   minutesElement.innerHTML = Minutes;
   secondsElement.innerHTML = Seconds;
   ampmElement.innerHTML = ampm;
   dateElement.innerHTML = Dates;

}

function maindiv() {
   maincontainer.style.paddingTop = "20vh";
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Function to toggle the seconds
const colonElement = document.querySelector("#colon");
const secElement = document.querySelector("#seconds");

function seconds(event) {
   event.preventDefault();
   const isHidden = colonElement.style.display === "none";
   colonElement.style.display = isHidden ? "inline" : "none";
   secondsElement.style.display = isHidden ? "inline" : "none";
}

timeElement.addEventListener("click", seconds)


//function to for modal
const start = document.querySelector("#start");
const modal = document.querySelector("#myModal");
const btn = document.querySelector("#arrow");
const span = document.querySelector("#close");
const maincontainer = document.querySelector(".main-container");

// function getStarted() {
//    start.style.display = "none";
//    modal.style.display = "flex";
//    // maincontainer.style.paddingTop = "0vh";
// }

// function closemodal() {
//    start.style.display = "flex";
//    modal.style.display = "none";
//    maindiv();
// }

// btn.addEventListener("click", getStarted)
// span.addEventListener("click", closemodal)

//function input name

const inputName = document.querySelector("#userName");
const saveBtn = document.querySelector("#saveBtn");
const greetingsElement = document.querySelector("#greetings");
const submitnameElement  = document.querySelector("#submitname");

function submitName(event) {
   event.preventDefault();
   const name = inputName.value;
   const good = document.querySelector("#good");
   const nameElement = document.querySelector("#name");
   var userName = document.getElementById('userName').value;
   if (userName.trim() === "") {
      alert("Please enter your name.");
   } else if (userName.trim() !== "") {
      nameElement.innerHTML = name;
      start.style.display = "none";
  //    modal.style.display = "none";
      greetingsElement.style.display = "flex";
      // setTimeout(quotesList, 10000);
      quotesList();
      setInterval(quotesList, 20000);
      dateElement.style.display = "none";
      mainfocusElement.style.display = "flex";
      maindiv();
   }

   let greethours = new Date().getHours();
   if (greethours < 12 && hours >= 0) {
      good.innerHTML = "Morning";
   } else if (greethours == 12) {
      good.innerHTML = "Noon";
   } else if (greethours > 12 && greethours < 18) {
      good.innerHTML = "Afternoon";
   } else {
      good.innerHTML = "Evening";
   }
}

submitnameElement.addEventListener("submit", submitName)

//quotes array

const quotesElement = document.querySelector("#quote");
const quotesDiv = document.querySelector("#quotes");
var quotes = [
   '"Procrastination is the art of keeping up with yesterday."',
   '"The best way to get something done is to begin."',
   '"Procrastination is the thief of time."',
   '"Do it now. Sometimes later becomes never."',
   '"Procrastination makes easy things hard and hard things harder."',
   '"The sooner I fall behind, the more time I have to catch up."',
   '"Your future is created by what you do today, not tomorrow."',
   '"A year from now you may wish you had started today."',
   '"Stop waiting for the perfect time. It will never come."',
   `"Procrastination is opportunity's assassin."`,
];

function quotesList() {
   const quote = quotes[Math.floor(Math.random() * quotes.length)];

   quotesElement.innerHTML = quote;
   quotesDiv.style.display = "flex";

}
const mainfocusElement = document.querySelector("#mainfocus");
const focuslabelElement = document.querySelector("#focuslabel");
const focusinputElement = document.querySelector("#focusinput");
const focustodayElement = document.querySelector("#focustoday");
const displayMainfocus = document.querySelector("#topMainfocus");
const submitfocusElement = document.querySelector("#submitfocus");


function mainFocusToday(event) {
   if (event.key === 'Enter') {
      event.preventDefault();
      const focus = focusinputElement.value;
      displayMainfocus.innerHTML = `TODAY's Main Focus : ${focus} <i class='bx bxs-error-circle important' ></i>`;
      mainfocusElement.style.display = "none";
      greetingsElement.style.display = "none";
   }
}


submitfocusElement.addEventListener("keydown", mainFocusToday)

// Quotes Modal
const addquotesBtn = document.querySelector("#addquoteBtn");
const quoteAddElement = document.querySelector("#quoteAdd");
const quotesListElement = document.querySelector("#quotesList");
const addBtnElement = document.querySelector(".addquote");
const quotesModalElement = document.querySelector("#quotesModal");
const closeModalElement = document.querySelector("#quoteclose");

function addQuotes(event) {
   event.preventDefault();
   const addquote = quoteAddElement.value;
   if (addquote.trim() === "") {
      alert("Please Add Quote");
   } else if (addquote.trim() !== "") {
      quotes.push(addquote);
      alert("Quote Added Successfuly");
      quotesModalElement.style.display = "none";
   }
   console.log(quotes);
}

function addBtn(event) {
   event.preventDefault();
   quotesModalElement.style.display = "flex";
}

function closequotemodal() {
   quotesModalElement.style.display = "none";

}
closeModalElement.addEventListener("click", closequotemodal)
addquotesBtn.addEventListener("click", addQuotes)
addBtnElement.addEventListener("click", addBtn)


// function to add Todo List
let form = document.getElementById("toDo");
let listBox = document.getElementById("listBox");
let list = document.getElementById("list");

let numberOfToDo = 0;

function addToDo(event) {
   event.preventDefault()
   let todo = document.createElement("input")
   todo.setAttribute("type", "checkbox")
   todo.setAttribute("id", `id${numberOfToDo}`)

   let label = document.createElement("label")
   label.innerHTML = listBox.value
   label.setAttribute("for", `id${numberOfToDo}`)
   console.log(todo)
   console.log(label)
   todo.addEventListener("change", function(event) {
      let checkbox = event.target
      let label = document.querySelector(`label[for="${checkbox.id}"]`);
      if (checkbox.checked) {
         label.style.textDecoration = "line-through";
      }
      else {
         label.style.textDecoration = "none";
      }

   }
   );
   let listItem = document.createElement("div");
   list.append(todo, label);
   list.appendChild(listItem);
   numberOfToDo++;
   listBox.value = "";
   
}

form.addEventListener("submit", addToDo)


const checklistIcon = document.querySelector("#checklistIcon");
const displayTodo = document.querySelector("#TodoList");

function todoDisplay(event) {
   event.preventDefault();
   
   let greetingsOn = greetingsElement.style.display === "none";
   let isHidden = displayTodo.style.display === "none";
   let isNotHidden = mainfocusElement.style.display === "flex";
   let startOn = start.style.display === "none";
      
   if (greetingsOn && startOn) {
      displayTodo.style.display = isHidden ? "flex" : "none";
   }
   if(greetingsOn && isNotHidden){
      mainfocusElement.style.display = "none";
   }

}

checklistIcon.addEventListener("click", todoDisplay)


function viewFocus(event) {
   event.preventDefault();
   let isHidden = mainfocusElement.style.display === "none";
   mainfocusElement.style.display = isHidden ? "flex" : "none";
   displayTodo.style.display = "none";
}

displayMainfocus.addEventListener("click", viewFocus)

//POMODORO TIMER
let pomodoroMinutes = 25;
let pomodoroSeconds = 0;
let pomodoroInterval;

// function startPomodoro() {
//          pomodoroInterval = setInterval(() => {
//              if (pomodoroSeconds === 0) {
//                  if (pomodoroMinutes === 0) {
//                      clearInterval(pomodoroInterval);
//                      alert("Pomodoro session complete! Take a break.");
//                      return;
//                  }
//                  pomodoroMinutes--;
//                  pomodoroSeconds = 59;
//              } else {
//                  pomodoroSeconds--;
//              }

//              updatePomodoroDisplay();
//          }, 1000);
//      }

// function stopPomodoro() {
//    clearInterval(pomodoroInterval);
// }

// function resetPomodoro() {
//    stopPomodoro();
//    pomodoroMinutes = 25;
//    pomodoroSeconds = 0;
//    updatePomodoroDisplay();
// }
// const startpomo=document.querySelector("#startPomodoro");
// const stoppomo=document.querySelector("#stopPomodoro");
// const resetpomo=document.querySelector("#resetPomodoro");
// const minutesDisplay = pomodoroMinutes.toString().padStart(2, '0');
// const secondsDisplay = pomodoroSeconds.toString().padStart(2, '0');
// const minutestext = document.querySelector("#timer span:first-child");
// const secondstext = document.querySelector("#timer span:last-child");
// const pomoIcon = document.querySelector(".alarm-icon");
// const displayPomo = document.querySelector("#pomodoro");

// function updatePomodoroDisplay() {
//    minutestext.innerText = minutesDisplay;
//    secondstext.innerText = secondsDisplay;
// }

// function displayPomodoro(){
//    displayPomo.style.display="flex";
// }

// pomoIcon.addEventListener("click",displayPomodoro);
// startpomo.addEventListener("click", startPomodoro);
// stoppomo.addEventListener("click", stopPomodoro);
// resetpomo.addEventListener("click", resetPomodoro);



//POMODORO TIMER ENDS HERE