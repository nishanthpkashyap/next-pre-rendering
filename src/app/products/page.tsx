import Link from "next/link";

export default async function page() {
    const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-[20px]">
        <h1>Products</h1>
        <ol className="list-decimal">
            {
                products.map(({id, title}: any)=>{
                    return (
                        <Link key={id} href={`/products/${id}`}>
                            <li >{title}</li>
                        </Link>
                    )
                })
            }
        </ol>
    </div>
  )
}

async function getProducts() {
    const response = await fetch("http://localhost:4000/products/");
    const products = await response.json();
    return products;
}