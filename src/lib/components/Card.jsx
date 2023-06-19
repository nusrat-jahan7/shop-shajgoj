import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Spinner from "./Spinner";

const Card = () => {
  const data = useFetch("http://localhost:5000/makeups");

  return data.loading ? (
    <Spinner />
  ) : (
    <div className="grid grid-cols-12 gap-10 container mx-auto">
      {data?.data?.map((card) => (
        <div key={card?._id} className="col-span-4 card bg-base-100 shadow-xl">
          <figure>
            <Link to={`/${card?._id}`}>
              <img className="w-48 h-auto" src={card?.img} alt="Shoes" />
            </Link>
          </figure>
          <div className="card-body">
            <Link
              to={`/${card?._id}`}
              className="card-title text-lg text-center"
            >
              {card?.name}
            </Link>
            <div className="badge badge-secondary text-white mx-auto">
              <p>SALE</p>{" "}
            </div>
            <p className="text-pink-600 text-xl mx-auto font-semibold">
              ৳ {card?.price}
            </p>
            <p className="text-gray-500 mx-auto font-semibold">
              Brand:{card?.brand}
            </p>
          </div>
          <div className="btn hover:bg-fuchsia-700 bg-violet-700 text-white text-lg font-semibold">
            Add to cart
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
