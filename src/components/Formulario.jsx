import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useBebidas } from "../hooks/useBebidas";
import { useCategorias } from "../hooks/useCategorias";

export const Formulario = () => {
    
    const { categorias } = useCategorias()
    const { consultarBebida, bebidas } = useBebidas()

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: '',
    })

    const [alerta, setAlerta] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        consultarBebida(busqueda)
    }

  return (
    <Form onSubmit={handleSubmit}>

        {
            alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>
        }
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                    <Form.Control
                        id="nombre"
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc"
                        name="nombre"
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value //.name = nombre
                        })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categoria">Categoría</Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                        value={busqueda.categoria}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value //.name = categoria
                        })}
                    >
                        <option>-- Seleccione Categoria --</option>
                        {
                            categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory} 
                                </option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className="justify-content-end">
            <Col md={3}>
                <Button
                    variant="danger"
                    className="text-uppercase w-100"
                    type="submit"
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}
