// =====================================================
// SUPER TRUNFO LOL - LÓGICA DO JOGO
// =====================================================

// Variáveis do jogo
let cartas = [...campeoes]; // Copia o array original
let cartaMaquina;
let cartaJogador;
let pontosJogador = 0;
let pontosMaquina = 0;

// Elementos do DOM
const jogadorDiv = document.getElementById("jogador1");
const maquinaDiv = document.getElementById("jogador2");
const resultadoDiv = document.getElementById("resultado");

// Sons
const audioVitoria = document.getElementById("audio-vitoria");
const audioDerrota = document.getElementById("audio-derrota");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    atualizaPlacar();
    atualizaQuantidadeDeCartas();
    embaralharCartas();
});

// Embaralhar cartas (Fisher-Yates)
function embaralharCartas() {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
}

// Atualizar quantidade de cartas
function atualizaQuantidadeDeCartas() {
    const divQuantidade = document.getElementById("quantidade-cartas");
    divQuantidade.innerHTML = `🎴 Cartas restantes: ${cartas.length}`;
    divQuantidade.style.animation = "pulse 0.5s";
    setTimeout(() => divQuantidade.style.animation = "", 500);
}

// Atualizar placar
function atualizaPlacar() {
    document.getElementById("pontosJogador").textContent = pontosJogador;
    document.getElementById("pontosMaquina").textContent = pontosMaquina;
}

// Sortear cartas
function sortearCarta() {
    if (cartas.length < 2) {
        alert("Não há cartas suficientes!");
        return;
    }

    // Sortear carta da máquina
    const indexMaquina = Math.floor(Math.random() * cartas.length);
    cartaMaquina = cartas[indexMaquina];
    cartas.splice(indexMaquina, 1);

    // Sortear carta do jogador
    const indexJogador = Math.floor(Math.random() * cartas.length);
    cartaJogador = cartas[indexJogador];
    cartas.splice(indexJogador, 1);

    // Atualizar botões
    document.getElementById("sortear").disabled = true;
    document.getElementById("jogar").disabled = false;
    document.getElementById("btnProximaRodada").disabled = true;

    // Limpar resultado
    resultadoDiv.innerHTML = "";

    // Exibir cartas
    exibirCartas();

    // Atualizar contador
    atualizaQuantidadeDeCartas();
}

// Exibir cartas na tela
function exibirCartas() {
    // Carta da máquina (escondida)
    maquinaDiv.innerHTML = criarHTMLCarta(cartaMaquina, true);
    
    // Carta do jogador (completa)
    jogadorDiv.innerHTML = criarHTMLCarta(cartaJogador, false);
}

// Criar HTML da carta
function criarHTMLCarta(carta, escondida) {
    if (escondida) {
        return `
            <div class="card">
                <div class="card-header">
                    <div class="card-title">???</div>
                    <div class="card-subtitle">Carta do Nexus</div>
                </div>
                <img src="${carta.img}" alt="?" class="card-image" style="filter: blur(5px) brightness(0.3);">
                <div class="card-attributes">
                    <div class="attr-row"><span class="attr-name">❤️ Vida</span><span class="attr-value">?</span></div>
                    <div class="attr-row"><span class="attr-name">✨ Poder Mágico</span><span class="attr-value">?</span></div>
                    <div class="attr-row"><span class="attr-name">⚔️ Força</span><span class="attr-value">?</span></div>
                    <div class="attr-row"><span class="attr-name">🛡️ Armadura</span><span class="attr-value">?</span></div>
                    <div class="attr-row super-attr"><span class="attr-name">👑 Lore Power</span><span class="attr-value">?</span></div>
                </div>
            </div>
        `;
    }

    const atributos = carta.atributos;
    const getClass = (val) => val >= 80 ? 'high' : val >= 50 ? 'medium' : 'low';

    return `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${carta.nome}</div>
                <div class="card-subtitle">${carta.titulo}</div>
            </div>
            <img src="${carta.img}" alt="${carta.nome}" class="card-image">
            <div class="card-attributes">
                <label class="attr-row" onclick="selecionarAtributo(this)">
                    <input type="radio" name="atributo" value="vida">
                    <span class="attr-name">❤️ Vida</span>
                    <span class="attr-value ${getClass(atributos.vida)}">${atributos.vida}</span>
                </label>
                <label class="attr-row" onclick="selecionarAtributo(this)">
                    <input type="radio" name="atributo" value="poderMagico">
                    <span class="attr-name">✨ Poder Mágico</span>
                    <span class="attr-value ${getClass(atributos.poderMagico)}">${atributos.poderMagico}</span>
                </label>
                <label class="attr-row" onclick="selecionarAtributo(this)">
                    <input type="radio" name="atributo" value="forca">
                    <span class="attr-name">⚔️ Força</span>
                    <span class="attr-value ${getClass(atributos.forca)}">${atributos.forca}</span>
                </label>
                <label class="attr-row" onclick="selecionarAtributo(this)">
                    <input type="radio" name="atributo" value="armadura">
                    <span class="attr-name">🛡️ Armadura</span>
                    <span class="attr-value ${getClass(atributos.armadura)}">${atributos.armadura}</span>
                </label>
                <label class="attr-row super-attr" onclick="selecionarAtributo(this)">
                    <input type="radio" name="atributo" value="lorePower">
                    <span class="attr-name">👑 Lore Power</span>
                    <span class="attr-value ${getClass(atributos.lorePower)}">${atributos.lorePower}</span>
                </label>
            </div>
        </div>
    `;
}

