'use strict';


class ToDo {
    constructor(form,input,todoList, todoCompleted){
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.body = document.querySelector('body');
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList'))); 
        this.headerInput = document.querySelector(".header-input");
        this.lol = document.querySelector('.todo-complete');

    }
    addTodo(e){
        e.preventDefault();

        if(this.input.value.trim()){
            const newTodo ={
                value: this.input.value,
                completed: true,
                key: this.generateKey(),
            }
            this.todoData.set(newTodo.key, newTodo);
            this.headerInput.value = "";
            this.render();
        }else{
            alert("Введи задачу");
        }
        
    }
    addToSrorage(){
        localStorage.setItem("toDoList", JSON.stringify([...this.todoData]));
    }
    render(){
        this.todoList.textContent = "";
        this.todoCompleted.textContent = "";
        this.todoData.forEach(this.createItem, this);
        this.addToSrorage();
    }
    createItem(todo){
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.key = todo.key;
        li.insertAdjacentHTML("beforeend", `
        <span class="text-todo">${todo.value}</span>
      <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
      </div>
        `);
        if(todo.completed){
            this.todoCompleted.append(li)
        }else{
            this.todoList.append(li)
        }
    }
    generateKey(){
        return Math.random().toString(36).substring(2,15);
    }
    deleteItem(e){
            this.todoData.forEach((item, i)=>{
                if( e.target.parentElement.parentElement.firstChild.nextElementSibling.innerHTML === item.value){
                    this.todoData.delete(item.key);              
                }
            });
   
    }
    complitedItem(e){
                this.todoData.forEach((item, i)=>{
                    if(item.key === e.target.parentElement.parentElement.key){
                        item.completed = !item.completed;
                    }
                })
    }
    handler(e){
        if(e.target.classList.contains("todo-complete")){
            this.complitedItem(e);
        }else if(e.target.classList.contains("todo-remove")){
            this.deleteItem(e)
        }
        this.render();
    }

    init(){
        this.form.addEventListener("submit", this.addTodo.bind(this));
        this.render();
        this.body.addEventListener("click", (e)=>{this.handler(e)});

    }
}

const toDo = new ToDo(".todo-control", ".header-input", ".todo-list", ".todo-completed");

toDo.init();