
const input = document.querySelector(".terminal-input");
const terminal = document.getElementById("terminal");


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

function getCommand(cmd) {
    cmd = cmd.toLowerCase();

    const comandos = {
        help: () => {
            return `
<pre>
┌──────────────────────────────────────────────┐
│           CENTRAL DE COMANDOS                │
└──────────────────────────────────────────────┘

 [SISTEMA]
 help        → Exibe esta lista de comandos
 clear       → Limpa a tela do terminal
 status      → Mostra o estado atual do sistema
 version     → Exibe a versão do sistema

 [CONTROLE]
 iniciar     → Inicializa o sistema
 poweroff    → Desliga o sistema
 exit        → Encerra o terminal

 [USUÁRIO]
 about       → Abre informações do desenvolvedor
 projetos    → Lista os projetos disponíveis
 contato     → Exibe informações de contato
 skills      → Tecnologias e habilidades
 objetivo    → Objetivo profissional
 github      → Abre GitHub
 linkedin    → Abre LinkedIn

 [ESTRUTURA]
 dir         → Mostra a estrutura do projeto

───────────────────────────────────────────────

Digite um comando e pressione ENTER.
</pre>
`;

        },
        clear: () => {
            terminal.innerHTML = createInputLine();
            attachInputEvents();
            return "";
        },
        iniciar: () => {
            // Adiciona texto no terminal
            terminal.innerHTML += `<p>${sistema()}</p>`;
            // Aguarda 4s antes de continuar
            setTimeout(() => {
                // Alterna classe
                terminalp.classList.toggle('terminalh');

                // Exibe elementos
                const site = document.getElementById('site');
                site.style.display = 'block';
                // Animação com GSAP
                const pages = document.querySelectorAll('.page');
                gsap.to(pages, {
                    opacity: 1,
                    delay: 1,
                    duration: 2,
                    stagger: 0.5 // animação sequencial mais suave
                });
            }, 3000);
            return ""
        },
        status: () => {
            return `
<pre>
┌──────────────────────────────────────────────┐
│            STATUS DO SISTEMA                 │
└──────────────────────────────────────────────┘

 Sistema ................. ${obterStatus()}
 Última atualização ...... ${dia()}

───────────────────────────────────────────────
</pre>
                    `
        },
        version: () => {
            return `
<pre>
┌──────────────────────────────────────────────┐
│           SYSTEM INTERFACE                   │
└──────────────────────────────────────────────┘

 Versão ............. v1.0.0
 Build .............. 2026.03
 Modo ............... Desenvolvimento

───────────────────────────────────────────────

 Status: ${obterStatus()}
</pre>              
                    `
        },
        about: () => {
    return `
<pre class="INFO">
┌──────────────────────────────────────────────┐
│             DESENVOLVEDOR                    │
└──────────────────────────────────────────────┘

 Nome .................... Giovani Manzatto Furlan
 Área .................... Sistemas Embarcados
 Foco .................... IoT integrado com aplicações web

───────────────────────────────────────────────

 Desenvolvedor focado na criação de sistemas embarcados
 utilizando ESP32, com comunicação via MQTT e integração
 com interfaces web modernas.

 Possuo base sólida em desenvolvimento frontend, criando
 aplicações responsivas e interativas utilizando HTML,
 CSS e JavaScript.

 Busco evoluir na construção de sistemas conectados,
 unindo hardware e software em soluções completas.

───────────────────────────────────────────────

 Status: Em desenvolvimento contínuo 🚀
</pre>
`
},
        projetos: () => {
            return `
<pre class="INFO">
┌──────────────────────────────────────────────┐
│              PROJETOS DISPONÍVEIS            │
└──────────────────────────────────────────────┘

 [01] Hamburgueria
      → <a href="https://giovanimanzattof.github.io/portifolio-giovani-2.0/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

 [02] Pizzaria
      → <a href="https://giovanimanzattof.github.io/pizzaria/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

 [03] Cafeteria
      → <a href="https://giovanimanzattof.github.io/cafeteria/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

 [04] Carros
      → <a href="https://giovanimanzattof.github.io/carros/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

 [05] Cordel
      → <a href="https://giovanimanzattof.github.io/projeto-cordel/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

 [06] Minecraft
      → <a href="https://giovanimanzattof.github.io/minecraft/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

 [07] Barbearia
      → <a href="https://giovanimanzattof.github.io/barbearia-projeto/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #00ff00;">Acessar projeto</a>

───────────────────────────────────────────────

 Selecione um projeto para visualizar no navegador.
</pre>
`
        },
        contato: () => {
            return `
<pre>
┌──────────────────────────────────────────────┐
│                CONTATO                       │
└──────────────────────────────────────────────┘

 Email ............. giovanisistemaembarcado@gmail.com
 GitHub ............ https://github.com/giovanimanzattof
 LinkedIn .......... linkedin.com/in/seuuser

───────────────────────────────────────────────

 Disponível para oportunidades e colaborações.
</pre>
`
        },
        dir: () => {
            return `
<pre>
┌──────────────────────────────────────────────┐
│           ESTRUTURA DO PROJETO               │
└──────────────────────────────────────────────┘

 Portfólio/
 ├── assets/
 │   ├── css/
 │   │   └── style.css
 │   ├── images/
 │   │   └── logo.jpg
 │   └── js/
 │       └── script.js
 │
 └── index.html

───────────────────────────────────────────────

 Estrutura organizada para aplicação web.
</pre>
`;
        },
        exit: () => {
            setTimeout(() => {
                terminalp.classList.remove('terminalh')
            }, 2000);
            return "Saindo.."
        },
        poweroff: () => {
            setTimeout(() => {
                const site = document.getElementById('site')
                site.style.display = 'none'
                terminalp.classList.remove('terminalh')
                const off = document.getElementById('off')
                const on = document.getElementById('on')
                on.style.display = 'block'
                off.style.display = 'none'
                const mine = document.getElementById('mine')
                mine.style.opacity = '0'
            }, 2000);

            return "Sistema Desligando..."
        },
        skills: () => {
    return `
<pre>
Skills:
    [BASE]
Frontend .... HTML | CSS | JavaScript
Ferramentas . Git | GitHub

    [DESENVOLVENDO]
IoT ......... ESP32 | MQTT | C++
Mobile ...... Kotlin | Raspberry PI

</pre>
    `
        },
        objetivo: () => {
    return `
<pre>
┌──────────────────────────────────────────────┐
│          OBJETIVO PROFISSIONAL               │
└──────────────────────────────────────────────┘

 Desenvolvedor em transição de carreira para a área
 de Front-End, com foco em criação de interfaces
 modernas, responsivas e bem estruturadas.

 Possuo conhecimentos em HTML e CSS, atualmente
 aprofundando JavaScript e boas práticas de
 desenvolvimento web.

 Cursando Segurança da Informação (FATEC Americana),
 agregando visão em proteção de dados, análise de
 vulnerabilidades e desenvolvimento seguro.

 Experiência anterior como laboratorista de fotografia,
 com forte atenção aos detalhes, organização e disciplina.

───────────────────────────────────────────────

 Objetivo:

 Conquistar minha primeira oportunidade como
 Desenvolvedor Front-End, contribuindo com a equipe,
 evoluindo continuamente e participando de projetos
 que gerem impacto.

───────────────────────────────────────────────

 Foco Futuro:

 Desenvolvimento de soluções IoT com ESP32 integradas
 a aplicações web modernas, criando sistemas
 conectados, escaláveis e eficientes.

</pre>
    `
        },
        github: () => {
            window.open("https://github.com/giovanimanzattof")
        },
        linkedin: () => {
            window.open("https://github.com/giovanimanzattof")
        }
    };
    return comandos[cmd]
        ? comandos[cmd]()
        : "Comando nao encontrado";
}
const btnterminal = document.getElementById("btnterminal")
const terminalp = document.getElementById("terminalp")

