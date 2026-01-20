// Banco de Preguntas - Odontología

window.careers = window.careers || {};

window.careers.odontologia = {
    id: "odontologia",
    name: "Odontología",
    icon: "🦷",
    topics: [
        { id: "anatomia_bucal", name: "Anatomía Bucal" },
        { id: "histologia", name: "Histología Dental" },
        { id: "patologia", name: "Patología Bucal" },
        { id: "operatoria", name: "Operatoria Dental" },
        { id: "endodoncia", name: "Endodoncia" },
        { id: "periodoncia", name: "Periodoncia" },
        { id: "radiologia", name: "Radiología Odontológica" }
    ],
    questions: [
        // ===== ANATOMÍA BUCAL - FÁCIL =====
        {
            id: "ODONT-001", career: "odontologia", topic: "anatomia_bucal", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuántos dientes tiene la dentición permanente completa en un adulto?",
            options: ["28", "30", "32", "34"],
            correctIndex: 2,
            hints: ["Incluye las muelas del juicio", "Son 8 dientes por cuadrante"],
            explanation: "La dentición permanente completa tiene 32 dientes: 8 incisivos, 4 caninos, 8 premolares y 12 molares."
        },
        {
            id: "ODONT-002", career: "odontologia", topic: "anatomia_bucal", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llaman los dientes utilizados principalmente para cortar los alimentos?",
            validAnswers: ["incisivos", "dientes incisivos", "incisivo"],
            hints: ["Son los dientes delanteros", "Tienen bordes afilados"],
            explanation: "Los incisivos son dientes anteriores con bordes cortantes para morder alimentos."
        },
        {
            id: "ODONT-003", career: "odontologia", topic: "anatomia_bucal", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuántos dientes tiene la dentición temporal (de leche)?",
            options: ["16", "20", "24", "28"],
            correctIndex: 1,
            hints: ["Son menos que los permanentes", "No incluye premolares"],
            explanation: "La dentición temporal tiene 20 dientes: 8 incisivos, 4 caninos y 8 molares."
        },
        {
            id: "ODONT-004", career: "odontologia", topic: "anatomia_bucal", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es la capa más externa y dura del diente?",
            options: ["Dentina", "Esmalte", "Cemento", "Pulpa"],
            correctIndex: 1,
            hints: ["Es el tejido más mineralizado del cuerpo", "Cubre la corona del diente"],
            explanation: "El esmalte es la capa más externa de la corona dental, compuesto principalmente de hidroxiapatita."
        },
        // ===== ANATOMÍA BUCAL - INTERMEDIO =====
        {
            id: "ODONT-005", career: "odontologia", topic: "anatomia_bucal", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué nervio craneal inerva la mayor parte de los dientes?",
            options: ["Nervio Facial (VII)", "Nervio Trigémino (V)", "Nervio Glosofaríngeo (IX)", "Nervio Hipogloso (XII)"],
            correctIndex: 1,
            hints: ["Tiene tres ramas principales", "Es el quinto par craneal"],
            explanation: "El nervio trigémino (V par) proporciona inervación sensitiva a dientes y encías."
        },
        {
            id: "ODONT-006", career: "odontologia", topic: "anatomia_bucal", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama el ligamento que une el diente al hueso alveolar?",
            validAnswers: ["ligamento periodontal", "periodonto", "ligamento periodóntico"],
            hints: ["Es un tejido conectivo", "Permite cierto movimiento al diente"],
            explanation: "El ligamento periodontal es un tejido conectivo que ancla el diente al hueso alveolar."
        },
        // ===== ANATOMÍA BUCAL - DIFÍCIL =====
        {
            id: "ODONT-007", career: "odontologia", topic: "anatomia_bucal", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Cuál es el foramen por donde pasan los vasos y nervios alveolares inferiores?",
            options: ["Foramen mentoniano", "Foramen mandibular", "Foramen infraorbitario", "Foramen palatino mayor"],
            correctIndex: 1,
            hints: ["Está en la cara interna de la rama mandibular", "Es el punto de entrada del conducto dentario inferior"],
            explanation: "El foramen mandibular está en la cara medial de la rama mandibular y da paso al conducto dentario inferior."
        },

        // ===== HISTOLOGÍA DENTAL - FÁCIL =====
        {
            id: "ODONT-008", career: "odontologia", topic: "histologia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué células producen la dentina?",
            options: ["Ameloblastos", "Odontoblastos", "Cementoblastos", "Osteoblastos"],
            correctIndex: 1,
            hints: ["Su nombre deriva de 'odonto' que significa diente", "Se ubican en la pulpa dental"],
            explanation: "Los odontoblastos son células especializadas que producen y mantienen la dentina."
        },
        {
            id: "ODONT-009", career: "odontologia", topic: "histologia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llaman las células que forman el esmalte dental?",
            validAnswers: ["ameloblastos", "ameloblasto"],
            hints: ["El prefijo 'amelo' se refiere al esmalte", "Solo funcionan durante el desarrollo del diente"],
            explanation: "Los ameloblastos son células que producen el esmalte dental durante la amelogénesis."
        },
        // ===== HISTOLOGÍA DENTAL - INTERMEDIO =====
        {
            id: "ODONT-010", career: "odontologia", topic: "histologia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Cuál es el principal componente mineral del esmalte dental?",
            options: ["Fosfato de calcio", "Hidroxiapatita", "Carbonato de calcio", "Fluorapatita"],
            correctIndex: 1,
            hints: ["Es un cristal de fosfato de calcio", "Forma el 96% del esmalte"],
            explanation: "La hidroxiapatita (Ca10(PO4)6(OH)2) es el principal componente mineral del esmalte."
        },
        // ===== HISTOLOGÍA DENTAL - DIFÍCIL =====
        {
            id: "ODONT-011", career: "odontologia", topic: "histologia", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se llaman los túbulos microscópicos que atraviesan la dentina?",
            validAnswers: ["tubulos dentinarios", "túbulos dentinarios", "conductillos dentinarios"],
            hints: ["Contienen las prolongaciones de los odontoblastos", "Van desde la pulpa hasta la unión amelodentinaria"],
            explanation: "Los túbulos dentinarios son canales microscópicos que alojan los procesos odontoblásticos."
        },

        // ===== PATOLOGÍA BUCAL - FÁCIL =====
        {
            id: "ODONT-012", career: "odontologia", topic: "patologia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cómo se denomina la enfermedad que causa destrucción del tejido dental por bacterias?",
            options: ["Periodontitis", "Caries dental", "Gingivitis", "Pulpitis"],
            correctIndex: 1,
            hints: ["Es causada principalmente por Streptococcus mutans", "Los azúcares favorecen su aparición"],
            explanation: "La caries es una enfermedad multifactorial que produce desmineralización del tejido dental."
        },
        {
            id: "ODONT-013", career: "odontologia", topic: "patologia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la inflamación de las encías sin pérdida de hueso?",
            validAnswers: ["gingivitis", "inflamacion gingival", "inflamación gingival"],
            hints: ["Es reversible con buena higiene", "La encía se ve roja e inflamada"],
            explanation: "La gingivitis es la inflamación reversible de la encía sin afectación del hueso alveolar."
        },
        {
            id: "ODONT-014", career: "odontologia", topic: "patologia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué bacteria es la principal causante de la caries dental?",
            options: ["Escherichia coli", "Streptococcus mutans", "Staphylococcus aureus", "Lactobacillus acidophilus"],
            correctIndex: 1,
            hints: ["Es un estreptococo", "Produce ácidos que desmineralizan el esmalte"],
            explanation: "Streptococcus mutans es la bacteria más asociada al inicio de la caries dental."
        },
        // ===== PATOLOGÍA BUCAL - INTERMEDIO =====
        {
            id: "ODONT-015", career: "odontologia", topic: "patologia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué enfermedad periodontal causa pérdida de inserción y hueso alveolar?",
            options: ["Gingivitis", "Periodontitis", "Estomatitis", "Quelitis"],
            correctIndex: 1,
            hints: ["Es la evolución de una gingivitis no tratada", "Puede causar movilidad dental"],
            explanation: "La periodontitis es una enfermedad inflamatoria que destruye los tejidos de soporte del diente."
        },
        // ===== PATOLOGÍA BUCAL - DIFÍCIL =====
        {
            id: "ODONT-016", career: "odontologia", topic: "patologia", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina la lesión precancerosa más común de la mucosa oral, de color blanquecino?",
            validAnswers: ["leucoplasia", "leucoplakia"],
            hints: ["Es una placa blanca que no se desprende", "Puede tener transformación maligna"],
            explanation: "La leucoplasia es una lesión blanquecina que no puede caracterizarse como otra enfermedad."
        },

        // ===== OPERATORIA DENTAL - FÁCIL =====
        {
            id: "ODONT-017", career: "odontologia", topic: "operatoria", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué material restaurador tiene color similar al diente natural?",
            options: ["Amalgama", "Resina compuesta", "Oro", "Cemento de óxido de zinc"],
            correctIndex: 1,
            hints: ["Es un material estético", "Se polimeriza con luz"],
            explanation: "Las resinas compuestas son materiales estéticos que imitan el color dental."
        },
        {
            id: "ODONT-018", career: "odontologia", topic: "operatoria", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el instrumento rotatorio utilizado para remover caries?",
            validAnswers: ["fresa", "fresa dental", "broca"],
            hints: ["Se monta en la pieza de mano", "Gira a alta velocidad"],
            explanation: "Las fresas dentales son instrumentos cortantes rotatorios para preparar cavidades."
        },
        // ===== OPERATORIA DENTAL - INTERMEDIO =====
        {
            id: "ODONT-019", career: "odontologia", topic: "operatoria", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué clasificación de Black corresponde a cavidades en superficies proximales de molares?",
            options: ["Clase I", "Clase II", "Clase III", "Clase IV"],
            correctIndex: 1,
            hints: ["Afecta superficies mesiales o distales", "Es en dientes posteriores"],
            explanation: "Las cavidades Clase II de Black afectan superficies proximales de premolares y molares."
        },
        // ===== OPERATORIA DENTAL - DIFÍCIL =====
        {
            id: "ODONT-020", career: "odontologia", topic: "operatoria", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se llama la técnica que utiliza ácido para crear microporosidades en el esmalte para adhesión?",
            validAnswers: ["grabado acido", "grabado ácido", "tecnica del grabado acido", "acondicionamiento acido"],
            hints: ["Generalmente se usa ácido fosfórico al 37%", "Aumenta la superficie de adhesión"],
            explanation: "El grabado ácido crea microporosidades en el esmalte permitiendo la adhesión micromecánica."
        },

        // ===== ENDODONCIA - FÁCIL =====
        {
            id: "ODONT-021", career: "odontologia", topic: "endodoncia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué tejido se encuentra en el interior del diente?",
            options: ["Esmalte", "Dentina", "Pulpa dental", "Cemento"],
            correctIndex: 2,
            hints: ["Contiene vasos sanguíneos y nervios", "Da vitalidad al diente"],
            explanation: "La pulpa dental es el tejido blando vascularizado e inervado dentro del diente."
        },
        {
            id: "ODONT-022", career: "odontologia", topic: "endodoncia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el tratamiento que elimina la pulpa dental infectada?",
            validAnswers: ["endodoncia", "tratamiento de conducto", "tratamiento de conductos", "pulpectomia"],
            hints: ["Comúnmente llamado 'matar el nervio'", "Limpia y sella los conductos radiculares"],
            explanation: "La endodoncia o tratamiento de conductos elimina la pulpa enferma y sella el sistema de conductos."
        },
        // ===== ENDODONCIA - INTERMEDIO =====
        {
            id: "ODONT-023", career: "odontologia", topic: "endodoncia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué material se utiliza comúnmente para obturar los conductos radiculares?",
            options: ["Resina compuesta", "Amalgama", "Gutapercha", "Cemento de ionómero"],
            correctIndex: 2,
            hints: ["Es un material termoplástico", "Proviene del árbol de gutapercha"],
            explanation: "La gutapercha es el material de elección para la obturación de conductos radiculares."
        },
        // ===== ENDODONCIA - DIFÍCIL =====
        {
            id: "ODONT-024", career: "odontologia", topic: "endodoncia", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina el instrumento electrónico que mide la longitud del conducto radicular?",
            validAnswers: ["localizador apical", "localizador de apice", "apex locator"],
            hints: ["Mide la impedancia eléctrica", "Ubica el foramen apical"],
            explanation: "El localizador apical es un dispositivo electrónico que determina la longitud de trabajo."
        },

        // ===== PERIODONCIA - FÁCIL =====
        {
            id: "ODONT-025", career: "odontologia", topic: "periodoncia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué estructuras conforman el periodonto?",
            options: ["Solo la encía", "Esmalte y dentina", "Encía, ligamento periodontal, cemento y hueso alveolar", "Pulpa y dentina"],
            correctIndex: 2,
            hints: ["Son los tejidos de soporte del diente", "Incluye tejidos blandos y duros"],
            explanation: "El periodonto incluye encía, ligamento periodontal, cemento radicular y hueso alveolar."
        },
        {
            id: "ODONT-026", career: "odontologia", topic: "periodoncia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la película bacteriana que se forma constantemente sobre los dientes?",
            validAnswers: ["placa bacteriana", "biofilm", "placa dental", "biopelícula"],
            hints: ["Se forma pocas horas después del cepillado", "Es la principal causa de caries y enfermedad periodontal"],
            explanation: "La placa bacteriana o biofilm es una comunidad de microorganismos adheridos a los dientes."
        },
        // ===== PERIODONCIA - INTERMEDIO =====
        {
            id: "ODONT-027", career: "odontologia", topic: "periodoncia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué instrumento se utiliza para medir la profundidad del surco gingival?",
            options: ["Explorador dental", "Sonda periodontal", "Espejo bucal", "Cureta"],
            correctIndex: 1,
            hints: ["Tiene marcas milimétricas", "Mide bolsas periodontales"],
            explanation: "La sonda periodontal mide la profundidad del surco o bolsa periodontal."
        },
        // ===== PERIODONCIA - DIFÍCIL =====
        {
            id: "ODONT-028", career: "odontologia", topic: "periodoncia", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se denomina el procedimiento quirúrgico que expone las raíces para eliminar tártaro subgingival?",
            validAnswers: ["cirugia a colgajo", "cirugía a colgajo", "colgajo periodontal", "cirugia periodontal"],
            hints: ["Permite acceso visual y mecánico", "Levanta el tejido gingival"],
            explanation: "La cirugía a colgajo expone quirúrgicamente las superficies radiculares para su limpieza."
        },

        // ===== RADIOLOGÍA - FÁCIL =====
        {
            id: "ODONT-029", career: "odontologia", topic: "radiologia", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué tipo de radiografía muestra todos los dientes en una sola imagen?",
            options: ["Periapical", "Bite-wing", "Panorámica", "Oclusal"],
            correctIndex: 2,
            hints: ["También se llama ortopantomografía", "Muestra ambos maxilares"],
            explanation: "La radiografía panorámica u ortopantomografía muestra ambos maxilares en una sola imagen."
        },
        {
            id: "ODONT-030", career: "odontologia", topic: "radiologia", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se ven las estructuras densas como el esmalte en una radiografía dental?",
            validAnswers: ["radiopacas", "radiopaco", "blancas", "claras"],
            hints: ["Detienen más los rayos X", "Se ven de color claro en la imagen"],
            explanation: "Las estructuras densas aparecen radiopacas (blancas) porque absorben más radiación."
        },
        // ===== RADIOLOGÍA - INTERMEDIO =====
        {
            id: "ODONT-031", career: "odontologia", topic: "radiologia", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué tipo de radiografía es ideal para detectar caries interproximales?",
            options: ["Panorámica", "Periapical", "Bite-wing", "Cefalométrica"],
            correctIndex: 2,
            hints: ["El paciente muerde una aleta", "Muestra las coronas de superiores e inferiores"],
            explanation: "Las radiografías bite-wing son ideales para detectar caries interproximales y nivel óseo."
        },
        // ===== RADIOLOGÍA - DIFÍCIL =====
        {
            id: "ODONT-032", career: "odontologia", topic: "radiologia", difficulty: "hard",
            type: "open_answer",
            question: "¿Cómo se llama la técnica radiográfica tridimensional utilizada para planificación de implantes?",
            validAnswers: ["tomografia", "tomografía", "cbct", "cone beam", "tomografia computarizada"],
            hints: ["Produce imágenes en 3D", "Es de haz cónico en odontología"],
            explanation: "La tomografía computarizada de haz cónico (CBCT) proporciona imágenes 3D para diagnóstico y planificación."
        }
    ]
};
