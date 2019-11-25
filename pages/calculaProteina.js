import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/css/style.scss"
import {useRouter} from 'next/router'


function CalculaProteina (props){

    const router = useRouter()
    const {pesoUsuario, tipoAtividade} = router.query
    let qtdProteina

switch (tipoAtividade) {
    case "sedentario":
        qtdProteina = parseInt(pesoUsuario) * 0.8
        break;
        case "atletafds":
            qtdProteina = parseInt(pesoUsuario) * 1.0
            break;
        case "resistencia":
            qtdProteina = parseInt(pesoUsuario) * 1.6
            break;
        case "misto":
            qtdProteina = parseInt(pesoUsuario) * 1.7
            break;
        case "forca":
            qtdProteina = parseInt(pesoUsuario) * 2.0
            break;
    default:
        break;
}



    
    return(
        <div>
            <h3>Quantidade de proteina necessária:</h3>
            <p>Sua quantidade de proteína necessária diariamente é de: {qtdProteina}g.</p>
        </div>
    )
}

export default CalculaProteina