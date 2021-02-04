const dummyTransactions = [
  {  id: 1, name: 'Bolo de brigadeiro', amount: -20},
  {  id: 2, name: 'Salário', amount: 300},
  {  id: 3, name: 'Torto de Frango', amount: -10 }
  {  id: 4, name: 'violao', amount: 150 }
]

const addTrasactionIntoDom = trasaction => {
  const operator = trasaction.amount < 0 ? '-' : '+'
  const CSSClass = trasaction.amount < 0 ? 'minus' : 'plus'
  const amountWithoutOperator = Math.abs(trasaction.amount)
  
  

  li.classList.add(CSSClass)
  li.innerHTML = `
  ${trasaction.name}<span>${operator} R$ ${Math.abs(trasaction.amount)}</span><button class="delete-btn">x</button>
  `
  
  
  
}




  
