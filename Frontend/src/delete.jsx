export default async function deleteFunction(e) {
    let name;
    name = e.target.parentNode.innerText;
    await fetch('http://localhost:3000', {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: name })
    });
    name = '';
}