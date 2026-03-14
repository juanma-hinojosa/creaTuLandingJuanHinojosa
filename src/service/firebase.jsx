// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTyl1xaruOjxsZOtTZlWfX3d36TQWVsrI",
  authDomain: "coderhouse-ecomerce-cacaushow.firebaseapp.com",
  projectId: "coderhouse-ecomerce-cacaushow",
  storageBucket: "coderhouse-ecomerce-cacaushow.firebasestorage.app",
  messagingSenderId: "484939365810",
  appId: "1:484939365810:web:5d912e8a06a6d7ea58b8ab",
  measurementId: "G-LMQ82NH7G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = getFirestore(app)

export const db = getFirestore(app)
export const auth = getAuth(app)

// export async function getProducts() {
//   const querySnapshot = await getDocs(collection(db, 'items'))
//   querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().name} - ${doc.data().price} `))
// }

// export async function addNewProduct() {
//   const itemsCollectionRef = collection(db, 'items'); //Referencia a la DB en Firebase

//   // Documento a Crear y que vamos almacenar en la DB
//   const newItem = { name: 'Caja Sorpresa Harry Potter', category: 'gift', stock: 4, price: 2500, img: 'https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw665e1f25/medium/1003763_1.png', description: [{ resumen: 'La Caja Sorpresa de Harry Potter es la opción perfecta para los fans de Harry Potter y los amantes del chocolate. Contiene una deliciosa esfera de chocolate con leche y un pin sorpresa exclusivo de la saga. Hay 15 opciones coleccionables para coleccionar o regalar a alguien que también ame este universo. ¡Aprovecha!' }, { detalles: ['Esfera de Chocolate con leche', 'Incluye un pin sorpresa de la sada Harry Potter', 'Hay 15 pines coleccionables'] }] }

//   try {
//     const docRef = await addDoc(itemsCollectionRef, newItem); //Insertamos el documento en la DB

//     console.log(`Documento creado con el ID ${docRef.id}`)
//   } catch (error) {
//     console.error('Error al agregar el documento', error);
//   }
// }


// // Funcion actuallizar un documento
// export async function updateItem(id) {
//   const itemDocRef = doc(db, 'items', id) //reeferencia del documento

//   try {
//     await updateDoc(itemDocRef, { stock: 22, price: 4500 })
//     console.log('Documento actualizado correctamente');

//   } catch (error) {
//     console.error('Error actualizar el documento ', error);

//   }
// }

// // Function actulizar multiples documentos
// export async function updateMultipleItems() {
//   const batch = writeBatch(db) //crear una operacion batch

//   const itemRef = doc(db, 'items', 'aVBBq8iBUuDsOwfFTCQY')
//   const itemRef2 = doc(db, 'items', 'i5FWorbWuposaHMsuECE')

//   batch.update(itemRef, { stock: 300 })
//   batch.update(itemRef2, { price: 50000 })

//   try {
//     await batch.commit() //commit ejecuta todas las actualizaciones

//     console.log('Batch actualizado correctamente');
//   } catch (error) {
//     console.error('Error en la actulizacion del lote ', error);

//   }
// }


// export async function getSingleITem(id) {
//   const documentRef = doc(db, 'items', id);

//   try {
//     const snapshot = await getDocs(documentRef)
//     if (snapshot.exists()) {
//       return snapshot.data()
//     } else {
//       console.log('El documento no existe')
//     }
//   } catch (error) {
//     console.error('Error al obtener el documento: ', error);
//   }
// }


// // renederizar / Impirimir por consola 
// export async function getItems() {
//   const querySnapshot = await getDocs(collection(db, 'items'))
//   const listaItems = [];

//   querySnapshot.forEach(doc => {
//     listaItems.push({ id: doc.id, ...doc.data() })
//   })

//   return listaItems;
// }



// // // Ejemplos de Query con Where y Limit
// // export async function consultaWhereItems() {
// //   const itemsCollectionRef = collection(db, "items");
// //   const q = query(itemsCollectionRef, where('price', '>', 25000))

// //   getDocs(q).then(snapshot => {
// //     snapshot.forEach(doc => {
// //       console.log(doc.id, doc.data());
// //     })
// //   })
// // }

// // // Multiple filtros
// // const complexQuery = query(
// //   itemsCollectionRef,
// //   where("price", ">", 100),
// //   where("category", "==", "tecnología")
// // );

// // getDocs(complexQuery).then(snapshot => {
// //   snapshot.forEach(doc => {
// //     console.log(doc.id, doc.data());
// //   });
// // });

// // // Uso de Limites
// // const limitedQuery = query(itemsCollectionRef, where("price", ">", 100), limit(5));

// // getDocs(limitedQuery).then(snapshot => {
// //   snapshot.forEach(doc => {
// //     console.log(doc.id, doc.data());
// //   });
// // });



// // // Paginacion
// // // La paginación maneja grandes volúmenes de datos utilizando limit() y startAfter().
// // let lastVisible = null;
// // const firstPageQuery = query(itemsCollectionRef, orderBy("price"), limit(5));

// // getDocs(firstPageQuery).then(snapshot => {
// //   lastVisible = snapshot.docs[snapshot.docs.length - 1];
// //   snapshot.forEach(doc => {
// //     console.log(doc.id, doc.data());
// //   });
// // });

// // const nextPageQuery = query(
// //   itemsCollectionRef,
// //   orderBy("price"),
// //   startAfter(lastVisible),
// //   limit(5)
// // );

// // getDocs(nextPageQuery).then(snapshot => {
// //   snapshot.forEach(doc => {
// //     console.log(doc.id, doc.data());
// //   });
// // });