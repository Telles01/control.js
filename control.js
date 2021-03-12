const dummyTransactions = [
  {  id: 1, name: 'Chocolate cake', amount: -20},
  {  id: 2, name: 'Salário', amount: 300},
  {  id: 3, name: 'Torta de Frango', amount: -10 }
  {  id: 4, name: 'guitar', amount: 150 }
  {  id: 5, name: 'ice cream', amount: 150 }
  
]

const addTransactionIntoDom = transaction => {
  const operator = transaction.amount < 0 ? '-' : '+'
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
  const amountWithoutOpertor = Math.abs(transaction.amount)
  const li = document.createElement('li') 
}


  
  
  
  

  li.innerHTML = `
  ${trasaction.name}<span>${operator} R$ ${Math.abs(trasaction.amount)}</span><button class="delete-btn">x</button>
  `
  
  
  
}




  
