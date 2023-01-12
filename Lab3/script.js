(function (){
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  console.log("Якщо літера J,j Good  Bye, інші - Hello")
  for (let i=0; i < names.length; i++) {
    if (names[i].charAt(0) == 'J' || names[i].charAt(0) == 'j') {
      let name = names[i];
      GoodBye.speak(name);
    } else {
      let name = names[i];
      Hello.speak(name);
    }
  }
  console.log("Якщо остання літера l,k,y - Good Bye, інші - Hello")
  for (let j=0; j < names.length; j++) {
    if(names[j].charAt(names[j].length - 1) == 'l' || names[j].charAt(names[j].length-1) =='k'  ||
        names[j].charAt(names[j].length - 1) == 'y'){
      let name = names[j];
      GoodBye.speak(name);
    } else {
      let name = names[j];
      Hello.speak(name);
    }
  }
})();