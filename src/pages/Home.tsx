import { ProductList } from "../components";
import data from "../data.json";

console.log("data :>> ", data);
const Home = () => {
  return (
    <div>
      <ProductList data={data} />
    </div>
  );
};

export default Home;
