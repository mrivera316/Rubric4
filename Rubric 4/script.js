var myDemo = document.getElementById("mainlist");

console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");

console.log ("Number of Li items in Menu: "+ linksInMenu.length);

var myThoughtBubble = document.getElementById("thoughtbubble");

myThoughtBubble.setAttribute("align", "right");

myThoughtBubble.setAttribute ("style", "color: blue");

var newItem = document.createElement ("li");

var newText = document.createTextNode ("Surprise! A new item in the list!");

myDemo.appendChild(newItem);

myDemo.appendChild(newText);

function myRPS(){
	var playRPS = prompt("Rock, Paper or Scissors?");
	
	switch(playRPS){
			case"rock":
			alert("Bah, I chose Scissors. You win.");
			break;
			
			case"paper":
			alert("Paper?! Who chooses paper when you can have ROCK!");
			break;
			
			case"scissors":
			alert("What! I chose paper. You're very good at this game.");
			break;
			
			default:
			alert("Okay now that's just cheating... :|");
	}
}

function questionTime(){
	var woodChuck = prompt("How much wood would a woodchuck chuck if a woodchuck could chuck wood?");
	alert(woodChuck);
	
	if(woodChuck<20) {
		alert("Is that all? I thought it'd be more.");
	} else {
		alert("Yeesh that's a lot of wood!");
	}
}