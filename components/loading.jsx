import classes from "@/styling/loading.module.css"
export default function Loading({ text }) {
    return <p className={classes.loading}>{text}</p>
}