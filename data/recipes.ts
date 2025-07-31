// Interfaz para definir la estructura de una receta
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  ingredients: string[];
  steps: string[];
}

// Array con recetas de ejemplo para la aplicación
export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Pasta con Tomate',
    description: 'Una deliciosa pasta con salsa de tomate casera',
    image: '🍝',
    prepTime: '20 min',
    difficulty: 'Fácil',
    ingredients: [
      '400g de pasta (espaguetis o penne)',
      '4 tomates maduros',
      '3 dientes de ajo',
      '2 cucharadas de aceite de oliva',
      'Sal y pimienta al gusto',
      'Albahaca fresca',
      'Queso parmesano rallado'
    ],
    steps: [
      'Hierve agua con sal en una olla grande',
      'Cocina la pasta según las instrucciones del paquete por 8-10 minutos',
      'Mientras tanto, pica los tomates y el ajo finamente',
      'Calienta el aceite en una sartén por 2 minutos y sofríe el ajo por 1 minuto',
      'Agrega los tomates y cocina por 10 minutos',
      'Sazona con sal, pimienta y albahaca',
      'Mezcla la pasta con la salsa y sirve con queso'
    ]
  },
  {
    id: '2',
    title: 'Ensalada César',
    description: 'Ensalada fresca con aderezo césar casero',
    image: '🥗',
    prepTime: '15 min',
    difficulty: 'Fácil',
    ingredients: [
      '1 lechuga romana grande',
      '100g de queso parmesano',
      '2 rebanadas de pan para crutones',
      '2 cucharadas de mayonesa',
      '1 cucharada de jugo de limón',
      '1 diente de ajo',
      'Aceite de oliva',
      'Sal y pimienta'
    ],
    steps: [
      'Lava y corta la lechuga en trozos medianos',
      'Corta el pan en cubos y tuesta hasta dorar',
      'Machaca el ajo y mézclalo con mayonesa',
      'Agrega jugo de limón y aceite de oliva al aderezo',
      'Sazona el aderezo con sal y pimienta',
      'Mezcla la lechuga con el aderezo',
      'Agrega crutones y queso parmesano rallado'
    ]
  },
  {
    id: '3',
    title: 'Tortilla Española',
    description: 'Clásica tortilla de patatas española',
    image: '🥚',
    prepTime: '30 min',
    difficulty: 'Medio',
    ingredients: [
      '4 patatas medianas',
      '6 huevos',
      '1 cebolla mediana',
      'Aceite de oliva abundante',
      'Sal al gusto'
    ],
    steps: [
      'Pela y corta las patatas en láminas finas',
      'Corta la cebolla en juliana',
      'Fríe las patatas y cebolla en aceite caliente por 15 minutos',
      'Escurre el aceite y deja enfriar por 5 minutos',
      'Bate los huevos por 1 minuto y mezcla con las patatas',
      'Cocina en sartén antiadherente por 3-4 minutos por cada lado',
      'Sirve caliente o a temperatura ambiente'
    ]
  },
  {
    id: '4',
    title: 'Smoothie de Frutas',
    description: 'Batido refrescante y nutritivo',
    image: '🥤',
    prepTime: '5 min',
    difficulty: 'Fácil',
    ingredients: [
      '1 plátano maduro',
      '1 taza de fresas',
      '1/2 taza de yogur natural',
      '1/2 taza de leche',
      '1 cucharada de miel',
      'Hielo al gusto'
    ],
    steps: [
      'Lava las fresas y quita las hojas',
      'Pela el plátano y córtalo en trozos',
      'Coloca todas las frutas en la licuadora',
      'Agrega yogur, leche y miel',
      'Licúa hasta obtener consistencia suave',
      'Agrega hielo si deseas más frío',
      'Sirve inmediatamente en vasos altos'
    ]
  },
  {
    id: '5',
    title: 'Quesadillas de Queso',
    description: 'Quesadillas crujientes y deliciosas',
    image: '🌮',
    prepTime: '10 min',
    difficulty: 'Fácil',
    ingredients: [
      '4 tortillas de harina',
      '200g de queso rallado',
      '1 pimiento rojo',
      '1/2 cebolla',
      'Aceite para cocinar',
      'Sal y pimienta',
      'Crema agria para servir'
    ],
    steps: [
      'Corta el pimiento y la cebolla en tiras finas',
      'Sofríe las verduras por 5 minutos hasta que estén tiernas',
      'Coloca queso en la mitad de cada tortilla',
      'Agrega las verduras sobre el queso',
      'Dobla las tortillas por la mitad',
      'Cocina en sartén por 2-3 minutos por lado hasta que estén doradas',
      'Corta en triángulos y sirve con crema'
    ]
  },
  {
    id: '6',
    title: 'Empanadas Argentinas',
    description: 'Empanadas criollas rellenas de carne',
    image: '🥟',
    prepTime: '45 min',
    difficulty: 'Medio',
    ingredients: [
      '500g de masa para empanadas',
      '400g de carne picada',
      '2 cebollas',
      '2 huevos duros',
      'Aceitunas verdes',
      'Comino, pimentón, sal'
    ],
    steps: [
      'Sofríe la cebolla picada por 5 minutos',
      'Agrega la carne y cocina por 10 minutos',
      'Condimenta con comino, pimentón y sal',
      'Deja enfriar y agrega huevo duro picado',
      'Rellena las empanadas y cierra con repulgue',
      'Hornea a 200°C por 20 minutos hasta dorar'
    ]
  },
  {
    id: '7',
    title: 'Ceviche Peruano',
    description: 'Pescado fresco marinado en limón',
    image: '🐟',
    prepTime: '30 min',
    difficulty: 'Medio',
    ingredients: [
      '500g de pescado blanco fresco',
      '10 limones',
      '1 cebolla morada',
      '1 ají amarillo',
      'Cilantro fresco',
      'Sal y pimienta'
    ],
    steps: [
      'Corta el pescado en cubos pequeños',
      'Exprime los limones y marina el pescado por 15 minutos',
      'Corta la cebolla en juliana fina',
      'Pica el ají amarillo sin semillas',
      'Mezcla todo con cilantro picado',
      'Sazona con sal y sirve inmediatamente'
    ]
  },
  {
    id: '8',
    title: 'Arepas Venezolanas',
    description: 'Arepas tradicionales rellenas',
    image: '🌽',
    prepTime: '25 min',
    difficulty: 'Fácil',
    ingredients: [
      '2 tazas de harina de maíz precocida',
      '2 tazas de agua tibia',
      '1 cucharadita de sal',
      'Queso blanco',
      'Jamón',
      'Aguacate'
    ],
    steps: [
      'Mezcla la harina con agua y sal por 2 minutos',
      'Forma bolitas y aplana en discos',
      'Cocina en plancha por 7 minutos por lado',
      'Abre por la mitad cuando estén doradas',
      'Rellena con queso, jamón y aguacate',
      'Sirve caliente'
    ]
  },
  {
    id: '9',
    title: 'Asado Argentino',
    description: 'Parrillada tradicional argentina',
    image: '🥩',
    prepTime: '90 min',
    difficulty: 'Difícil',
    ingredients: [
      '1kg de bife de chorizo',
      '500g de chorizo',
      '500g de morcilla',
      'Sal gruesa',
      'Chimichurri',
      'Carbón'
    ],
    steps: [
      'Enciende el carbón y espera brasas por 30 minutos',
      'Sala la carne 10 minutos antes de cocinar',
      'Coloca los chorizos primero por 15 minutos',
      'Agrega la carne y cocina 8 minutos por lado',
      'Deja reposar la carne por 5 minutos',
      'Sirve con chimichurri y ensalada'
    ]
  },
  {
    id: '10',
    title: 'Feijoada Brasileña',
    description: 'Guiso tradicional de frijoles negros',
    image: '🍲',
    prepTime: '120 min',
    difficulty: 'Difícil',
    ingredients: [
      '500g de frijoles negros',
      '300g de carne seca',
      '200g de chorizo',
      '200g de tocino',
      'Cebolla, ajo',
      'Hojas de laurel'
    ],
    steps: [
      'Remoja los frijoles toda la noche',
      'Cocina los frijoles por 60 minutos',
      'Sofríe las carnes por 10 minutos',
      'Agrega las carnes a los frijoles',
      'Cocina todo junto por 45 minutos más',
      'Sirve con arroz blanco y farofa'
    ]
  },
  {
    id: '11',
    title: 'Bandeja Paisa',
    description: 'Plato típico de Antioquia, Colombia',
    image: '🍽️',
    prepTime: '60 min',
    difficulty: 'Difícil',
    ingredients: [
      'Frijoles rojos',
      'Arroz blanco',
      'Carne molida',
      'Chicharrón',
      'Huevo frito',
      'Plátano maduro',
      'Arepa',
      'Aguacate'
    ],
    steps: [
      'Cocina los frijoles por 45 minutos',
      'Prepara arroz blanco por 20 minutos',
      'Sofríe la carne molida por 10 minutos',
      'Fríe el chicharrón hasta que esté crujiente',
      'Fríe los huevos y el plátano por 3 minutos cada uno',
      'Sirve todo en un plato grande con arepa y aguacate'
    ]
  },
  {
    id: '12',
    title: 'Locro Ecuatoriano',
    description: 'Sopa cremosa de papa y queso',
    image: '🥣',
    prepTime: '40 min',
    difficulty: 'Medio',
    ingredients: [
      '1kg de papas',
      '200g de queso fresco',
      '1 taza de leche',
      'Cebolla blanca',
      'Achiote',
      'Cilantro'
    ],
    steps: [
      'Pela y corta las papas en trozos',
      'Cocina las papas por 20 minutos hasta que estén suaves',
      'Sofríe la cebolla con achiote por 5 minutos',
      'Agrega la leche y el queso desmenuzado',
      'Cocina por 10 minutos más hasta espesar',
      'Sirve caliente con cilantro picado'
    ]
  },
  {
    id: '13',
    title: 'Anticuchos Peruanos',
    description: 'Brochetas de corazón a la parrilla',
    image: '🍢',
    prepTime: '35 min',
    difficulty: 'Medio',
    ingredients: [
      '500g de corazón de res',
      'Ají panca',
      'Vinagre',
      'Comino',
      'Ajo',
      'Sal'
    ],
    steps: [
      'Corta el corazón en cubos medianos',
      'Prepara la marinada con ají panca y vinagre',
      'Marina la carne por 20 minutos',
      'Ensarta en palitos de brocheta',
      'Asa a la parrilla por 8 minutos girando',
      'Sirve caliente con papas sancochadas'
    ]
  },
  {
    id: '14',
    title: 'Cazuela Chilena',
    description: 'Sopa tradicional con pollo y verduras',
    image: '🍲',
    prepTime: '50 min',
    difficulty: 'Medio',
    ingredients: [
      '1 pollo entero',
      'Zapallo',
      'Choclo',
      'Porotos verdes',
      'Arroz',
      'Cilantro'
    ],
    steps: [
      'Hierve el pollo por 30 minutos',
      'Retira el pollo y desmenuza',
      'Agrega las verduras al caldo por 15 minutos',
      'Incorpora el arroz y cocina por 10 minutos',
      'Regresa el pollo desmenuzado',
      'Sirve caliente con cilantro'
    ]
  },
  {
    id: '15',
    title: 'Sancocho Dominicano',
    description: 'Guiso con múltiples carnes y vegetales',
    image: '🥘',
    prepTime: '90 min',
    difficulty: 'Difícil',
    ingredients: [
      'Pollo',
      'Cerdo',
      'Res',
      'Yuca',
      'Plátano verde',
      'Calabaza',
      'Cilantro ancho'
    ],
    steps: [
      'Sofríe todas las carnes por 15 minutos',
      'Agrega agua y cocina por 45 minutos',
      'Incorpora los vegetales duros primero',
      'Cocina por 20 minutos más',
      'Agrega el plátano y calabaza',
      'Finaliza con cilantro ancho picado'
    ]
  },
  {
    id: '16',
    title: 'Pabellón Venezolano',
    description: 'Plato nacional de Venezuela',
    image: '🇻🇪',
    prepTime: '60 min',
    difficulty: 'Medio',
    ingredients: [
      'Carne mechada',
      'Caraotas negras',
      'Arroz blanco',
      'Plátano maduro',
      'Queso blanco'
    ],
    steps: [
      'Cocina la carne hasta que se deshilache por 40 minutos',
      'Prepara las caraotas con sofrito por 30 minutos',
      'Cocina arroz blanco por 20 minutos',
      'Fríe el plátano en tajadas por 3 minutos',
      'Sirve todo separado en el plato',
      'Acompaña con queso blanco rallado'
    ]
  },
  {
    id: '17',
    title: 'Mote con Huesillo',
    description: 'Bebida tradicional chilena',
    image: '🥤',
    prepTime: '30 min',
    difficulty: 'Fácil',
    ingredients: [
      'Mote de trigo',
      'Huesillos secos',
      'Azúcar',
      'Canela',
      'Agua'
    ],
    steps: [
      'Remoja los huesillos por 2 horas',
      'Hierve los huesillos con canela por 20 minutos',
      'Cocina el mote por 15 minutos hasta que esté tierno',
      'Endulza el agua de huesillos',
      'Sirve frío con mote y huesillos',
      'Agrega hielo al gusto'
    ]
  },
  {
    id: '18',
    title: 'Tacu Tacu Peruano',
    description: 'Arroz con frijoles refrito',
    image: '🍚',
    prepTime: '25 min',
    difficulty: 'Fácil',
    ingredients: [
      'Arroz cocido del día anterior',
      'Frijoles canarios',
      'Cebolla',
      'Ajo',
      'Aceite',
      'Sal'
    ],
    steps: [
      'Sofríe la cebolla y ajo por 5 minutos',
      'Agrega los frijoles y machaca ligeramente',
      'Incorpora el arroz y mezcla bien',
      'Fríe todo junto por 10 minutos',
      'Forma una costra dorada en el fondo',
      'Sirve con huevo frito o bistec'
    ]
  },
  {
    id: '19',
    title: 'Mondongo Colombiano',
    description: 'Sopa de callos con verduras',
    image: '🍲',
    prepTime: '120 min',
    difficulty: 'Difícil',
    ingredients: [
      'Mondongo limpio',
      'Garbanzos',
      'Mazorca',
      'Yuca',
      'Zanahoria',
      'Cilantro'
    ],
    steps: [
      'Cocina el mondongo por 60 minutos hasta ablandar',
      'Agrega los garbanzos remojados',
      'Incorpora las verduras cortadas en trozos',
      'Cocina por 45 minutos más',
      'Sazona con sal y pimienta',
      'Sirve caliente con cilantro y limón'
    ]
  },
  {
    id: '20',
    title: 'Churrasco Brasileño',
    description: 'Carne a la parrilla estilo brasileño',
    image: '🥩',
    prepTime: '30 min',
    difficulty: 'Medio',
    ingredients: [
      'Picanha',
      'Sal gruesa',
      'Ajo',
      'Farofa',
      'Vinagreta',
      'Pão de açúcar'
    ],
    steps: [
      'Sala la picanha con sal gruesa por 15 minutos',
      'Asa en parrilla bien caliente por 12 minutos',
      'Voltea cada 3 minutos para sellar',
      'Deja reposar por 5 minutos',
      'Corta en láminas contra la fibra',
      'Sirve con farofa y vinagreta'
    ]
  },
  {
    id: '21',
    title: 'Hallacas Venezolanas',
    description: 'Tamal navideño venezolano',
    image: '🫔',
    prepTime: '180 min',
    difficulty: 'Difícil',
    ingredients: [
      'Masa de maíz',
      'Guiso de pollo y cerdo',
      'Aceitunas',
      'Pasas',
      'Hojas de plátano',
      'Pimentón'
    ],
    steps: [
      'Prepara el guiso con las carnes por 45 minutos',
      'Extiende la masa sobre hojas de plátano',
      'Coloca el guiso y los adornos',
      'Envuelve bien formando un rectángulo',
      'Amarra con pabilo y hierve por 60 minutos',
      'Sirve caliente desenvolviendo en la mesa'
    ]
  },
  {
    id: '22',
    title: 'Pastel de Choclo',
    description: 'Pastel chileno con choclo y carne',
    image: '🌽',
    prepTime: '75 min',
    difficulty: 'Medio',
    ingredients: [
      'Choclo desgranado',
      'Pino de carne',
      'Pollo',
      'Huevos duros',
      'Aceitunas',
      'Azúcar'
    ],
    steps: [
      'Prepara el pino con carne molida por 20 minutos',
      'Muele el choclo con leche y azúcar',
      'Coloca el pino en fuente de horno',
      'Agrega trozos de pollo y huevo duro',
      'Cubre con la pasta de choclo',
      'Hornea por 30 minutos hasta dorar'
    ]
  },
  {
    id: '23',
    title: 'Ropa Vieja Cubana',
    description: 'Carne deshilachada en salsa criolla',
    image: '🥩',
    prepTime: '90 min',
    difficulty: 'Medio',
    ingredients: [
      'Falda de res',
      'Pimientos rojos',
      'Cebolla',
      'Tomate',
      'Vino blanco',
      'Comino'
    ],
    steps: [
      'Cocina la carne por 60 minutos hasta ablandar',
      'Deshilacha la carne cuando esté fría',
      'Sofríe cebolla y pimientos por 8 minutos',
      'Agrega tomate y cocina por 10 minutos',
      'Incorpora la carne deshilachada',
      'Cocina todo junto por 15 minutos más'
    ]
  },
  {
    id: '24',
    title: 'Arepa de Huevo',
    description: 'Arepa frita rellena de huevo',
    image: '🥚',
    prepTime: '20 min',
    difficulty: 'Medio',
    ingredients: [
      'Masa de arepa',
      'Huevos',
      'Aceite para freír',
      'Sal',
      'Carne molida (opcional)'
    ],
    steps: [
      'Forma arepas pequeñas y aplana',
      'Fríe en aceite caliente por 3 minutos',
      'Abre un bolsillo en la arepa',
      'Introduce un huevo crudo',
      'Sella y fríe por 5 minutos más',
      'Sirve caliente con suero costeño'
    ]
  },
  {
    id: '25',
    title: 'Humita Boliviana',
    description: 'Tamal dulce de choclo',
    image: '🌽',
    prepTime: '45 min',
    difficulty: 'Medio',
    ingredients: [
      'Choclo tierno',
      'Queso fresco',
      'Azúcar',
      'Anís',
      'Hojas de choclo',
      'Sal'
    ],
    steps: [
      'Ralla el choclo hasta obtener una masa',
      'Mezcla con azúcar y anís por 5 minutos',
      'Agrega trozos de queso fresco',
      'Envuelve en hojas de choclo',
      'Cocina al vapor por 25 minutos',
      'Sirve caliente como postre o acompañamiento'
    ]
  },
  {
    id: '26',
    title: 'Chicharrón Peruano',
    description: 'Cerdo frito crujiente',
    image: '🐷',
    prepTime: '60 min',
    difficulty: 'Medio',
    ingredients: [
      'Panceta de cerdo',
      'Sal',
      'Pimienta',
      'Comino',
      'Camote',
      'Salsa criolla'
    ],
    steps: [
      'Corta la panceta en trozos medianos',
      'Sazona con sal, pimienta y comino',
      'Cocina en su propia grasa por 40 minutos',
      'Aumenta el fuego para dorar por 10 minutos',
      'Sirve con camote sancochado',
      'Acompaña con salsa criolla'
    ]
  },
  {
    id: '27',
    title: 'Patacones Colombianos',
    description: 'Plátano verde frito dos veces',
    image: '🍌',
    prepTime: '15 min',
    difficulty: 'Fácil',
    ingredients: [
      'Plátanos verdes',
      'Aceite para freír',
      'Sal',
      'Ajo',
      'Hogao (opcional)'
    ],
    steps: [
      'Pela y corta los plátanos en rodajas gruesas',
      'Fríe por 3 minutos hasta dorar ligeramente',
      'Retira y aplasta con un plato',
      'Fríe nuevamente por 2 minutos hasta dorar',
      'Sala inmediatamente',
      'Sirve con hogao o guacamole'
    ]
  },
  {
    id: '28',
    title: 'Coxinha Brasileña',
    description: 'Croqueta de pollo en forma de gota',
    image: '🍗',
    prepTime: '60 min',
    difficulty: 'Difícil',
    ingredients: [
      'Pechuga de pollo',
      'Harina de trigo',
      'Caldo de pollo',
      'Huevo',
      'Pan rallado',
      'Aceite para freír'
    ],
    steps: [
      'Cocina y deshilacha el pollo por 20 minutos',
      'Prepara masa con harina y caldo caliente',
      'Forma bolitas con pollo en el centro',
      'Pasa por huevo batido y pan rallado',
      'Fríe en aceite caliente por 5 minutos',
      'Sirve caliente como aperitivo'
    ]
  },
  {
    id: '29',
    title: 'Sopaipillas Chilenas',
    description: 'Masa frita tradicional chilena',
    image: '🫓',
    prepTime: '30 min',
    difficulty: 'Fácil',
    ingredients: [
      'Zapallo cocido',
      'Harina',
      'Polvos de hornear',
      'Sal',
      'Aceite para freír',
      'Chancaca o miel'
    ],
    steps: [
      'Mezcla zapallo pisado con harina por 5 minutos',
      'Agrega polvos de hornear y sal',
      'Forma una masa suave y estira',
      'Corta en cuadrados o círculos',
      'Fríe en aceite caliente por 2 minutos por lado',
      'Sirve caliente con chancaca derretida'
    ]
  },
  {
    id: '30',
    title: 'Morcilla Argentina',
    description: 'Embutido de sangre tradicional',
    image: '🌭',
    prepTime: '45 min',
    difficulty: 'Medio',
    ingredients: [
      'Morcilla fresca',
      'Cebolla',
      'Pimientos',
      'Chimichurri',
      'Pan',
      'Sal'
    ],
    steps: [
      'Pincha la morcilla para evitar que explote',
      'Asa a la parrilla por 15 minutos girando',
      'Sofríe cebolla y pimientos por 8 minutos',
      'Corta la morcilla en rodajas',
      'Sirve con las verduras salteadas',
      'Acompaña con chimichurri y pan'
    ]
  },
  {
    id: '31',
    title: 'Tres Leches',
    description: 'Postre húmedo con tres tipos de leche',
    image: '🍰',
    prepTime: '90 min',
    difficulty: 'Medio',
    ingredients: [
      'Bizcocho esponjoso',
      'Leche condensada',
      'Leche evaporada',
      'Crema de leche',
      'Canela en polvo'
    ],
    steps: [
      'Prepara un bizcocho y deja enfriar por 30 minutos',
      'Mezcla las tres leches',
      'Perfora el bizcocho con un tenedor',
      'Vierte la mezcla de leches lentamente',
      'Refrigera por 4 horas mínimo',
      'Sirve frío espolvoreado con canela'
    ]
  },
  {
    id: '32',
    title: 'Pupusas Salvadoreñas',
    description: 'Tortillas rellenas de El Salvador',
    image: '🫓',
    prepTime: '40 min',
    difficulty: 'Medio',
    ingredients: [
      'Masa de maíz',
      'Queso',
      'Frijoles refritos',
      'Chicharrón',
      'Curtido',
      'Salsa de tomate'
    ],
    steps: [
      'Forma bolitas con la masa de maíz',
      'Aplana y coloca el relleno en el centro',
      'Cierra y forma tortillas gruesas',
      'Cocina en comal por 5 minutos por lado',
      'Sirve caliente con curtido',
      'Acompaña con salsa de tomate'
    ]
  },
  {
    id: '33',
    title: 'Brigadeiro Brasileño',
    description: 'Dulce de chocolate tradicional',
    image: '🍫',
    prepTime: '20 min',
    difficulty: 'Fácil',
    ingredients: [
      'Leche condensada',
      'Cacao en polvo',
      'Mantequilla',
      'Chocolate granulado',
      'Papel para dulces'
    ],
    steps: [
      'Mezcla leche condensada con cacao por 2 minutos',
      'Agrega mantequilla y cocina por 10 minutos',
      'Revuelve hasta que se despegue del fondo',
      'Deja enfriar por 30 minutos',
      'Forma bolitas con las manos',
      'Rueda en chocolate granulado'
    ]
  },
  {
    id: '34',
    title: 'Ají de Gallina',
    description: 'Guiso peruano cremoso con pollo',
    image: '🐔',
    prepTime: '45 min',
    difficulty: 'Medio',
    ingredients: [
      'Pechuga de gallina',
      'Ají amarillo',
      'Pan de molde',
      'Leche evaporada',
      'Nueces',
      'Queso parmesano'
    ],
    steps: [
      'Cocina la gallina por 30 minutos y deshilacha',
      'Remoja el pan en leche por 5 minutos',
      'Licúa ají amarillo con pan y leche',
      'Sofríe la mezcla por 10 minutos',
      'Agrega la gallina y nueces picadas',
      'Sirve con papa sancochada y arroz'
    ]
  },
  {
    id: '35',
    title: 'Cachapa Venezolana',
    description: 'Panqueque de maíz tierno',
    image: '🌽',
    prepTime: '25 min',
    difficulty: 'Fácil',
    ingredients: [
      'Maíz tierno desgranado',
      'Leche',
      'Azúcar',
      'Sal',
      'Queso de mano',
      'Mantequilla'
    ],
    steps: [
      'Licúa el maíz con leche hasta obtener masa',
      'Agrega azúcar y sal al gusto',
      'Cocina como panqueque en sartén por 3 minutos',
      'Voltea cuando esté dorada',
      'Rellena con queso de mano',
      'Dobla por la mitad y sirve caliente'
    ]
  },
  {
    id: '36',
    title: 'Carbonada Criolla',
    description: 'Guiso argentino con zapallo',
    image: '🎃',
    prepTime: '60 min',
    difficulty: 'Medio',
    ingredients: [
      'Carne de res en cubos',
      'Zapallo',
      'Choclo',
      'Papa',
      'Durazno',
      'Cebolla'
    ],
    steps: [
      'Dora la carne en aceite por 10 minutos',
      'Agrega cebolla y sofríe por 5 minutos',
      'Incorpora las verduras cortadas',
      'Cocina a fuego lento por 35 minutos',
      'Agrega durazno en los últimos 10 minutos',
      'Sirve en el zapallo ahuecado'
    ]
  },
  {
    id: '37',
    title: 'Manjar Blanco',
    description: 'Dulce de leche sudamericano',
    image: '🍮',
    prepTime: '120 min',
    difficulty: 'Medio',
    ingredients: [
      'Leche entera',
      'Azúcar',
      'Bicarbonato de sodio',
      'Vainilla',
      'Canela en rama'
    ],
    steps: [
      'Hierve la leche con canela por 10 minutos',
      'Agrega azúcar y bicarbonato',
      'Cocina a fuego lento por 90 minutos',
      'Revuelve constantemente hasta espesar',
      'Agrega vainilla al final',
      'Deja enfriar antes de servir'
    ]
  },
  {
    id: '38',
    title: 'Chupe de Camarones',
    description: 'Sopa peruana cremosa con camarones',
    image: '🦐',
    prepTime: '40 min',
    difficulty: 'Medio',
    ingredients: [
      'Camarones frescos',
      'Papa amarilla',
      'Choclo',
      'Leche evaporada',
      'Queso fresco',
      'Ají amarillo'
    ],
    steps: [
      'Pela los camarones y reserva las cáscaras',
      'Hierve las cáscaras para hacer caldo por 15 minutos',
      'Sofríe ají amarillo por 3 minutos',
      'Agrega papa y choclo al caldo',
      'Cocina por 15 minutos y agrega leche',
      'Incorpora camarones y queso al final'
    ]
  },
  {
    id: '39',
    title: 'Tequeños Venezolanos',
    description: 'Palitos de queso envueltos en masa',
    image: '🧀',
    prepTime: '30 min',
    difficulty: 'Medio',
    ingredients: [
      'Masa de hojaldre',
      'Queso blanco en bastones',
      'Aceite para freír',
      'Huevo para pintar'
    ],
    steps: [
      'Corta la masa en tiras largas',
      'Envuelve cada bastón de queso en espiral',
      'Pinta con huevo batido',
      'Fríe en aceite caliente por 3 minutos',
      'Retira cuando estén dorados',
      'Sirve caliente como aperitivo'
    ]
  },
  {
    id: '40',
    title: 'Curanto Chileno',
    description: 'Cocido tradicional de Chiloé',
    image: '🦪',
    prepTime: '90 min',
    difficulty: 'Difícil',
    ingredients: [
      'Mariscos variados',
      'Pollo',
      'Longaniza',
      'Papa',
      'Milcao',
      'Hojas de nalca'
    ],
    steps: [
      'Calienta piedras en fuego por 60 minutos',
      'Coloca las carnes sobre las piedras',
      'Agrega papas y milcaos',
      'Incorpora los mariscos',
      'Cubre con hojas de nalca húmedas',
      'Cocina al vapor por 45 minutos'
    ]
  },
  {
    id: '41',
    title: 'Mazamorra Morada',
    description: 'Postre peruano de maíz morado',
    image: '🍇',
    prepTime: '45 min',
    difficulty: 'Fácil',
    ingredients: [
      'Maíz morado',
      'Piña',
      'Manzana',
      'Chuño',
      'Azúcar',
      'Canela'
    ],
    steps: [
      'Hierve el maíz morado por 30 minutos',
      'Cuela y reserva el líquido morado',
      'Agrega frutas picadas al líquido',
      'Endulza con azúcar y canela',
      'Espesa con chuño disuelto',
      'Sirve frío como postre'
    ]
  },
  {
    id: '42',
    title: 'Bollo de Yuca',
    description: 'Tamal colombiano de yuca',
    image: '🥔',
    prepTime: '60 min',
    difficulty: 'Medio',
    ingredients: [
      'Yuca rallada',
      'Queso costeño',
      'Sal',
      'Hojas de bijao',
      'Suero costeño'
    ],
    steps: [
      'Ralla la yuca y escurre el exceso de agua',
      'Mezcla con queso desmenuzado y sal',
      'Envuelve en hojas de bijao',
      'Amarra bien con hilo',
      'Cocina en agua hirviendo por 45 minutos',
      'Sirve caliente con suero costeño'
    ]
  },
  {
    id: '43',
    title: 'Pastel de Papa',
    description: 'Pastel chileno con carne y papa',
    image: '🥔',
    prepTime: '75 min',
    difficulty: 'Medio',
    ingredients: [
      'Papa',
      'Pino de carne',
      'Huevos duros',
      'Aceitunas',
      'Leche',
      'Mantequilla'
    ],
    steps: [
      'Cocina y pisa las papas con leche por 20 minutos',
      'Prepara el pino con carne molida',
      'Coloca una capa de puré en molde',
      'Agrega el pino, huevo y aceitunas',
      'Cubre con más puré de papa',
      'Hornea por 30 minutos hasta dorar'
    ]
  },
  {
    id: '44',
    title: 'Chicha Morada',
    description: 'Bebida peruana de maíz morado',
    image: '🥤',
    prepTime: '40 min',
    difficulty: 'Fácil',
    ingredients: [
      'Maíz morado',
      'Piña',
      'Manzana',
      'Canela',
      'Clavo de olor',
      'Azúcar'
    ],
    steps: [
      'Hierve el maíz con especias por 25 minutos',
      'Agrega cáscaras de piña y manzana',
      'Cocina por 10 minutos más',
      'Cuela y endulza al gusto',
      'Agrega frutas picadas',
      'Sirve frío con hielo'
    ]
  },
  {
    id: '45',
    title: 'Sopa Paraguaya',
    description: 'Pan de maíz paraguayo',
    image: '🌽',
    prepTime: '50 min',
    difficulty: 'Medio',
    ingredients: [
      'Harina de maíz',
      'Queso Paraguay',
      'Cebolla',
      'Huevos',
      'Leche',
      'Aceite'
    ],
    steps: [
      'Sofríe la cebolla hasta dorar por 8 minutos',
      'Mezcla harina de maíz con leche',
      'Bate los huevos y agrega a la mezcla',
      'Incorpora queso desmenuzado y cebolla',
      'Hornea en molde engrasado por 35 minutos',
      'Sirve caliente como acompañamiento'
    ]
  },
  {
    id: '46',
    title: 'Chivito Uruguayo',
    description: 'Sándwich uruguayo completo',
    image: '🥪',
    prepTime: '25 min',
    difficulty: 'Fácil',
    ingredients: [
      'Pan de hamburguesa',
      'Churrasco de ternera',
      'Jamón',
      'Queso',
      'Huevo frito',
      'Tomate, lechuga'
    ],
    steps: [
      'Asa el churrasco por 6 minutos por lado',
      'Tuesta el pan ligeramente',
      'Fríe el huevo hasta que esté firme',
      'Arma el sándwich con todos los ingredientes',
      'Agrega mayonesa y condimentos',
      'Sirve con papas fritas'
    ]
  },
  {
    id: '47',
    title: 'Dulce de Leche',
    description: 'Manjar tradicional argentino',
    image: '🍯',
    prepTime: '180 min',
    difficulty: 'Medio',
    ingredients: [
      'Leche entera',
      'Azúcar',
      'Bicarbonato de sodio',
      'Vainilla'
    ],
    steps: [
      'Mezcla leche con azúcar en olla pesada',
      'Agrega bicarbonato y revuelve',
      'Cocina a fuego medio por 2 horas',
      'Revuelve frecuentemente para evitar que se pegue',
      'Agrega vainilla cuando esté espeso',
      'Enfría antes de envasar'
    ]
  },
  {
    id: '48',
    title: 'Causa Limeña',
    description: 'Terrina peruana de papa amarilla',
    image: '🥔',
    prepTime: '35 min',
    difficulty: 'Medio',
    ingredients: [
      'Papa amarilla',
      'Ají amarillo',
      'Limón',
      'Atún',
      'Mayonesa',
      'Palta'
    ],
    steps: [
      'Cocina y pisa las papas por 20 minutos',
      'Mezcla con ají amarillo y limón',
      'Prepara relleno con atún y mayonesa',
      'Forma capas en molde rectangular',
      'Refrigera por 2 horas',
      'Decora con palta y sirve frío'
    ]
  },
  {
    id: '49',
    title: 'Empanada de Pino',
    description: 'Empanada chilena tradicional',
    image: '🥟',
    prepTime: '50 min',
    difficulty: 'Medio',
    ingredients: [
      'Masa para empanadas',
      'Pino de carne',
      'Huevo duro',
      'Aceitunas negras',
      'Pasas',
      'Huevo para pintar'
    ],
    steps: [
      'Prepara el pino con cebolla y carne por 20 minutos',
      'Deja enfriar el relleno completamente',
      'Rellena las empanadas con pino y adornos',
      'Cierra con repulgue tradicional',
      'Pinta con huevo batido',
      'Hornea a 200°C por 25 minutos'
    ]
  },
  {
    id: '50',
    title: 'Alfajores Argentinos',
    description: 'Galletas rellenas con dulce de leche',
    image: '🍪',
    prepTime: '60 min',
    difficulty: 'Medio',
    ingredients: [
      'Harina',
      'Manteca',
      'Yemas de huevo',
      'Dulce de leche',
      'Coco rallado',
      'Azúcar impalpable'
    ],
    steps: [
      'Mezcla harina con manteca y yemas por 10 minutos',
      'Forma masa y estira finamente',
      'Corta círculos y hornea por 12 minutos',
      'Deja enfriar las galletas completamente',
      'Rellena con dulce de leche',
      'Rueda en coco rallado'
    ]
  },
  {
    id: '51',
    title: 'Picante de Pollo',
    description: 'Guiso boliviano picante',
    image: '🌶️',
    prepTime: '45 min',
    difficulty: 'Medio',
    ingredients: [
      'Pollo en presas',
      'Ají colorado',
      'Papa',
      'Chuño',
      'Cebolla',
      'Comino'
    ],
    steps: [
      'Dora las presas de pollo por 10 minutos',
      'Sofríe cebolla con ají colorado por 5 minutos',
      'Agrega el pollo y cubre con agua',
      'Cocina por 20 minutos',
      'Incorpora papa y chuño',
      'Cocina hasta que las papas estén tiernas'
    ]
  },
  {
    id: '52',
    title: 'Quipe Libanés-Venezolano',
    description: 'Croqueta de trigo bulgur rellena',
    image: '🥙',
    prepTime: '90 min',
    difficulty: 'Difícil',
    ingredients: [
      'Trigo bulgur',
      'Carne molida',
      'Cebolla',
      'Piñones',
      'Especias árabes',
      'Aceite para freír'
    ],
    steps: [
      'Remoja el bulgur por 30 minutos',
      'Prepara relleno con carne y especias por 15 minutos',
      'Forma masa con bulgur escurrido',
      'Rellena y forma croquetas ovaladas',
      'Fríe en aceite caliente por 5 minutos',
      'Sirve caliente con yogur'
    ]
  },
  {
    id: '53',
    title: 'Seco de Cabrito',
    description: 'Guiso peruano norteño',
    image: '🐐',
    prepTime: '120 min',
    difficulty: 'Difícil',
    ingredients: [
      'Cabrito en trozos',
      'Cilantro',
      'Chicha de jora',
      'Frijoles canarios',
      'Ají amarillo',
      'Comino'
    ],
    steps: [
      'Marina el cabrito con especias por 30 minutos',
      'Dora la carne en aceite caliente por 15 minutos',
      'Licúa cilantro con chicha de jora',
      'Agrega la mezcla verde a la carne',
      'Cocina a fuego lento por 60 minutos',
      'Sirve con frijoles y yuca'
    ]
  },
  {
    id: '54',
    title: 'Arepa Reina Pepiada',
    description: 'Arepa rellena con pollo y aguacate',
    image: '🥑',
    prepTime: '30 min',
    difficulty: 'Fácil',
    ingredients: [
      'Arepas cocidas',
      'Pechuga de pollo',
      'Aguacate',
      'Mayonesa',
      'Cebolla',
      'Cilantro'
    ],
    steps: [
      'Cocina y desmenuza el pollo por 20 minutos',
      'Mezcla con aguacate pisado',
      'Agrega mayonesa y cebolla picada',
      'Sazona con sal y cilantro',
      'Abre las arepas por la mitad',
      'Rellena generosamente y sirve'
    ]
  },
  {
    id: '55',
    title: 'Mate Cocido',
    description: 'Infusión tradicional argentina',
    image: '🧉',
    prepTime: '10 min',
    difficulty: 'Fácil',
    ingredients: [
      'Yerba mate',
      'Agua caliente',
      'Azúcar (opcional)',
      'Leche (opcional)'
    ],
    steps: [
      'Hierve agua sin que llegue a borbotones',
      'Coloca yerba mate en saquitos o colador',
      'Vierte agua caliente sobre la yerba',
      'Deja reposar por 3 minutos',
      'Endulza si deseas',
      'Sirve caliente en tazas'
    ]
  }
];