'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get("title"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image")
    }
    if (meal.creator_email === '') {
        return {message: "Invalid Email!"};
    }
    await saveMeal(meal);
    revalidatePath('/meals');
    redirect("/meals");
}