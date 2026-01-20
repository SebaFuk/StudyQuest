// Gestor de Puntuación

class ScoreManager {
    constructor() {
        this.reset();

        // Configuración de puntos por modo
        this.pointsConfig = {
            multiple_choice: { correct: 0, incorrect: 0, hint: 0 },
            multiple_choice_exam: { correct: 10, incorrect: -5, hint: -3 },
            open_answer: { correct: 0, incorrect: 0, hint: 0 },
            open_answer_exam: { correct: 15, incorrect: -7, hint: -5 },
            mix: { correct: 0, incorrect: 0, hint: 0 }
        };
    }

    /**
     * Resetea todas las estadísticas
     */
    reset() {
        this.score = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.total = 0;
        this.hintsUsed = 0;
        this.hintPenalty = 0;
        this.currentMode = null;
    }

    /**
     * Establece el modo de juego actual
     */
    setMode(mode) {
        this.currentMode = mode;
        this.reset();
    }

    /**
     * Verifica si el modo tiene sistema de puntos
     */
    hasScoring() {
        return this.currentMode &&
            (this.currentMode.includes('exam'));
    }

    /**
     * Obtiene configuración de puntos actual
     */
    getConfig() {
        return this.pointsConfig[this.currentMode] || this.pointsConfig.multiple_choice;
    }

    /**
     * Registra respuesta correcta
     */
    addCorrect() {
        this.correct++;
        this.total++;
        const config = this.getConfig();
        this.score += config.correct;
        return config.correct;
    }

    /**
     * Registra respuesta incorrecta
     */
    addIncorrect() {
        this.incorrect++;
        this.total++;
        const config = this.getConfig();
        this.score += config.incorrect;
        return config.incorrect;
    }

    /**
     * Aplica penalización por pista
     */
    applyHintPenalty() {
        this.hintsUsed++;
        const config = this.getConfig();
        const penalty = config.hint;
        this.score += penalty;
        this.hintPenalty += Math.abs(penalty);
        return penalty;
    }

    /**
     * Obtiene cantidad de errores restantes (para modos exam)
     */
    getErrorsRemaining() {
        return Math.max(0, 5 - this.incorrect);
    }

    /**
     * Verifica si el juego debe terminar (5 errores)
     */
    isGameOver() {
        if (!this.currentMode || !this.currentMode.includes('exam')) {
            return false;
        }
        return this.incorrect >= 5;
    }

    /**
     * Calcula precisión (porcentaje de aciertos)
     */
    getAccuracy() {
        if (this.total === 0) return 0;
        return Math.round((this.correct / this.total) * 100);
    }

    /**
     * Obtiene resumen de estadísticas
     */
    getStats() {
        return {
            score: this.score,
            correct: this.correct,
            incorrect: this.incorrect,
            total: this.total,
            hintsUsed: this.hintsUsed,
            hintPenalty: this.hintPenalty,
            accuracy: this.getAccuracy(),
            hasScoring: this.hasScoring()
        };
    }
}

// Instancia global
const scoreManager = new ScoreManager();
