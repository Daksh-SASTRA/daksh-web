import React, { useState } from 'react'
import styles from './merch.module.css'
import MerchItem from "./Merchandise";
import tshirt from '../../public/shirtpreview/tee_front.webp'
function MerchForm() {
    const [values, setValues] = useState({
        studname: "",
        registerno: null,
        email: "",
        phoneno: null
    })
    const handleChange = (fname) => (e) => {
        e.preventDefault();
        setValues({ ...values, [fname]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values)
        const url = `https://daksh.sastra.edu/registration/merch/register?name=${values.studname}&email=${values.email}&regno=${values.registerno}&phno=${values.phoneno}`;

        await fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    if (response.status === "SUCCESS") {
                        alert('Success: Registration submitted successfully.');
                    }
                    else {
                        alert('User already registered!');
                    }
                }
            })
            .catch((error) => {
                alert('Failure: Something went wrong with the request.');
            });

    }
    return (
        <div className={styles.merch_container}>
            <MerchItem merchName={"TSHIRT"} imageLink={tshirt} shoppingLink="/merch/tshirt" />

            <form onSubmit={handleSubmit} className={styles.merch_form}>
                <h1 > Merch Registration form</h1>
                <label>Enter your name: </label>
                <input placeholder="Your name" name="studname" type="text" onChange={handleChange("studname")} />
                <br />
                <label>Enter your register number:  </label>
                <input placeholder="Your register number" name="registerno" type="number" onChange={handleChange("registerno")} />
                <br />
                <label>Enter your SASTRA Email id:</label>
                <input placeholder="Your sastra email id" name="email" type="email" onChange={handleChange("email")} />
                <br />
                <label>Enter your phone number: </label>
                <input placeholder="Your phone number" name="phoneno" type="tel" onChange={handleChange("phoneno")} />
                <div className={styles.register__btn__div}>
                    <button type="submit" className={styles.register__btn}>Submit</button>
                </div>
            </form>



        </div>
    )
}
export default MerchForm;