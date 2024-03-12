const inputBox = document.getElementById("input-box");
const newBtn = document.querySelector("button");
const listContainer=document.querySelector("#list-container");

function addTask(){
    if(inputBox.value===""){
        alert("Write something");
    }else {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
listContainer.addEventListener("click",(evt)=>{
  if(evt.target.tagName==="LI"){
    evt.target.classList.toggle("checked");
    saveData();
  }else if(evt.target.tagName==="SPAN"){
    evt.target.parentElement.remove();
    saveData();
  }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
newBtn.addEventListener("click", () => {
  addTask();
});
showData();

