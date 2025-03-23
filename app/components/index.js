import Link from "next/link";

const Card = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full h-56 object-cover"
        src={product.thumbnail}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl">{product.title}</h3>
        <p className="text-green-500 font-semibold">${product.price}</p>
        <Link href={`/product/${product.id}`}>View Product </Link>
      </div>
    </div>
  );
};

export default Card;
