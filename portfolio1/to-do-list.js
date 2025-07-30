const form = document.querySelector("#todoForm");
//const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const errorMsg = document.querySelector("#errorMsg");
const tasks = [];

const renderTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;


        const delBtn = document.createElement("button");
        delBtn.textContent = "delete";
        delBtn.style.marginLeft = "10px";
        delBtn.onclick = () => {
            tasks.splice(index, 1);

            renderTasks();


        };
        li.appendChild(delBtn);


        const editBtn = document.createElement("button");
        editBtn.textContent = "edit";
        editBtn.style.marginLeft = "10px";
        editBtn.onclick = () => {
            const input = document.createElement("input")
            input.type = "text"
            input.value = item;


            const savebtn = document.createElement("button")
            savebtn.textContent = "save"

            li.innerHTML = ""
            li.appendChild(input)
            li.appendChild(savebtn)
            savebtn.onclick = () => {
                const newtask = input.value.trim();
                if (newtask.length === 0) {
                    errorMsg.textContent = "this is empty!";
                    setTimeout(() => errorMsg.textContent = "", 3000);
                } else {
                    tasks[index] = newtask;
                    renderTasks();
                }
            }




        };
        li.appendChild(editBtn)

        taskList.appendChild(li);
    });
};

const addTask = (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();

    if (task.length === 0) {
        errorMsg.textContent = "Task cannot be empty!";
        setTimeout(() => errorMsg.textContent = "", 2000);
    } else {
        tasks.unshift(task);
        taskInput.value = "";
        renderTasks();
    }
};

todoForm.addEventListener("submit", addTask);