import Link from "next/link";
import { ReactNode } from "react";

export default function PostLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Link href={"/posts"}>{`<- Go Back asasa`} </Link>
            {children}
        </>
    )
}