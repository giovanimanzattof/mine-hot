const hot = document.getElementById("hot")
const armor = document.getElementById("armor")
const invi = document.getElementById('hot-inve')
const bar = document.getElementById('bar')
const inventario = document.getElementById('inventario')
const botao = document.getElementById('botao')

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


const inputs = document.querySelectorAll(".terminal-input");
const terminal = document.getElementById("terminal");
const armorsteve = document.getElementById("armorsteve");

inputs.forEach((input) => {
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const value = input.value;

            const parentContainer = input.closest(".terminal, .armor-steve");

            // cria linha digitada
            const line = document.createElement("div");
            line.classList.add("line");

            const prompt = document.createElement("span");
            prompt.classList.add("prompt");
            prompt.textContent = "user@dev:~$";

            const text = document.createElement("span");
            text.textContent = value;

            line.appendChild(prompt);
            line.appendChild(text);

            parentContainer.insertBefore(line, input.parentElement);

            // resposta fake
            const output = document.createElement("div");
            output.innerHTML = getCommand(value);

            parentContainer.insertBefore(output, input.parentElement);

            input.value = "";
            parentContainer.scrollTop = parentContainer.scrollHeight;
        }
    });
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
            terminal.innerHTML = createInputLine();
            armorsteve.innerHTML = createInputLine();
            attachInputEvents();
            return "";
        },
        iniciar: () => {
            setTimeout(() => {
                terminal.innerHTML += `<p>${sistema()}`
            }, 2000);
            setTimeout(() => {
                terminalp.style.display = "none";
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
        },
        dir: () => {
            return `
<pre>
Assets
  CSS
    Style.css
  Image
    logo.jpg
  js
    script.js
index.html
</pre>
`;
        },
        exit: () => {
            setTimeout(() => {
                terminalp.style.display = 'none'
                inventario.style.display = 'none'
            }, 3000);
            return "Saindo.."
        },
        

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

let off = document.getElementById("off")
let on = document.getElementById("on")

on.addEventListener('click', () => {
    terminalp.style.opacity = '1'
    on.style.display = 'none'
    off.style.display = 'block'
})

off.addEventListener("click", () => {
    terminalp.style.display = 'none'
    on.style.display = 'block'
    off.style.display = 'none'
})
function createInputLine() {
    return `
        <div class="line">
            <span class="prompt">user@dev:~$</span>
            <input class="terminal-input" autofocus />
        </div>
    `;
}
function attachInputEvents() {
    const inputs = document.querySelectorAll(".terminal-input");

    inputs.forEach((input) => {
        input.addEventListener("keydown", handleInput);
    });
}
function handleInput(e) {
    if (e.key !== "Enter") return;

    const input = e.target;
    const value = input.value;

    const parentContainer = input.closest(".terminal, .armor-steve");

    // cria linha digitada
    const line = document.createElement("div");
    line.classList.add("line");

    const prompt = document.createElement("span");
    prompt.classList.add("prompt");
    prompt.textContent = "user@dev:~$";

    const text = document.createElement("span");
    text.textContent = value;

    line.appendChild(prompt);
    line.appendChild(text);

    parentContainer.insertBefore(line, input.parentElement);

    // resposta
    const output = document.createElement("div");
    output.innerHTML = getCommand(value);

    parentContainer.insertBefore(output, input.parentElement);

    input.value = "";
    parentContainer.scrollTop = parentContainer.scrollHeight;
}

function sistema() {
    setTimeout(() => {
        terminal.innerHTML += '<p>✔️ Sistema pronto</p>'
    }, 1000)

    return 'Inicializando...'
}

