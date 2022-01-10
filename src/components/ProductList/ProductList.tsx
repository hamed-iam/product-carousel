import Slider from "react-slick";
import Product from "../Product";
import "./productList.css";

type DataPropTypes = {
  id: number;
  product_name: string;
  memory: string;
  ram: string;
  size: string;
  image: string;
}[];

type ProductListProps = {
  data: DataPropTypes;
};

const ProductList = ({ data }: ProductListProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data
          ? data?.map((item) => {
              return (
                <div key={item.id} className="product p-2">
                  <Product productInfo={item} />
                </div>
              );
            })
          : "Loading"}
      </Slider>
    </>
  );
};
export default ProductList;
