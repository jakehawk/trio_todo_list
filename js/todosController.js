(function() {
  `use strict`

  angular.module(`todosApp`)
    .controller(`TodosController`, TodosController)

  function TodosController($scope) {
  	$scope.allTodos = [
  		{
  			id 					: 0,
  			task 				: "Code a lot",
  			completed 	: false
  		},
  		{
  			id					: 1,
  			task				: "Complete task one",
  			completed		: false
  		},
  		{
  			id					: 2,
  			task				: "get stuff to show up",
  			completed		: false
  		}
  	]


    $scope.ids = 3
    $scope.newTodo = {
      task: ""
    }

    $scope.addTodo = function() {
      $scope.allTodos.push({
        id: $scope.ids,
        task: $scope.newTodo.task,
        completed: false
      })
      $scope.ids++
      $scope.newTodo.task = ""
    }

  }

}())
