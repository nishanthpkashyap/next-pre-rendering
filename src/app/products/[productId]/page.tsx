export default async function ProductId({params: {productId}}: {params: {productId: string}}){

    const post = await getPost(productId);
    const {id, title, price, description} = post
    return (
        <div className="flex w-2/3 mx-auto text-center flex-col">
            <h1 className="mb-3">{id}. {title} - ₹{price}</h1>
            <p>{description}</p>
        </div>
    )
}

async function getPost(productId: string){
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const data = await response.json();
    return data;
}