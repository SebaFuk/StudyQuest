// Gestor de Preguntas

class QuestionManager {
    constructor() {
        this.questions = [];
        this.usedQuestionIds = new Set();
        this.currentCareer = null;
        this.currentDifficulty = null;
    }

    /**
     * Carga preguntas de una carrera
     */
    loadCareer(careerId) {
        this.currentCareer = careerId;
        const careerData = window.careers[careerId];
        if (careerData && careerData.questions) {
            this.questions = [...careerData.questions];
        } else {
            this.questions = [];
        }
        this.usedQuestionIds.clear();
    }

    /**
     * Establece la dificultad actual
     */
    setDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
    }

    /**
     * Obtiene preguntas filtradas por dificultad con pesos
     */
    getFilteredQuestions(type = null) {
        let filtered = [...this.questions];

        // Filtrar por tipo si se especifica
        if (type) {
            filtered = filtered.filter(q => q.type === type);
        }

        // Filtrar por dificultad con pesos
        const weights = {
            easy: { easy: 1.0, medium: 0.0, hard: 0.0 },
            medium: { easy: 0.4, medium: 0.6, hard: 0.0 },
            hard: { easy: 0.2, medium: 0.3, hard: 0.5 }
        };

        const currentWeights = weights[this.currentDifficulty] || weights.easy;

        // Agrupar por dificultad
        const pools = {
            easy: filtered.filter(q => q.difficulty === 'easy'),
            medium: filtered.filter(q => q.difficulty === 'medium'),
            hard: filtered.filter(q => q.difficulty === 'hard')
        };

        // Crear pool ponderado
        let weightedPool = [];
        Object.keys(currentWeights).forEach(diff => {
            if (currentWeights[diff] > 0) {
                const count = Math.ceil(pools[diff].length * currentWeights[diff]);
                weightedPool = weightedPool.concat(pools[diff].slice(0, count || pools[diff].length));
            }
        });

        return weightedPool.length > 0 ? weightedPool : filtered;
    }

    /**
     * Obtiene una pregunta aleatoria no usada
     */
    getRandomQuestion(type = null) {
        const available = this.getFilteredQuestions(type)
            .filter(q => !this.usedQuestionIds.has(q.id));

        if (available.length === 0) {
            // Reset si se acabaron las preguntas
            this.usedQuestionIds.clear();
            return this.getRandomQuestion(type);
        }

        const question = randomElement(available);
        this.usedQuestionIds.add(question.id);
        return question;
    }

    /**
     * Valida respuesta de multiple choice
     */
    validateMultipleChoice(question, selectedIndex) {
        return selectedIndex === question.correctIndex;
    }

    /**
     * Valida respuesta abierta con tolerancia
     */
    validateOpenAnswer(question, userAnswer) {
        const normalized = normalizeText(userAnswer);

        if (!normalized) return false;

        return question.validAnswers.some(valid => {
            const normalizedValid = normalizeText(valid);
            // Coincidencia exacta
            if (normalized === normalizedValid) return true;
            // Tolerancia a typos (máximo 2 caracteres de diferencia)
            if (levenshteinDistance(normalized, normalizedValid) <= 2) return true;
            // Contiene la respuesta
            if (normalized.includes(normalizedValid) || normalizedValid.includes(normalized)) return true;
            return false;
        });
    }

    /**
     * Obtiene la respuesta correcta formateada
     */
    getCorrectAnswer(question) {
        if (question.type === 'multiple_choice') {
            return question.options[question.correctIndex];
        } else {
            return question.validAnswers[0];
        }
    }

    /**
     * Resetea las preguntas usadas
     */
    reset() {
        this.usedQuestionIds.clear();
    }
}

// Instancia global
const questionManager = new QuestionManager();
