let first = '';
let ope = '';
let second = '';
let append = '';
let count=1;
let secondappend='';
function current(value){
  append+=value;
  secondappend+=value;

  
  document.getElementById('ans').textContent=append;
}
function operator(value){
   if(append.length>0 && !(append.endsWith('+') || append.endsWith('-') || append.endsWith('*') || append.endsWith('/')))
  {
    if(count==1){
      first=secondappend;
      secondappend='';
    }
    ope=value;
    append+=value;
    document.getElementById('ans').textContent=append;

  }
  
}
function calculate(){
  document.getElementById('ans').textContent='';
  let result;
 num1=parseFloat(first);
 num2=parseFloat(secondappend);
switch(ope){
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num2 === 0 ? 'Error' : num1 / num2; 
    break;
  default:
    result = 'Error';
}
 document.getElementById('ans').textContent=result;
 append='';
append=result.toString();
first=append;
secondappend='';
secondappend=append;
ope='';
count=1;
}



function clear1() {
  console.log("Clear function called");
  append='';
  
  document.getElementById('ans').textContent = append;
  first = '';
  ope = '';
  secondappend = '';
  append = '';
  count = 1; 
}

