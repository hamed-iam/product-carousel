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
    <>
      <img src={productInfo.image} alt={productInfo.product_name} width={80} />
      <p>{productInfo.product_name}</p>
      <p>{productInfo.ram}</p>
      <p>{productInfo.memory}</p>
      <p>{productInfo.size}</p>
    </>
  );
};

export default Product;
