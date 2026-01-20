// Gestor de Estadísticas

class StatsManager {
    constructor() {
        this.reset();
    }

    /**
     * Resetea estadísticas
     */
    reset() {
        this.startTime = null;
        this.endTime = null;
        this.questionsByTopic = {};
    }

    /**
     * Inicia el temporizador
     */
    startTimer() {
        this.startTime = Date.now();
    }

    /**
     * Detiene el temporizador
     */
    stopTimer() {
        this.endTime = Date.now();
    }

    /**
     * Obtiene tiempo transcurrido en segundos
     */
    getElapsedTime() {
        if (!this.startTime) return 0;
        const end = this.endTime || Date.now();
        return Math.floor((end - this.startTime) / 1000);
    }

    /**
     * Formatea tiempo en MM:SS
     */
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    /**
     * Registra pregunta respondida por tema
     */
    recordQuestion(topic, correct) {
        if (!this.questionsByTopic[topic]) {
            this.questionsByTopic[topic] = { correct: 0, incorrect: 0 };
        }
        if (correct) {
            this.questionsByTopic[topic].correct++;
        } else {
            this.questionsByTopic[topic].incorrect++;
        }
    }

    /**
     * Obtiene resumen por temas
     */
    getTopicSummary() {
        return { ...this.questionsByTopic };
    }
}

// Instancia global
const statsManager = new StatsManager();
