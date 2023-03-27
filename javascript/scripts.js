// function greet(name, time = 'day'){
//     console.log(`good ${time} ${name}`)
// }
// name = prompt('enter name')
// time = 'night'

// greet(name)

// const greet1 = function(){
//     console.log("hello" + name)

// }
// greet1(name)

// const greet2 = (name)=>{
//     console.log("hello" + name)

// }
// greet2(name)

// let radius = prompt('what is the radius of the circle')
// const radiusPara = document.querySelector('#radius')
// const resultPara = document.querySelector('#result')


// function circleArea(radius){
//     radius = parseInt(radius);
//     if (isNaN(radius)){
//         alert('this is not a number')
//         resultPara.textContent = `user did not enter a number`

//     }else{    
//         circlearea = Math.PI * radius**2;
//     }

//     return circlearea
// }
// let area = circleArea(radius);
// radiusPara.textContent += radius
// resultPara.textContent = `the area of a circle with radius ${radius} is ${area}`

// alert(`the area of a circle with radius ${radius} is ${area}`);


let shoppingList = ['bread','cheese','pepper', 'green']
let listItem = document.createElement('li');

function populateList(shoppingList){
    const ulElement = document.querySelector('ul.shopping');
    console.log(ulElement)
    for(let item of shoppingList){
        let li = document.createElement("li")
        li.innerText = item
        console.log(li.innerText)
        ulElement.appendChild(li)
    }

}
populateList(shoppingList)

function squareList(){
    const Element = document.querySelector('ul.shopping')
    Element.classList.remove('circleList')
    Element.classList.add('squareList')

}

squareList()

// function updateImage(event){
//     console.log(event)
//     const image = document.querySelector('#shoppingCart')
//     image.setAttribute(
//         'src',
//         'images/shoppingCart.png'
//     );
//     image.setAttribute('alt', 'shopping cart')
//     image.setAttribute('width', 50)
//     image.setAttribute('height', 50)

// }

// updateImage()

function changeListGreen(){
    const ulElement = document.querySelectorAll('.shopping li');
    console.log(ulElement)
    for(let item of ulElement){
        if(item.textContent.includes('green')){
            item.classList.add('colorGreen')
        }
    }
}   

changeListGreen();

const buttonRef = document.querySelector('button');
function alertUser(){
    // alert('you clicked')
    // buttonRef.removeEventListener('click',alertUser)
    console.log(event)
    const image = document.querySelector('#shoppingCart')
    image.setAttribute(
        'src',
        'images/shoppingCart.png'
    );
    image.setAttribute('alt', 'shopping cart')
    image.setAttribute('width', 50)
    image.setAttribute('height', 50)
}

buttonRef.addEventListener('click', alertUser, {once:true})
buttonRef.addEventListener('click',changeText)
buttonRef.addEventListener('click',pinkBackground)

function changeText(){
    const buttonRef = document.querySelector('button');
    if (buttonRef.textContent.includes('me')){
        buttonRef.textContent = 'clicked'
    }
    else{
        buttonRef.textContent = 'click me'
    }

}

function pinkBackground(){
    const ulElement = document.querySelector('body')
    ulElement.classList.add('pinkBackground')}


const buttonContainer = document.querySelector('.button-container')
console.log(buttonContainer)
buttonContainer.addEventListener('mouseover', bgChange)

function bgChange(event){
    console.log('buttons clicked', event.target)
    event.target.classlist.add('greenBG')

}