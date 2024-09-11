document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Como você lida com desafios inesperados?",
            answers: [
                { text: "Planejo e analiso todas as opções antes de agir.", type: 'Tobey Maguire' },
                { text: "Confio no meu instinto e ajo rapidamente.", type: 'Andrew Garfield' },
                { text: "Uso ferramentas e tecnologia para encontrar a melhor solução.", type: 'Tom Holland' },
                { text: "Procuro pensar fora da caixa e encontrar soluções criativas.", type: 'Miles Morales' }
            ]
        },
        {
            question: "Qual é o seu estilo de trabalho em equipe?",
            answers: [
                { text: "Prefiro trabalhar sozinho para garantir que tudo seja feito de acordo com meus padrões.", type: 'Tobey Maguire' },
                { text: "Gosto de colaborar, mas sempre que posso, tento liderar a equipe.", type: 'Andrew Garfield' },
                { text: "Utilizo tecnologia para coordenar e otimizar a colaboração.", type: 'Tom Holland' },
                { text: "Sou um incentivador da criatividade e tento fazer com que todos contribuam com ideias novas.", type: 'Miles Morales' }
            ]
        },
        {
            question: "Como você reage a uma situação de crise?",
            answers: [
                { text: "Mantenho a calma e sigo meu plano estratégico.", type: 'Tobey Maguire' },
                { text: "Enfrento a situação de frente e faço o necessário para resolver o problema.", type: 'Andrew Garfield' },
                { text: "Analiso a situação rapidamente usando dados e tecnologia.", type: 'Tom Holland' },
                { text: "Busco soluções inovadoras e reúno todos para uma abordagem coletiva.", type: 'Miles Morales' }
            ]
        },
        {
            question: "Qual é a sua atitude em relação ao aprendizado?",
            answers: [
                { text: "Valorizo o aprendizado contínuo e sigo princípios estabelecidos.", type: 'Tobey Maguire' },
                { text: "Aprendo melhor através da prática e da experiência direta.", type: 'Andrew Garfield' },
                { text: "Utilizo recursos tecnológicos e pesquisas para me manter atualizado.", type: 'Tom Holland' },
                { text: "Gosto de explorar novos métodos e abordagens criativas.", type: 'Miles Morales' }
            ]
        },
        {
            question: "Qual é a sua principal motivação para ajudar os outros?",
            answers: [
                { text: "Um forte senso de dever e responsabilidade para com os outros.", type: 'Tobey Maguire' },
                { text: "O desejo de fazer a diferença de maneira imediata e pessoal.", type: 'Andrew Garfield' },
                { text: "A oportunidade de usar minhas habilidades e tecnologias para fazer um impacto.", type: 'Tom Holland' },
                { text: "A vontade de experimentar novas formas de ajudar e encontrar soluções inovadoras.", type: 'Miles Morales' }
            ]
        },
        {
            question: "Como você prefere passar seu tempo livre?",
            answers: [
                { text: "Envolvido em atividades que ajudam a desenvolver habilidades e conhecimentos.", type: 'Tobey Maguire' },
                { text: "Buscando aventuras e desafios que me tiram da rotina.", type: 'Andrew Garfield' },
                { text: "Explorando novas tecnologias e atualizações.", type: 'Tom Holland' },
                { text: "Criando e experimentando novas ideias e projetos.", type: 'Miles Morales' }
            ]
        }
    ];

    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const questionContainer = document.getElementById('question-container');

    let currentQuestionIndex = 0;
    const scores = { 'Tobey Maguire': 0, 'Andrew Garfield': 0, 'Tom Holland': 0, 'Miles Morales': 0 };

    document.getElementById('start-btn').addEventListener('click', () => {
        startScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        showQuestion();
    });

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                ${question.answers.map((answer, index) => `
                    <label>
                        <input type="radio" name="q${currentQuestionIndex}" value="${answer.type}" required>
                        ${answer.text}
                    </label>
                `).join('')}
            </div>
        `;
    }

    document.getElementById('submit-btn').addEventListener('click', () => {
        const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
        if (!selectedAnswer) {
            alert('Por favor, selecione uma resposta antes de prosseguir.');
            return;
        }

        scores[selectedAnswer.value]++;
        
        // Avançar para a próxima pergunta ou mostrar o resultado
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

        const resultText = {
            'Tobey Maguire': 'Você é mais parecido com o Homem-Aranha de Tobey Maguire - um herói com um forte senso de responsabilidade e compromisso com seus princípios.',
            'Andrew Garfield': 'Você é mais parecido com o Homem-Aranha de Andrew Garfield - ousado e adaptável, com uma abordagem direta e prática para enfrentar desafios.',
            'Tom Holland': 'Você é mais parecido com o Homem-Aranha de Tom Holland - moderno e tecnológico, aproveitando ferramentas e dados para resolver problemas de forma eficiente.',
            'Miles Morales': 'Você é mais parecido com o Homem-Aranha de Miles Morales - jovem e inovador, sempre procurando maneiras novas e criativas de fazer a diferença.'
        };

        document.getElementById('result').textContent = resultText[result];
        resultScreen.classList.remove('hidden');
        questionScreen.classList.add('hidden');
    }

    document.getElementById('restart-btn').addEventListener('click', () => {
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        currentQuestionIndex = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);
    });

});                                                                    