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
    if (event.key === 'E') {
        inventario.classList.toggle('hidden')
    }

})


const input = document.getElementById("input");
const terminal = document.getElementById("terminal");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const value = input.value;

        // cria nova linha com comando digitado
        const line = document.createElement("div");
        line.classList.add("line");
        line.innerHTML = `
          <span class="prompt">user@dev:~$</span>
          <span>${value}</span>
        `;

        terminal.insertBefore(line, input.parentElement);

        // resposta fake
        const output = document.createElement("div");
        output.innerHTML = getCommand(value);
        terminal.insertBefore(output, input.parentElement);

        input.value = "";
        terminal.scrollTop = terminal.scrollHeight;
    }
});

function getCommand(cmd) {
    cmd = cmd.toLowerCase();

    const comandos = {
        help: () => {
            return `Comandos:<br>
            help -> Lista de Comandos<br>
            clear -> Limpa tela<br>
            iniciar -> Inicia o site<br>
            status -> Mostra status do sistema<br>
            version -> Vesão do sistema<br>
            about -> Abre o perfil(sobre)<br>
            projetos -> Lista de projetos<br>
            contato -> Mostra contato`;
        },

        clear: () => {
            terminal.innerHTML = `
                <div class="line">
                    <span class="prompt">user@dev:~$</span>
                    <input id="input" autofocus />
                </div>
            `;
            location.reload();
        },

        iniciar: () => {
            const relad = document.createElement("div");
            relad.classList.add("reload");
            terminal.appendChild(relad);
            setTimeout(() => {
                terminalp.style.display = "none";
                location.reload();
            }, 5000);
            return ""
        },

        status: () => {
            return `ESP32: Offline<br>
                    MQTT: Offline<br>
                    Sistema: Online<br>
                    Ultima atualização: ${dia()}`

        },
        version: () => {
            return `KOMBI SMART SYSTEM<br>
                    Versão: v1.0.0<br>
                    Build: 2026.03<br>
                    Modo: Desenvolvimento`
        },
        about: () => {
            return `Desenvolvido por: <br>
                    <br>
                    Giovani Manzatto Furlan <br>
                    Em desenvolvimento de Sistemas Embarcados <br>
                    Tenho a Base do FrontEnd <br>
                    <br>
                    Stack: <br>
                    - ESP32 (C++)<br>
                    - MQTT<br>
                    - Android (Kotlin) <br>
                    - Raspberry Pi<br>
                    - HTML <br>
                    - CSS <br>
                    - JavaScript <br>
                    - Git e GitHub`
        },
        projetos: () => {
            return `Projetos Disponiveis: <br>
                    <br>
                    [1] Hamburgueria <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/portifolio-giovani-2.0/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a> <br>
                    <br>
                    [2] Pizzaria <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/pizzaria/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a><br>
                    <br>
                    [3] Cafeteria <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/cafeteria/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a><br>
                    <br>
                    [4] Carros <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/carros/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a><br>
                    <br>
                    [5] Cordel <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/projeto-cordel/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a><br>
                    <br>
                    [6] Minecraft <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/minecraft/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a><br>
                    <br>
                    [7] Barbearia <br>
                    Projeto: <a href="https://giovanimanzattof.github.io/barbearia-projeto/" target="_blank" rel="noopener noreferrer"style="text-decoration: none; color: #00ff00;">Clique aqui</a>`
        },
        contato: () => {
            return `Email: giovanisistemaembarcado@gmail.com <br>
                    GitHub: https://github.com/giovanimanzattof<br>
                    LinkedIn: linkedin.com/in/seuuser<br>`
        }


    };

    return comandos[cmd]
        ? comandos[cmd]()
        : "Comando nao encontrado";
}
const btnterminal = document.getElementById("btnterminal")
const terminalp = document.getElementById("terminalp")

btnterminal.addEventListener('click', () => {
    if (terminalp.style.display === 'none') {
        terminalp.style.display = 'block'

    } else {
        terminalp.style.display = 'none'
    }
})

function dia() {
    const agora = new Date();

    return agora.toLocaleString();

}

const off = document.getElementById("off")
const on = document.getElementById("on")

on.addEventListener('click', () => {
    if (terminalp.style.display === 'none') {
        terminalp.style.display = 'block'
        on.disabled = true
    } else {
        terminalp.style.display = 'none'
    }

})



