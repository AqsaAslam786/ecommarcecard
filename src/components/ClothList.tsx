import type { CardType } from "../Types/CardType"
import ClothCard from "./ClothCard"
interface ClothListProps{
    items:CardType[];
}


const ClothList = ({items}:ClothListProps) => {
  return (
    <div className="flex justify-around">
        {items.map((item)=>(
<ClothCard 
key={item.id}
card={item}

/>
        ))}
      
    </div>
  )
}

export default ClothList
