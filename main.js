var playerOne = '1';
var playerTwo = '2';

var firstVal="";
var firstBox;
var firstClick;
var secondClick
var score = 0;

var $gameBoard = $('.board');

// function shuffleBoard(){
//   var i = 0
//   var randomArray = [2,3,4,9,0,8,10,12,11,1,13,14,15,7,6,5]
//
//   $gameBoard.each(function(index){
//     $gameBoard[randomArray[i]] = $gameBoard[index];
//     i++;
//     console.log(i);
//   })
//   }

$('.resetButton').on('click',function(){
  $('.box').children().toggleClass('hidden');
})

$('.shuffleButton').on('click',function(){
  console.log('you are clicking me');

  shuffleBoard();
});

function shuffleBoard() {

    var divs = $gameBoard.children();
    while (divs.length) {
        $gameBoard.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  };


// function winner(){
//   var 1winner =
//   var 2winner =
//
// if (dice1==dice9 || dice2==dice10 || dice3==dice11 || dice4)
//
// };



//if you hav a match add a point to player 1 or player 2.
//after all flags and names have been matched, select winner.
//set alert at the end of the game to say which player won.
//look at all posible outcomes of winning.


var player1 = {
  name: "player1",
  score: 0,
  selector: $('.player1')
}
var player2 = {
  name: "player2",
  score: 0,
  selector: $('.player2')

}

var playerTurn = {};

if(playerTurn == player2)
{
  playerTurn = player1;
}
else{
  playerTurn = player2;
}



$('.box').click(function() {
  var self = $(this)
  console.log(self.children().attr('class'))
  console.log(self.children().attr('class') === 'image ' + self.attr('data-name'))
  console.log(self.children().attr('class') === 'name ' + self.attr('data-name'))

  if (self.children().attr('class') === 'image ' + self.attr('data-name') || self.children().attr('class') === 'name ' + self.attr('data-name')){
  }
  else{
    if(firstVal == ""){
      firstClick(self)
      console.log(firstBox);
    }
    else {
      console.log(firstBox);
      secondClick(self)
      console.log(firstBox);
    }
  }
});



firstClick = function(self){
firstVal = self.attr('data-name');
firstBox = self.children();
console.log(firstBox);
self.children().toggleClass('hidden');
console.log("you first click is "+self.attr('data-name'))
}

secondClick = function(self){
  console.log("you second click is "+self.attr('data-name'))

  if(playerTurn == player1)
  {
    playerTurn = player2;
  }
  else{
    playerTurn = player1;
  }

    if (firstVal == self.attr('data-name')) {
      self.children().toggleClass('hidden')







      playerTurn.score+=2;

      // playerTurn.score--1;
      playerTurn.selector.html((playerTurn.score).toString());
  }
  else {

     self.children().toggleClass('hidden');
     setTimeout(function() {
       self.children().toggleClass('hidden');
       console.log(firstBox);
       firstBox.toggleClass('hidden');
        }, 500);
        playerTurn.score--;
        // alert('Whoops back to school')


     playerTurn.selector.html((playerTurn.score).toString());
    //  $('.player2').html((playerTurn.score).toString());
 // playerTurn.score--1;
}
firstVal = "";


}




// $('.shuffle').click(function() {
//
//   var contents = [
//     "image england hidden",
//     "image denmark hidden",
//     "image france hidden",
//     "image germany hidden",
//     "image greece hidden",
//     "image holland hidden",
//     "image ireland hidden",
//     "image wales hidden",
//     "name england hidden",
//     "name denmark hidden",
//     "name france hidden",
//     "name germany hidden",
//     "name greece hidden",
//     "name holland hidden",
//     "name ireland hidden",
//     "name wales hidden"
//   ];
//
//   var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
//
//     for (var i = 0; i < 16; i++){
//
//       var randomNumberForContents = Math.floor(Math.random() * numbers.length);
//       console.log('randomNumberForContents:' + randomNumberForContents)
//       var chosenIndexForContents = contents[randomNumberForContents]
//
//       var randomNumberForNumbers = Math.floor(Math.random() * contents.length);
//       console.log('randomNumberForContents:' + randomNumberForNumbers)
//       var chosenIndexForNumbers = numbers[randomNumberForNumbers]
//
//       var parent = $("#dice" + chosenIndexForNumbers)
//       console.log('parent:' + parent)
//       var divs = parent.firstElementChild
//       console.log('divs:' + divs)
//
//       // var one = divs[0]
//       // var two = divs[1]
//       // console.log(divs[0])
//       // console.log(divs[1])
//       console.log('before:' + divs.attr('class'))
//
//
//
//       var chicken = divs.attr('class')
//       console.log(chosenIndexForContents)
//       one.removeClass(chicken)
//       one.addClass(chosenIndexForContents)
//
//
//
//       console.log('after:' + divs.attr('class'))
//       contents.splice(randomNumberForContents, 1)
//       console.log('contents:' + contents)
//       numbers.splice(randomNumberForNumbers, 1)
//       console.log('numbers:' + numbers)
//
//     }
//
//   });
//



// var allHiddenEllements = $('hidden');
//   $("hidden").find('Hidden');
//   alert('end of game');



//input to allow users to set names at the start of the game
//select each playerafter two clicks
//if flags match then recieve 2 points
//if flags do not match then loose 1 points, cannot go below zero.
//once all flags have been located, click next round.
