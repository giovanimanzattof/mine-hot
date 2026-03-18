const coracao = document.getElementById('coracao')
const fome = document.getElementById("fome")
const expe = document.getElementById("experience")
const hot = document.getElementById("hot")
const armor = document.getElementById("armor")
const craft = document.getElementById("craft")
const invi = document.getElementById('hot-inve')
const bar = document.getElementById('bar')
const inventario = document.getElementById('inventario')
const botao = document.getElementById('botao')


for (let i = 0; i < 10; i++) {
    coracao.innerHTML += '❤️'
    fome.innerHTML += "🍖"
}

for (let i = 0; i < 17; i++) {
    const div = document.createElement('div')
    div.classList.add('experi')
    expe.appendChild(div)
}

const total = 9

for (let i = 0; i < total; i++) {
  const bar = document.createElement('div')
  bar.classList.add('bar')

  if (i === total - 1) {
    const button = document.createElement('button')
    button.textContent = 'Abrir'
    button.classList.add("botao")

    // ✅ evento funcionando
    button.addEventListener('click', () => {
      inventario.classList.toggle('hidden')
    })

    bar.appendChild(button)
  }

  hot.appendChild(bar)
}


for (let i = 0; i < 4; i++) {
    const armadura = document.createElement("div")
    armadura.classList.add('armadura')
    armor.appendChild(armadura)
}
for (let i = 0; i < 4; i++) {
    const bancada = document.createElement('div')
    bancada.classList.add('bancada')
    craft.appendChild(bancada)
}
for (let i = 0; i < 27; i++) {
    const menu = document.createElement('div')
    menu.classList.add('menu')

    invi.appendChild(menu)
    const itens = [
    '🍔'
    
    ]

    const item = itens[i]

    if (item) {
        const icone = document.createElement('div')
        icone.classList.add('icone')
        icone.innerHTML = item

        menu.appendChild(icone)
    }
}

for (let i = 0; i < 9; i++) {
    const hotbar = document.createElement('div')
    hotbar.classList.add('hotbar')
    bar.appendChild(hotbar)
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'e') {
        inventario.classList.toggle('hidden')
    }

})