btnterminal.addEventListener('click', () => {
    terminalp.classList.toggle("terminalh")
    terminal.innerHTML = createInputLine();
    attachInputEvents();
});



function dia() {
    const agora = new Date();

    return agora.toLocaleString();

}

let off = document.getElementById("off")
let on = document.getElementById("on")

on.addEventListener('click', () => {
    terminalp.classList.toggle('terminalh')
    on.style.display = 'none'
    off.style.display = 'block'
    terminal.innerHTML = createInputLine();
    attachInputEvents();
})

off.addEventListener("click", () => {
    terminalp.classList.remove('terminalh')
    on.style.display = 'block'
    off.style.display = 'none'
    const site = document.getElementById('site')
    site.style.display = 'none'
    const mine = document.getElementById('mine')
    mine.style.opacity = '0'
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
    const input = document.querySelector(".terminal-input");


    input.addEventListener("keydown", handleInput);

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
    }, 2000)

    return 'Inicializando...'
}

function obterStatus() {
    const site = document.getElementById('site')
    return site.style.display === 'block' ? 'ON' : 'OFF'
}
const statuss = document.getElementById("status")
const statusdiv = document.createElement('div')

statusdiv.classList.add('statusdiv')
statuss.appendChild(statusdiv)
setInterval(() => {
    statusdiv.innerHTML = `Status: <span class="statuss">${obterStatus()}</span>`
}, 200)


const minimizar = document.getElementById('minimizar')
const maxmizar = document.getElementById('maxmizar')
const fechar = document.getElementById('fechar')

fechar.addEventListener('click', () => {
    terminalp.classList.remove('terminalh')
})

minimizar.addEventListener('click', () => {
    terminalp.classList.remove('terminalh')
})
