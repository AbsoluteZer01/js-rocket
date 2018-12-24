//typer af variabler:

var favColor = "blue"; //indeholder en string

var myFavColors = ["blue","red","green"]; //indeholder en liste (et array)

var numOfFavColors = 3;

var hasGotFavColors= true; //indeholder en boolean som er true/false

var lasseObjects = {
	firstName: "Lasse",
	lastName: "Sonn",
	faveColors: ["blue","red","green"],
	yearsAlive: 19,
	isMale: true
}; //en variabel som er et object (kan indeholde alle andre variabler)


//funktioner

function whatIsMyFavColor (){

};

var whatIsMyFavColor = function (){


} //dette laver en variabel og giver den værdien som en funktion

var doSomething = function(){
	console.log("do Something");
}//for at kalde denne funktion skal man i consolen skrive doSomething()

var whatIsMyFavColor = function (){


	return "blue";

	return true;//returner kun blue
} //denne function return en værdi "blue" hvorimod den anden slags ikke returner en værdi men gør noget feks skrive tekst

var area = function (width,height) {
	return width * height
} // dene function har fået givet nogle parameterer width og height. de skal defineres når functionen kaldes. parametre kan være tal men og bogstaver 


//if statement

if (true) {

	alert("male");

};//hvis parantesserne er "true" gør if noget 

if ("male" == "male"){
	alert("male");

};

var myNumber1 = 10;
var myNumber2 = 100;

if(myNumber2 > myNumber1){ 
	alert("true");
	//vil åbne ewt prompt vindue hvor den siger true
} 

if(myNumber2 < myNumber1){
	alert("false");

} else {
	alert("true!")
}//her vil den udn


