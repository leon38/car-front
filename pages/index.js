import Head from 'next/head'
import Car from '../components/car.js'
import styles from '../styles/Home.module.css'
import { getCars, getReparations } from '../webservice/car.js'

export default function Home({cars}) {
  return (
    <div className="container py-8 mx-auto font-rubik">
      <h1 className="font-rubik">Carnets de bord</h1>
      <div className="grid grid-cols-2 gap-x-24">
        {
          cars.map(car => {
            return (<Car car={ car } key={car.id} />)
          })
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const cars = await getCars()

  return {
    props: {
     cars: cars,
    }
  }
}