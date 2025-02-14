let parent = document.getElementById('habbits');
let taskId = 1;
let totalTasks = 0;
let completedTasks = 0;

function updateProgress(percentage) {
    const progress = document.querySelector(".progress");
    const habbit = document.querySelector("#habbit-text-precentage");

    let formattedPercentage = parseFloat(percentage).toFixed(2); // Format to two decimal places

    progress.style.width = formattedPercentage + "%";
    habbit.innerText = `${formattedPercentage}%`;
    progress.querySelector(".progress-label").innerText = `${formattedPercentage}%`;
}


if (totalTasks == 0)
{
    updateProgress(0);
}
else
{
    updateProgress((completedTasks / totalTasks) * 100);
}


function updateCircleProgress(value, goal) {
    const progressCircle = document.querySelector(".progress-ring-fill");
    const progressValue = document.querySelector(".progress-value");
    
    const radius = 50; 
    const circumference = 2 * Math.PI * radius;
    const percentage = (value / goal) * 100;
    const offset = circumference - (percentage / 100) * circumference;
    
    progressCircle.style.strokeDashoffset = offset;
    progressValue.innerText = value;
}

updateCircleProgress(6000, 8500);



function CreateHabit()
        {
            event.preventDefault(); // Prevent form from reloading the page

            parent = document.getElementById('habbits');

             // get the value from the input
            let taskText = document.getElementById('taskInput');
            if (taskText.value != "")
            {
                // create the new task
                let newTask = document.createElement('div');
                let id = `h-${taskId}`;
                newTask.id = id; // assign the ID to the <div>
                newTask.className = 'h';
                newTask.innerHTML = `
                    <h4>${taskText.value}</h4>
                    <div id="buttons">
                        <button onclick="DoneHabbit('${id}')">Done</button>
                        <button onclick="DeleteHabbit('${id}')">Delete</button>
                    </div>
                `;
                totalTasks += 1;

                // append the new task to the parent
                parent.appendChild(newTask);

                // reset the input container
                taskText.value = "";
                taskId += 1;
                updateProgress((completedTasks / totalTasks) * 100);
            }
        }

        function DeleteHabbit(taskId) {
            let task = document.getElementById(taskId);
            if (task) {
                parent.removeChild(task);
                totalTasks -= 1;
            }
            updateProgress((completedTasks / totalTasks) * 100);
        }
        

        function DoneHabbit(taskId)
        {
            let task = document.getElementById(taskId);
            if (task != null)
                {
                    alert("GoodJob!");
                    task.style.backgroundColor = 'var(--main-gray)';
                    task.style.textDecoration = 'line-through'; // Apply line-through effect
                    task.style.opacity = '0.7'; // Optional: Reduce opacity to indicate completion
                    let id = `${taskId}`;
                    completedTasks += 1;
                    task.querySelector('#buttons').innerHTML = `
                        <button onclick="ContinueHabbit('${id}')">Continue</button>
                    `;
                }
                updateProgress((completedTasks / totalTasks) * 100);
            }

        function ContinueHabbit(taskId) {
            let task = document.getElementById(taskId);
            if (task != null)
                {
                    task.style.backgroundColor = 'transparent';
                    task.style.textDecoration = 'none'; // Apply line-through effect
                    task.style.opacity = '1'; // Optional: Reduce opacity to indicate completion
                    let id = `${taskId}`;
                    task.querySelector('#buttons').innerHTML = `
                        <button onclick="DoneHabbit('${id}')">Done</button>
                        <button onclick="DeleteHabbit('${id}')">Delete</button>                    `;
                    completedTasks -= 1;
                }
                updateProgress((completedTasks / totalTasks) * 100);
            }
        
        function EditHabbit(taskId)
        {
            // find the task by id
            let task = document.getElementById(taskId);

            if (task != null)
            {
                let newText = prompt("Enter the new text");
                task.innerHTML = `
                    <p>${newText}</p>
                    <div>
                        <button onclick="DeleteTask('${taskId}')">Delete</button>
                        <button onclick="EditTask('${taskId}')">Edit</button>
                    </div>
                `;
            }
        }
    
