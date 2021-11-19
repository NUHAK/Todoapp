//selecting html elements
document.addEventListener('DOMContentLoaded',gettodo);
const addInput=document.querySelector(".inp");
const addBtn=document.querySelector(".addbtn");
const clearBtn=document.querySelector(".clear");
const todolist=document.querySelector(".todolist");

//Adding Event Liseners
document.addEventListener('DOMContentLoaded',gettodo);
addBtn.addEventListener("click",addItems);
todolist.addEventListener("click",deleteItems);
clearBtn.addEventListener("click",clearAll);

//Functions
function addItems(event){
    
    event.preventDefault();

    //create todo div
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("items");

     //create todo list li
     const todoList =document.createElement("li");
     todoList.innerText =addInput.value;
     todoList.classList.add("todo-items");
     //passing 
     todoDiv.appendChild(todoList);
     //storage
     saveItems(addInput.value);
    //trash button
     const trashbtn=document.createElement('button');
     trashbtn.innerHTML='<i class="fas fa-trash"></i>';
     trashbtn.classList.add("trash-btn");
     todoDiv.appendChild(trashbtn);
     
    //append parent list(ul)
     todolist.appendChild(todoDiv);

     addInput.value="";

}
//function delete
function deleteItems(e){
    const item=e.target;

    if(item.classList[0]==="trash-btn")
    {
     const todo=item.parentElement;
     removeLocal(todo);
     todo.remove();
    }

}

//save todo

function saveItems(items){
    //check do already have things
    let todos;
    if (localStorage.getItem('todos') ===null){
        todos=[];
    }else{
        todos= JSON.parse(localStorage.getItem('todos'));

    }

    todos.push(items);
    localStorage.setItem("todos", JSON.stringify(todos));

}
function gettodo(){
    let todos;
    if(localStorage.getItem('todos') ===null){
        todos= [];
    }else{
        todos= JSON.parse(localStorage.getItem('todos'));

    }
    const pendingtodo=document.querySelector(".pending");
    pendingtodo.textContent=todos.length;

   todos.forEach(function(items){

    const todoDiv =document.createElement("div");
    todoDiv.classList.add("items");

 //create todo list li
    const todoList =document.createElement("li");
    todoList.classList.add("todo-items");
    todoList.innerText=items;

 //passing 
    todoDiv.appendChild(todoList);
    
//trash button
     const trashbtn=document.createElement('button');
     trashbtn.innerHTML='<i class="fas fa-trash"></i>';
     trashbtn.classList.add("trash-btn");
     todoDiv.appendChild(trashbtn);

//append parent list(ul)
     todolist.appendChild(todoDiv);
});
}

function removeLocal(items){
    let todos;
    if (localStorage.getItem('todos') ===null){
        todos=[];
    }else{
        todos= JSON.parse(localStorage.getItem('todos'));

    }
    const itemIndex=items.children[0].innerText;
    todos.splice(todos.indexOf(itemIndex), 1);
    localStorage.setItem("todos",JSON.stringify(todos));

}
//clear all todos
function clearAll(){
    let todos;
    todos=[];
 
    localStorage.setItem('todos',JSON.stringify(todos));
    location.reload();
  
}




   


    

