// Select the h1 element and store it in a variable named heading.
let heading=document.querySelector('h1');
// Check the typeof heading and log it.
console.log(typeof heading);
// Change the color of heading to black.
heading.style.color='black';
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll

let allHrs=document.querySelectorAll('hr');
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray=Array.from(allHrs);
// Set the border of the all the hr elements to "1px solid tomato"
allHrsArray.forEach(ele=>ele.style.border='1px solid tomoto')
// Change the background of all the hr to "antiquewhite" using for of loop.
for(let ele of allHrsArray){
  ele=ele.style.backgroundColor='antiquewhite';
}
// Change the 'border-radius' of all the hr to "5px" using array.
allHrsArray.forEach(ele=>ele.style.border='5px');
// Change the alignment of the heading(h1) to center.
heading.style.textAlign='center';
// Change the font size of the heading to 3rem.
heading.style.fontSize='3rem';
// Change the border of hr with class 'image' to `2px solid purple`.
let img= document.querySelectorAll('.image').forEach(ele=>ele.style.border='2px solid purple');

// Hide the box number 17 (last box).
document.querySelector('.seventeen').remove()
// Change the border of all the hr element from solid to dashed type
allHrsArray.forEach(ele=>ele.style.border='dashed')
// Create a pragraph element and store it in variable named 'para' using `createElement`
let para=document.createElement('p');
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText='querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.';
// Remove all the elements from box 1
document.querySelector('.one').children[0].remove();
document.querySelector('.one').children[0].remove();
// Replace all the elements inside box 1 with the para (you created above)
document.querySelector('.one').append(para);
/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let box16=document.querySelector('.sixteen');
box16.parentNode;
//<div class=​"archive">​grid<div class=​"box one">​…​</div>​<div class=​"box two awesome-box">​…​</div>​<div class=​"box three">​…​</div>​<div class=​"box four awesome-box">​…​</div>​<div class=​"box five">​…​</div>​<div class=​"box six">​…​</div>​<div class=​"box seven">​…​</div>​<div class=​"box eight">​…​</div>​<div class=​"box nine">​…​</div>​<div class=​"box ten">​…​</div>​<div class=​"box eleven">​…​</div>​<div class=​"box twelve">​…​</div>​<div class=​"box thirteen">​…​</div>​<div class=​"box fourteen">​…​</div>​<div class=​"box fifteen">​…​</div>​<div class=​"box sixteen">​…​</div>​</div>​
box16.childNodes
box16.previousSibling
box16.nextSibling
box16.firstChild
box16.lastChild
//
box16.previousElementSibling
box16.nextElementSibling
box16.firstElementChild
box16.lastElementChild





// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let box2=document.querySelector('.two');
let p=document.createElement('p');
p.innerText="Append inserts as last child";
box2.append(p);
// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let box3=document.querySelector('.two');
let p2=document.createElement('p');
p2.innerText="Prepend inserts as first child";
box2.prepend(p2);
// Change the border of box 4 to '1px solid black'
document.querySelector('.four').style.border='px solid black';
// Change the border radius of box 5 to 10px.
document.querySelector('.five').style.borderRadius='10px';
// Change the text color of box 6 to black.
document.querySelector('.six').style.color='black';
// Change the font size of the para inside box 1 to 0.8rem.
document.querySelector('.one').children[0].style.fontSize='.8rem';
// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
let arrBox=document.querySelectorAll('.box');
let arrBoxArray=Array.from(arrBox);
for(let i=0;i<arrBoxArray.length;i++){
  if(i%2==0){
    console.log(i);
    arrBoxArray[i].style.backgroundColor='aliceblue';
  }
}
// add a class named "awesome-box" to the box 6 using classList property of DOM element.
document.querySelector('.six').classList.add('awesome-box')
// Using the toggle classList property toggle the class `awesome-box` from box 2
document.querySelector('.two').classList.toggle('awesome-box');
// Using the remove classList proeprty remove the class `awesome-box` from box 4
document.querySelector('.four').classList.remove('awesome-box');
// Change the background of the body to bisque
document.body.style.background='bisque'
// Create a button and store it in a variable named 'btn'
let btn=document.createElement('button');
// textContent of the button should be 'Click Me'
btn.innerText='Click Me';
// Change the background of the btn to 'oldlace'
btn.style.background='oldlace'
// Change the font size of the btn to 1rem
btn.style.fontSize='1rem'
// Change the border of the btn to '1px solid black'
btn.style.border='1px solid black';
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding='.5rem 1rem';
// Append the btn in box number 9
document.querySelector('.nine').append(btn);
// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm=document.createElement('img');
imgElm.setAttribute('src','https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80');

// Select the box 7 using class seven
let box7= document.querySelector('.seven');
// Remove all the elements form box seven
box7.children[0].remove()
box7.children[0].remove()
box7.children[0].remove()
// Append the imgElm to the box no 7
box7.append(imgElm);
// Change the width and height of the image to `100%`
imgElm.style.width='100%'
imgElm.style.height='100%'
// Select the box 5 using class five
let box5=document.querySelector('.five');
// Create an input element
let input=document.createElement('input');
// Change the placeholder property of the input element to "Enter you email!"
input.placeholder='Enter your email'
// Append the input element to the box 5 you selected above
box5.append(input);
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a1=document.createElement('a');
a1.innerText='AltCampus';
let a2=document.createElement('a');
a2.innerText='Google';
// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a1.href=`https://altcampus.school`;
a2.href=`https://google.com`;
// Append both the elements to box 5 you selected above.
box5.append(a1,a2);