import { LoginStyle } from "./css/loginStyles"

type Props = {
    clickFn: () => void;
}

export function Login({ clickFn }:Props) {
    return(
        <LoginStyle>
            <h1>LOGIN</h1>
            <form className="login" action="">

                <div className="inputs loginForm">
                    <input type="text" name="CPF" placeholder="Digite seu CPF" />
                    <span className="WarningInput">Digite algo valido</span>
                </div>

                <div className="inputs loginForm">
                    <input type="text" name="CPF" placeholder="Digite sua senha" />
                    <span className="WarningInput">Digite algo valido</span>
                </div>
                <div className="fazerCadastro">
                    <span onClick={clickFn}>Ainda não é cadastrado?</span>
                    <span>Esqueceu sua senha?</span>
                </div>
                <div className="buttonForm loginForm">
                    <button type="submit">ENTRAR</button>
                </div>
            </form>
        </LoginStyle>
    )
}