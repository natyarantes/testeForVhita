import Modal from 'react-bootstrap/Modal'
import "../css/style.scss"
import Button from 'react-bootstrap/Button'

function ModalFunction(props){
    
    const show = props.show
    const close = props.close
    return (
        <Modal show={show}>
            <Modal.Header >
                <Modal.Title> <img src="/warning2.png"/> ATENÇÃO</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <p>As informações da calculadora não excluem a necessidade de acompanhamento nutricional para uma alimentação e suplementação saudáveis.</p>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="primary" onClick={() => close()}>Entendi, mostrar resultado</Button>
            </Modal.Footer>
        </Modal>
        )
        
    }
    
    export default ModalFunction
    
    