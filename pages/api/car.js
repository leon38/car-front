export function getCar(id) {
    const res = fetch(`http://localhost:5000/car/${id}`);

    console.log(res);

    if (res.ok) return res.json();
    if (res.status === 404) return {};

    throw new Error(`Fetch for the car of "${id}" failed with code: ${res.status}`);
}