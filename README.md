# 🔋 Calculadora de Autonomia de Baterias (Lítio & Estacionárias)

Uma aplicação web moderna, rápida e responsiva projetada para estimar o tempo de funcionamento (autonomia) de sistemas de energia baseados em baterias de **Lítio** e baterias **Estacionárias** (bancos de 48V).

Ideal para projetistas de energia solar, técnicos de telecomunicações, entusiastas de sistemas de segurança (nobreaks) e robótica que necessitam dimensionar a capacidade e o tempo de descarga teóricos de seus arranjos de energia.

---

## 🚀 Funcionalidades

- **Interface SPA (Single Page Application):** Navegação instantânea e fluida entre as telas de cálculo sem recarregamento de página.
- **Cálculo Avançado para Lítio:** Estima o tempo de autonomia aplicando uma margem de segurança padrão de **85% da capacidade útil nominal**.
- **Cálculo Avançado para Estacionárias:** Configurado especificamente para arranjos de 48V compostos por monoblocos de 12V (strings de 63Ah) e cálculo automático do DoD (Profundidade de Descarga) em **80%**, somando dinamicamente múltiplos consumos de fontes externas.
- **Design Premium & Responsivo:** Visual moderno baseado no modo escuro com gradientes neon, micro-interações, efeitos tridimensionais ao passar o mouse e animações de surgimento de conteúdo.
- **Conversão Inteligente de Tempo:** Transforma frações decimais em um formato amigável de ler (ex: `11 horas e 12 minutos`), tratando automaticamente limites matemáticos de arredondamento.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido do zero utilizando práticas modernas e sem dependências externas pesadas (Pure Vanilla Front-End):

- **HTML5:** Estruturação semântica e acessível.
- **CSS3:** Estilização baseada em variáveis nativas (`:root`), layouts modernos com CSS Grid e Flexbox, além de efeitos visuais e animações baseadas em `@keyframes`.
- **JavaScript (ES6):** Manipulação dinâmica do DOM, controle de rotas SPA nativo e algoritmos precisos para as equações matemáticas de autonomia.

---

## 📁 Como Executar o Projeto Localmente

1. **Baixe ou clone** este repositório para a sua máquina.
2. Certifique-se de manter a estrutura de arquivos integrada na mesma pasta:
   ```text
   ├── assets/
   │   └── favicon.png       # Ícone de bateria usado na aba do navegador
   ├── index.html            # Estrutura principal e telas da SPA
   ├── style.css             # Cores, gradientes e animações do projeto
   ├── script.js             # Lógica e processamento dos cálculos
   └── README.md             # Documentação do projeto
