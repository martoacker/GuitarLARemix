import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return (
    [
      {title: 'GuitarLA - Sobre Nosotros'},
      {description: 'Venta de guitarras, blog de música'}
    ]
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
          Aliquam a placerat odio, sed ultricies lacus. Duis ut facilisis tellus. Sed nisi felis, viverra a urna ac, posuere elementum elit. Donec sollicitudin tempor gravida. Nam et nibh ex. Donec tempor ipsum malesuada quam ultrices tincidunt. Nullam placerat pellentesque pretium. Vivamus placerat feugiat elit, sit amet maximus risus ultricies vitae. Donec non metus dignissim, luctus erat at, semper risus. 
          </p>

          <p>
          Aliquam a placerat odio, sed ultricies lacus. Duis ut facilisis tellus. Sed nisi felis, viverra a urna ac, posuere elementum elit. Donec sollicitudin tempor gravida. Nam et nibh ex. Donec tempor ipsum malesuada quam ultrices tincidunt. Nullam placerat pellentesque pretium. Vivamus placerat feugiat elit, sit amet maximus risus ultricies vitae. Donec non metus dignissim, luctus erat at, semper risus. 
          </p>
        </div>
      </div>

    </main>
  )
}

export default Nosotros