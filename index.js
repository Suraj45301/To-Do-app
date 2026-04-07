let todoIndex=1 ;

function addToDo(){
    //write the code that reads thre conents of input box
    let element=document.getElementById("todoInput")
    const todo=element.value ;
    element.value="" ;
    
    const todoDiv=document.createElement("div") ;
    todoDiv.setAttribute("id","todo" + todoIndex) ;
    const todospam=document.createElement("span") ;
    todospam.innerHTML=todo ;

    todoDiv.appendChild(todospam) ;

    const todoButton=document.createElement("button") ;
    todoButton.innerHTML="Delete Todo" ;
    todoButton.setAttribute("onClick","deleteTodo(" + todoIndex + ")");
    todoDiv.appendChild(todoButton) ;

    document.getElementById("todos").appendChild(todoDiv) ;
    todoIndex=todoIndex+1 ;
}
function deleteTodo(index){
   // alert("delete todo called with "+ index) ;
    const divElement=document.getElementById("todo"+index);
    document.getElementById("todos").removeChild(divElement) ;

}