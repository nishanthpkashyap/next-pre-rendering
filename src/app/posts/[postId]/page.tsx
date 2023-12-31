export default async function PostId({params: {postId}}: {params: {postId: string}}){

    const post = await getPost(postId);
    const {id, title, body} = post
    return (
        <div className="flex w-2/3 mx-auto text-center flex-col">
            <h1 className="mb-3">{id}. {title}</h1>
            <p>{body}</p>
        </div>
    )
}

async function getPost(postId: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return data;
}

export async function generateStaticParams(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    const paramList = posts.map((post: any)=>{
        return {postId: `${post.id}`}
    })

    // return [{postId: '1'}, {postId: '2'}, {postId: '3'},];
    return paramList;

}