"use strict";

$(function () {
  
var hello = function(){
  console.log("Hi! Welcome to the game of Memory. Good luck!")
}
hello();

var random_assigners = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  function shuffle(arr){
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
 }
shuffle(random_assigners);
console.log(random_assigners); 



var selected_card_array = [];
var card1 = selected_card_array[0];
var card2 = selected_card_array[1];
var clicks = 0;
var matched_array = [];

var box_color_change = (function(arr){ 
    clicks += 1;
    console.log(clicks);
     if( clicks <=2 ){
      $(this).addClass('reveal');
      selected_card_array.push($(this));
      checker();
      //console.log(clicks);
     }
     else{
      return true
      }
});
    
     //var selected_card = $(this);
     
     //console.log(selected_card_array)
     //$(this).attr('class');
     //
     //write fuction to send each to array and pop last
     //selected_card_array.push(selected_card);
     //console.log(selected_card_array)


         //this does not work!!!
        //else if (clicks === 2){
          //$(selected_card_array[2]).removeClass('reveal')
          //clicks = 0

       // }
    
    

    

var checker = function(){
     
       // clicks = 0;
        if (selected_card_array[0].text() === (selected_card_array[1].text())){
          clicks = 0;
          $(selected_card_array[1]).css('background-color','#444444');
          $(selected_card_array[0]).css('background-color','#444444');
          $(selected_card_array[1]).css('color','white');
          $(selected_card_array[0]).css('color','white');
          matched_array.push(selected_card_array)
          console.log(matched_array);
          selected_card_array = [];
          console.log(selected_card_array);
            if (matched_array.length === 8){
              alert("YOU WON! Please refresh to play again");
            }
      } 
         
        else {   
          setTimeout(function(){
          $(selected_card_array[1]).removeClass('reveal');
          $(selected_card_array[0]).removeClass('reveal');  
          selected_card_array = [];   
          console.log(selected_card_array[0]) 
          clicks = 0;
          }, 1500)
        }
    
    }
// var card_match = function(arr){
//     if (selected_card_array[0] === (selected_card_array[1])){
//       $('div.card1').css('background-color','#fff5E5')
//     }

  // for (var i = 0; i <selected_card_array.length; i++) {
  //   if ()
  //};
//}
//card_match();

var EventListeners = function(){
  $('div.box').click(box_color_change);
  }


EventListeners();




});




