const productos = [
  {
    id: "01",
    name: "Trufa LaNUt PIstacho 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 20,
    price: 200,
    category: 'trufas',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwce7dbcaa/medium/1002192_4.png"
  },
  {
    id: "02",
    name: "Trufa laCreme al Leche 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 0,
    price: 200,
    category: 'trufas',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw0623cf01/medium/1002193_1.png"
  },
  {
    id: "03",
    name: "Trufa Tarta de Limon 30g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 5,
    price: 200,
    category: 'trufas',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3a43539c/medium/1003424_1.png"
  },
  {
    id: "04",
    name: "Trufa Maracuja 30g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 3,
    price: 200,
    category: 'trufas',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1b8ac003/medium/1002639_1.png"
  },
  {
    id: "05",
    name: "Trufa Mezzo 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 2,
    price: 200,
    category: 'trufas',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwa8f754a0/medium/1003608_1.png"
  },
  {
    id: "06",
    name: "Trufa de Chocolate y Pistacho 30g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 10,
    price: 70,
    category: 'trufas',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1787ca6b/medium/1003394_1.png"
  },

  // Items Pascua
  {
    id: "07",
    category: 'pascua',
    name: "Peluche de Pascua Conejo Chef",
    description: [
      { resumen: "El peluche del Conejito Chef es ideal para crear sets de regalo, cestas o simplemente para deleitar a los niños. Reúne todo el encanto del entrañable Conejo de Pascua." },
      { detalles: ["Peluche Oficial del Chef Conejo Cacau Show", "Regalo", "Forma Cestas y Kits"] }
    ],
    stock: 5,
    price: 5000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwc226be45/medium/2006329_1.png"
  },
  {
    id: "08",
    category: 'pascua',
    name: "Huevo de Pascua con Peluche Felcidad con LED Ositos Cariñosos 170g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Peluche Oficial del Chef Conejo Cacau Show", "Regalo", "Forma Cestas y Kits"] }
    ],
    stock: 10,
    price: 18000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwf1ad9c04/medium/1003908_1.png"
  },
  {
    id: "09",
    category: 'pascua',
    name: "Huevo de Pascua con Peluche Snoopy Astronauta 170g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 10,
    price: 16200,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw6d946df2/medium/1003938_1.png"
  },
  {
    id: "10",
    category: 'pascua',
    name: "Tableta de Chocolate con Peluche Sombrero Seleccionador Harry Potter 160g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 10,
    price: 16200,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw91d68de8/medium/1003996_1.png"
  },
  {
    id: "11",
    category: 'pascua',
    name: "Huevo de Pascua con Pelota de CBF Chocodeportes 170g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 0,
    price: 16200,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw05216c16/medium/1003902_1.png"
  },
  {
    id: "12",
    category: 'pascua',
    name: "Caja de Bombones de Sueños 150g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 0,
    price: 17000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw790cfcd5/medium/1002558_1.png"
  },
  // FIn de Items Pascua

  // Comienzo Chocolates
  {
    id: "13",
    category: 'chocolates',
    name: "Tableta laCreme de Chocolate 100g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 0,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw153e5cdc/medium/1002638_2.png"
  },
  {
    id: "14",
    category: 'chocolates',
    name: "Tableta laCreme de Chocolate Gold Blanco 100g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 0,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw7de46c2b/medium/1003637_2.png"
  },
  {
    id: "15",
    category: 'chocolates',
    name: "Tableta laCreme de Chocolate Blanco con Pistacho 100g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 3,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1d277e99/medium/1003788_1.png"
  },
  {
    id: "16",
    category: 'chocolates',
    name: "Tableta laCreme de Chocolate y Menta 100g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 6,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw156d052f/medium/1002962_1.png"
  },
  {
    id: "17",
    category: 'chocolates',
    name: "Tableta LaNut y Avellanas 100g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 2,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwe5f28520/medium/1002862_1.png"
  },
  {
    id: "18",
    category: 'chocolates',
    name: "Tableta laNut Pistacho Dubai 100g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwbe5eaff3/medium/1003638_1.png"
  },
  // Fin de chocolates

  // Comienzo de Regalos
  {
    id: "19",
    category: 'gifts',
    name: "Caja de bombons MiniShow laCreme Surtido",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwc899bff8/medium/1003102_1.png"
  },
  {
    id: "20",
    category: 'gifts',
    name: "Bombons Petit Deli Brownie",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwf9206b4b/medium/1002792_1.png"
  },
  {
    id: "21",
    category: 'gifts',
    name: "Caja de Bombons Surtidos Cacao Show",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw4493faab/medium/1001680_1.png"
  },
  {
    id: "22",
    category: 'gifts',
    name: "Caja de bombons clasicos Surtido",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw40589a38/medium/1002770_1.png"
  },
  {
    id: "23",
    category: 'gifts',
    name: "Taza Ositos Cariñositos Gruñon Azul",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: 'https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwb551ee70/medium/2005945_1.png'
  },
  {
    id: "24",
    category: 'gifts',
    name: "Caja Sorpresa Harry Potter",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw665e1f25/medium/1003763_1.png"
  },

  // FIn de regalos

  // Comminezo de estilo de vida
  {
    id: "25",
    category: 'lifestyle',
    name: "Necesser Puffer Maron Cacau Show",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwc60a26d7/medium/2005911_1.png"
  },
  {
    id: "26",
    category: 'lifestyle',
    name: "Bolsa Transversal Marron Cacau Show",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw0d4b61f9/medium/2005909_1.png"
  },
  {
    id: "27",
    category: 'lifestyle',
    name: "Pin de Frutilla con Chocolate Cacau Show",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw8fb1f948/medium/2005931_1.png"
  },
  {
    id: "28",
    category: 'lifestyle',
    name: "Kits de Pins laCreme + Frutilla + Fondue",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw935b4248/medium/2005986_1.png"
  },
  {
    id: "29",
    category: 'lifestyle',
    name: "Llavero Premium Trufa + Tabla laCreme Cacau Show",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwace98652/medium/2005907_1.png"
  },
  {
    id: "30",
    category: 'lifestyle',
    name: "Vaso de Viaje Caldo Cacau Show",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ],
    stock: 20,
    price: 3000,
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwbab19798/medium/2005910_1.png"
  },
]

