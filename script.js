
/* 
   Desafio: Hamburgeria.
   objetivos:
               Foreach --> irá mostrar todos os produtos da hamburgeria
               Mapear  --> irá aplicar 10% de desconto em todos os produtos
               Reduce  --> irá somar todos os produtos e mostrar o total.
               Filter  --> irá filtrar para produtos veganos
*/
/* 
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-itens')
let myLi = ''

function showAll() {


    menuOptions.forEach((product) => {
        myLi += `
          <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${product.price}</p>
          </li>    
    `
    })

    list.innerHTML = myLi

}

buttonShowAll.addEventListener('click', showAll) */



const list = document.querySelector('ul')
const myButtonShowlAll = document.querySelector('.show-itens')
const myButtonDiscount = document.querySelector('.discount')
const myButtonSum = document.querySelector('.sum-products')
const myButtonFilter = document.querySelector('.filter-vegan')



function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue

}


// Mostra todos os produtos na tela.
function showAll(arrayProducts) {
    let myLi = ''

    arrayProducts.forEach((product) => {
        myLi += `
                    <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">${formatCurrency(product.price)}</p>
                    </li>
         `
    })

    list.innerHTML = myLi

}

// Aplica disconto de 10% em todos os hamburgers.
function discountPrice() {
    const subtrairItems = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9,
    }))

    showAll(subtrairItems)

}

// Soma o valor de todos os produtos.
function sumPrice() {
    const sum = menuOptions.reduce((acc, valorTotal) => {
        return acc + valorTotal.price
    }, 0)


    list.innerHTML = `
                <li>
                    <img src="./assets/bacon-egg.png">
                    <p>Preço total de todos</p>
                    <p class="item-price">${formatCurrency(sum)}</p>
                </li>
                                
        `
}

// Mostra só os produtos veganos
function filterPrice(){
    const filter = menuOptions.filter(number => {
        if(number.vegan === true) return true
    })

    showAll(filter)

}


myButtonShowlAll.addEventListener('click', () => showAll(menuOptions))
myButtonDiscount.addEventListener('click', discountPrice)
myButtonSum.addEventListener('click', sumPrice)
myButtonFilter.addEventListener('click', filterPrice)








































