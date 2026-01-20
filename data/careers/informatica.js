// Banco de Preguntas - Informática

window.careers = window.careers || {};

window.careers.informatica = {
    id: "informatica",
    name: "Informática",
    icon: "💻",
    topics: [
        { id: "hardware", name: "Hardware y Software" },
        { id: "os", name: "Sistemas Operativos" },
        { id: "algorithms", name: "Algoritmos" },
        { id: "programming", name: "Programación" },
        { id: "networks", name: "Redes" },
        { id: "databases", name: "Bases de Datos" },
        { id: "logic", name: "Lógica" }
    ],
    questions: [
        // ===== HARDWARE - FÁCIL =====
        {
            id: "HW-001", career: "informatica", topic: "hardware", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué componente almacena datos de forma temporal mientras la computadora está encendida?",
            options: ["CPU", "RAM", "Disco Duro", "Fuente de Poder"],
            correctIndex: 1,
            hints: ["Es un tipo de memoria volátil", "Su sigla significa Random Access Memory"],
            explanation: "La RAM almacena datos temporalmente mientras el equipo está encendido."
        },
        {
            id: "HW-002", career: "informatica", topic: "hardware", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es el 'cerebro' de la computadora que procesa instrucciones?",
            options: ["RAM", "GPU", "CPU", "SSD"],
            correctIndex: 2,
            hints: ["Es la Unidad Central de Procesamiento", "Ejecuta las instrucciones de los programas"],
            explanation: "La CPU (Central Processing Unit) es el procesador principal."
        },
        {
            id: "HW-003", career: "informatica", topic: "hardware", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el dispositivo de salida que muestra información visual?",
            validAnswers: ["monitor", "pantalla", "display"],
            hints: ["Es un periférico de salida", "Muestra imágenes y texto"],
            explanation: "El monitor es el dispositivo que muestra la información visual."
        },
        {
            id: "HW-004", career: "informatica", topic: "hardware", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué tipo de memoria conserva los datos aunque se apague la computadora?",
            options: ["RAM", "Caché", "ROM", "Registros"],
            correctIndex: 2,
            hints: ["Es memoria no volátil", "ROM significa Read Only Memory"],
            explanation: "La ROM es memoria de solo lectura que no se borra al apagar."
        },
        // ===== HARDWARE - INTERMEDIO =====
        {
            id: "HW-005", career: "informatica", topic: "hardware", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué bus conecta la CPU directamente con la memoria RAM?",
            options: ["Bus USB", "Bus de Datos", "Front Side Bus", "PCI Express"],
            correctIndex: 2,
            hints: ["Es el bus frontal del sistema", "Conecta el procesador con el chipset"],
            explanation: "El FSB (Front Side Bus) conecta la CPU con la memoria y otros componentes."
        },
        {
            id: "HW-006", career: "informatica", topic: "hardware", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama la memoria intermedia entre la CPU y la RAM que acelera el acceso a datos?",
            validAnswers: ["cache", "caché", "memoria cache"],
            hints: ["Es más rápida que la RAM pero más pequeña", "Hay niveles L1, L2 y L3"],
            explanation: "La memoria caché almacena datos frecuentemente usados cerca del procesador."
        },
        // ===== HARDWARE - DIFÍCIL =====
        {
            id: "HW-007", career: "informatica", topic: "hardware", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué técnica permite a una CPU ejecutar múltiples instrucciones simultáneamente dividiendo el ciclo de instrucción?",
            options: ["Multithreading", "Pipelining", "Overclocking", "Hyperthreading"],
            correctIndex: 1,
            hints: ["Divide el proceso en etapas", "Como una línea de ensamblaje"],
            explanation: "El pipelining divide la ejecución en etapas que se procesan en paralelo."
        },

        // ===== SISTEMAS OPERATIVOS - FÁCIL =====
        {
            id: "OS-001", career: "informatica", topic: "os", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál de estos es un sistema operativo?",
            options: ["Microsoft Word", "Windows 10", "Google Chrome", "Adobe Photoshop"],
            correctIndex: 1,
            hints: ["Es el software base de una computadora", "Controla el hardware"],
            explanation: "Windows 10 es un sistema operativo desarrollado por Microsoft."
        },
        {
            id: "OS-002", career: "informatica", topic: "os", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la parte del SO que gestiona directamente el hardware?",
            validAnswers: ["kernel", "nucleo", "núcleo"],
            hints: ["Es el núcleo del sistema operativo", "Gestiona memoria, procesos y dispositivos"],
            explanation: "El kernel es el núcleo que gestiona recursos de hardware."
        },
        {
            id: "OS-003", career: "informatica", topic: "os", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué sistema operativo es de código abierto?",
            options: ["Windows", "macOS", "Linux", "MS-DOS"],
            correctIndex: 2,
            hints: ["Fue creado por Linus Torvalds", "Cualquiera puede ver y modificar su código"],
            explanation: "Linux es un sistema operativo de código abierto."
        },
        // ===== SISTEMAS OPERATIVOS - INTERMEDIO =====
        {
            id: "OS-004", career: "informatica", topic: "os", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué algoritmo de planificación asigna a cada proceso un tiempo fijo de CPU en turnos?",
            options: ["FIFO", "SJF", "Round Robin", "Prioridades"],
            correctIndex: 2,
            hints: ["Funciona en forma circular", "Cada proceso tiene un quantum de tiempo"],
            explanation: "Round Robin asigna tiempos iguales (quantum) a cada proceso en turnos."
        },
        {
            id: "OS-005", career: "informatica", topic: "os", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama la situación donde dos procesos esperan recursos que tiene el otro, bloqueándose mutuamente?",
            validAnswers: ["deadlock", "interbloqueo", "abrazo mortal"],
            hints: ["Ningún proceso puede avanzar", "Esperan recursos circular"],
            explanation: "El deadlock ocurre cuando procesos se bloquean esperando recursos mutuamente."
        },
        // ===== SISTEMAS OPERATIVOS - DIFÍCIL =====
        {
            id: "OS-006", career: "informatica", topic: "os", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Cuál condición NO es necesaria para que ocurra un deadlock según Coffman?",
            options: ["Exclusión mutua", "Espera circular", "Preemption", "Retención y espera"],
            correctIndex: 2,
            hints: ["Son 4 condiciones necesarias", "Una de las opciones lo evitaría, no lo causa"],
            explanation: "Las 4 condiciones son: exclusión mutua, hold and wait, no preemption y espera circular."
        },

        // ===== ALGORITMOS - FÁCIL =====
        {
            id: "ALG-001", career: "informatica", topic: "algorithms", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué es un algoritmo?",
            options: ["Un programa de computadora", "Una secuencia de pasos para resolver un problema", "Un lenguaje de programación", "Un tipo de dato"],
            correctIndex: 1,
            hints: ["Es un conjunto ordenado de instrucciones", "Define cómo resolver algo paso a paso"],
            explanation: "Un algoritmo es una secuencia finita de pasos para resolver un problema."
        },
        {
            id: "ALG-002", career: "informatica", topic: "algorithms", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la notación matemática que describe el comportamiento asintótico de un algoritmo?",
            validAnswers: ["big o", "big-o", "notacion o", "o grande", "orden"],
            hints: ["Se escribe con una O mayúscula", "Describe el peor caso de complejidad"],
            explanation: "La notación Big O describe la complejidad temporal en el peor caso."
        },
        {
            id: "ALG-003", career: "informatica", topic: "algorithms", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué complejidad tiene buscar un elemento en un arreglo desordenado?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correctIndex: 2,
            hints: ["Hay que revisar elemento por elemento", "En el peor caso, revisas todos"],
            explanation: "Búsqueda lineal es O(n) porque puede requerir revisar todos los elementos."
        },
        // ===== ALGORITMOS - INTERMEDIO =====
        {
            id: "ALG-004", career: "informatica", topic: "algorithms", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué complejidad tiene el algoritmo de ordenamiento QuickSort en el caso promedio?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correctIndex: 1,
            hints: ["Es uno de los más eficientes", "Usa divide y vencerás"],
            explanation: "QuickSort tiene complejidad O(n log n) en el caso promedio."
        },
        {
            id: "ALG-005", career: "informatica", topic: "algorithms", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama la técnica algorítmica que divide un problema en subproblemas menores del mismo tipo?",
            validAnswers: ["divide y venceras", "divide and conquer", "dividir y conquistar"],
            hints: ["Divide, resuelve y combina", "MergeSort usa esta técnica"],
            explanation: "Divide y Vencerás divide problemas en partes más pequeñas recursivamente."
        },
        // ===== ALGORITMOS - DIFÍCIL =====
        {
            id: "ALG-006", career: "informatica", topic: "algorithms", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Cuál es la complejidad de buscar en una tabla hash con buen factor de carga?",
            options: ["O(n)", "O(log n)", "O(1) amortizado", "O(n log n)"],
            correctIndex: 2,
            hints: ["Acceso casi directo por clave", "Las colisiones afectan poco si hay pocas"],
            explanation: "Las tablas hash bien diseñadas logran O(1) amortizado para búsquedas."
        },

        // ===== PROGRAMACIÓN - FÁCIL =====
        {
            id: "PRG-001", career: "informatica", topic: "programming", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué estructura de control repite un bloque de código mientras una condición sea verdadera?",
            options: ["if", "switch", "while", "try"],
            correctIndex: 2,
            hints: ["Es una estructura iterativa", "Evalúa la condición antes de cada iteración"],
            explanation: "El while repite mientras la condición sea verdadera."
        },
        {
            id: "PRG-002", career: "informatica", topic: "programming", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama una variable que guarda la dirección de memoria de otra variable?",
            validAnswers: ["puntero", "pointer", "apuntador"],
            hints: ["Apunta a otra ubicación en memoria", "Es fundamental en C y C++"],
            explanation: "Un puntero almacena la dirección de memoria de otro dato."
        },
        {
            id: "PRG-003", career: "informatica", topic: "programming", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es un lenguaje de programación interpretado?",
            options: ["C", "C++", "Python", "Rust"],
            correctIndex: 2,
            hints: ["No necesita compilación previa", "Muy usado en scripting y data science"],
            explanation: "Python es un lenguaje interpretado de alto nivel."
        },
        // ===== PROGRAMACIÓN - INTERMEDIO =====
        {
            id: "PRG-004", career: "informatica", topic: "programming", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué paradigma de programación organiza el código en objetos con atributos y métodos?",
            options: ["Funcional", "Imperativo", "Orientado a Objetos", "Lógico"],
            correctIndex: 2,
            hints: ["Los objetos son instancias de clases", "Encapsulación, herencia, polimorfismo"],
            explanation: "POO organiza el código en objetos con datos y comportamiento."
        },
        {
            id: "PRG-005", career: "informatica", topic: "programming", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama una función que se llama a sí misma?",
            validAnswers: ["recursiva", "recursion", "funcion recursiva"],
            hints: ["Tiene un caso base y un caso recursivo", "Factorial es un ejemplo clásico"],
            explanation: "Una función recursiva se llama a sí misma para resolver subproblemas."
        },
        // ===== PROGRAMACIÓN - DIFÍCIL =====
        {
            id: "PRG-006", career: "informatica", topic: "programming", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué principio SOLID indica que una clase debería tener una única razón para cambiar?",
            options: ["Open/Closed", "Single Responsibility", "Liskov Substitution", "Dependency Inversion"],
            correctIndex: 1,
            hints: ["Es la S de SOLID", "Una clase, una responsabilidad"],
            explanation: "SRP indica que una clase debe tener solo una razón para cambiar."
        },

        // ===== REDES - FÁCIL =====
        {
            id: "NET-001", career: "informatica", topic: "networks", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué capa del modelo OSI se encarga del direccionamiento IP?",
            options: ["Física", "Enlace", "Red", "Transporte"],
            correctIndex: 2,
            hints: ["Maneja direcciones lógicas", "Es la capa 3 del modelo OSI"],
            explanation: "La capa de Red (3) maneja direccionamiento IP y enrutamiento."
        },
        {
            id: "NET-002", career: "informatica", topic: "networks", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama el protocolo que asigna direcciones IP automáticamente?",
            validAnswers: ["dhcp", "protocolo dhcp"],
            hints: ["Configuración dinámica de host", "Evita configurar IPs manualmente"],
            explanation: "DHCP asigna direcciones IP dinámicamente a dispositivos."
        },
        {
            id: "NET-003", career: "informatica", topic: "networks", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué protocolo garantiza la entrega ordenada y sin errores de datos?",
            options: ["UDP", "TCP", "ICMP", "ARP"],
            correctIndex: 1,
            hints: ["Es orientado a conexión", "Hace handshake de 3 vías"],
            explanation: "TCP garantiza entrega confiable mediante confirmaciones."
        },
        // ===== REDES - INTERMEDIO =====
        {
            id: "NET-004", career: "informatica", topic: "networks", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Cuántos hosts útiles permite una red con máscara /24?",
            options: ["256", "254", "255", "128"],
            correctIndex: 1,
            hints: ["2^8 - 2 direcciones", "Se restan red y broadcast"],
            explanation: "/24 tiene 256 direcciones menos la de red y broadcast = 254 hosts."
        },
        {
            id: "NET-005", career: "informatica", topic: "networks", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama la técnica que oculta múltiples IPs privadas detrás de una IP pública?",
            validAnswers: ["nat", "network address translation", "traduccion de direcciones"],
            hints: ["Traduce direcciones", "Permite compartir una IP pública"],
            explanation: "NAT traduce direcciones privadas a una IP pública."
        },
        // ===== REDES - DIFÍCIL =====
        {
            id: "NET-006", career: "informatica", topic: "networks", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué algoritmo de enrutamiento utiliza el protocolo OSPF?",
            options: ["Vector Distancia", "Estado de Enlace", "Path Vector", "Flooding"],
            correctIndex: 1,
            hints: ["Cada router conoce la topología completa", "Usa el algoritmo de Dijkstra"],
            explanation: "OSPF usa Estado de Enlace con Dijkstra para calcular rutas."
        },

        // ===== BASES DE DATOS - FÁCIL =====
        {
            id: "DB-001", career: "informatica", topic: "databases", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué lenguaje se usa para consultar bases de datos relacionales?",
            options: ["HTML", "SQL", "CSS", "XML"],
            correctIndex: 1,
            hints: ["Structured Query Language", "SELECT, INSERT, UPDATE, DELETE"],
            explanation: "SQL es el lenguaje estándar para bases de datos relacionales."
        },
        {
            id: "DB-002", career: "informatica", topic: "databases", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la columna que identifica de forma única cada fila de una tabla?",
            validAnswers: ["primary key", "clave primaria", "llave primaria", "pk"],
            hints: ["No puede tener valores duplicados", "Identifica unívocamente registros"],
            explanation: "La clave primaria identifica únicamente cada registro de una tabla."
        },
        {
            id: "DB-003", career: "informatica", topic: "databases", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Qué comando SQL se usa para obtener datos de una tabla?",
            options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
            correctIndex: 2,
            hints: ["Es para consultar, no modificar", "SELECT * FROM tabla"],
            explanation: "SELECT recupera datos de una o más tablas."
        },
        // ===== BASES DE DATOS - INTERMEDIO =====
        {
            id: "DB-004", career: "informatica", topic: "databases", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué propiedad ACID garantiza que una transacción se complete totalmente o no se aplique?",
            options: ["Atomicity", "Consistency", "Isolation", "Durability"],
            correctIndex: 0,
            hints: ["Todo o nada", "No pueden quedar efectos parciales"],
            explanation: "Atomicidad garantiza que la transacción sea indivisible."
        },
        {
            id: "DB-005", career: "informatica", topic: "databases", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llama el proceso de organizar datos para reducir redundancia?",
            validAnswers: ["normalizacion", "normalización", "formas normales"],
            hints: ["Divide tablas para evitar repetición", "1FN, 2FN, 3FN..."],
            explanation: "La normalización reduce redundancia aplicando formas normales."
        },
        // ===== BASES DE DATOS - DIFÍCIL =====
        {
            id: "DB-006", career: "informatica", topic: "databases", difficulty: "hard",
            type: "multiple_choice",
            question: "¿En qué forma normal se elimina la dependencia transitiva?",
            options: ["Primera FN", "Segunda FN", "Tercera FN", "BCNF"],
            correctIndex: 2,
            hints: ["Va más allá de dependencias parciales", "3FN elimina A→B→C"],
            explanation: "La 3FN elimina atributos que dependen transitivamente de la clave."
        },

        // ===== LÓGICA - FÁCIL =====
        {
            id: "LOG-001", career: "informatica", topic: "logic", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es el resultado de la operación AND entre TRUE y FALSE?",
            options: ["TRUE", "FALSE", "NULL", "ERROR"],
            correctIndex: 1,
            hints: ["AND requiere que ambos sean verdaderos", "V ∧ F = ?"],
            explanation: "AND devuelve TRUE solo si ambos operandos son TRUE."
        },
        {
            id: "LOG-002", career: "informatica", topic: "logic", difficulty: "easy",
            type: "open_answer",
            question: "¿Cómo se llama la operación lógica que invierte el valor de verdad?",
            validAnswers: ["not", "negacion", "negación", "no"],
            hints: ["TRUE se convierte en FALSE y viceversa", "Es un operador unario"],
            explanation: "NOT o negación invierte el valor de verdad."
        },
        {
            id: "LOG-003", career: "informatica", topic: "logic", difficulty: "easy",
            type: "multiple_choice",
            question: "¿Cuál es el resultado de NOT(FALSE)?",
            options: ["TRUE", "FALSE", "NULL", "UNDEFINED"],
            correctIndex: 0,
            hints: ["La negación invierte", "¬F = ?"],
            explanation: "La negación de FALSE es TRUE."
        },
        // ===== LÓGICA - INTERMEDIO =====
        {
            id: "LOG-004", career: "informatica", topic: "logic", difficulty: "medium",
            type: "multiple_choice",
            question: "¿Qué operación lógica representa la implicación 'Si A entonces B'?",
            options: ["A AND B", "A OR B", "NOT A OR B", "A XOR B"],
            correctIndex: 2,
            hints: ["A→B es equivalente a ¬A∨B", "Solo es falsa cuando A es TRUE y B es FALSE"],
            explanation: "La implicación A→B equivale a ¬A∨B en lógica proposicional."
        },
        {
            id: "LOG-005", career: "informatica", topic: "logic", difficulty: "medium",
            type: "open_answer",
            question: "¿Cómo se llaman las proposiciones que tienen el mismo valor de verdad en todas las interpretaciones posibles?",
            validAnswers: ["equivalentes", "logicamente equivalentes", "equivalencia logica"],
            hints: ["Sus tablas de verdad son idénticas", "Pueden reemplazarse entre sí"],
            explanation: "Proposiciones lógicamente equivalentes tienen mismos valores en toda situación."
        },
        // ===== LÓGICA - DIFÍCIL =====
        {
            id: "LOG-006", career: "informatica", topic: "logic", difficulty: "hard",
            type: "multiple_choice",
            question: "¿Qué ley lógica afirma que ¬(A∧B) es equivalente a (¬A∨¬B)?",
            options: ["Ley de Absorción", "Ley de De Morgan", "Ley de Distribución", "Ley de Idempotencia"],
            correctIndex: 1,
            hints: ["Relaciona negación con AND y OR", "Hay dos leyes con este nombre"],
            explanation: "Las Leyes de De Morgan relacionan negación con conjunción y disyunción."
        }
    ]
};
