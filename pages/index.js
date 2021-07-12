import Car from '../components/car.js'
import { CarService } from '../webservice/CarService.js'

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
  const cars = await (new CarService).getAll()

  return {
    props: {
     cars: cars,
    }
  }
}