import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/css/style.scss"
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import {useState} from 'react'
import Modal from '../components/scripts/modal'
import Router from 'next/router'

function Start(){
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(false)
        Router.push({
            pathname: '/calculaProteina',
            query: {pesoUsuario, tipoAtividade}
        })
    }
    const [pesoUsuario, setPesoUsuario] = useState("")
    const [tipoAtividade, setTipoAtividade] = useState("misto")

    console.log(pesoUsuario)
    console.log(tipoAtividade)

    return (
        <>
            <div>
                <h2>Calculadora de proteína</h2>
                <p>Saiba quanto a sua dose de proteína diária.</p>
                <Modal show={showModal} close={closeModal}/>
            </div>
            <div>
                <Form>
                    <Form.Group controlId="pesoUsuario">
                        <Form.Label>Digite seu peso:</Form.Label>
                        <Form.Control type="text" value={pesoUsuario} onChange={(event) => setPesoUsuario(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="tipoAtividade">
                        <Form.Label>Selecione o tipo de atividade física:</Form.Label>
                        <Form.Control as="select" value={tipoAtividade} onChange={(event) => setTipoAtividade(event.target.value)}>
                            <option value="sedentario">Sedentário</option>
                            <option value="atletafds">Atleta de fim de semana</option>
                            <option value="resistencia">Treinos de resistência</option>
                            <option value="misto">Treinos mistos</option>
                            <option value="forca">Treinos de força</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={() => setShowModal(true)}>Calcular</Button>

            </div>
        </>
    )
}

export default Start;