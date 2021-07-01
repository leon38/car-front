export async function getCars() {
    const res = await fetch('http://localhost:5000/cars')
        .then(function (res) {
            return res.json()
        })
        .then(function (response) {
            return response
        })
        .catch(function (err) {
            console.log(err)
        })

    return res.cars;
}

export async function addReparation({reparation}) {
    const bodyRequest = Object.fromEntries(reparation)
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const res = await fetch('http://localhost:5000/reparation', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyRequest)
        })
        .then(function (res) {
           console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })

    return res;
}

export async function deleteReparation(reparation_id) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const res = await fetch('http://localhost:5000/reparations/'+reparation_id, {
            method: 'DELETE',
            headers: headers
        })
        .then(function (res) {
           console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })

    return res;
}