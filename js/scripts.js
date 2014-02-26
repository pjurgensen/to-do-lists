var Task = {
  displayTask: function() {
    return this.priority + " " + this.taskName + ": " + this.taskDescription + " (" + this.dueDate + ")";

  }
};

var List = {};

$(document).ready(function() {

  $("#add-task").click(function() {
    $("#new-set-of-tasks").append('<div class="new-task">' +
                                      '<div class="form-group">' +
                                        '<label for="new-priority">Priority</label>' +
                                        '<select class="form-control new-priority">' +
                                          '<option value="1">1</option>' +
                                          '<option value="2">2</option>' +
                                          '<option value="3">3</option>' +
                                          '<option value="4">4</option>' +
                                          '<option value="5">5</option>' +
                                        '</select>' +
                                      '</div>' +
                                      '<div class="form-group">' +
                                        '<label for="new-task-name">Task Name</label>' +
                                        '<input type="text" class="form-control new-task-name">' +
                                      '</div>' +
                                      '<div class="form-group">' +
                                        '<label for="new-task-description">Task Description</label>' +
                                        '<input type="text" class="form-control new-task-description">' +
                                      '</div>' +
                                      '<div class="form-group">' +
                                        '<label for="new-due-date">Due Date</label>' +
                                        '<input type="text" class="form-control new-due-date">' +
                                      '</div>' +
                                    '</div>');
  });
  var currentList;

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    var newList = Object.create(List);
    newList.listName = inputtedListName;
    newList.tasks = [];
    currentList = newList;

    $(".new-task").each(function() {

      var inputtedTaskName = $(this).find("input.new-task-name").val();
      var inputtedTaskDescription = $(this).find("input.new-task-description").val();
      var inputtedPriority = $(this).find("select.new-priority").val();
      var inputtedDueDate = $(this).find("input.new-due-date").val();

      var newTask = Object.create(Task);
      newTask.taskName = inputtedTaskName;
      newTask.taskDescription = inputtedTaskDescription;
      newTask.isComplete = "(X)";
      newTask.priority = inputtedPriority;
      newTask.dueDate = inputtedDueDate;

      currentList.tasks.push(newTask);
    });
    
    $("ul#to-do-lists").append("<li><span class='clickable-show'>" + newList.listName + "</span></li>");

    $(".clickable-show").last().click(function() {

      currentList = newList;
      $("#show-list").show();

      $("#show-list h2").text(newList.listName);

      $("ul#all-tasks").text("");
      newList.tasks.forEach(function(task) {
          $("ul#all-tasks").append("<li>" + task.displayTask() + " <span class='clickable-complete'>" + task.isComplete + "</span></li>")
      });

      $(".clickable-complete").last().click(function() {
        console.log(last.taskName);
      });

    });

    this.reset();
   });
  });
