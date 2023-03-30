// selector
const todobtn= document.querySelector(".todo-button")
const todoinput =document.querySelector(".todo-input")
const todolist = document.querySelector(".todo-list")
// event listener
todobtn.addEventListener("click" , addtask)
function addtask(e){
    e.preventDefault();
console.log(todoinput.value);


todolist.addEventListener("click" ,checkordelete)


// create li
const todoli = document.createElement("li")
todoli.classList.add("todo")
// create div
const tododiv = document.createElement("div")
tododiv.classList.add("todo-item")
// add input value to div
tododiv.innerText =todoinput.value
// create button complete 
const completebutton = document.createElement("button")
completebutton.classList.add("complete-btn")
completebutton.innerHTML = `<i class="fa-solid fa-check"></i>`
// create button trash
const trashebutton = document.createElement("button")
trashebutton .classList.add("complete-btn-b")
trashebutton .innerHTML = `<i class="fa-solid fa-trash"></i>`
// add div + button 1 +button 2 to li
todoli.appendChild(tododiv)
todoli.appendChild(completebutton)
todoli.appendChild(trashebutton)

// add li to ul
todolist.appendChild(todoli)
// remove input value
todoinput.value = ""

}
function checkordelete(e){
const item = e.target;

if(item.classList[0] === "complete-btn") {
    const todo =item.parentElement;
    todo.classList.toggle("completed")
}
if(item.classList[0] === "complete-btn-b"){
    const todo =item.parentElement;
    todo.classList.toggle("fall")  
    todo.addEventListener("transitionend",()=> {
        todo.remove();
    })
}
}