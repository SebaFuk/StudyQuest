// Banco de Preguntas - Ciencias Agrarias

window.careers = window.careers || {};

window.careers.agrarias = {
    id: "agrarias",
    name: "Ciencias Agrarias",
    icon: "🌾",
    topics: [
        { id: "botanica", name: "Botánica Agrícola" },
        { id: "suelos", name: "Ciencia del Suelo" },
        { id: "fitopatologia", name: "Fitopatología" },
        { id: "zootecnia", name: "Zootecnia" },
        { id: "agronomia", name: "Agronomía General" }
    ],
    questions: [
        // ===== BOTÁNICA - FÁCIL =====
        {
            id: "AGR-001", career: "agrarias", topic: "botanica", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es el proceso por el que las plantas producen su alimento usando luz solar?",
            options: ["Respiración", "Fotosíntesis", "Fermentación", "Transpiración"],
            correctIndex: 1,
            hints: ["Usa dióxido de carbono y agua", "Produce oxígeno como subproducto"],
            explanation: "La fotosíntesis convierte luz, CO2 y agua en glucosa y oxígeno."
        },
        {
            id: "AGR-002", career: "agrarias", topic: "botanica", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la parte de la planta que absorbe agua y nutrientes del suelo?",
            validAnswers: ["raiz", "raíz", "sistema radicular"],
            hints: ["Está bajo tierra", "Ancla la planta al suelo"],
            explanation: "La raíz absorbe agua y nutrientes minerales del suelo."
        },
        {
            id: "AGR-003", career: "agrarias", topic: "botanica", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué pigmento da color verde a las plantas?",
            options: ["Caroteno", "Clorofila", "Antocianina", "Xantofila"],
            correctIndex: 1,
            hints: ["Es esencial para la fotosíntesis", "Está en los cloroplastos"],
            explanation: "La clorofila es el pigmento verde que captura la luz para la fotosíntesis."
        },
        // ===== BOTÁNICA - INTERMEDIO =====
        {
            id: "AGR-004", career: "agrarias", topic: "botanica", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Cómo se clasifican las plantas según su ciclo de vida anual?",
            options: ["Perennes, bianuales y anuales", "Leñosas y herbáceas", "C3 y C4", "Mono y dicotiledóneas"],
            correctIndex: 0,
            hints: ["Se refiere a cuántos años viven", "Las anuales completan su ciclo en un año"],
            explanation: "Las plantas se clasifican en anuales, bianuales y perennes según su duración."
        },
        {
            id: "AGR-005", career: "agrarias", topic: "botanica", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama el tejido conductor que transporta agua desde las raíces?",
            validAnswers: ["xilema", "vasos leñosos"],
            hints: ["Va de raíz a hojas", "Transporta savia bruta"],
            explanation: "El xilema transporta agua y minerales desde las raíces hacia el resto de la planta."
        },
        // ===== BOTÁNICA - DIFÍCIL =====
        {
            id: "AGR-006", career: "agrarias", topic: "botanica", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué tipo de fotosíntesis evita la fotorrespiración en climas cálidos?",
            options: ["Fotosíntesis C3", "Fotosíntesis C4", "Fotosíntesis CAM", "C4 y CAM"],
            correctIndex: 3,
            hints: ["Son adaptaciones a climas áridos", "El maíz es C4, el cactus es CAM"],
            explanation: "Las plantas C4 y CAM tienen mecanismos para reducir la fotorrespiración."
        },

        // ===== SUELOS - FÁCIL =====
        {
            id: "AGR-007", career: "agrarias", topic: "suelos", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuáles son los tres componentes principales de la textura del suelo?",
            options: ["Agua, aire y minerales", "Arena, limo y arcilla", "Nitrógeno, fósforo y potasio", "Grava, piedra y roca"],
            correctIndex: 1,
            hints: ["Se refiere al tamaño de partículas", "Determina propiedades físicas"],
            explanation: "La textura del suelo se clasifica según las proporciones de arena, limo y arcilla."
        },
        {
            id: "AGR-008", career: "agrarias", topic: "suelos", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la escala que mide la acidez o alcalinidad del suelo?",
            validAnswers: ["ph", "escala de ph", "escala ph"],
            hints: ["Va de 0 a 14", "7 es neutro"],
            explanation: "El pH mide la acidez o alcalinidad del suelo, afectando la disponibilidad de nutrientes."
        },
        {
            id: "AGR-009", career: "agrarias", topic: "suelos", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué material orgánico descompuesto mejora la fertilidad del suelo?",
            options: ["Arena", "Humus", "Arcilla", "Grava"],
            correctIndex: 1,
            hints: ["De color oscuro", "Retiene agua y nutrientes"],
            explanation: "El humus es materia orgánica descompuesta que mejora la estructura y fertilidad."
        },
        // ===== SUELOS - INTERMEDIO =====
        {
            id: "AGR-010", career: "agrarias", topic: "suelos", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Cuáles son los tres macronutrientes primarios para las plantas?",
            options: ["Calcio, magnesio, azufre", "Nitrógeno, fósforo, potasio", "Hierro, zinc, cobre", "Boro, molibdeno, cloro"],
            correctIndex: 1,
            hints: ["NPK en los fertilizantes", "Los más requeridos en cantidad"],
            explanation: "Nitrógeno, fósforo y potasio son los macronutrientes primarios."
        },
        {
            id: "AGR-011", career: "agrarias", topic: "suelos", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina la pérdida de suelo por agua o viento?",
            validAnswers: ["erosion", "erosión"],
            hints: ["Degrada los suelos agrícolas", "Puede ser hídrica o eólica"],
            explanation: "La erosión es el proceso de pérdida de suelo superficial por agentes naturales."
        },
        // ===== SUELOS - DIFÍCIL =====
        {
            id: "AGR-012", career: "agrarias", topic: "suelos", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué propiedad indica la capacidad del suelo para retener nutrientes?",
            options: ["Conductividad eléctrica", "Capacidad de intercambio catiónico", "Porosidad", "Densidad aparente"],
            correctIndex: 1,
            hints: ["Se mide en meq/100g", "Relacionada con arcillas y materia orgánica"],
            explanation: "La CIC mide la capacidad del suelo para retener e intercambiar cationes nutrientes."
        },

        // ===== FITOPATOLOGÍA - FÁCIL =====
        {
            id: "AGR-013", career: "agrarias", topic: "fitopatologia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué organismos causan enfermedades como la roya y el mildiu?",
            options: ["Bacterias", "Virus", "Hongos", "Insectos"],
            correctIndex: 2,
            hints: ["Producen esporas", "Son microorganismos eucarióticos"],
            explanation: "Los hongos causan muchas enfermedades vegetales como royas, mildiu y tizones."
        },
        {
            id: "AGR-014", career: "agrarias", topic: "fitopatologia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llaman los productos químicos para controlar plagas?",
            validAnswers: ["pesticidas", "plaguicidas", "agroquimicos"],
            hints: ["Incluyen insecticidas, fungicidas, etc.", "Se aplican para proteger cultivos"],
            explanation: "Los pesticidas son sustancias para prevenir o controlar plagas agrícolas."
        },
        // ===== FITOPATOLOGÍA - INTERMEDIO =====
        {
            id: "AGR-015", career: "agrarias", topic: "fitopatologia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué enfermedad fúngica forma manchas anaranjadas en hojas de cereales?",
            options: ["Oidio", "Roya", "Antracnosis", "Botrytis"],
            correctIndex: 1,
            hints: ["Produce pústulas con esporas", "Afecta trigo, avena y otros cereales"],
            explanation: "La roya produce pústulas anaranjadas o marrones con esporas en hojas."
        },
        {
            id: "AGR-016", career: "agrarias", topic: "fitopatologia", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama el control de plagas usando enemigos naturales?",
            validAnswers: ["control biologico", "control biológico", "biocontrol"],
            hints: ["Usa depredadores o parásitos", "Alternativa a los químicos"],
            explanation: "El control biológico usa organismos vivos para controlar plagas."
        },
        // ===== FITOPATOLOGÍA - DIFÍCIL =====
        {
            id: "AGR-017", career: "agrarias", topic: "fitopatologia", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué estructura producen algunos hongos para resistir condiciones adversas?",
            options: ["Micelio", "Conidio", "Esclerocio", "Haustorio"],
            correctIndex: 2,
            hints: ["Estructura de resistencia compacta", "Puede sobrevivir en el suelo por años"],
            explanation: "Los esclerocios son estructuras de resistencia que permiten sobrevivir condiciones adversas."
        },

        // ===== ZOOTECNIA - FÁCIL =====
        {
            id: "AGR-018", career: "agrarias", topic: "zootecnia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cómo se llama el ganado criado principalmente para producir carne?",
            options: ["Ganado lechero", "Ganado de carne", "Ganado de trabajo", "Ganado ovino"],
            correctIndex: 1,
            hints: ["Razas como Angus, Hereford", "Se cría para faena"],
            explanation: "El ganado de carne se cría específicamente para producción cárnica."
        },
        {
            id: "AGR-019", career: "agrarias", topic: "zootecnia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el proceso de dar a luz en bovinos?",
            validAnswers: ["parto", "paricion", "parición"],
            hints: ["Nace el ternero", "Dura algunas horas"],
            explanation: "El parto o parición es el proceso de nacimiento del ternero."
        },
        {
            id: "AGR-020", career: "agrarias", topic: "zootecnia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué tipo de animal es la oveja?",
            options: ["Bovino", "Equino", "Ovino", "Porcino"],
            correctIndex: 2,
            hints: ["Produce lana", "También llamados lanares"],
            explanation: "Las ovejas pertenecen a la especie ovina."
        },
        // ===== ZOOTECNIA - INTERMEDIO =====
        {
            id: "AGR-021", career: "agrarias", topic: "zootecnia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Cuáles son los rumiantes?",
            options: ["Animales que comen carne", "Animales con estómago de cuatro compartimentos", "Animales que ponen huevos", "Animales acuáticos"],
            correctIndex: 1,
            hints: ["Vacas, ovejas, cabras", "Digieren celulosa"],
            explanation: "Los rumiantes tienen un estómago dividido en cuatro compartimentos para digerir forrajes."
        },
        {
            id: "AGR-022", career: "agrarias", topic: "zootecnia", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama la técnica reproductiva que introduce semen artificialmente?",
            validAnswers: ["inseminacion artificial", "inseminación artificial", "ia"],
            hints: ["No requiere contacto entre animales", "Mejora genética del rodeo"],
            explanation: "La inseminación artificial permite reproducción controlada y mejora genética."
        },
        // ===== ZOOTECNIA - DIFÍCIL =====
        {
            id: "AGR-023", career: "agrarias", topic: "zootecnia", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué indica el índice de conversión alimenticia?",
            options: ["Litros de leche producidos", "Kg de alimento por kg de ganancia de peso", "Porcentaje de grasa corporal", "Número de crías por año"],
            correctIndex: 1,
            hints: ["Mide eficiencia alimentaria", "Menor valor = más eficiente"],
            explanation: "El índice de conversión mide cuánto alimento se necesita para ganar un kg de peso."
        },

        // ===== AGRONOMÍA GENERAL - FÁCIL =====
        {
            id: "AGR-024", career: "agrarias", topic: "agronomia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es el sistema de siembra que alterna cultivos diferentes?",
            options: ["Monocultivo", "Rotación de cultivos", "Cultivo intensivo", "Barbecho"],
            correctIndex: 1,
            hints: ["Mejora la fertilidad del suelo", "Previene plagas y enfermedades"],
            explanation: "La rotación de cultivos alterna diferentes especies para beneficio del suelo."
        },
        {
            id: "AGR-025", career: "agrarias", topic: "agronomia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la aplicación artificial de agua a los cultivos?",
            validAnswers: ["riego", "irrigacion", "irrigación"],
            hints: ["Compensa falta de lluvia", "Puede ser por goteo, aspersión, etc."],
            explanation: "El riego es la aplicación controlada de agua para suplir necesidades hídricas."
        },
        // ===== AGRONOMÍA GENERAL - INTERMEDIO =====
        {
            id: "AGR-026", career: "agrarias", topic: "agronomia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué práctica consiste en dejar el suelo sin cultivar para recuperarlo?",
            options: ["Rotación", "Barbecho", "Siembra directa", "Laboreo"],
            correctIndex: 1,
            hints: ["El terreno descansa", "Recupera fertilidad naturalmente"],
            explanation: "El barbecho es el descanso del suelo sin cultivo para su recuperación."
        },
        {
            id: "AGR-027", career: "agrarias", topic: "agronomia", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama la siembra que no remueve el suelo?",
            validAnswers: ["siembra directa", "cero labranza", "no laboreo"],
            hints: ["Conserva la estructura del suelo", "Usa maquinaria especializada"],
            explanation: "La siembra directa implanta cultivos sin laboreo previo del suelo."
        },
        // ===== AGRONOMÍA GENERAL - DIFÍCIL =====
        {
            id: "AGR-028", career: "agrarias", topic: "agronomia", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué concepto mide el agua disponible para los cultivos considerando evaporación y transpiración?",
            options: ["Precipitación efectiva", "Evapotranspiración", "Escorrentía", "Infiltración"],
            correctIndex: 1,
            hints: ["Suma evaporación del suelo y transpiración vegetal", "Clave para cálculo de riego"],
            explanation: "La evapotranspiración combina la evaporación del suelo y la transpiración de las plantas."
        }
    ]
};
