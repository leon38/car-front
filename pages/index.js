import Head from 'next/head'
import Car from '../components/car.js'
import styles from '../styles/Home.module.css'
import getCar from './api/car.js'

export default function Home({cars}) {
  return (
    <div className="container py-8 mx-auto">
      <h1>Carnets de bord</h1>
      <div className="grid grid-cols-2 gap-x-36">
        {
          cars.map(car => {
            return (<Car car={ car } />)
          })
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:5000/cars')
  .then(function (res) {
      return res.json();
  })
  .then(function (response) {
      return response;
  })
  .catch(function (err) {
      console.log(err);
  });

  console.log(res.cars);

  return {
    props: {
     cars: res.cars
    }
  }
}