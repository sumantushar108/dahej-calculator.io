let edu, net, cast, skill, age, reput; // let is a keyword that is used to declare a block scoped variable
var check=0, check1=0;
let start_price = 100;

// DOM manipulation CSS


function educValue() //educ level value
{
var select =document.getElementById('education');
var value=select.options[select.selectedIndex].value;
//condition for choosing 
if(value==3.2)
{
edu=start_price*value;
}
if(value==2)
{
edu=start_price*value;
}
if(value==1.5)
{
edu=start_price*value;
}
if(value==1.2)
{
edu=start_price*value;
}
if(value==1.05)
{
edu=start_price*value;
}
if(value==0.9)
{
edu=start_price*value;
}
if(value==0.21)
{
edu=start_price*value;
}
console.log("education= " + edu); //to check the calculation
}



function networthValue()//networth value
{
var select =document.getElementById('networth');
var value=select.options[select.selectedIndex].value;
//condition for choosing 
if(value=="upper_class")
{
  net=edu*2;
}
if(value=="top_upper_middle_class")
{
  net=edu*1.8;
}
if(value=="upper_middle_class")
{
  net=edu*1.65;
}
if(value=="middle_class")
{
  net=edu*1.5;
}
if(value=="lower_middle_class")
{
  net=edu*1.4;
}
if(value=="lower_class")
{
  net=edu*1.3;
}
if(value=="garib")
{
  net=edu*1.2;
}
console.log("networth= " + net); //to check the calculation
}


let caste = [100,60,30,75,80,10,-20,-50];
function casteValue()
{
var select =document.getElementById('caste');
var value=select.options[select.selectedIndex].value;
//condition for choosing 
if(value=="Brahmin")
{
  cast=net+caste[0];
  console.log(cast);
}
if(value=="Kshatriya")
{
  cast=net+caste[1];
}
if(value=="Vaishnav")
{
  cast=net+caste[2];
}
if(value=="Mali")
{
  cast=net+caste[3];
}
if(value=="Shudra")
{
  cast=net+caste[4];
}
if(value=="Rajput")
{
  cast=net+caste[5];
}
if(value=="Varna (SC/ST - Neech)")
{
  cast=net+caste[6];
}
if(value=="Freezer (Muslim)")
{
  cast=net+caste[7];
}
console.log("caste= " + cast); //to check the calculation
}



function checkfunc(choosen) {
  // If the checkbox is checked
  if (choosen.checked == true){
    //The parseInt() function parses a string and returns an integer
    check+=parseInt(choosen.value);
  } else {
    check-=parseInt(choosen.value);
  }
  console.log("checkfunc= " + check); //to check the calculation
  console.log(cast + check);
}

let array ;
function radioCheck() //radiobuttons
{
    var inp = document.getElementsByName('age');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio"&& inp[i].checked) {
          console.log((cast + check) * inp[i].value);
           array = (cast + check) * inp[i].value; 
        }
    }
}
//reputation divided by 2 as there is multiplying and sum
function calcReput(choosen1){
  if (choosen1.checked == true){
    //The parseInt() function parses a string and returns an integer
    reput=array*choosen1.value;
  } else {
    reput=array/choosen1.value;
  }
  array=reput;
  console.log("calcReput= " + reput); //to check the calculation
  console.log(reput);
}

function calcReput1(choosen1){ //for -20
  if (choosen1.checked == true){
    //The parseInt() function parses a string and returns an integer
    reput+=parseInt(choosen1.value);
  } else {
    reput-=parseInt(choosen1.value);
  }
  array=reput;
  console.log("calcReput= " + reput); //to check the calculation
  console.log( reput);
}

function total() {// DOM manipulation HTML
  document.getElementById("demo").innerHTML = 'Rs. '+(reput*1000); }
// DOM manipulation CSS
document.getElementById("idd").style.backgroundColor = "white";