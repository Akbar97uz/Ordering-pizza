let orderForm = document.querySelector('.order-form');
let breadSelect = document.querySelector('.bread-type');
let sizeInputs = document.querySelectorAll('.size-input');
let ingrInputs = document.querySelectorAll('.ingr-input');
let ingrInputs2 = document.querySelectorAll('.ingr-input2');
let breadSpan = document.querySelector('.bread-span');
let sizeSpan = document.querySelector('.size-span');
let sizeSpanRight = document.querySelector('.size-span-right');
let ingrSpan = document.querySelector('.ingr-span');
let ingSpan2 = document.querySelector('.ingr-span2');
let statusMessage = document.querySelector('.status');

let Ingrents = []

let Ingrents2 = []


orderForm.addEventListener('submit', (e) => {
  e.preventDefault()
  statusMessage.textContent = "Buyurtmangiz yo'lga chiqdi.Bizni tanlaganingizdan xursandmiz! 😎"
})

breadSelect.addEventListener('change', (e) => {
  breadSpan.textContent = breadSelect.value
})

sizeInputs.forEach(inp => {
  inp.addEventListener('change', () => {
    sizeSpanRight.textContent = inp.value;
  })
  
})

ingrInputs.forEach(inp => {
  inp.addEventListener('change', () => {
    if (Ingrents.includes(inp.value)) {
      Ingrents = Ingrents.filter(ing => ing !== inp.value)
    } else {
      Ingrents.push(inp.value)
    }
    ingrSpan.textContent = Ingrents.join(' ');
  })
  
})

ingrInputs2.forEach(inp => {
  inp.addEventListener('change', () => {
    if (Ingrents2.includes(inp.value)) {
      Ingrents2 = Ingrents.filter(ing => ing !== inp.value)
    } else {
      Ingrents2.push(inp.value)
    }
    ingSpan2.textContent = Ingrents2.join(' ');
  })
  
})









