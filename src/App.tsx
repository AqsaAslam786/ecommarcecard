import { useState } from "react";
import ClothList from "./components/ClothList";
import type { CardType } from "./Types/CardType";




function App() { 

const [viewProducts,setviewProducts] = useState<CardType[]>([])


   async function fetchdata() {
    const response = await fetch ('https://dummyjson.com/c/abcd-1234');
    const data = await response.json();
    setviewProducts(data)
   }
      
   fetchdata();
  return (
    <>
     {/* <button onClick={fetchdata}>Fetch Data</button> */}
    <ClothList items={viewProducts} />
    </>
  )
}

export default App
