import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "@/styling/nav-bar.module.css";
import NavLink from "@/components/nav-link";

export default function NavBar() {
    return (
        <div className={classes.navbar}>
            <Link href="/" className={classes.logo}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2%' }}>
                    <Image width={75} height={75} src={LogoImg.src} alt="Logo Image" priority />
                    <p>
                        Nextlevel Foods
                    </p>
                </div>
            </Link>
            <ul>
                <li>
                    <NavLink href="/meals" text="Browse Meals" />
                </li>
                <li>
                    <NavLink href="/community" text="Explore Community" />
                </li>
            </ul>
        </div>
    );
}