import { FormStyled } from "./css/formStyle"
import { Cadastro } from './cadastroForm'
import { Login } from './loginForm'
import { useState } from 'react'

export function Form() {
    const [show, setShow] = useState(false);

    const loginClick = () => {
        setShow(true);
    }
    const cadastroClick = () => {
        setShow(false);
    }
    const eventoModal = () => {}

    return(
        <FormStyled>
            <div className="form-bg">
                {/* Condicional que verifica qual componente vai ser exibido */}
                {show ? <Cadastro clickFn={cadastroClick} /> : <Login clickFn={loginClick}/>}
            </div>
        </FormStyled>
    )
}