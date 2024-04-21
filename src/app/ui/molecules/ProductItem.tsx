import { ProductCategory } from "../atoms/ProductCategory";
import { ProductPrice } from "../atoms/ProductPrice";
import { ProductTitle } from "../atoms/ProductTitle";
import { ProductItemType } from "../types";
import { StarsItemList } from "./StarsItemList";

type ProductItemProps = {
  product: ProductItemType;
};
export const ProductItem = ({
  product: { category, name, price, numberOfStars },
}: ProductItemProps) => {
  return (
    <div className="relative mt-4 text-center">
      <ProductPrice price={price} />
      <ProductTitle name={name} />
      <ProductCategory category={category} />
      <StarsItemList numberOfStars={numberOfStars} />
    </div>
  );
};
