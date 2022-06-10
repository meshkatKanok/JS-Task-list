 let frm = document.querySelector('#task_form');
 let textInput = document.querySelector('#new_task');
 let filterText = document.querySelector('#task_filte');
 let textList = document.querySelector('ul');
 let clearText = document.querySelector('#clear_task_btn');
 let addButton = document.querySelector('#inputBtn');
 let messagepass=document.querySelector("#message");
 let clearTodo=document.querySelector("#clear");


 //  let todoList = document.querySelector('#show-task')
 //add addEventListener
 

 frm.addEventListener("submit",addtodo);

 function addtodo (event) {
  event.preventDefault()
  let value=textInput.value;

  let uniqId= Date.now().toString();
  // console.log(uniqId);
  createTodo(value,uniqId);
  showMessage("todo is added","sucess");

  //localstoraGE
  const todos= getTodosFromLocalStrage();
  todos.push({uniqId,value});
  localStorage.setItem("mytodos",JSON.stringify(todos));
  value.value="";
 };
 const getTodosFromLocalStrage = () =>{
  return localStorage.getItem("mytodos") ?
  JSON.parse(localStorage.getItem("mytodos")):[]
  
 }

const  createTodo =  (value,uniqId) =>{
  let todoelement=document.createElement("li");
  // console.log(element)
     todoelement.id=uniqId;
     todoelement.classList.add("style-li");
     todoelement.innerHTML=`<span class=" value-Sty">${value}  
     </span> <span class="span-cross"> <button class="iconebtn" id="delete"><i class="fa-solid fa-xmark"></i></button> </span> `;
    //  todoelement.innerHTML=``
     todoelement.style.listStyle="none";
     textList.appendChild(todoelement);
     const dele=todoelement.querySelector("#delete");
     dele.addEventListener("click",deleteTodo);

 };
 

 const deleteTodo = (event) =>{
    const par=event.target.parentElement.parentElement.parentElement;
    textList.removeChild(par);
    showMessage("Todo is deleted","denger");
 }


const showMessage = (text,status) =>{
  messagepass.textContent= text;
  messagepass.classList.add(`bg-${status}`);
  messagepass.style.marginTop="10px";
  setTimeout(()=>{
    messagepass.textContent="";
    messagepass.classList.remove(`bg-${status}`);
  },1000) 
};


clearTodo.addEventListener("click",function(event){
  textList.innerHTML="";
 

});






















 
//  frm.addEventListener("submit", addtodo);

//  function addtodo (event){
//      event.preventDefault()
//      const todovalue=textInput.value;
//     //  console.log(todovalue);

//      const todoID= Date.now().toString();
//       createTodo(todovalue,todoID);

//  }

//    const createTodo = (todovalue,todoID ) => {
//        const newLi=document.createElement("li");
//        newLi.id=todoID;
//        newLi.innerHTML=`${todovalue}`;
//        textList.appendChild(newLi);
//        textInput.value="";
     
//    }
  

  



























 //createTodo
//  const creteTodo = (todoId, todoValue) => {
//      const todoElement = document.createElement("li");
//      todoElement.id = todoId
//      todoElement.innerHTML = `${todoValue}`;
//      textList.appendChild(todoElement)
//      todoElement.style.color = "white";
//      todoElement.style.fontSize = "5vh";


//  }




//  //define function

//  function addtodo(event) {
//      event.preventDefault();
//      const todoValue = textInput.value;

//      //unique id

//      const todoId = Date.now().toString();
//      creteTodo(todoId, todoValue);


//  }