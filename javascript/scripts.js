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

function updateImage(){
    const image = document.querySelector('#shoppingCart')
    image.setAttribute(
        'src',
        'https://cdn-icons-png.flaticon.com/512/263/263142.png'
    );
    image.setAttribute('alt', 'shopping cart')
    image.setAttribute('width', 50)
    image.setAttribute('height', 50)

}

updateImage()

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
    alert('you clicked')
}

buttonRef.addEventListener('click', alertUser)