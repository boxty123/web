const toDoForm=document.querySelector("#todo-form");
const toDoList=document.querySelector("#todo-list");
const toDoInput=toDoForm.querySelector("input");

let ToDoArray=[];

const saved=localStorage.getItem("todos");

function paintToDo(ToDo){
   const li=document.createElement("li");
   const span=document.createElement("span");
   li.id=ToDo.id;
   span.innerText=ToDo.text;
   const button=document.createElement("button");
   button.innerText="X";
   button.addEventListener("click",deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

function deleteToDo(e){
   const li=e.target.parentElement;
   ToDoArray=ToDoArray.filter((todo)=>todo.id!=parseInt(li.id));
   li.remove();
   SaveToDos();
}

function SaveToDos(){
   localStorage.setItem("todos",JSON.stringify(ToDoArray));
}

function handleToDoSubmit(e){
   e.preventDefault();
   const newToDo=toDoInput.value;
   toDoInput.value="";
   const newToDoObj={
      id: Date.now(),
      text: newToDo,
   };
   ToDoArray.push(newToDoObj);
   paintToDo(newToDoObj);
   SaveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);

if(saved!==null){
   const parseTodo=JSON.parse(saved);
   ToDoArray=parseTodo;
   parseTodo.forEach(paintToDo)
}