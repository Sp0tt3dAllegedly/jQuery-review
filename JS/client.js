console.log('check console');

const random = [    'Molly', 'Mark', 'Tim', 'Sean',
                    'Adam', 'Sam', 'Danielle', 'Blake',
                    'Jake', 'Mitch', 'Kyle', 'David'       ]


$(document).ready(onReady);     // When DOM is ready (ie. page loads)
                                  // will render or display our information

function onReady(){
    console.log('jQuery works?');      // logs jQuery works
    renderStudents(random);             // calls renderStudents function     
    
// Need to select something already on the DOM
 // Can filter to something dynamically generated ie. not static created object
   // Do this with 2nd argument to 'on' method ('.student' in this specific case
   
    $('#students').on('click', '.student', showAwesomeAlert);

    console.log('This:', this);
    
// end onReady - calls jQuery library on DOM
}


function showAwesomeAlert(event){ // event parameter is NOT called by coder, it is called by the jQuery event so when calling an event the passed parameter (in the function) will always be event
    //console.log('event', event);             // function will be called when user clicks on student
    //alert('check the console...');        // alert method pings a dropdown alert
    //console.log('Check the console...');
    // ***In the event handler 'this' is what generated the event***
    // console.log('this:', this); // generates name of targeted item on console
    let studentName =$(this).text(); // if you want to do something with the thing that generated the event, tag as this
    alert(`${studentName} is awesome!!!`);
//end showAwesomeAlert    
}

function renderStudents(studentList) {     // function iterates through array passed into function

    for ( student of studentList ) {        // function assigns value from array to indexed position
        renderOneStudent(student);        
    }                                         
// end renderStudents
}


function renderOneStudent(student) {
    $('#students').append(`<li class="student">${student}</li>`);  // function adds values from array to list items on DOM
// end renderOneStudent                          // without <li> tags to assign values to list items
                                                // the info will populate in single string, no spaces (jakemollymitchkyle[etc..])
}