"use client"
import Link from "next/link";
import "./styles.css"
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const usePath = usePathname();
    return (
        <html lang="en">
            <body>
                <div>
                    {usePath !== "/blog/sportsblog" ? (
                        <ul className="layout-menu">
                            <li>
                                <Link href="/blog/article"> Article</Link>
                            </li>
                            <li>
                                <Link href="/blog/newblog">NewsBlog</Link>
                            </li>
                            <li>
                                <Link href="/blog/sportsblog"> Sports Blog</Link>
                            </li>
                        </ul>
                    ): null}

                </div>
                {children}
            </body>
        </html>
    );
}
