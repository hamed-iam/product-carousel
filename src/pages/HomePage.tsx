import { ProductList } from "../components";
import data from "../data.json";

const HomePage = () => {
  return (
    <div>
      <ProductList data={data} />
    </div>
  );
};

export default HomePage;
