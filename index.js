function scuberGreetingForFeet(distance){
  //if (distance <= 400){        My first try
  //return "This one is on me!"
  //}

  //if (distance <= 400){           This is my second full try
  //  return 'This one is on me!'
  //} else if (distance > 2000){
  //  return 'I will gladly take your thirty bucks.'
  //}  else if (distance >= 2501){
  //  return 'No can do.'
  //}

if (distance >= 2501){          //Now I understand. Notice how you are working from highest number to the lowest?
  return 'No can do.'           // More acurately, this code box "Narrowing the search"
} else if (distance > 2000){
  return 'I will gladly take your thirty bucks.'
}  else if (distance <= 400){
  return 'This one is on me!'
}

}


function ternaryCheckCity(city){
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){

  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    
      case 'not as generous':
      return 'Thank you.';
    
      default: 
      return  'Bye.';
  }
}