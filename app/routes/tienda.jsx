import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import styles from '~/styles/guitarras.css'

export function meta() {
  return (
    [
      {title: 'GuitarLA - Tienda de Guitarras'},
      {description: 'GuitarLA - Nuestra colección de guitarras'}
    ]
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  // const resultado = await respuesta.json()
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}
        />
    </main>
  )
}

export default Tienda