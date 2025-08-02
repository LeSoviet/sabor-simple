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

// Array con recetas sudamericanas auténticas para almuerzo y cena
export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Asado Argentino',
    description: 'Tradicional asado argentino con chimichurri casero',
    image: '🥩',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '2kg de tira de asado',
      '1kg de chorizo criollo',
      '500g de morcilla',
      'Sal gruesa',
      'Para chimichurri: perejil, ajo, orégano, vinagre, aceite'
    ],
    steps: [
      'Enciende el fuego y deja que se forme buena brasa',
      'Sala la carne 30 minutos antes de cocinar',
      'Coloca la carne sobre la parrilla a fuego medio',
      'Cocina 45 minutos por lado para tira de asado',
      'Prepara chimichurri mezclando todos los ingredientes',
      'Sirve la carne con chimichurri y ensalada'
    ]
  },
  {
    id: '2',
    title: 'Locro Argentino',
    description: 'Guiso tradicional argentino con maíz, zapallo y carne',
    image: '🍲',
    prepTime: '3 horas',
    difficulty: 'Medio',
    ingredients: [
      '500g de maíz blanco remojado',
      '300g de zapallo',
      '200g de carne de cerdo',
      '200g de chorizo colorado',
      '1 cebolla grande',
      'Pimentón dulce',
      'Comino, sal y pimienta'
    ],
    steps: [
      'Cocina el maíz en agua durante 2 horas hasta que esté tierno',
      'En otra olla, dora la carne de cerdo cortada en cubos',
      'Agrega cebolla picada y sofríe hasta dorar',
      'Incorpora el zapallo en cubos y el chorizo',
      'Añade el maíz cocido con su caldo',
      'Condimenta y cocina 45 minutos más hasta espesar'
    ]
  },
  {
    id: '3',
    title: 'Feijoada Brasileña',
    description: 'Plato nacional de Brasil con frijoles negros y carnes',
    image: '🫘',
    prepTime: '4 horas',
    difficulty: 'Difícil',
    ingredients: [
      '500g de frijoles negros',
      '300g de carne seca',
      '200g de costilla de cerdo',
      '150g de chorizo',
      '100g de tocino',
      '2 cebollas',
      'Ajo, laurel, naranja'
    ],
    steps: [
      'Remoja los frijoles durante la noche',
      'Cocina los frijoles con laurel durante 2 horas',
      'En otra olla, dora todas las carnes',
      'Agrega cebolla y ajo sofrito',
      'Incorpora los frijoles cocidos',
      'Cocina todo junto 1 hora más hasta espesar',
      'Sirve con arroz blanco, farofa y naranja'
    ]
  },
  {
    id: '4',
    title: 'Ajiaco Colombiano',
    description: 'Sopa tradicional bogotana con pollo y tres tipos de papa',
    image: '🍜',
    prepTime: '1.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '1 pollo entero',
      '500g papa criolla',
      '500g papa pastusa',
      '300g papa sabanera',
      '200g de mazorcas tiernas',
      'Guascas secas',
      'Crema de leche, alcaparras'
    ],
    steps: [
      'Cocina el pollo en agua con sal durante 45 minutos',
      'Retira el pollo y desmenuza, reserva el caldo',
      'Cocina las papas en el caldo, empezando por las más duras',
      'Agrega las mazorcas cortadas en rodajas',
      'Incorpora las guascas y el pollo desmenuzado',
      'Sirve con crema, alcaparras y aguacate'
    ]
  },
  {
    id: '5',
    title: 'Ceviche Peruano',
    description: 'Pescado fresco marinado en limón con ají y cebolla',
    image: '🐟',
    prepTime: '30 min',
    difficulty: 'Medio',
    ingredients: [
      '500g de pescado blanco fresco',
      '10 limones peruanos',
      '1 cebolla roja',
      '2 ajíes amarillos',
      '1 trozo de jengibre',
      'Cilantro, sal, pimienta',
      'Camote, choclo, cancha'
    ],
    steps: [
      'Corta el pescado en cubos de 2cm',
      'Corta la cebolla en juliana fina',
      'Licúa limón, ají, jengibre y sal para hacer leche de tigre',
      'Marina el pescado con la leche de tigre por 10 minutos',
      'Agrega la cebolla y cilantro',
      'Sirve inmediatamente con camote y choclo'
    ]
  },
  {
    id: '6',
    title: 'Empanadas Argentinas',
    description: 'Empanadas criollas horneadas con carne cortada a cuchillo',
    image: '🥟',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '500g de carne de res',
      '2 cebollas grandes',
      '2 huevos duros',
      'Aceitunas verdes',
      'Pimentón dulce',
      'Comino, sal, pimienta',
      'Tapas de empanada'
    ],
    steps: [
      'Corta la carne en cubos pequeños a cuchillo',
      'Sofríe la cebolla hasta dorar',
      'Agrega la carne y cocina hasta dorar',
      'Condimenta con pimentón, comino, sal y pimienta',
      'Deja enfriar y agrega huevo duro picado y aceitunas',
      'Rellena las tapas, cierra y hornea 20 minutos a 200°C'
    ]
  },
  {
    id: '7',
    title: 'Moqueca Bahiana',
    description: 'Guiso brasileño de pescado con leche de coco y dendê',
    image: '🥥',
    prepTime: '45 min',
    difficulty: 'Medio',
    ingredients: [
      '600g de pescado en postas',
      '400ml de leche de coco',
      '2 tomates',
      '1 pimiento rojo',
      '1 cebolla',
      'Aceite de dendê',
      'Cilantro, limón, sal'
    ],
    steps: [
      'Marina el pescado con limón y sal por 15 minutos',
      'Sofríe cebolla, tomate y pimiento en aceite de dendê',
      'Agrega la leche de coco y cocina 5 minutos',
      'Incorpora el pescado marinado',
      'Cocina 15 minutos hasta que el pescado esté tierno',
      'Finaliza con cilantro fresco y sirve con arroz'
    ]
  },
  {
    id: '8',
    title: 'Bandeja Paisa',
    description: 'Plato típico antioqueño con frijoles, carne y acompañamientos',
    image: '🍽️',
    prepTime: '3 horas',
    difficulty: 'Difícil',
    ingredients: [
      '300g de frijoles rojos',
      '200g de carne molida',
      '200g de chicharrón',
      '4 huevos',
      '2 plátanos maduros',
      'Arroz blanco',
      'Aguacate, arepa'
    ],
    steps: [
      'Cocina los frijoles con hogao durante 2 horas',
      'Prepara la carne molida con cebolla y tomate',
      'Fríe el chicharrón hasta dorar',
      'Cocina los huevos fritos',
      'Fríe las tajadas de plátano maduro',
      'Sirve todos los componentes en un plato grande'
    ]
  },
  {
    id: '9',
    title: 'Anticuchos Peruanos',
    description: 'Brochetas de corazón de res marinadas en ají panca',
    image: '🍢',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '500g de corazón de res',
      '3 ajíes panca',
      '4 dientes de ajo',
      '2 cucharadas de vinagre',
      'Comino, sal, pimienta',
      'Aceite',
      'Papas sancochadas'
    ],
    steps: [
      'Limpia y corta el corazón en cubos',
      'Remoja los ajíes panca y licúa con ajo y vinagre',
      'Marina la carne con la pasta de ají por 2 horas',
      'Ensarta la carne en palitos de anticucho',
      'Asa a la parrilla 3-4 minutos por lado',
      'Sirve con papas sancochadas y ají verde'
    ]
  },
  {
    id: '10',
    title: 'Cazuela de Mariscos',
    description: 'Guiso chileno con mariscos frescos y papas',
    image: '🦐',
    prepTime: '1 hora',
    difficulty: 'Medio',
    ingredients: [
      '300g de camarones',
      '200g de almejas',
      '200g de mejillones',
      '4 papas medianas',
      '1 cebolla',
      'Vino blanco',
      'Crema, perejil'
    ],
    steps: [
      'Limpia todos los mariscos',
      'Sofríe la cebolla hasta transparentar',
      'Agrega las papas en cubos y caldo de pescado',
      'Cocina 15 minutos hasta que las papas estén tiernas',
      'Incorpora los mariscos y vino blanco',
      'Cocina 10 minutos más, agrega crema y perejil'
    ]
  },
  {
    id: '11',
    title: 'Ropa Vieja Venezolana',
    description: 'Carne desmechada guisada con vegetales',
    image: '🥩',
    prepTime: '2.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '1kg de falda de res',
      '2 cebollas',
      '3 tomates',
      '1 pimiento rojo',
      '4 dientes de ajo',
      'Comino, orégano',
      'Aceite, sal, pimienta'
    ],
    steps: [
      'Cocina la carne en agua con sal durante 1.5 horas',
      'Desmecha la carne cuando esté tierna',
      'Sofríe cebolla, ajo, tomate y pimiento',
      'Agrega la carne desmechada al sofrito',
      'Condimenta con comino y orégano',
      'Cocina 30 minutos más hasta que esté bien sazonada'
    ]
  },
  {
    id: '12',
    title: 'Sancocho Dominicano',
    description: 'Guiso dominicano con siete carnes y vegetales',
    image: '🍲',
    prepTime: '3 horas',
    difficulty: 'Difícil',
    ingredients: [
      '300g de pollo',
      '300g de carne de res',
      '200g de cerdo',
      '200g de longaniza',
      'Yuca, ñame, calabaza',
      'Plátano verde, mazorca',
      'Cilantro ancho, orégano'
    ],
    steps: [
      'Cocina todas las carnes en agua con sal durante 1 hora',
      'Agrega los tubérculos más duros primero',
      'Incorpora calabaza y plátano verde',
      'Añade la mazorca en rodajas',
      'Condimenta con cilantro ancho y orégano',
      'Cocina hasta que todos los vegetales estén tiernos'
    ]
  },
  {
    id: '13',
    title: 'Churrasco Brasileño',
    description: 'Carne a la parrilla estilo brasileño con farofa',
    image: '🥩',
    prepTime: '1 hora',
    difficulty: 'Fácil',
    ingredients: [
      '4 bifes de chorizo',
      'Sal gruesa',
      'Ajo',
      'Para farofa: harina de mandioca, cebolla, tocino',
      'Vinagreta de tomate y cebolla',
      'Frijoles negros'
    ],
    steps: [
      'Sala la carne 30 minutos antes de cocinar',
      'Asa la carne a la parrilla 4-5 minutos por lado',
      'Prepara farofa dorando tocino, cebolla y harina',
      'Haz vinagreta con tomate, cebolla y vinagre',
      'Calienta los frijoles negros',
      'Sirve la carne con todos los acompañamientos'
    ]
  },
  {
    id: '14',
    title: 'Mondongo Colombiano',
    description: 'Sopa de callos con vegetales y especias',
    image: '🍜',
    prepTime: '4 horas',
    difficulty: 'Difícil',
    ingredients: [
      '1kg de mondongo limpio',
      '300g de costilla de cerdo',
      '2 mazorcas',
      'Yuca, ñame, calabaza',
      'Cilantro, cebolla larga',
      'Ajo, comino, color'
    ],
    steps: [
      'Cocina el mondongo en olla a presión 1 hora',
      'Agrega la costilla y cocina 30 minutos más',
      'Incorpora los tubérculos cortados en trozos',
      'Añade mazorca, calabaza y condimentos',
      'Cocina hasta que todo esté tierno',
      'Sirve con arroz blanco y aguacate'
    ]
  },
  {
    id: '15',
    title: 'Parrillada Uruguaya',
    description: 'Asado uruguayo con achuras y carnes variadas',
    image: '🔥',
    prepTime: '2.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '500g de asado de tira',
      '400g de vacío',
      '300g de chorizo',
      '200g de morcilla',
      'Chinchulines, riñones',
      'Sal gruesa',
      'Chimichurri'
    ],
    steps: [
      'Prepara el fuego con leña y carbón',
      'Sala todas las carnes 30 minutos antes',
      'Comienza con las achuras que se cocinan rápido',
      'Coloca las carnes según su tiempo de cocción',
      'Cocina a fuego medio, dando vuelta una sola vez',
      'Sirve con chimichurri y ensalada mixta'
    ]
  },
  {
    id: '16',
    title: 'Ají de Gallina',
    description: 'Plato peruano cremoso con pollo deshilachado y ají amarillo',
    image: '🐔',
    prepTime: '1.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '1 gallina o pollo',
      '6 ajíes amarillos',
      '100g de nueces',
      '4 rebanadas de pan',
      'Leche evaporada',
      'Queso parmesano',
      'Papas amarillas, huevos'
    ],
    steps: [
      'Cocina la gallina hasta que esté tierna y deshilacha',
      'Licúa ajíes amarillos sin venas con nueces',
      'Remoja el pan en leche y licúa',
      'Sofríe la pasta de ají en aceite',
      'Agrega el pan licuado y la carne',
      'Incorpora leche evaporada y queso, sirve con papa y huevo'
    ]
  },
  {
    id: '17',
    title: 'Carbonada Criolla',
    description: 'Guiso argentino con carne, zapallo y frutas',
    image: '🎃',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '800g de carne de res en cubos',
      '500g de zapallo',
      '300g de batatas',
      '2 choclos',
      '2 duraznos',
      '2 peras',
      'Cebolla, tomate, arroz'
    ],
    steps: [
      'Dora la carne en aceite caliente',
      'Agrega cebolla y tomate picado',
      'Incorpora agua caliente y cocina 1 hora',
      'Añade zapallo, batata y choclo en trozos',
      'Agrega las frutas peladas y cortadas',
      'Cocina hasta que todo esté tierno, sirve con arroz'
    ]
  },
  {
    id: '18',
    title: 'Mole de Olla Mexicano',
    description: 'Guiso mexicano con carne de res y chiles',
    image: '🌶️',
    prepTime: '2.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '1kg de chambarete',
      '4 chiles guajillo',
      '2 chiles ancho',
      '3 xoconostles',
      '300g de ejotes',
      '2 elotes',
      'Calabacitas, cebolla'
    ],
    steps: [
      'Cocina la carne en agua con sal durante 1.5 horas',
      'Tuesta y remoja los chiles, luego licúa',
      'Cuela la salsa de chile y agrégala al caldo',
      'Incorpora xoconostles y verduras',
      'Cocina 30 minutos hasta que las verduras estén tiernas',
      'Sirve caliente con tortillas'
    ]
  },
  {
    id: '19',
    title: 'Pachamanca Peruana',
    description: 'Cocción ancestral peruana en horno de tierra',
    image: '🏔️',
    prepTime: '4 horas',
    difficulty: 'Difícil',
    ingredients: [
      '1kg de carne de res',
      '1kg de cerdo',
      '1 pollo',
      'Papas nativas',
      'Camotes, yucas',
      'Choclos, habas',
      'Hierbas aromáticas'
    ],
    steps: [
      'Cava un hoyo y calienta piedras con fuego',
      'Marina las carnes con especias y hierbas',
      'Coloca las piedras calientes en el hoyo',
      'Acomoda carnes y tubérculos en capas',
      'Cubre con mantas y tierra',
      'Deja cocinar 3 horas en el calor de las piedras'
    ]
  },
  {
    id: '20',
    title: 'Cazuela de Cordero',
    description: 'Guiso patagónico con cordero y vegetales de estación',
    image: '🐑',
    prepTime: '2.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '1kg de cordero en trozos',
      '4 papas',
      '2 zanahorias',
      '1 calabaza',
      '200g de arvejas',
      'Cebolla, ajo',
      'Vino tinto, hierbas'
    ],
    steps: [
      'Dora el cordero en aceite bien caliente',
      'Agrega cebolla y ajo sofrito',
      'Incorpora vino tinto y deja reducir',
      'Añade agua caliente y cocina 1.5 horas',
      'Agrega vegetales según su tiempo de cocción',
      'Cocina hasta que todo esté tierno y sabroso'
    ]
  },
  {
    id: '21',
    title: 'Tacu Tacu Peruano',
    description: 'Arroz con frijoles refrito, coronado con bistec',
    image: '🍚',
    prepTime: '45 min',
    difficulty: 'Fácil',
    ingredients: [
      '2 tazas de arroz cocido',
      '1 taza de frijoles canarios',
      '4 bistecs de res',
      '1 cebolla roja',
      '3 dientes de ajo',
      'Aceite, sal, pimienta',
      'Plátano frito'
    ],
    steps: [
      'Sofríe cebolla y ajo hasta dorar',
      'Agrega los frijoles cocidos y machaca ligeramente',
      'Incorpora el arroz y mezcla bien',
      'Forma una costra dorando por ambos lados',
      'Aparte, cocina los bistecs a la plancha',
      'Sirve el tacu tacu coronado con bistec y plátano'
    ]
  },
  {
    id: '22',
    title: 'Chupe de Camarones',
    description: 'Sopa peruana cremosa con camarones y papas',
    image: '🦐',
    prepTime: '1 hora',
    difficulty: 'Medio',
    ingredients: [
      '500g de camarones',
      '4 papas amarillas',
      '200g de habas verdes',
      '1 taza de leche',
      '200g de queso fresco',
      '2 huevos',
      'Ají amarillo, culantro'
    ],
    steps: [
      'Pela los camarones y haz caldo con las cáscaras',
      'Sofríe ají amarillo molido en aceite',
      'Agrega el caldo de camarones colado',
      'Incorpora papas en cubos y habas',
      'Añade leche, queso desmenuzado y camarones',
      'Finaliza con huevos batidos y culantro picado'
    ]
  },
  {
    id: '23',
    title: 'Pabellón Criollo',
    description: 'Plato nacional venezolano con carne, caraotas y arroz',
    image: '🇻🇪',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '500g de falda de res',
      '300g de caraotas negras',
      '2 tazas de arroz',
      '2 plátanos maduros',
      'Cebolla, ajo, tomate',
      'Queso blanco rallado'
    ],
    steps: [
      'Cocina la carne hasta que esté tierna y desmecha',
      'Guisa la carne desmechada con sofrito',
      'Cocina las caraotas con sofrito hasta espesar',
      'Prepara arroz blanco graneado',
      'Fríe tajadas de plátano maduro',
      'Sirve todos los componentes separados en el plato'
    ]
  },
  {
    id: '24',
    title: 'Curanto Chileno',
    description: 'Cocción tradicional chilota con mariscos y carnes',
    image: '🌊',
    prepTime: '3 horas',
    difficulty: 'Difícil',
    ingredients: [
      '1kg de almejas',
      '500g de choritos',
      '300g de longaniza',
      '4 papas',
      '1 pollo trozado',
      'Milcaos, chapaleles',
      'Hojas de nalca'
    ],
    steps: [
      'Cava un hoyo y calienta piedras volcánicas',
      'Coloca las piedras calientes en el fondo',
      'Acomoda carnes, mariscos y papas en capas',
      'Cubre con hojas de nalca húmedas',
      'Tapa con tierra y deja cocinar 2 horas',
      'Destapa cuidadosamente y sirve caliente'
    ]
  },
  {
    id: '25',
    title: 'Seco de Cabrito',
    description: 'Guiso norteño peruano con cabrito y cilantro',
    image: '🐐',
    prepTime: '2.5 horas',
    difficulty: 'Medio',
    ingredients: [
      '1kg de cabrito en trozos',
      '2 atados de cilantro',
      '1 atado de culantro',
      '4 ajíes amarillos',
      '1 cebolla roja',
      'Chicha de jora',
      'Frijoles canarios'
    ],
    steps: [
      'Marina el cabrito con ajo y comino',
      'Licúa cilantro, culantro y ajíes con un poco de caldo',
      'Dora la carne en aceite caliente',
      'Agrega la pasta verde y sofríe',
      'Incorpora chicha de jora y cocina tapado',
      'Sirve con frijoles y yuca sancochada'
    ]
  },
  {
    id: '26',
    title: 'Matambre Relleno',
    description: 'Carne argentina rellena con vegetales y huevo',
    image: '🥩',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '1 matambre de res',
      '3 huevos duros',
      '2 zanahorias',
      '1 pimiento rojo',
      'Espinaca blanqueada',
      'Sal, pimienta, orégano',
      'Hilo de cocina'
    ],
    steps: [
      'Abre el matambre como un libro y condimenta',
      'Coloca capas de vegetales y huevos duros',
      'Enrolla firmemente y ata con hilo',
      'Dora en aceite por todos los lados',
      'Hornea a 180°C durante 1 hora',
      'Deja enfriar antes de cortar en rodajas'
    ]
  },
  {
    id: '27',
    title: 'Caldeirada Brasileña',
    description: 'Guiso de pescado brasileño con leche de coco',
    image: '🐟',
    prepTime: '1 hora',
    difficulty: 'Medio',
    ingredients: [
      '800g de pescado en postas',
      '300g de camarones',
      '400ml de leche de coco',
      '3 tomates',
      '1 pimiento',
      'Cebolla, ajo, cilantro',
      'Aceite de dendê'
    ],
    steps: [
      'Marina el pescado con limón y sal',
      'Sofríe cebolla, ajo, tomate y pimiento',
      'Agrega la leche de coco y hierve suavemente',
      'Incorpora el pescado y camarones',
      'Cocina 15 minutos sin revolver mucho',
      'Finaliza con cilantro y aceite de dendê'
    ]
  },
  {
    id: '28',
    title: 'Humita en Chala',
    description: 'Tamal andino de choclo tierno envuelto en chala',
    image: '🌽',
    prepTime: '2 horas',
    difficulty: 'Medio',
    ingredients: [
      '8 choclos tiernos',
      '200g de queso fresco',
      '1 cebolla',
      '2 ajíes amarillos',
      'Leche, mantequilla',
      'Sal, pimienta, anís',
      'Chalas de choclo'
    ],
    steps: [
      'Desgrana los choclos y reserva las chalas',
      'Muele el choclo hasta obtener una pasta',
      'Sofríe cebolla y ají amarillo',
      'Mezcla el choclo molido con el sofrito',
      'Agrega queso, leche y condimentos',
      'Envuelve en chalas y cocina al vapor 45 minutos'
    ]
  },
  {
    id: '29',
    title: 'Picanha Brasileña',
    description: 'Corte brasileño de res asado con sal gruesa',
    image: '🥩',
    prepTime: '1 hora',
    difficulty: 'Fácil',
    ingredients: [
      '1kg de picanha con grasa',
      'Sal gruesa',
      'Ajo machacado',
      'Para acompañar: farofa, vinagreta',
      'Arroz blanco',
      'Frijoles tropeiros'
    ],
    steps: [
      'Corta la picanha en bifes gruesos',
      'Sala generosamente con sal gruesa',
      'Deja reposar 30 minutos a temperatura ambiente',
      'Asa a la parrilla 4-5 minutos por lado',
      'La grasa debe quedar dorada y crocante',
      'Sirve inmediatamente con acompañamientos tradicionales'
    ]
  },
  {
    id: '30',
    title: 'Estofado de Llama',
    description: 'Guiso altiplánico con carne de llama y papas nativas',
    image: '🦙',
    prepTime: '3 horas',
    difficulty: 'Medio',
    ingredients: [
      '800g de carne de llama',
      '500g de papas nativas',
      '200g de chuño',
      '1 cebolla',
      '3 ajíes amarillos',
      'Hierba buena, orégano',
      'Chicha de jora'
    ],
    steps: [
      'Corta la carne en trozos medianos',
      'Dora la carne en aceite bien caliente',
      'Agrega cebolla y ají amarillo molido',
      'Incorpora chicha de jora y hierve',
      'Cocina tapado durante 2 horas',
      'Agrega papas y chuño, cocina hasta tiernizar'
    ]
  }
];

// Función para obtener recetas por dificultad
export const getRecipesByDifficulty = (difficulty: Recipe['difficulty']): Recipe[] => {
  return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Función para buscar recetas por título o ingredientes
export const searchRecipes = (query: string): Recipe[] => {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowercaseQuery) ||
    recipe.description.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(lowercaseQuery)
    )
  );
};

// Función para obtener una receta aleatoria
export const getRandomRecipe = (): Recipe => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
};