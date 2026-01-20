// Utilidades generales

/**
 * Normaliza texto para comparación (minúsculas, sin acentos, sin espacios extra)
 */
function normalizeText(text) {
    return text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");
}

/**
 * Calcula distancia de Levenshtein entre dos strings
 */
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[m][n];
}

/**
 * Mezcla array aleatoriamente (Fisher-Yates)
 */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Selecciona elemento aleatorio de un array
 */
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Obtiene nombre de tema por ID
 */
function getTopicName(career, topicId) {
    const careerData = window.careers[career];
    if (!careerData) return topicId;
    const topic = careerData.topics.find(t => t.id === topicId);
    return topic ? topic.name : topicId;
}
