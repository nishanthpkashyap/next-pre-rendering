import Link from "next/link";
import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Link href={"/products"}>{`<- Go Back`} </Link>
            {children}
        </>
    )
}