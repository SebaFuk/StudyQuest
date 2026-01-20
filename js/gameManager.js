// Gestor Principal del Juego

class GameManager {
    constructor() {
        this.currentQuestion = null;
        this.questionNumber = 0;
        this.isPlaying = false;
        this.currentMode = null;
        this.elements = {};
    }

    /**
     * Inicializa referencias a elementos del DOM
     */
    init() {
        this.elements = {
            questionNumber: document.getElementById('question-number'),
            questionTopic: document.getElementById('question-topic'),
            questionText: document.getElementById('question-text'),
            mcOptions: document.getElementById('mc-options'),
            openAnswerContainer: document.getElementById('open-answer-container'),
            answerInput: document.getElementById('answer-input'),
            correctCount: document.getElementById('correct-count'),
            incorrectCount: document.getElementById('incorrect-count'),
            scoreDisplay: document.getElementById('score-display'),
            scoreContainer: document.getElementById('score-container'),
            errorsContainer: document.getElementById('errors-container'),
            errorsRemaining: document.getElementById('errors-remaining'),
            hintBtn: document.getElementById('hint-btn'),
            hintPenalty: document.getElementById('hint-penalty'),
            hintDisplay: document.getElementById('hint-display'),
            hintText: document.getElementById('hint-text'),
            feedbackOverlay: document.getElementById('feedback-overlay'),
            feedbackCard: document.getElementById('feedback-card'),
            feedbackIcon: document.getElementById('feedback-icon'),
            feedbackTitle: document.getElementById('feedback-title'),
            feedbackMessage: document.getElementById('feedback-message'),
            correctAnswerDisplay: document.getElementById('correct-answer-display'),
            correctAnswerText: document.getElementById('correct-answer-text')
        };

        // Configurar listeners para opciones
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleOptionClick(e));
        });

        // Enter para respuesta abierta
        this.elements.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitOpenAnswer();
        });
    }

    /**
     * Inicia una partida
     */
    start(mode) {
        this.currentMode = mode;
        this.questionNumber = 0;
        this.isPlaying = true;

        // Configurar managers
        scoreManager.setMode(mode);
        statsManager.reset();
        statsManager.startTimer();
        questionManager.reset();

        // Mostrar/ocultar elementos según modo
        this.setupUIForMode(mode);

        // Cargar primera pregunta
        this.loadNextQuestion();
    }

    /**
     * Configura UI según el modo
     */
    setupUIForMode(mode) {
        const isExam = mode.includes('exam');

        // Score solo en modos exam
        this.elements.scoreContainer.style.display = isExam ? 'flex' : 'none';
        this.elements.errorsContainer.style.display = isExam ? 'flex' : 'none';

        // Actualizar texto de penalización de pista
        if (isExam) {
            const config = scoreManager.getConfig();
            this.elements.hintPenalty.textContent = `(${config.hint} pts)`;
        } else {
            this.elements.hintPenalty.textContent = '';
        }

        // Reset contadores
        this.updateStats();
    }

    /**
     * Determina el tipo de pregunta según el modo
     */
    getQuestionType() {
        switch (this.currentMode) {
            case 'multiple_choice':
            case 'multiple_choice_exam':
                return 'multiple_choice';
            case 'open_answer':
            case 'open_answer_exam':
                return 'open_answer';
            case 'mix':
                return Math.random() > 0.5 ? 'multiple_choice' : 'open_answer';
            default:
                return 'multiple_choice';
        }
    }

    /**
     * Carga la siguiente pregunta
     */
    loadNextQuestion() {
        this.questionNumber++;
        const type = this.getQuestionType();
        this.currentQuestion = questionManager.getRandomQuestion(type);

        if (!this.currentQuestion) {
            console.error('No hay preguntas disponibles');
            return;
        }

        // Preparar pistas
        hintManager.setQuestion(this.currentQuestion);

        // Actualizar UI
        this.renderQuestion();
        this.resetQuestionUI();
    }

    /**
     * Renderiza la pregunta actual
     */
    renderQuestion() {
        const q = this.currentQuestion;

        this.elements.questionNumber.textContent = `Pregunta ${this.questionNumber}`;
        this.elements.questionTopic.textContent = getTopicName(questionManager.currentCareer, q.topic);
        this.elements.questionText.textContent = q.question;

        // Mostrar interfaz según tipo
        if (q.type === 'multiple_choice') {
            this.elements.mcOptions.style.display = 'flex';
            this.elements.openAnswerContainer.style.display = 'none';

            const optionBtns = document.querySelectorAll('.option-btn');
            const shuffledOptions = shuffleArray(q.options.map((opt, i) => ({ text: opt, originalIndex: i })));

            shuffledOptions.forEach((opt, i) => {
                optionBtns[i].textContent = opt.text;
                optionBtns[i].dataset.originalIndex = opt.originalIndex;
                optionBtns[i].disabled = false;
                optionBtns[i].className = 'option-btn';
            });
        } else {
            this.elements.mcOptions.style.display = 'none';
            this.elements.openAnswerContainer.style.display = 'flex';
            this.elements.answerInput.value = '';
            this.elements.answerInput.focus();
        }
    }

    /**
     * Resetea UI de pregunta
     */
    resetQuestionUI() {
        this.elements.hintDisplay.style.display = 'none';
        this.elements.hintText.textContent = '';
        this.elements.hintBtn.disabled = !hintManager.hasHints();
    }

    /**
     * Maneja click en opción de multiple choice
     */
    handleOptionClick(e) {
        if (!this.isPlaying) return;

        const btn = e.target;
        const selectedIndex = parseInt(btn.dataset.originalIndex);
        const isCorrect = questionManager.validateMultipleChoice(this.currentQuestion, selectedIndex);

        // Deshabilitar todas las opciones
        document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

        // Mostrar correcta/incorrecta
        if (isCorrect) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
            // Mostrar cuál era la correcta
            document.querySelectorAll('.option-btn').forEach(b => {
                if (parseInt(b.dataset.originalIndex) === this.currentQuestion.correctIndex) {
                    b.classList.add('correct');
                }
            });
        }

        this.processAnswer(isCorrect);
    }

    /**
     * Envía respuesta abierta
     */
    submitOpenAnswer() {
        if (!this.isPlaying) return;

        const userAnswer = this.elements.answerInput.value;
        if (!userAnswer.trim()) return;

        const isCorrect = questionManager.validateOpenAnswer(this.currentQuestion, userAnswer);
        this.processAnswer(isCorrect);
    }

    /**
     * Procesa resultado de respuesta
     */
    processAnswer(isCorrect) {
        // Registrar estadísticas
        statsManager.recordQuestion(this.currentQuestion.topic, isCorrect);

        if (isCorrect) {
            scoreManager.addCorrect();
            this.showFeedback(true);
        } else {
            scoreManager.addIncorrect();
            this.showFeedback(false, questionManager.getCorrectAnswer(this.currentQuestion));
        }

        this.updateStats();

        // Verificar game over en modos exam
        if (scoreManager.isGameOver()) {
            setTimeout(() => this.endGame(), 1500);
        }
    }

    /**
     * Muestra feedback de respuesta
     */
    showFeedback(isCorrect, correctAnswer = null) {
        const card = this.elements.feedbackCard;
        card.className = 'feedback-card glass-card ' + (isCorrect ? 'correct' : 'incorrect');

        this.elements.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
        this.elements.feedbackTitle.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
        this.elements.feedbackMessage.textContent = isCorrect
            ? '¡Excelente! Sigue así.'
            : this.currentQuestion.explanation || 'No te preocupes, sigue intentando.';

        if (!isCorrect && correctAnswer) {
            this.elements.correctAnswerDisplay.style.display = 'block';
            this.elements.correctAnswerText.textContent = correctAnswer;
        } else {
            this.elements.correctAnswerDisplay.style.display = 'none';
        }

        this.elements.feedbackOverlay.classList.add('show');
    }

    /**
     * Pasa a la siguiente pregunta
     */
    nextQuestion() {
        this.elements.feedbackOverlay.classList.remove('show');

        if (!scoreManager.isGameOver()) {
            this.loadNextQuestion();
        } else {
            this.endGame();
        }
    }

    /**
     * Solicita una pista
     */
    requestHint() {
        if (!hintManager.hasHints()) return;

        const hint = hintManager.getNextHint();
        if (hint) {
            // Aplicar penalización si es modo exam
            if (this.currentMode.includes('exam')) {
                scoreManager.applyHintPenalty();
                this.updateStats();
            }

            this.elements.hintText.textContent = hint;
            this.elements.hintDisplay.style.display = 'block';

            if (!hintManager.hasHints()) {
                this.elements.hintBtn.disabled = true;
            }
        }
    }

    /**
     * Actualiza estadísticas en pantalla
     */
    updateStats() {
        const stats = scoreManager.getStats();
        this.elements.correctCount.textContent = stats.correct;
        this.elements.incorrectCount.textContent = stats.incorrect;
        this.elements.scoreDisplay.textContent = stats.score;
        this.elements.errorsRemaining.textContent = scoreManager.getErrorsRemaining();
    }

    /**
     * Termina la partida
     */
    endGame() {
        this.isPlaying = false;
        statsManager.stopTimer();

        // Ocultar feedback si está visible
        this.elements.feedbackOverlay.classList.remove('show');

        // Mostrar resultados
        this.showResults();
    }

    /**
     * Muestra pantalla de resultados
     */
    showResults() {
        const stats = scoreManager.getStats();

        document.getElementById('result-total').textContent = stats.total;
        document.getElementById('result-correct').textContent = stats.correct;
        document.getElementById('result-incorrect').textContent = stats.incorrect;

        // Score section
        const scoreSection = document.getElementById('result-score-section');
        if (stats.hasScoring) {
            scoreSection.style.display = 'block';
            document.getElementById('result-score').textContent = stats.score;
        } else {
            scoreSection.style.display = 'none';
        }

        // Accuracy bar
        setTimeout(() => {
            document.getElementById('accuracy-fill').style.width = stats.accuracy + '%';
        }, 100);
        document.getElementById('accuracy-value').textContent = stats.accuracy + '%';

        // Hints
        const hintsSection = document.getElementById('hints-section');
        if (stats.hintsUsed > 0) {
            hintsSection.style.display = 'block';
            document.getElementById('hints-used-count').textContent = stats.hintsUsed;
            if (stats.hintPenalty > 0) {
                document.getElementById('hints-penalty-text').textContent = ` (-${stats.hintPenalty} pts)`;
            }
        } else {
            hintsSection.style.display = 'none';
        }

        // Icon según desempeño
        const icon = document.getElementById('results-icon');
        const title = document.getElementById('results-title');
        if (stats.accuracy >= 80) {
            icon.textContent = '🏆';
            title.textContent = '¡Excelente!';
        } else if (stats.accuracy >= 60) {
            icon.textContent = '⭐';
            title.textContent = '¡Buen trabajo!';
        } else if (stats.accuracy >= 40) {
            icon.textContent = '💪';
            title.textContent = 'Sigue practicando';
        } else {
            icon.textContent = '📚';
            title.textContent = 'A estudiar más';
        }

        app.showScreen('results-screen');
    }
}

// Instancia global
const gameManager = new GameManager();
