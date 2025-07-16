const cursos = [
  {
    titulo: "HTML e CSS para Iniciantes",
    descricao: "Aprenda HTML e CSS para criar seus próprios sites do zero.",
    categoria: "Programação",
    slug: "html-css-iniciantes",
    destaque: true,
    link: "html-css-iniciantes.html"
  },
  {
    titulo: "JavaScript do Zero",
    descricao: "Aprenda JavaScript e crie seus próprios sites interativos.",
    categoria: "Programação",
    slug: "javascript-zero",
    destaque: true,
    link: "curso.html?curso=javascript-zero"
  },
  {
    titulo: "Gastronomia",
    descricao: "Aprenda a fazer suas próprias refeições como um verdadeiro chef.",
    categoria: "Culinária",
    slug: "gastronomia",
    destaque: true,
    link: "curso.html?curso=gastronomia"
  },
  {
    titulo: "Fotografia com Celular",
    descricao: "Dicas profissionais para tirar fotos incríveis com o celular.",
    categoria: "Criatividade",
    slug: "fotografia-celular",
    destaque: false,
    link: "curso.html?curso=fotografia-celular"
  },
  {
    titulo: "Excel para Iniciantes",
    descricao: "Domine o básico do Excel e aumente sua produtividade.",
    categoria: "Produtividade",
    slug: "excel-iniciantes",
    destaque: false,
    link: "curso.html?curso=excel-iniciantes"
  },
  {
    titulo: "Marketing Digital",
    descricao: "Comece sua carreira com fundamentos de marketing digital.",
    categoria: "Marketing",
    slug: "marketing-digital",
    destaque: false,
    link: "curso.html?curso=marketing-digital"
  }
];
// Ativar modo escuro se estiver salvo
function aplicarModoEscuroSalvo() {
    if (localStorage.getItem("modoEscuro") === "true") {
        document.body.classList.add("dark-mode");
    }
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