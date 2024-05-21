function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    
    if (task !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = task;
        
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            ul.removeChild(li);
        };
        
        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            li.classList.toggle("completed");
        };
        
        li.appendChild(removeButton);
        li.appendChild(completeButton);
        ul.appendChild(li);
        
        input.value = "";
    }
}
