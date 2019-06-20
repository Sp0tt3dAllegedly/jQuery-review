// Afternoon section codee!!! forms and

$( document ).ready( onReady );

function onReady() {
    console.log('woot');
    $('#add-task').on('click', addTaskHandler)
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
    $('#task-list').append(`<li>${task}</li>`);
}

