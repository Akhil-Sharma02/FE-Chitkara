const input = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");


addButton.addEventListener('click',addToDo);


function addToDo(){
    // ToDo Text
    if(input.value == ""){
        return;
    }
    const text = input.value;
    // ToDo Div
    const div = document.createElement('div');
    div.classList.add('todoDiv');
    // ToDo li
    const li = document.createElement('li');
    li.innerHTML = text;
    li.classList.add('todoLi');
    div.appendChild(li);
    // ToDo Buttons Div
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('todoBtnDiv');
    div.appendChild(btnDiv);
    // ToDo delete
    const del = document.createElement('button');
    del.innerHTML = '<i class="fas fa-trash"></i>';
    del.classList.add('todoDel');
    btnDiv.appendChild(del);
    // ToDo update
    const update = document.createElement('button');
    update.innerHTML = '<i class="fas fa-pen-square"></i>';
    update.classList.add('todoUpdate');
    btnDiv.appendChild(update);
    // ToDo moveUp
    const moveUp = document.createElement('button');
    moveUp.innerHTML = '<i class="fas fa-arrow-circle-up"></i>';
    moveUp.classList.add('todoUp');
    btnDiv.appendChild(moveUp);
    // ToDo moveDown
    const moveDown = document.createElement('button');
    moveDown.innerHTML = '<i class="fas fa-arrow-circle-down"></i>';
    moveDown.classList.add('todoDown');
    btnDiv.appendChild(moveDown);



    // Functions
    // Remove
    del.addEventListener('click', () => {
        div.remove();
    });
    // Move Up
    moveUp.addEventListener('click', () => {
        const currentList = document.querySelector(".todo-list").childNodes
        let i = 0;
        for(; i < currentList.length; i++){
            if(currentList[i] == div){
                break;
            }
        }
        if(i > 0){
            const temp = currentList[i];
            todoList.insertBefore(temp, currentList[i-1]);
        }
    });
    // Move Down
    moveDown.addEventListener('click', () => {
        const currentList = document.querySelector(".todo-list").childNodes
        let i = 0;
        for(; i < currentList.length; i++){
            if(currentList[i] == div){
                break;
            }
        }
        if(i < currentList.length-1){
            const temp = currentList[i];
            todoList.insertBefore(temp, currentList[i+1].nextSibling);
        }
    });
    // Update
    update.addEventListener('click',() => {
        let val = li.innerHTML;
        let newInput = document.createElement('textarea');
        div.insertBefore(newInput, div.firstChild);
        li.style.display = "none";
        newInput.classList.add('updateInput');
        newInput.setAttribute("maxlength", 150);
        newInput.focus();
        newInput.value = '';
        newInput.value = val;
        newInput.onblur = inputBlur;
        newInput.addEventListener('keypress', (e) => {
            if (e.key  === "Enter") {
                const todoText = newInput.value;
                li.style.display = "inline-block";
                li.innerHTML = todoText;
                div.removeChild(div.childNodes[0]);
            }
        });
        function inputBlur() {
            const todoText = newInput.value;
            li.style.display = "inline-block";
            li.innerHTML = todoText;
            div.removeChild(div.childNodes[0]);
        }
    });

    
    todoList.append(div);
    input.value = "";
}