console.log('welcome to your calc app');

var menu = 'Add (+) , Subtract (-) , Multiply (*) , Divide (/), Power (p), Factorial (f), Quit (q)';
var operator = prompt(menu);

while(operator != 'q'){
  var x = prompt('Enter first number');
  var y = prompt('Enter second number');
  x = parseFloat(x);
  y = parseFloat(y);

  var result;

  switch(operator){
    case '+':
      result = add(x,y);
      break;
    case '-':
      result = sub(x,y);
      break;
    case '*':
      result = mul(x,y);
      break;
    case '/':
      result = div(x,y);
      break;
    case 'p':
      result = pow(x,y);
      break;
    case 'f':
      result = fac(x,y);
  }

    console.log(result);
    operator = prompt(menu);
}

// ---------------------------------------------- //

function add(a,b){
  return a + b;
}

function sub(a,b){
  return a - b;
}

function mul(a,b){
  return a * b;
}

function div(a,b){
  return a / b;
}

function pow(base,exp){
  var result = 1;

  for(var i = 0; i < exp; i++)
    result *= base;

  return result;
}

function fac(n){
  z = 1;
  for(i=1;i<=n;i++){
    z = z*i;
  }
  return z;
}

