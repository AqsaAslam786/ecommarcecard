import { useState } from "react";
import ClothList from "./components/ClothList";
import type { CardType } from "./Types/CardType";




function App() { 

const [viewProducts,setviewProducts] = useState<CardType[]>([])


   async function fetchdata() {
    const response = await fetch ('https://dummyjson.com/c/d124-ead6-4ef9-bd18');
    const data = await response.json();
    setviewProducts(data)
   }
      
  return (
    <>
     <button onClick={fetchdata}>Fetch Data</button>
    <ClothList items={viewProducts} />
    </>
  )
}

export default App
