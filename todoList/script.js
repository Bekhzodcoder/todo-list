const input = document.querySelector('input');
const button = document.querySelector('button')
const ul = document.querySelector('ul');
let i = 0;
const total = document.querySelector('span')


button.addEventListener('click', (e)=>{
    if(input.value == '') return
    
    createDeleteElements(input.value.substring(0, 20))
    input.value = '';
})

function createDeleteElements(value){
  i++;
    // input.value.substring(0, 10)
    const btn = document.createElement('button')
    const li = document.createElement('li')
    const arr = [
        'linear-gradient(45deg, #EECFBA, #C5DDE8', 
        'linear-gradient(to top left, powderblue, pink)', 
        'linear-gradient(to right, skyblue -50%, purple 150%)', 
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 29%, rgba(0,212,255,1) 100%)',
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,15,172,0.9612219887955182) 100%, rgba(0,212,255,1) 100%)']  

    const rands = Math.floor(Math.random()*arr.length)
    console.log(rands)

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'Delete'

    li.appendChild(btn)
   

    li.style.background = `${arr[rands]}`;

    btn.addEventListener('click', ()=>{
        ul.removeChild(li);
        i--
        console.log(i--)
    })

    total.textContent = i;

    
    ul.appendChild(li)
}