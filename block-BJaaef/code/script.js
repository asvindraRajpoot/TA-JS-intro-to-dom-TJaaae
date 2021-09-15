// creating elements
let divHtml=document.querySelector('div');


// inserting Data in created elements



got.houses.forEach(house=>{
  
        house.people.forEach(people=>{
        let div =document.createElement('div');
        let li = document.createElement('li');
        let image=document.createElement('img');
        let span =document.createElement('span');
        let p=document.createElement('p');
        let a=document.createElement('a');
    
        div.style.backgroundColor='white';
        
        image.src= people.image
        //image.style.width='100%';
        image.style.borderRadius='50%'
        image.style.border='.2rem solid #458B7F'
        span.innerText=people.name;
        //span.style.display='inline'
        span.style.textAlign='center'
        span.style.verticalAlign='center'
        let divImg=document.createElement('div');
        divImg.append(image,span);
        divImg.style.display='flex'
        divImg.style.justifyContent='flex-start'
        divImg.style.alignItems='center'
        span.style.marginLeft='1.5rem'
        span.style.fontSize='1.3rem'
        p.innerText=people.description;
        p.style.fontSize='.8rem'
        p.style.textAlign='center'
        a.innerText='Learn More!';
        a.style.display='inline-block';
        a.style.width='100%'
        a.style.backgroundColor='#E7EDFD'
        a.style.textDecoration='none'
        a.style.padding='.5rem 1rem';
        a.style.borderRadius='.5rem'
        a.style.textAlign='center'
        a.style.margin='.5rem 0'
        a.style.color='blue'
        div.append(divImg,p,a);
        div.style.display='flex'
        div.style.flexDirection='column'
        div.style.padding='1rem'
        div.style.width='32%' 
        div.style.margin='1rem .5rem'
        div.style.borderRadius='.5rem';
        div.style.boxShadow='0rem 0rem 1rem 0rem #c5c7d3';
        divHtml.append(div);
         
    } );

})