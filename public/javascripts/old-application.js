var Tasks = function() {
  this.pageContainer = $("#page-container")
}

Tasks.prototype.request = function(url, appendListItem) {
  var tasksObject = this;

  $.ajax({
    url: url
  }).done(function(responseData) { appendListItem(tasksObject, responseData)
    ;
  })
}

Tasks.prototype.handlebars = function(responseData){
  var template = $("#task").html();
  var templateScript = Handlebars.compile(template);
  $("#page-container").append(templateScript(responseData));
}

Tasks.prototype.listAll = function() {
  var task = this
  this.request("http://localhost:3000/tasks", function(tasksObject, responseData) {
    tasksObject.pageContainer.html("");

    task.handlebars(responseData);
  })
}

var task = new Tasks
task.listAll();


// var source = '<li data-id="{{id}}">{{desc}}</li>';

// var liTemplate = Handlebars.compile(source);

// var validHTML = liTemplate({id: 4, desc: 'hey bro, let\'s meet up'});
