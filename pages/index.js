import Head from 'next/head'
import Car from '../components/car.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container py-8 mx-auto">
      <h1>Carnets de bord</h1>
      <Car />
    </div>
  )
}
