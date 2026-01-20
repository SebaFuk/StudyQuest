// Banco de Preguntas - Abogacía

window.careers = window.careers || {};

window.careers.abogacia = {
    id: "abogacia",
    name: "Abogacía",
    icon: "⚖️",
    topics: [
        { id: "derecho_civil", name: "Derecho Civil" },
        { id: "derecho_penal", name: "Derecho Penal" },
        { id: "derecho_const", name: "Derecho Constitucional" },
        { id: "derecho_laboral", name: "Derecho Laboral" },
        { id: "derecho_comercial", name: "Derecho Comercial" }
    ],
    questions: [
        // ===== DERECHO CIVIL - FÁCIL =====
        {
            id: "ABG-001", career: "abogacia", topic: "derecho_civil", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es un contrato?",
            options: ["Una ley del Estado", "Un acuerdo de voluntades que crea obligaciones", "Una sentencia judicial", "Un decreto del poder ejecutivo"],
            correctIndex: 1,
            hints: ["Es un acuerdo entre partes", "Genera derechos y obligaciones"],
            explanation: "El contrato es un acuerdo de voluntades que crea, modifica o extingue obligaciones."
        },
        {
            id: "ABG-002", career: "abogacia", topic: "derecho_civil", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el derecho real que permite usar y disponer de una cosa?",
            validAnswers: ["propiedad", "dominio", "derecho de propiedad"],
            hints: ["Es el derecho real más completo", "Incluye usar, gozar y disponer"],
            explanation: "La propiedad o dominio es el derecho real que otorga las mayores facultades sobre una cosa."
        },
        {
            id: "ABG-003", career: "abogacia", topic: "derecho_civil", difficulty: "easy",
            type: "multiple_choice",
            question: "¿A qué edad se adquiere la mayoría de edad en la mayoría de países latinoamericanos?",
            options: ["16 años", "18 años", "21 años", "25 años"],
            correctIndex: 1,
            hints: ["Es cuando se obtiene plena capacidad civil", "Coincide con la ciudadanía plena"],
            explanation: "La mayoría de edad generalmente se adquiere a los 18 años."
        },
        // ===== DERECHO CIVIL - INTERMEDIO =====
        {
            id: "ABG-004", career: "abogacia", topic: "derecho_civil", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué es la prescripción adquisitiva?",
            options: ["Pérdida de un derecho por el paso del tiempo", "Adquisición de un derecho por posesión continuada", "Anulación de un contrato", "Extinción de una obligación"],
            correctIndex: 1,
            hints: ["También se llama usucapión", "Requiere posesión por tiempo determinado"],
            explanation: "La prescripción adquisitiva permite adquirir derechos por posesión durante cierto tiempo."
        },
        {
            id: "ABG-005", career: "abogacia", topic: "derecho_civil", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina la persona fallecida de quien se heredan los bienes?",
            validAnswers: ["causante", "de cujus", "difunto"],
            hints: ["Es quien origina la sucesión", "Deja herencia a sus sucesores"],
            explanation: "El causante es la persona cuya muerte origina la apertura de la sucesión."
        },
        // ===== DERECHO CIVIL - DIFÍCIL =====
        {
            id: "ABG-006", career: "abogacia", topic: "derecho_civil", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué tipo de obligación tiene varios deudores donde cada uno debe la totalidad?",
            options: ["Obligación mancomunada", "Obligación solidaria", "Obligación divisible", "Obligación alternativa"],
            correctIndex: 1,
            hints: ["El acreedor puede exigir todo a cualquier deudor", "No hay división de la deuda"],
            explanation: "En las obligaciones solidarias, cada deudor responde por la totalidad de la deuda."
        },

        // ===== DERECHO PENAL - FÁCIL =====
        {
            id: "ABG-007", career: "abogacia", topic: "derecho_penal", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué principio establece que no hay delito sin ley previa?",
            options: ["Principio de proporcionalidad", "Principio de legalidad", "Principio de culpabilidad", "Principio de humanidad"],
            correctIndex: 1,
            hints: ["Nullum crimen, nulla poena sine lege", "La ley debe ser anterior al hecho"],
            explanation: "El principio de legalidad establece que solo la ley puede definir delitos y penas."
        },
        {
            id: "ABG-008", career: "abogacia", topic: "derecho_penal", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la sanción principal impuesta por cometer un delito?",
            validAnswers: ["pena", "condena", "sancion penal"],
            hints: ["Puede ser privación de libertad, multa, etc.", "Es la consecuencia del delito"],
            explanation: "La pena es la consecuencia jurídica impuesta por la comisión de un delito."
        },
        {
            id: "ABG-009", career: "abogacia", topic: "derecho_penal", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es el dolo en derecho penal?",
            options: ["Actuar por accidente", "Intención de cometer el delito", "Desconocimiento de la ley", "Obediencia a órdenes"],
            correctIndex: 1,
            hints: ["El autor conoce y quiere el resultado", "Es lo opuesto a la culpa"],
            explanation: "El dolo implica conocimiento y voluntad de realizar el tipo penal."
        },
        // ===== DERECHO PENAL - INTERMEDIO =====
        {
            id: "ABG-010", career: "abogacia", topic: "derecho_penal", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué es una causa de justificación?",
            options: ["Agravante del delito", "Circunstancia que elimina la antijuridicidad", "Motivo para aumentar la pena", "Circunstancia que agrava la culpa"],
            correctIndex: 1,
            hints: ["Ej: legítima defensa", "Hace que el hecho no sea ilícito"],
            explanation: "Las causas de justificación eliminan la antijuridicidad de la conducta."
        },
        {
            id: "ABG-011", career: "abogacia", topic: "derecho_penal", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina el delito que no llega a consumarse pero se inicia su ejecución?",
            validAnswers: ["tentativa", "delito tentado", "intento"],
            hints: ["El autor no logra su objetivo", "Es punible con pena reducida"],
            explanation: "La tentativa ocurre cuando se inicia la ejecución pero no se consuma el delito."
        },
        // ===== DERECHO PENAL - DIFÍCIL =====
        {
            id: "ABG-012", career: "abogacia", topic: "derecho_penal", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué tipo de autoría corresponde a quien controla la voluntad del ejecutor material?",
            options: ["Autoría directa", "Autoría mediata", "Coautoría", "Complicidad"],
            correctIndex: 1,
            hints: ["El autor no ejecuta personalmente", "Utiliza a otro como instrumento"],
            explanation: "En la autoría mediata, el autor controla la voluntad del ejecutor material."
        },

        // ===== DERECHO CONSTITUCIONAL - FÁCIL =====
        {
            id: "ABG-013", career: "abogacia", topic: "derecho_const", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es la norma suprema del ordenamiento jurídico?",
            options: ["El Código Civil", "La Constitución", "Los tratados internacionales", "Las leyes ordinarias"],
            correctIndex: 1,
            hints: ["Está en la cúspide de la pirámide normativa", "Todas las leyes deben ajustarse a ella"],
            explanation: "La Constitución es la norma suprema que fundamenta todo el ordenamiento jurídico."
        },
        {
            id: "ABG-014", career: "abogacia", topic: "derecho_const", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el recurso constitucional para proteger la libertad personal?",
            validAnswers: ["habeas corpus", "habeas corpus"],
            hints: ["Protege contra detenciones ilegales", "Es una garantía fundamental"],
            explanation: "El habeas corpus protege la libertad física contra detenciones arbitrarias."
        },
        {
            id: "ABG-015", career: "abogacia", topic: "derecho_const", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuáles son los tres poderes del Estado?",
            options: ["Militar, Económico y Social", "Ejecutivo, Legislativo y Judicial", "Federal, Provincial y Municipal", "Político, Administrativo y Fiscal"],
            correctIndex: 1,
            hints: ["Es la división clásica del poder", "Propuesta por Montesquieu"],
            explanation: "La separación de poderes comprende: Ejecutivo, Legislativo y Judicial."
        },
        // ===== DERECHO CONSTITUCIONAL - INTERMEDIO =====
        {
            id: "ABG-016", career: "abogacia", topic: "derecho_const", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué es el control de constitucionalidad?",
            options: ["Control del presupuesto", "Verificación de que las leyes se ajusten a la Constitución", "Supervisión de elecciones", "Auditoría del poder ejecutivo"],
            correctIndex: 1,
            hints: ["Puede ser difuso o concentrado", "Asegura la supremacía constitucional"],
            explanation: "El control de constitucionalidad verifica que las normas respeten la Constitución."
        },
        {
            id: "ABG-017", career: "abogacia", topic: "derecho_const", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina la acción judicial para proteger derechos constitucionales violados?",
            validAnswers: ["amparo", "accion de amparo", "recurso de amparo"],
            hints: ["Es rápido y expedito", "Protege derechos fundamentales"],
            explanation: "El amparo protege derechos constitucionales ante actos u omisiones ilegales."
        },
        // ===== DERECHO CONSTITUCIONAL - DIFÍCIL =====
        {
            id: "ABG-018", career: "abogacia", topic: "derecho_const", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina el principio que prohíbe aplicar leyes penales más gravosas retroactivamente?",
            validAnswers: ["irretroactividad", "irretroactividad penal", "principio de irretroactividad"],
            hints: ["Protege al acusado", "Excepción: ley más benigna"],
            explanation: "La irretroactividad penal prohíbe aplicar leyes más gravosas a hechos anteriores."
        },

        // ===== DERECHO LABORAL - FÁCIL =====
        {
            id: "ABG-019", career: "abogacia", topic: "derecho_laboral", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es un contrato de trabajo?",
            options: ["Compraventa de bienes", "Acuerdo para prestar servicios a cambio de remuneración", "Préstamo de dinero", "Sociedad comercial"],
            correctIndex: 1,
            hints: ["Hay subordinación", "El trabajador recibe un salario"],
            explanation: "El contrato de trabajo implica prestación de servicios dependientes a cambio de salario."
        },
        {
            id: "ABG-020", career: "abogacia", topic: "derecho_laboral", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el pago que recibe el trabajador por su labor?",
            validAnswers: ["salario", "sueldo", "remuneracion", "remuneración"],
            hints: ["Es una contraprestación", "Puede ser mensual, quincenal, etc."],
            explanation: "El salario es la contraprestación que recibe el trabajador por sus servicios."
        },
        // ===== DERECHO LABORAL - INTERMEDIO =====
        {
            id: "ABG-021", career: "abogacia", topic: "derecho_laboral", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué principio establece que ante dudas se favorece al trabajador?",
            options: ["Principio de legalidad", "Principio de irrenunciabilidad", "Principio in dubio pro operario", "Principio de igualdad"],
            correctIndex: 2,
            hints: ["Es protectorio del trabajador", "'En caso de duda, a favor del obrero'"],
            explanation: "In dubio pro operario ordena resolver dudas en favor del trabajador."
        },
        {
            id: "ABG-022", career: "abogacia", topic: "derecho_laboral", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se denomina la terminación del contrato de trabajo sin causa justificada?",
            validAnswers: ["despido", "despido incausado", "despido injustificado"],
            hints: ["El empleador rescinde sin motivo legal", "Genera derecho a indemnización"],
            explanation: "El despido injustificado ocurre cuando el empleador termina el contrato sin causa legal."
        },
        // ===== DERECHO LABORAL - DIFÍCIL =====
        {
            id: "ABG-023", career: "abogacia", topic: "derecho_laboral", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué es el ius variandi?",
            options: ["Derecho del trabajador a renunciar", "Facultad del empleador de modificar condiciones no esenciales", "Obligación de pagar horas extras", "Derecho a vacaciones"],
            correctIndex: 1,
            hints: ["Es una facultad del empleador", "Tiene límites legales"],
            explanation: "El ius variandi permite al empleador modificar aspectos no esenciales del contrato."
        },

        // ===== DERECHO COMERCIAL - FÁCIL =====
        {
            id: "ABG-024", career: "abogacia", topic: "derecho_comercial", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es una sociedad anónima?",
            options: ["Sociedad unipersonal", "Sociedad donde el capital se divide en acciones", "Cooperativa", "Asociación civil sin fines de lucro"],
            correctIndex: 1,
            hints: ["Los socios son accionistas", "La responsabilidad se limita a los aportes"],
            explanation: "La sociedad anónima tiene capital dividido en acciones y responsabilidad limitada."
        },
        {
            id: "ABG-025", career: "abogacia", topic: "derecho_comercial", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el documento que ordena pagar una suma de dinero?",
            validAnswers: ["cheque", "letra de cambio", "pagare", "pagaré"],
            hints: ["Es un título de crédito", "Es común en operaciones comerciales"],
            explanation: "Los títulos de crédito como el cheque ordenan el pago de sumas determinadas."
        },
        // ===== DERECHO COMERCIAL - INTERMEDIO =====
        {
            id: "ABG-026", career: "abogacia", topic: "derecho_comercial", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué es la quiebra?",
            options: ["Fusión de empresas", "Estado de insolvencia judicialmente declarado", "Aumento de capital", "Transformación societaria"],
            correctIndex: 1,
            hints: ["El deudor no puede pagar sus deudas", "Hay liquidación de bienes"],
            explanation: "La quiebra es el estado de insolvencia que lleva a la liquidación del patrimonio."
        },
        // ===== DERECHO COMERCIAL - DIFÍCIL =====
        {
            id: "ABG-027", career: "abogacia", topic: "derecho_comercial", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina la cláusula que permite traspasar los derechos de un título de crédito?",
            validAnswers: ["endoso", "clausula de endoso"],
            hints: ["Se firma al dorso del documento", "Transmite la titularidad"],
            explanation: "El endoso es la cláusula que permite transmitir un título de crédito."
        }
    ]
};
