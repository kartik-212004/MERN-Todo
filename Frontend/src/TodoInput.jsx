import { useState } from "react";

export default function Input() {
    const [value, setValue] = useState("");

    async function post(newValue) {
        try {
            await fetch('http://localhost:3000', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: newValue })
            });
            setValue('');
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }

    function update(e) {
        e.preventDefault();
        if (value) {
            post(value);
        }
    }

    return (
        <>
            <form className="space-x-3 " onSubmit={update}>
                <input
                    placeholder="To-Do"
                    className="outline-none h-10 w-64 border p-3 text-2xl rounded-md border-slate-500"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="text-2xl bg-green-500 rounded-md p-1 text-white w-16">Add</button>
            </form>
        </>
    )
}
