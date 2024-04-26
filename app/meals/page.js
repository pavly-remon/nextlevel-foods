import Link from "next/link";
import classes from "./page.module.css"
import MealsGrid from "@/components/meals-grid"
import Loading from "@/components/loading"
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
    const meals = await getMeals();
    return (<MealsGrid meals={meals} />);
}
export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals, created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite Reciepe</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share</Link>
                </p>
            </header>
            <main>
                <Suspense fallback={<Loading text="Loading Meals ..." />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}