let calculation;
calculation = '' ;
let display ;

displayREsult(); 

function result(){
    calculation = eval(calculation);
    displayREsult();
    localStorage.setItem('calculation', calculation);
}

function add(x){
    calculation += x;
    displayREsult()
    localStorage.setItem('calculation', calculation);
}

function ac(){
    calculation='';
    displayREsult();
}

function displayREsult() {
    display = document.querySelector('.terminal');
    display.innerHTML= calculation;
}

