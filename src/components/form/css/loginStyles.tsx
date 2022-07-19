import styled from "styled-components";

export const LoginStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login{
        display: flex;
        flex-direction: column;
    }
    .loginForm{
        margin: 25px 0;
    }
    .fazerCadastro{
        display: flex;
        justify-content: space-between;
    }
    .fazerCadastro span{
        color: #e8a612;
        font-size: 14px;
        cursor: pointer;
    }
`;