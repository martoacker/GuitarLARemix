import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader({params}) {
    
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)
  
    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra
}

export function meta({data}) {
    if (!data) {

        return (
            [
                {title: 'Guitarra no encontrada'},
                {description: 'Guitarras, venta de guitarras, guitarra no encontrada'}
            ]
        )
    }

    return (
        [
            {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
            {description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`}
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

function Guitarra() {

    const {agregarCarrito} = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

    const handleSubmit = e => {
        e.preventDefault();

        if (cantidad < 1) {
            alert('Debes seleccionar una cantidad')
            return   
        }

        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <main className='contenedor guitarra'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion[0].children[0].text}</p>
                <p className='precio'>${precio}</p>

                <form onSubmit={handleSubmit} className='formulario'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <select name="" id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al carrito" 
                    />
                </form>
            </div>
        </main>
    )
}

export default Guitarra