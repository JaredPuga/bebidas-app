import { Container } from 'react-bootstrap'
import { Formulario } from './components/Formulario'
import { ListadoBebidas } from './components/ListadoBebidas'
import { BebidasProvider } from './context/BebidasProvider'
import { CategoriasProvider } from './context/CategoriasProvider'

export const App = () => {
  return (
    
    <CategoriasProvider>
    <BebidasProvider>
        <header className="py-5">
            <h1>Buscador de bebidas</h1>        
        </header>
        
        <Container className='mt-5'>                
            <Formulario />
            <ListadoBebidas />
        </Container>
    </BebidasProvider>
    </CategoriasProvider>
    
  )
}
