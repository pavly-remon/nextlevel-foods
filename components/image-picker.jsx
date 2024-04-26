'use client'
import {useRef, useState} from "react";
import Image from "next/image";
import classes from "@/styling/image-picker.module.css";

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState(null);
    const inputImageRef = useRef();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
        // setPickedImage(inputImageRef.current)
    }
    const handlePickClick = () => {
        inputImageRef.current.click();
    }
    return (<div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            {pickedImage && <div className={classes.preview}>
                <Image src={pickedImage} alt="Picked Image" fill/>
            </div>}
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={inputImageRef}
                onChange={handleImageChange}
                required/>
            <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>);
}