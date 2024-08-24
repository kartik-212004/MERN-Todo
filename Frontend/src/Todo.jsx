import { useEffect, useState } from "react";
import deleteimg from './assets/delete.png';
import deleteFunction from "./delete";
export default function Todo() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        async function get() {
            try {
                const response = await fetch('http://localhost:3000', {
                    method: "GET",
                    headers: { 'Content-Type': "application/json" }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setValue(data);
            } catch (error) {
                console.log({ Error: error.message });
            }
        }

        get();
    },);

    return (
        <ul className="w-96 ">
            {value.map((element, index) => (
                <li className="flex flex-row justify-between text-2xl p-2 my-2 shadow-md bg-white list-decimal  rounded-md" key={index}>{element.title} <img onClick={(e) => { deleteFunction(e) }} src={deleteimg} alt="" /></li>
            ))}

        </ul>
    );
}
