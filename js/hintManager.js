// Gestor de Pistas

class HintManager {
    constructor() {
        this.reset();
    }

    /**
     * Resetea el estado de pistas
     */
    reset() {
        this.currentHintIndex = 0;
        this.hintsShown = [];
    }

    /**
     * Prepara pistas para una nueva pregunta
     */
    setQuestion(question) {
        this.reset();
        this.currentQuestion = question;
    }

    /**
     * Verifica si hay pistas disponibles
     */
    hasHints() {
        if (!this.currentQuestion || !this.currentQuestion.hints) {
            return false;
        }
        return this.currentHintIndex < this.currentQuestion.hints.length;
    }

    /**
     * Obtiene la siguiente pista disponible
     */
    getNextHint() {
        if (!this.hasHints()) {
            return null;
        }

        const hint = this.currentQuestion.hints[this.currentHintIndex];
        this.hintsShown.push(hint);
        this.currentHintIndex++;

        return hint;
    }

    /**
     * Obtiene todas las pistas mostradas
     */
    getShownHints() {
        return [...this.hintsShown];
    }

    /**
     * Obtiene cantidad de pistas restantes
     */
    getRemainingHints() {
        if (!this.currentQuestion || !this.currentQuestion.hints) {
            return 0;
        }
        return this.currentQuestion.hints.length - this.currentHintIndex;
    }

    /**
     * Verifica si se usó alguna pista
     */
    wasHintUsed() {
        return this.hintsShown.length > 0;
    }
}

// Instancia global
const hintManager = new HintManager();
