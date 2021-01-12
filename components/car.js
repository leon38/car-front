function Car({car}) {
    fetchFromApi();
    return (
       <div className="flex-1">{car}</div>     
    );
}

async function fetchFromApi() {
  const targetUrl = 'http://localhost:5000/car/1'
  const res = await fetch(targetUrl)
  .then(function (res) {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

  console.log(res);
}
  
export default Car