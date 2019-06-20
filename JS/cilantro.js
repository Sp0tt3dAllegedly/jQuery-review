// Afternoon section codee!!! forms and

$( document ).ready( onReady );

function onReady() {
    console.log('woot');
    $('#add-task').on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask);
    $('#task-list').on('click', '.flag', flagTask);
    $('#task-list').on('click', '.clear', deleteAllTasks);
    $('#clear-tasks').on('click', deleteAllTasks);
    
//end onReady
}

function addTaskHandler(event) { // adds task to tasks ul
// Default action when you submit a form -
// ie. click "submit" type button inside a <form>
//- is to refresh the webpage.. here we DON'T want that to happen
    
    event.preventDefault();
// so we set the line above to prevent the Default state from triggering
// alert('Event', event);
    
    console.log('in addTaskHandler button action'); // clicked addTask!
   const taskName = $('#task-name').val();
   console.log('Clicked Add Task! Task is', taskName);

// add the task entered in the form submitted
renderTask(taskName);

// below is the code to clear out the form on the page
    $('#task-name').val('');

// end addTaskHandler  
}

function renderTask(task) {
    console.log('in addTask', task);
    $('#task-list').append(
        `<li>
    ${task}
    <button class = "delete">Delete</button>
    <button class = "flag">Flag</button>
    </li>`);
    
   
}

function deleteTask(event) {
    console.log('clicked delete button', $(this).parent().text());
// 'this' is the delete button...
// We want to remove it's parent NOT parentS; if you include the s, the ENTIRE PAGE will be deleted.

   $(this).parent().remove();
    
}

function flagTask(event) {
    console.log('clicked flag as important', $(this).parent().text());
// made a style class in css .important
// we want to select the <li> which is the parent
// of 'this' of the thing we clicked on
// make changes to css via css file, not inline styling - this is not industry standard any longer

$(this).addClass('important'); //can also use $(this).parent().addClass('important'); to add to parent item
        // above method only changes color of flag button
}


// this will remove all tasks from the list when clicked

function deleteAllTasks(event){
    $('#task-list').empty();
}