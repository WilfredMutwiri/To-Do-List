alert("Welcome back!");
let inputText=document.querySelector(".inputText");
let listItems=document.querySelector(".listItems");
// the add list function upon clicking on the submit button
let counter=0;

let counterTxt=document.querySelector(".counter strong");
function addList(){
    if(inputText.value ===''){
        alert("Enter text to submit");
    }else{
        let li=document.createElement("LI");
        li.innerHTML=inputText.value;
        listItems.appendChild(li);
        let span=document.createElement("SPAN");
        span.innerHTML="<img src='images/Screenshot_2023-07-27_233337-removebg-preview.png'>";
        li.appendChild(span);
        if(listItems.appendChild(li)){
            counter++;
            counterTxt.innerHTML=counter;
            saveData()
        }
        if(counter<=0){
            counterTxt.innerHTML="0";

        }
    
    }
    saveData()
    inputText.value='';
}
// this section checksout the list items and deletes them.
listItems.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName=="IMG"){
        e.target.parentElement.parentElement.remove();
        counter--;
        counterTxt.innerHTML=counter;
        localStorage.clear();
    }
    saveData()
});
function saveData(){
    localStorage.setItem("data",listItems.innerHTML);
    
}
function showTasks(){
    listItems.innerHTML=localStorage.getItem("data");
}
showTasks();