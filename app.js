const container=document.getElementById('conatiner')

const number=document.querySelector('.number')

const btn=document.querySelector("button")

let color=['red','green','blue','yellow','pink','black','orange','aqua','lighpink','lightgreen']
btn.addEventListener("click",()=>{
   
    randomfcn()
    btn.style.display='none'
    setTimeout(()=>{
        container.style.backgroundColor = ''
        btn.style.display = 'block'

        removecolor()
    },2000)
})
function randomfcn(){

    let num = Math.floor(Math.random() * 10)
    container.style.backgroundColor = color[num]
   
}
function removecolor(){

    const p = document.querySelector('p')
    
    number.removeChild(p)
  
}