const productsPascua = [
  {
    id: "01",
    name: "Trufa LaNUt PIstacho 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 20,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw68d9e8da/medium/1003107_2t.png"
  },
  {
    id: "02",
    name: "Trufa LaNUt PIstacho 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 20,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw153e5cdc/medium/1002638_2.png"
  },

  {
    id: "03",
    name: "Trufa LaNUt PIstacho 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 20,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1d277e99/medium/1003788_1.png"
  },

  {
    id: "04",
    name: "Trufa LaNUt PIstacho 13,5g",
    description: [
      { resumen: "Pruebe la trufa al Leche de Maracujá de Cacau Show, la combinacion irresistible de chocolate con un relleno cremoso de maracuja. Un dulce que encanta!" },
      { detalles: ["Relleno Cremoso", "Textura suave", "Sabor marcante"] }
    ], stock: 20,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwbd2c7167/medium/1002866_2.png"
  },
]

// https://postimages.org/

let error = false

export const getProducs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un errror, intnter mas tarde')
      } else {
        resolve(productos)
      }
    }, 3000)
  })
}

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un error, intente más tarde')
      } else {
        let prod = productos.find((prd) => prd.id === id)
        resolve(prod)
      }
    }, 3000)
  })
}

const getProductsPascua = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un error, intentar luego')
      } else {
        resolve(productsPascua)
      }
    }, 3000)
  })
}

export const getOneProductPascua = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un error, intente más tarde')
      } else {
        let prod = productsPascua.find((prd) => prd.id === id)
        resolve(prod)
      }
    }, 3000)
  })
}