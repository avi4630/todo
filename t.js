document.addTaskUsingJQueryVer2('keypress', function(e) {
    console.log('hello', e.which);
    if(e.which === 13) {
        addTask();
    }
});

// function KeyPress(e) { 
//     e = e || window.event;
//     var key = e.keyCode ? e.keyCode : e.which;
//     if (key == 13) {
//         e.preventDefault();
//         addTaskUsingJQueryVer2();
//     }
// }




function addTaskUsingJQueryVer2() {
    let newTask = $('.ref-container').children().first().clone();
    let newDel = $('.ref-container').children().first().next().clone();

    newTask.html($('#textId').val());

    newTask.css("visibility", "visible");   // jquery version
    newDel.css("visibility", "visible");   // jquery version

    $('.container').first().append(newTask);
    $('.container').first().append(newDel);

    $('#textId').val("")
}


function deleteTask(delElemRef) {
    let taskRef = delElemRef.previousElementSibling;

    delElemRef.remove();
    taskRef.remove();
}


function deleteTaskUsingJQuery(delElemRef) {
    let taskRef = $(delElemRef).prev();

    delElemRef.remove();
    taskRef.remove();
}