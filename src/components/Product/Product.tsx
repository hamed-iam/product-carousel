type ProductDataProps = {
  product_name: string;
  memory: string;
  ram: string;
  size: string;
  image: string;
};

type ProductListProps = {
  productInfo: ProductDataProps;
};

const Product = ({ productInfo }: ProductListProps): JSX.Element => {
  return (
    <div className="text-center">
      <img
        src={productInfo.image}
        alt={productInfo.product_name}
        width={70}
        className="m-auto"
      />
      <p>{productInfo.product_name}</p>
      <p>{`Ram: ${productInfo.ram}`}</p>
      <p>{`Memory: ${productInfo.memory}`}</p>
      <p>{`Size: ${productInfo.size}`}</p>
    </div>
  );
};

export default Product;
