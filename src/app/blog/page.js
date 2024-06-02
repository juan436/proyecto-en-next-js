"use client";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return <>
        <div><h1>Blogs</h1></div>
        <br/>
        <div>
            <button onClick={() => router.push("/")}>Click here to home page</button>
        </div>
        <br/>
        <div>
            <button onClick={() => router.push("/login-form")}>Click here to login</button>
        </div>
    </>
}

export default page;