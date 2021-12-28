const close = document.getElementById('close')
const open = document.getElementById('open')
const container = document.querySelector('.container')
const circle = document.querySelector('.circle')
const nav = document.querySelectorAll('.nav-items')

close.addEventListener('click',() => {
    container.classList.remove('show-nav')
    circle.style.transform = 'rotate(0deg)'
    nav.forEach(item => {
        item.style.transform ='translateX(-100%)'
    })
    
  

})
open.addEventListener('click',() => {
    container.classList.add('show-nav')
    circle.style.transform = 'rotate(-90deg)'
    nav.forEach(item => {
        item.style.transform ='translateX(0%)'
    })
   
    
   
  

})
console.log(nav)