import { ProductList } from "../components";
import data from "../data.json";

const HomePage = () => {
  return (
    <>
      <ProductList data={data} />
    </>
  );
};

export default HomePage;
