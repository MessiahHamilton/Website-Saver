let listEL = []

const saveBTN = document.getElementById('saveBtn')

const inputEL = document.getElementById('inputEl')

const ListOrder = document.getElementById('list')

const deleteBTN = document.getElementById('deleteBtn')

let fullList = ''

saveBTN.addEventListener("click",() => {

  listEL.push(inputEL.value)

  inputEL.value = ''

  console.log(listEL)

  ListOrder.innerHTML = ''
  
  for (let i = 0; i < listEL.length; i++) {

    ListOrder.innerHTML += `<li> <a href =  ${listEL[i]} target = "_blank"> ${listEL[i]} </a> </li>`
  }

  localStorage.setItem("listEL",JSON.stringify(listEL))

})

 deleteBTN.addEventListener("click", () => {

localStorage.clear()

listEL = []

ListOrder.innerHTML = ''

 })

