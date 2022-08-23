import { CadastroStyle } from "./css/cadastroStyle"
import {useState, ChangeEvent} from 'react'

//tipando a função
type Props ={
    clickFn?: () => void;
}
export function Cadastro({clickFn}:Props) {
    //State de cada item do formulario 
    const [addNameText, setAddNameText] = useState('');
    const [addCpfText, setAddCpfText] = useState('');
    const [addEmailText, setAddEmailText] = useState('');
    const [addPasswordText, setAddPasswordText] = useState('');
    const [addConfirmPasswordText, setAddConfirmPasswordText] = useState('');
    const [addEmpresaText, setAddEmpresaText] = useState('');
    const [addClassificacaoText, setAddClassificacaoText] = useState('');

    //Pegando os valores e colocando nos states
    const addNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddNameText(e.target.value);
    }
    const addCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddCpfText(e.target.value);
    }
    const addEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddEmailText(e.target.value);
    }
    const addPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddPasswordText(e.target.value);
    }
    const addConfirmPassowrdChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setAddConfirmPasswordText(e.target.value);
    }
    const addEmpresaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddEmpresaText(e.target.value);
    }
    const addClassificacaoChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAddClassificacaoText(e.target.value);
    }
    return(
        <CadastroStyle>
            <span>CADASTRE-SE</span>
            <p>Preencha os campos abaixo para validar sua participação na campanha e concorrer aos prêmios</p>
            <form action="">
                        <div className="inputs inputName">
                            Nome
                            <input type="text" placeholder="Nome" value={addNameText} onChange={addNomeChange} />
                            <span className="WarningInput">Digite algo valido</span>
                        </div>
                        <div className="inputs">
                            CPF
                            <input type="text" placeholder="CPF" value={addCpfText} onChange={addCpfChange} />
                            <span className="WarningInput">Digite algo valido</span>
                        </div>
                        <div className="inputs">
                            E-mail
                            <input type="email" placeholder="email" value={addEmailText} onChange={addEmailChange}/>
                            <span className="WarningInput">Digite algo valido</span>
                        </div>
                        <div className="inputs">
                            Senha
                            <input type="password" placeholder="Digite sua senha" value={addPasswordText} onChange={addPasswordChange}/>
                            <span className="WarningInput">Digite algo valido</span>
                        </div>
                        <div className="inputs">
                            Senha
                            <input type="password" placeholder="Confirme sua Senha" value={addConfirmPasswordText} onChange={addConfirmPassowrdChange}/>
                            <span className="WarningInput">Digite algo valido</span>
                        </div>
                        <div className="inputs">
                            Empresa
                            <input type="text" placeholder="Empresa" value={addEmpresaText} onChange={addEmpresaChange}/>
                            <span className="WarningInput">Digite algo valido</span>
                        </div>
                        <div className="inputs">
                            Classifação
                            <select name="" id="" value={addClassificacaoText} onChange={addClassificacaoChange}>
                                <option className="optionSelect" value="Gerente">Gerente</option>
                                <option className="optionSelect" value="Revendedor">Revendedor</option>
                                <option className="optionSelect" value="Distribuidor">Distribuidor</option>
                            </select>
                        </div>
                        <div className="fazerLogin">
                            <span onClick={clickFn}>Você já tem um cadastro?</span>
                         </div>
                        <div className="buttonForm">
                            <button type="submit">ENVIAR</button>
                        </div>
                </form>
            
        </CadastroStyle>
    )
}
