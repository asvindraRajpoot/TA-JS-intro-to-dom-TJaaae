/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

function createInputElm(label,type='text'){
   let input= document.createElement('input');
   input.type=type;
   let lab=document.createElement('label');
   lab.innerText=label+':';
   lab.append(input);
 
 return lab;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// // 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here


function createInputElm(ele,type='text'){
  let input= document.createElement('input');
  input.type=type;
  let elem=document.createElement('label');
  elem.innerText=`${ele} :`
  elem.append(input);

return elem;
}

// // TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr){

  let ul=document.createElement('ul');
  for(let i=0;i<arr.length;i++){
    let li=document.createElement('li');
    li.innerText=arr[i];
    ul.append(li); 
  }
 
 return ul;
}

// // TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr){
let rtn =[];
arr.forEach((element,index) => {
  let ul=document.createElement('ul');
let p=document.createElement('p');
  p.innerText=arr[index].name;
let input=document.createElement('input');
input.type='checkbox';
if(arr[index].isDone){
    input.setAttribute('checked',true);
  }
  input.setAttribute('name',"");
input.setAttribute('id',"");
let span=document.createElement('span');
span.innerText='X';
let li=document.createElement('li');
li.append(p,input,span);
ul.append(li);
rtn.push(ul);
});




 
 return rtn;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
 createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
