const productos = [
  {
    id: "01",
    name: "Trufa LaNUt PIstacho 13,5g",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 20,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwce7dbcaa/medium/1002192_4.png"
  },
  {
    id: "02",
    name: "Trufa laCreme al Leche 13,5g",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 0,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw0623cf01/medium/1002193_1.png"
  },
  {
    id: "03",
    name: "Trufa Tarta de Limon 30g",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 5,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3a43539c/medium/1003424_1.png"
  },
  {
    id: "04",
    name: "Trufa Maracuja 30g",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 10,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1b8ac003/medium/1002639_1.png"
  },
  {
    id: "05",
    name: "Trufa Mezzo 13,5g",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 2,
    price: 200,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwa8f754a0/medium/1003608_1.png"
  },
  {
    id: "06",
    name: "Trufa de Chocolate de Leche y Pistacho 30g",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 10,
    price: 70,
    category: 'limited edition',
    img: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1787ca6b/medium/1003394_1.png"
  }
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

export const getOneProducs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un errror, intnter mas tarde')
      } else {
        let prod = productos.find((prd) => prd.id ===id)
        
      }
    }, 3000)
  })
}