import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import { AddToCardButton } from "@/app/ui/atoms/buttons/AddToCartButton";
import { ProductItem } from "@/app/ui/molecules/ProductItem";
import type { ProductItemType } from "@/app/ui/types";
//produkt ze wszystkimi właściwościami nawet guzikiem
type ProductItemProps = {
  product: ProductItemType;
};
export const ProductItemWithImageAndButton = ({
  product,
}: ProductItemProps) => {
  return (
    <li className="m-4 rounded bg-gray-100">
      <article>
        <ProductCoverImage
          src={product.coverImage.src}
          alt={product.coverImage.alt}
        />
        <ProductItem product={product} />
        <AddToCardButton title={"Add to card"} />
      </article>
    </li>
  );
};
