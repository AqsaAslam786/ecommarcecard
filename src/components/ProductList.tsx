import type { ProductType } from "../Types/ProductType";
import ProductCard from "./ProductCard";
interface ClothListProps {
  items: ProductType[];
}

const ClothList = ({ items }: ClothListProps) => {
  return (
    <div className="flex justify-around">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ClothList;
