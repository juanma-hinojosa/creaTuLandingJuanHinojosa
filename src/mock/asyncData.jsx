const productos = [
  {
    id: "01",
    name: "Ovo de pascoa",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 20,
    price: 200,
    category: 'limited edition',
    img: "url"
  },
  {
    id: "02",
    name: "Chocolate com pistache",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 20,
    price: 200,
    category: 'limited edition',
    img: "url"
  },
  {
    id: "03",
    name: "Ursinhos carinhosos",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 20,
    price: 200,
    category: 'limited edition',
    img: "url"
  },
  {
    id: "04",
    name: "Trufa Maracuja",
    description: 'Ovo de pascoa tematico da Harry potter',
    stock: 20,
    price: 200,
    category: 'limited edition',
    img: "url"
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