// Selecionar atributo (visual)
function selecionarAtributo(elemento) {
    document.querySelectorAll('.attr-row').forEach(el => el.classList.remove('selected'));
    elemento.classList.add('selected');
    elemento.querySelector('input').checked = true;
}

// Obter atributo selecionado
function obterAtributoSelecionado() {
    const radios = document.getElementsByName("atributo");
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

// Jogar!
function jogar() {
    const atributo = obterAtributoSelecionado();
    
    if (!atributo) {
        alert("Selecione um atributo para comparar!");
        return;
    }

    const valorJogador = cartaJogador.atributos[atributo];
    const valorMaquina = cartaMaquina.atributos[atributo];

    // Revelar carta da máquina
    maquinaDiv.innerHTML = criarHTMLCartaRevelada(cartaMaquina);

    let resultado = "";
    let classe = "";

    if (valorJogador > valorMaquina) {
        resultado = "🎉 VITÓRIA!";
        classe = "vitoria";
        pontosJogador++;
        tocarSom("vitoria");
    } else if (valorJogador < valorMaquina) {
        resultado = "💀 DERROTA!";
        classe = "derrota";
        pontosMaquina++;
        tocarSom("derrota");
    } else {
        resultado = "⚖️ EMPATE!";
        classe = "empate";
    }

    // Exibir resultado
    resultadoDiv.innerHTML = `
        <p class="${classe}">${resultado}</p>
        <p>${cartaJogador.nome}: ${valorJogador} vs ${cartaMaquina.nome}: ${valorMaquina}</p>
    `;

    // Atualizar placar
    atualizaPlacar();

    // Verificar fim de jogo
    if (cartas.length === 0) {
        setTimeout(finalizarJogo, 2000);
    } else {
        document.getElementById("btnProximaRodada").disabled = false;
    }

    document.getElementById("jogar").disabled = true;
}

// Criar HTML da carta revelada
function criarHTMLCartaRevelada(carta) {
    const atributos = carta.atributos;
    const getClass = (val) => val >= 80 ? 'high' : val >= 50 ? 'medium' : 'low';

    return `
        <div class="card" style="animation: cardAppear 0.5s;">
            <div class="card-header">
                <div class="card-title">${carta.nome}</div>
                <div class="card-subtitle">${carta.titulo}</div>
            </div>
            <img src="${carta.img}" alt="${carta.nome}" class="card-image">
            <div class="card-attributes">
                <div class="attr-row"><span class="attr-name">❤️ Vida</span><span class="attr-value ${getClass(atributos.vida)}">${atributos.vida}</span></div>
                <div class="attr-row"><span class="attr-name">✨ Poder Mágico</span><span class="attr-value ${getClass(atributos.poderMagico)}">${atributos.poderMagico}</span></div>
                <div class="attr-row"><span class="attr-name">⚔️ Força</span><span class="attr-value ${getClass(atributos.forca)}">${atributos.forca}</span></div>
                <div class="attr-row"><span class="attr-name">🛡️ Armadura</span><span class="attr-value ${getClass(atributos.armadura)}">${atributos.armadura}</span></div>
                <div class="attr-row super-attr"><span class="attr-name">👑 Lore Power</span><span class="attr-value ${getClass(atributos.lorePower)}">${atributos.lorePower}</span></div>
            </div>
        </div>
    `;
}

// Tocar som
function tocarSom(tipo) {
    // Implementação básica - pode ser expandida
    console.log(`Tocando som de ${tipo}`);
}

// Finalizar jogo
function finalizarJogo() {
    let mensagem = "";
    let cor = "";

    if (pontosJogador > pontosMaquina) {
        mensagem = "🏆 VOCÊ É O CAMPEÃO DE RUNETERRA!";
        cor = "#0f0";
    } else if (pontosMaquina > pontosJogador) {
        mensagem = "☠️ O NEXUS PREVALECEU...";
        cor = "#f10f41";
    } else {
        mensagem = "⚖️ EMPATE ÉPICO!";
        cor = "#c8aa6e";
    }

    resultadoDiv.innerHTML = `
        <p id="resultado-final" style="color: ${cor};">${mensagem}</p>
        <p style="font-size: 1.2rem; margin-top: 10px;">Placar Final: ${pontosJogador} x ${pontosMaquina}</p>
        <button onclick="reiniciarJogo()" class="btn btn-primary" style="margin-top: 20px;">🔄 Jogar Novamente</button>
    `;
}

// Próxima rodada
function proximaRodada() {
    jogadorDiv.innerHTML = '<div class="empty-slot">Sua Carta</div>';
    maquinaDiv.innerHTML = '<div class="empty-slot">Carta do Nexus</div>';
    resultadoDiv.innerHTML = "";

    document.getElementById("sortear").disabled = false;
    document.getElementById("jogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = true;
}

// Reiniciar jogo
function reiniciarJogo() {
    cartas = [...campeoes];
    pontosJogador = 0;
    pontosMaquina = 0;
    embaralharCartas();
    atualizaPlacar();
    atualizaQuantidadeDeCartas();
    proximaRodada();
}

// Efeito de partículas simples
function criarParticulas() {
    const container = document.getElementById("particles");
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement("div");
        particula.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4}px;
            height: ${Math.random() * 4}px;
            background: rgba(200, 170, 110, ${Math.random() * 0.5});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite;
            pointer-events: none;
        `;
        container.appendChild(particula);
    }
}

// Iniciar partículas
criarParticulas();