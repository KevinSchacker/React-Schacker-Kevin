import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { app } from './config';

const db = getFirestore(app);

// Obtener todos los productos
export const getProducts = async () => {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener un producto por ID
export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, 'products', productId);
    const productDoc = await getDoc(docRef);
    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() };
    } else {
      console.log('No se encontró el producto');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (categoryId) => {
  const productsCol = collection(db, 'products');
  const categoryQuery = query(productsCol, where("category", "==", categoryId));
  const querySnapshot = await getDocs(categoryQuery);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Buscar productos
export const searchProducts = async (searchTerm) => {
  try {
    const productsRef = collection(db, 'products')
    const querySnapshot = await getDocs(productsRef)
    const allProducts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    // Búsqueda case-insensitive en nombre y descripción
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } catch (error) {
    console.error("Error searching products:", error)
    throw error
  }
}