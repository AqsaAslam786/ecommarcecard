import type { CardType } from "../Types/CardType";

interface ClothCardProps {
  card: CardType;
}
const ClothCard = ({ card }: ClothCardProps) => {
  return (
    <div>
      <div className="bg-amber-100 w-96 h-160 mt-10 justify-center items-center hover:shadow-2xl">
        <img className="w-full object-cover p-3" src={card.image} alt="" />
        <p className="pl-2">{card.title}</p>
        <h1 className="font-bold text-left pl-2">PKR {card.price}</h1>
        <button className="ml-2 mt-2 font-semibold rounded border border-black w-35 h-10 hover:bg-pink-950 hover:text-white ">
          ADD TO BAG
        </button>
        <ul className="flex gap-2 items-center justify mb-2 ">
            
         { [2,4,6,8,10].map( n =>   (<li className="bg-red-400 rounded-full size-8 text-center mt-3 flex justify-center items-center">{n}</li>)
            )}
        </ul>
      </div>
 
    </div>
  );
};

export default ClothCard;
