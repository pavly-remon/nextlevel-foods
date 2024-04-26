'use client'
import Link from "next/link";
import classes from "@/styling/nav-bar.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ href, text }) {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? classes.active : undefined}>{text}</Link>
    );

}