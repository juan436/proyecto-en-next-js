"use client";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return (
        <>
            <div>page login</div>   
            <button onClick={() => router.push("/")}>Click here to home page</button>
            <button onClick={() => router.push("/blog")}>Click here to blog</button>
        </>
    );
};

export default page;