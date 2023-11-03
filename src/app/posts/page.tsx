import axios from "axios";
import Link from "next/link";

export default async function Posts(){
    const posts = await getPosts(5);
    return (
        <div className="flex items-center justify-center flex-col gap-[20px]">
            <h1>Posts</h1>
            <ol className="list-decimal">
                {
                    posts.map(({id, title}: any) => {
                        return (
                            <Link href={`/posts/${id}`} key={id}>
                                <li>{title}</li>
                            </Link>
                        );
                    })
                }
            </ol>
        </div>
    )
} 

async function getPosts(n: number){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data.slice(0, n);
}