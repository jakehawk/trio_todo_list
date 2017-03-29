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
  }

}())
