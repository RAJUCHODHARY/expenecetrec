let screen1inputs=document.querySelector('#screen1 input');
let screen1=document.querySelector('#screen1');

let scrieen1button=document.querySelector('#screen1 button');
let screen2=document.querySelector('#screen2');
let totalHeading=document.querySelector('#totalHeading span');
let input1=document.querySelector('#input1');
let input2=document.querySelector('#input2');
let btn=document.querySelector('#btn');
let table=document.querySelector('#expenseTracker table tbody');
let spentHeading=document.querySelector('#spentHeading span');
let remainingHeading=document.querySelector('#remainingHeading span');
let spant1 = 0;
let screen1inp;
let budget = screen1inputs.value;

scrieen1button.addEventListener('click',opens);


function opens(){
     screen1inp=screen1inputs.value;
    if(screen1inp.trim().length===0)return;
    screen1.classList.add('disabled')
    screen2.classList.remove('disabled');
    totalHeading.innerHTML=screen1inp;
    
}

btn.addEventListener('click',add);
let count=0;
function add(e){
e.preventDefault();
    console.log(typeof screen1inp, typeof spant1,"32")
if(+screen1inp === spant1){
    alert("Your budget is over");
    }else{
    let inp1=input1.value;
    let inp2=input2.value;
    if(inp1+inp2.trim().length===0)return;
    let remain = screen1inputs.value;
     spant1 = spant1 + Number(inp2);
    remainingHeading.innerText = remain-spant1;
    
    spentHeading.innerText= spant1;
    let tr=document.createElement('tr');
    let td=document.createElement('td');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    count=++count;
    td.innerText=count;
    td1.innerText=inp1;
    td2.innerText=inp2;
    tr.append(td);
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
    }


}