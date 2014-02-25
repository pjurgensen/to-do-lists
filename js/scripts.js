var Task = {
  displayTask: function() {
    return this.taskName + ": " + this.taskDescription;
  }
};

var List = {};

$(document).ready(function() {

  $("#add-task").click(function() {
    $("#new-set-of-tasks").append('<div class="new-task">' +
                                      '<div class="form-group">' +
                                        '<label for="new-task-name">Task Name</label>' +
                                        '<input type="text" class="form-control new-task-name">' +
                                      '</div>' +
                                      '<div class="form-group">' +
                                        '<label for="new-task-description">Task Description</label>' +
                                        '<input type="text" class="form-control new-task-description">' +
                                      '</div>' +
                                    '</div>');
  });

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    var newList = Object.create(List);
    newList.listName = inputtedListName;
    newList.tasks = [];

    $(".new-task").each(function() {

      var inputtedTaskName = $(this).find("input.new-task-name").val();
      var inputtedTaskDescription = $(this).find("input.new-task-description").val();

      var newTask = Object.create(Task);
      newTask.taskName = inputtedTaskName;
      newTask.taskDescription = inputtedTaskDescription;

      newList.tasks.push(newTask);
    });
    
    $("ul#to-do-lists").append("<li><span class='clickable'>" + newList.listName + "</span></li>");

    $(".clickable").last().click(function() {
      $("#show-list").show();

      $("#show-list h2").text(newList.listName);

      $("ul#all-tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#all-tasks").append("<li>" + task.displayTask() + "</li>")
      });
    });

    this.reset();
   });
  });
