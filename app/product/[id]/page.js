// app/product/[id]/page.js
import Card from "@/app/components";
import Image from "next/image";

// Fetch single product by ID
async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return null;
  const product = await res.json();
  return product;
}

// Dynamic Meta Tags
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} - Our Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.thumbnail], 
      url: `https://yourdomain.com/product/${product.id}`,
    },
  };
}




// Product Page Component
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p className="p-6 text-red-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      {/* if you are use Image in next js then specify domain name in next.config.mjs   go now code is here ---- */}

      {/* <Image
        src={product.thumbnail}
        alt={product.title}
        width={600}
        height={400}
        className="rounded-lg object-cover mb-4"
      /> */}

<img
        src={product.thumbnail}
        alt={product.title}
        width={600}
        height={400}
        className="rounded-lg object-cover mb-4"
      />

      <p className="text-gray-700 text-lg mb-2">{product.description}</p>

      <p className="text-xl font-semibold text-green-600 mb-2">
        Price: ${product.price}
      </p>

      <p className="text-md text-gray-500">Brand: {product.brand}</p>

      <Card   key={product.id} product={product}/>
    </div>
  );
}

// import Head from 'next/head';

// // Server Component: Fetch product data on the server side
// export default async function ProductPage({ params }) {
//   const { id } = params;

//   // Fetch product data using fetch API
//   const res = await fetch(`https://dummyjson.com/products/${id}`, {
//     next: { revalidate: 10 }, // Cache for 10 seconds (Optional)
//   });
//   const product = await res.json();

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <>
//       {/* Dynamic Meta Tags */}
//       <Head>
//         <title>{product.name}</title>
//         <meta property="og:title" content={product.name} />
//         <meta property="og:description" content={product.description} />
//         <meta property="og:image" content={product.image} />
//         <meta property="og:url" content={`https://yourwebsite.com/product/${product.id}`} />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>

//       {/* Product Page Content */}
//       <div>
//         <h1>{product.name}</h1>
//         <p>{product.description}</p>
//         <img src={product.image} alt={product.name} />
//       </div>
//     </>
//   );
// }


