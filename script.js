document.addEventListener('DOMContentLoaded', () => {

const perguntas = []
    const questions = [
        {
            question: "Como você lida com desafios inesperados?",
            answers: [
                "Planejo e analiso todas as opções antes de agir.",
                "Confio no meu instinto e ajo rapidamente.",
                "Uso ferramentas e tecnologia para encontrar a melhor solução.",
                "Procuro pensar fora da caixa e encontrar soluções criativas."
            ]
        },
        {
            question: "Qual é o seu estilo de trabalho em equipe?",
            answers: [
                "Prefiro trabalhar sozinho para garantir que tudo seja feito de acordo com meus padrões.",
                "Gosto de colaborar, mas sempre que posso, tento liderar a equipe.",
                "Utilizo tecnologia para coordenar e otimizar a colaboração.",
                "Sou um incentivador da criatividade e tento fazer com que todos contribuam com ideias novas."
            ]
        },
        {
            question: "Como você reage a uma situação de crise?",
            answers: [
                "Mantenho a calma e sigo meu plano estratégico.",
                "Enfrento a situação de frente e faço o necessário para resolver o problema.",
                "Analiso a situação rapidamente usando dados e tecnologia.",
                "Busco soluções inovadoras e reúno todos para uma abordagem coletiva."
            ]
        },
        {
            question: "Qual é a sua atitude em relação ao aprendizado?",
            answers: [
                "Valorizo o aprendizado contínuo e sigo princípios estabelecidos.",
                "Aprendo melhor através da prática e da experiência direta.",
            ]
        },
        {
            question: "Qual é a sua principal motivação para ajudar os outros?",
            answers: [
                "Um forte senso de dever e responsabilidade para com os outros.",
                "O desejo de fazer a diferença de maneira imediata e pessoal.",
                "A oportunidade de usar minhas habilidades e tecnologias para fazer um impacto.",
                "A vontade de experimentar novas formas de ajudar e encontrar soluções inovadoras."
            ]
        },
        {
            question: "Como você prefere passar seu tempo livre?",
            answers: [
                "Envolvido em atividades que ajudam a desenvolver habilidades e conhecimentos.",
                "Buscando aventuras e desafios que me tiram da rotina.",
                "Explorando novas tecnologias e atualizações.",
                "Criando e experimentando novas ideias e projetos."
            ]
        }
    ];
    
    const answersMap = {
        "Planejo e analiso todas as opções antes de agir.": 'A',
        "Confio no meu instinto e ajo rapidamente.": 'B',
        "Uso ferramentas e tecnologia para encontrar a melhor solução.": 'C',
        "Procuro pensar fora da caixa e encontrar soluções criativas.": 'D',
        "Prefiro trabalhar sozinho para garantir que tudo seja feito de acordo com meus padrões.": 'A',
        "Gosto de colaborar, mas sempre que posso, tento liderar a equipe.": 'B',
        "Utilizo tecnologia para coordenar e otimizar a colaboração.": 'C',
        "Sou um incentivador da criatividade e tento fazer com que todos contribuam com ideias novas.": 'D',
        "Mantenho a calma e sigo meu plano estratégico.": 'A',
        "Enfrento a situação de frente e faço o necessário para resolver o problema.": 'B',
        "Analiso a situação rapidamente usando dados e tecnologia.": 'C',
        "Busco soluções inovadoras e reúno todos para uma abordagem coletiva.": 'D',
        "Valorizo o aprendizado contínuo e sigo princípios estabelecidos.": 'A',
        "Aprendo melhor através da prática e da experiência direta.": 'B',
        "Utilizo recursos tecnológicos e pesquisas para me manter atualizado.": 'C',
        "Gosto de explorar novos métodos e abordagens criativas.": 'D',
        "Um forte senso de dever e responsabilidade para com os outros.": 'A',
        "O desejo de fazer a diferença de maneira imediata e pessoal.": 'B',
        "A oportunidade de usar minhas habilidades e tecnologias para fazer um impacto.": 'C',
        "A vontade de experimentar novas formas de ajudar e encontrar soluções inovadoras.": 'D',
        "Envolvido em atividades que ajudam a desenvolver habilidades e conhecimentos.": 'A',
        "Buscando aventuras e desafios que me tiram da rotina.": 'B',
        "Explorando novas tecnologias e atualizações.": 'C',
        "Criando e experimentando novas ideias e projetos.": 'D'
    };
    
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const questionContainer = document.getElementById('question-container');

    let currentQuestionIndex = 0;
    const respostas = Array(perguntas.length).fill(null);

    document.getElementById('start-btn').addEventListener('click', () => {
        startScreen.classList.add('hidden');
        showQuestion();
        questionScreen.classList.remove('hidden');
    });
    function showQuestion() {
        const pergunta = perguntas[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">
                <h3>${pergunta.pergunta}</h3>
                ${pergunta.opcoes.map((opcao, i) => `
                    <label>
                        <input type="radio" name="q${currentQuestionIndex}" value="${i}" required>
                        ${opcao}
                    </label>
                `).join('')}
            </div>
        `;
        questionContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', handleAnswer);
        });
    }

    
    document.addEventListener('DOMContentLoaded', () => {
        const quizContainer = document.getElementById('quiz');
        questions.forEach((q, index) => {
            const questionElem = document.createElement('div');
            questionElem.className = 'question';
            questionElem.innerHTML = `
                <h2>${index + 1}. ${q.question}</h2>
                ${q.answers.map((answer, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${answer}">
                        ${answer}
                    </label>
                `).join('')}
            `;
            quizContainer.appendChild(questionElem);
        });
    
        document.getElementById('submit-btn').addEventListener('click', () => {
            const formData = new FormData(document.querySelector('form'));
            const selectedAnswers = [];
            questions.forEach((_, index) => {
                const selected = document.querySelector(`input[name="q${index}"]:checked`);
                selectedAnswers.push(selected ? selected.value : '');
            });
    
            const counts = { A: 0, B: 0, C: 0, D: 0 };
            selectedAnswers.forEach(answer => {
                if (answersMap[answer]) {
                    counts[answersMap[answer]]++;
                }
            });
    
            const result = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
            const resultText = {
                A: 'Você é mais parecido com o Homem-Aranha de Tobey Maguire - um herói com um forte senso de responsabilidade e compromisso com seus princípios.',
                B: 'Você é mais parecido com o Homem-Aranha de Andrew Garfield - ousado e adaptável, com uma abordagem direta e prática para enfrentar desafios.',
                C: 'Você é mais parecido com o Homem-Aranha de Tom Holland - moderno e tecnológico, aproveitando ferramentas e dados para resolver problemas de forma eficiente.',
                D: 'Você é mais parecido com o Homem-Aranha de Miles Morales - jovem e inovador, sempre procurando maneiras novas e criativas de fazer a diferença.'
            };
    
            document.getElementById('result').textContent = resultText[result];
            document.getElementById('result').classList.remove('hidden');
        });
    });