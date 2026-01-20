// Banco de Preguntas - Economía

window.careers = window.careers || {};

window.careers.economia = {
    id: "economia",
    name: "Economía",
    icon: "📊",
    topics: [
        { id: "microeconomia", name: "Microeconomía" },
        { id: "macroeconomia", name: "Macroeconomía" },
        { id: "finanzas", name: "Finanzas" },
        { id: "comercio", name: "Comercio Internacional" },
        { id: "politica_eco", name: "Política Económica" }
    ],
    questions: [
        // ===== MICROECONOMÍA - FÁCIL =====
        {
            id: "ECO-001", career: "economia", topic: "microeconomia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué representa la ley de oferta y demanda?",
            options: ["El precio lo fija solo el gobierno", "La relación entre precio, cantidad demandada y cantidad ofrecida", "Solo la cantidad producida", "El costo de producción"],
            correctIndex: 1,
            hints: ["Es un principio fundamental del mercado", "Determina el precio de equilibrio"],
            explanation: "La ley de oferta y demanda explica cómo el precio y las cantidades se ajustan en un mercado."
        },
        {
            id: "ECO-002", career: "economia", topic: "microeconomia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el punto donde la oferta es igual a la demanda?",
            validAnswers: ["equilibrio", "punto de equilibrio", "equilibrio de mercado"],
            hints: ["No hay exceso ni escasez", "El precio no tiende a cambiar"],
            explanation: "El equilibrio de mercado ocurre cuando la cantidad demandada iguala la cantidad ofrecida."
        },
        {
            id: "ECO-003", career: "economia", topic: "microeconomia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué sucede con la demanda de un bien normal cuando aumenta el ingreso?",
            options: ["Disminuye", "Permanece igual", "Aumenta", "Se vuelve cero"],
            correctIndex: 2,
            hints: ["Los bienes normales son lo opuesto a bienes inferiores", "Mayor poder adquisitivo"],
            explanation: "En bienes normales, un aumento del ingreso incrementa la demanda."
        },
        // ===== MICROECONOMÍA - INTERMEDIO =====
        {
            id: "ECO-004", career: "economia", topic: "microeconomia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué estructura de mercado tiene un único vendedor?",
            options: ["Competencia perfecta", "Oligopolio", "Monopolio", "Competencia monopolística"],
            correctIndex: 2,
            hints: ["Un solo oferente controla el mercado", "Puede fijar precios"],
            explanation: "El monopolio es una estructura donde un único vendedor controla todo el mercado."
        },
        {
            id: "ECO-005", career: "economia", topic: "microeconomia", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina el costo de producir una unidad adicional?",
            validAnswers: ["costo marginal", "coste marginal"],
            hints: ["Es el incremento en el costo total", "Clave para decisiones de producción"],
            explanation: "El costo marginal es el costo adicional de producir una unidad más."
        },
        // ===== MICROECONOMÍA - DIFÍCIL =====
        {
            id: "ECO-006", career: "economia", topic: "microeconomia", difficulty: "hard",
            type: "multiple_choice",
            question: "¿En qué punto maximiza beneficios una empresa en competencia perfecta?",
            options: ["Donde ingreso total es máximo", "Donde CMg = IMg", "Donde precio es mínimo", "Donde producción es máxima"],
            correctIndex: 1,
            hints: ["IMg = CMg", "Es la regla de maximización"],
            explanation: "La maximización de beneficios ocurre donde el ingreso marginal iguala al costo marginal."
        },

        // ===== MACROECONOMÍA - FÁCIL =====
        {
            id: "ECO-007", career: "economia", topic: "macroeconomia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es el PIB?",
            options: ["El precio de bienes importados", "El valor total de bienes y servicios producidos en un país", "La deuda del gobierno", "El ingreso de empresas extranjeras"],
            correctIndex: 1,
            hints: ["Es un indicador de producción nacional", "Producto Interno Bruto"],
            explanation: "El PIB es el valor de todos los bienes y servicios finales producidos en un país."
        },
        {
            id: "ECO-008", career: "economia", topic: "macroeconomia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el aumento generalizado de los precios?",
            validAnswers: ["inflacion", "inflación"],
            hints: ["Reduce el poder adquisitivo", "Se mide con índices de precios"],
            explanation: "La inflación es el incremento generalizado y sostenido del nivel de precios."
        },
        {
            id: "ECO-009", career: "economia", topic: "macroeconomia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué institución controla la política monetaria?",
            options: ["El Congreso", "El Banco Central", "El Ministerio de Hacienda", "Las empresas privadas"],
            correctIndex: 1,
            hints: ["Emite dinero", "Fija tasas de interés de referencia"],
            explanation: "El Banco Central es responsable de la política monetaria."
        },
        // ===== MACROECONOMÍA - INTERMEDIO =====
        {
            id: "ECO-010", career: "economia", topic: "macroeconomia", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina la situación con alta inflación y estancamiento?",
            validAnswers: ["estanflacion", "estanflación", "stagflation"],
            hints: ["Combina estancamiento e inflación", "Difícil de combatir"],
            explanation: "La estanflación combina inflación alta con bajo crecimiento y alto desempleo."
        },
        // ===== MACROECONOMÍA - DIFÍCIL =====
        {
            id: "ECO-011", career: "economia", topic: "macroeconomia", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué afirma la curva de Phillips original?",
            options: ["Relación positiva entre inflación y desempleo", "Relación inversa entre inflación y desempleo", "El desempleo no afecta la inflación", "La inflación siempre es constante"],
            correctIndex: 1,
            hints: ["A menor desempleo, mayor inflación", "Trade-off de corto plazo"],
            explanation: "La curva de Phillips sugiere relación inversa entre inflación y desempleo en el corto plazo."
        },

        // ===== FINANZAS - FÁCIL =====
        {
            id: "ECO-012", career: "economia", topic: "finanzas", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es una tasa de interés?",
            options: ["Un impuesto sobre ventas", "El costo del dinero en el tiempo", "El precio de exportación", "La ganancia neta"],
            correctIndex: 1,
            hints: ["Se paga por pedir prestado", "Se recibe por ahorrar"],
            explanation: "La tasa de interés representa el costo de usar dinero durante un período."
        },
        {
            id: "ECO-013", career: "economia", topic: "finanzas", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama un título de deuda emitido por empresas o gobiernos?",
            validAnswers: ["bono", "bonos"],
            hints: ["El emisor paga intereses", "Es una forma de financiamiento"],
            explanation: "Un bono es un instrumento de deuda con compromiso de pago de intereses."
        },
        // ===== FINANZAS - INTERMEDIO =====
        {
            id: "ECO-014", career: "economia", topic: "finanzas", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué mide el VAN (Valor Actual Neto)?",
            options: ["El ingreso mensual", "La diferencia entre valor presente de flujos e inversión inicial", "El costo fijo", "La tasa de interés"],
            correctIndex: 1,
            hints: ["Descuenta flujos de caja futuros", "Si es positivo, el proyecto es viable"],
            explanation: "El VAN calcula el valor presente de flujos futuros menos la inversión inicial."
        },
        // ===== FINANZAS - DIFÍCIL =====
        {
            id: "ECO-015", career: "economia", topic: "finanzas", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina la tasa que hace que el VAN sea igual a cero?",
            validAnswers: ["tir", "tasa interna de retorno", "irr"],
            hints: ["Es un criterio de decisión de inversión", "Se compara con el costo de capital"],
            explanation: "La TIR es la tasa que iguala el valor presente de los flujos con la inversión inicial."
        },

        // ===== COMERCIO INTERNACIONAL - FÁCIL =====
        {
            id: "ECO-016", career: "economia", topic: "comercio", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es un arancel?",
            options: ["Un subsidio a exportaciones", "Un impuesto sobre importaciones", "Una cuota de producción", "Un tipo de cambio"],
            correctIndex: 1,
            hints: ["Encarece productos importados", "Es una barrera comercial"],
            explanation: "Un arancel es un impuesto que se aplica a los bienes importados."
        },
        {
            id: "ECO-017", career: "economia", topic: "comercio", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la diferencia entre exportaciones e importaciones?",
            validAnswers: ["balanza comercial", "saldo comercial"],
            hints: ["Puede ser positiva o negativa", "Es parte de la balanza de pagos"],
            explanation: "La balanza comercial es la diferencia entre exportaciones e importaciones."
        },
        // ===== COMERCIO INTERNACIONAL - INTERMEDIO =====
        {
            id: "ECO-018", career: "economia", topic: "comercio", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué teoría sostiene que los países deben especializarse según su menor costo relativo?",
            options: ["Ventaja absoluta", "Ventaja comparativa", "Proteccionismo", "Mercantilismo"],
            correctIndex: 1,
            hints: ["Desarrollada por David Ricardo", "Compara costos de oportunidad"],
            explanation: "La ventaja comparativa indica especialización según menor costo de oportunidad."
        },
        // ===== COMERCIO INTERNACIONAL - DIFÍCIL =====
        {
            id: "ECO-019", career: "economia", topic: "comercio", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina la restricción cuantitativa sobre importaciones?",
            validAnswers: ["cuota", "cuota de importacion", "contingente"],
            hints: ["Es una restricción cuantitativa", "Diferente al arancel"],
            explanation: "Una cuota limita la cantidad máxima de un producto que puede importarse."
        },

        // ===== POLÍTICA ECONÓMICA - FÁCIL =====
        {
            id: "ECO-020", career: "economia", topic: "politica_eco", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué tipo de política utiliza impuestos y gasto público?",
            options: ["Política monetaria", "Política fiscal", "Política comercial", "Política cambiaria"],
            correctIndex: 1,
            hints: ["La maneja el gobierno", "Impuestos + gasto gubernamental"],
            explanation: "La política fiscal utiliza impuestos y gasto público."
        },
        {
            id: "ECO-021", career: "economia", topic: "politica_eco", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la política que controla la cantidad de dinero?",
            validAnswers: ["politica monetaria", "política monetaria"],
            hints: ["La ejecuta el Banco Central", "Afecta tasas de interés"],
            explanation: "La política monetaria controla la oferta de dinero y las tasas de interés."
        },
        // ===== POLÍTICA ECONÓMICA - INTERMEDIO =====
        {
            id: "ECO-022", career: "economia", topic: "politica_eco", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué efecto tiene una política monetaria expansiva?",
            options: ["Aumenta tasas de interés", "Reduce la oferta monetaria", "Baja tasas de interés y aumenta crédito", "Aumenta los impuestos"],
            correctIndex: 2,
            hints: ["Estimula la economía", "Más dinero en circulación"],
            explanation: "La política monetaria expansiva reduce tasas y aumenta la liquidez."
        },
        // ===== POLÍTICA ECONÓMICA - DIFÍCIL =====
        {
            id: "ECO-023", career: "economia", topic: "politica_eco", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina el efecto del gasto público sobre la inversión privada?",
            validAnswers: ["efecto desplazamiento", "crowding out", "efecto expulsion"],
            hints: ["El gobierno desplaza inversión privada", "Por aumento de tasas"],
            explanation: "El crowding out ocurre cuando el gasto público eleva tasas y reduce inversión privada."
        }
    ]
};
