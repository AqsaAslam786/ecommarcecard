import { useState } from "react";
import ClothList from "./components/ProductList";
import type { ProductType } from "./Types/ProductType";




function App() { 

const [products,setProducts] = useState<ProductType[]>([])


   async function fetchdata() {
    const response = await fetch ('data.json');
    const data = await response.json();
    console.log(data)
    setProducts(data)
   }
      
  return (
    <>
     <button onClick={fetchdata}>Fetch Data</button>
    <ClothList items={products} />
    </>
  )
}

export default App
