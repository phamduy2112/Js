// MVC
class Modal{
    constructor() {
      
      }
}
class View{
    constructor(){
        this.app = this.getElement("body");
    
        this.todoWrapper = this.createElement("div", "todo");
        this.form = this.createElement("form", "todo-form");
        this.form.autocomplete = "off";
    
        this.input = this.createElement("input", "todo-input");
        this.input.type = "text";
        this.input.placeholder = "Enter your task";
        this.input.name = "todo";
    
        this.submit = this.createElement("button", "todo-submit");
        this.submit.type = "submit";
        this.submit.textContent = "Add";
    
        this.form.append(this.input, this.submit);
    
        this.todoList = this.createElement("div", "todo-list");
        this.todoWrapper.append(this.form, this.todoList);
        this.app.append(this.todoWrapper);
    }
    // createElement
    // get Element
    createElement(tag, className) {
        const elm = document.createElement(tag);
        if (className) elm.classList.add(className);
        return elm;
      }
      // getElement
      getElement(selector) {
        const elm = document.querySelector(selector);
        return elm;
      }

      get _todoValue(){
        return this.input.value;
      }
      _resetValue(){
        this.input.value=""
      }
      displayTodos(todos){
        if(todos.length>0){
            
        }
      }
}
// quan li
class Controller{
    constructor(modal,view){
        this.modal=modal;
        this.view=view;
    }
}
const app = new Controller(new Modal(), new View());
