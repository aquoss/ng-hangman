console.log('app.js loaded!');

// initialize the application
angular.module('hangmanApp', [])
       .controller('HangmanController', HangmanController);

HangmanController.$inject = [];
function HangmanController(){
  var vm = this;
  vm.hangman = new HangmanGame('ElEphant');
  vm.guessLetter = function(input){
    vm.hangman.guess(input);
    vm.hangman.input = "";
  }
}
