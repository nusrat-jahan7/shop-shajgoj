import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex items-center p-10 justify-between bg-base-100 shadow-xl container mx-auto">
      <div className="w-4/12">
        <img className="" src={data.img} alt="Movie" />
      </div>
      <div className="w-8/12 space-y-5">
        <h2 className="text-3xl"> {data.name} </h2>
        <p className="text-md"> {data.details} </p>
        <div>
        <p className="text-pink-600 text-2xl font-bold">৳ {data.price}</p>
        <p className="text-gray-500 text-xl font-semibold">
          Brand:{data.brand}
        </p>
        <p className="text-gray-500 text-lg font-semibold">{data.origin}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
