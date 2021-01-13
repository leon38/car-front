export default function getCar(id) {
    const targetUrl = `http://127.0.0.1:5000/car/${id}`
    const res = fetch(targetUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function (response) {
        return response;
    })
    .catch(function (err) {
        console.log(err);
    });
    return res;
}