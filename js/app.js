// Aplicación Principal - StudyQuest

const app = {
    currentCareer: null,
    currentDifficulty: null,
    currentMode: null,
    game: null,

    /**
     * Inicializa la aplicación
     */
    init() {
        this.game = gameManager;
        this.game.init();
        this.loadCareers();
        console.log('StudyQuest iniciado correctamente');
    },

    /**
     * Carga las carreras disponibles en el menú
     */
    loadCareers() {
        const grid = document.getElementById('career-grid');
        grid.innerHTML = '';

        Object.values(window.careers || {}).forEach(career => {
            const btn = document.createElement('button');
            btn.className = 'career-btn';
            btn.innerHTML = `
                <span class="career-icon">${career.icon}</span>
                <span class="career-name">${career.name}</span>
            `;
            btn.onclick = () => this.selectCareer(career.id);
            grid.appendChild(btn);
        });
    },

    /**
     * Selecciona una carrera
     */
    selectCareer(careerId) {
        this.currentCareer = careerId;
        questionManager.loadCareer(careerId);
        this.showScreen('difficulty-screen');
    },

    /**
     * Selecciona dificultad
     */
    selectDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        questionManager.setDifficulty(difficulty);
        this.showScreen('mode-screen');
    },

    /**
     * Inicia el juego con el modo seleccionado
     */
    startGame(mode) {
        this.currentMode = mode;
        this.showScreen('game-screen');
        this.game.start(mode);
    },

    /**
     * Reinicia con el mismo modo
     */
    restartSameMode() {
        // Reset accuracy bar
        document.getElementById('accuracy-fill').style.width = '0%';
        this.startGame(this.currentMode);
    },

    /**
     * Muestra una pantalla
     */
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    },

    /**
     * Muestra modal de confirmación para salir
     */
    confirmExit() {
        document.getElementById('exit-modal').style.display = 'flex';
    },

    /**
     * Cierra modal de salida
     */
    closeExitModal() {
        document.getElementById('exit-modal').style.display = 'none';
    },

    /**
     * Sale al menú principal
     */
    exitToMenu() {
        this.closeExitModal();
        this.game.isPlaying = false;
        this.showScreen('main-menu');
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
