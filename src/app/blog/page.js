"use client";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return <>
        <div>Blogs</div>
        <button onClick={() => router.push("/")}>Click here to home page</button>
        <button onClick={() => router.push("/login-form")}>Click here to login</button>
    </>
}

export default page;