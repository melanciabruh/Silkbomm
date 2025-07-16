

// Renderiza os cursos de acordo com filtros
function carregarCursos(opcao = "todos", categoria = "", busca = "") {
    const container = document.getElementById("cursos-container");
    if (!container) return;

    container.innerHTML = "";

    const cursosFiltrados = cursos.filter(curso => {
        const porDestaque = (opcao === "destaques") ? curso.destaque : true;
        const porCategoria = categoria ? curso.categoria === categoria : true;
        const porBusca = busca ? curso.titulo.toLowerCase().includes(busca.toLowerCase()) : true;
        return porDestaque && porCategoria && porBusca;
    });

    if (cursosFiltrados.length === 0) {
        container.innerHTML = "<p>Nenhum curso encontrado.</p>";
        return;
    }

    cursosFiltrados.forEach(curso => {
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = curso.link;
        card.innerHTML = `
            <h3 class="titulocard">${curso.titulo}</h3>
            <p class="descricaocard">${curso.descricao}</p>
        `;
        container.appendChild(card);
    });
}

// Eventos de busca e filtro
function configurarFiltros() {
    const buscaInput = document.getElementById("buscaInput");
    const filtroSelect = document.getElementById("filtroCategoria");

    buscaInput?.addEventListener("input", () => {
        carregarCursos("todos", filtroSelect.value, buscaInput.value);
    });

    filtroSelect?.addEventListener("change", () => {
        carregarCursos("todos", filtroSelect.value, buscaInput.value);
    });
}

// Ativar modo escuro se estiver salvo
function aplicarModoEscuroSalvo() {
    if (localStorage.getItem("modoEscuro") === "true") {
        document.body.classList.add("dark-mode");
    }
    console.log()
}

// Adiciona evento ao botão de modo escuro se ele existir
function ativarBotaoModoEscuro() {
    const toggle = document.getElementById("darkModeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("modoEscuro", document.body.classList.contains("dark-mode"));
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    aplicarModoEscuroSalvo();
    ativarBotaoModoEscuro();

    const container = document.getElementById("cursos-container");
    if (container) {
        const pagina = window.location.pathname;
        if (pagina.includes("index")) {
            carregarCursos("destaques");
        } else {
            carregarCursos("todos");
            configurarFiltros();
        }
    }
});