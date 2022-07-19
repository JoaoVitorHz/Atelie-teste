import styled from "styled-components";
import bgMarron from '../../../assets/form/background-marrom.png'
export const FormStyled = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    background-image: url(${bgMarron});

    display: flex;
    justify-content: center;
    align-items: center;

    .form-bg{
        width: 80%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form-bg span, h1{
        color: #fff;
        font-size: 30px;
    }
    .form-bg p{
        margin: 10px 0;
        color: #fff;
        width: 40%;
        text-align: center;
    }
    form{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        width: 50%;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        color: #fff;
        font-size: 14px;
        margin: 10px 0;
    }
    input, select{
        background-color: transparent;
        color: #fff;
        border-bottom: 1px solid #fff;
        padding: 10px 0;
        outline: 0;
    }
    input::placeholder{
        color: #fff;
        font-size: 16px;
    }
    .inputName{
        grid-column: 1/3;
    }
    .WarningInput{
        font-size: 12px !important;
        display: none;
    }
    select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
    }
    .optionSelect{
        color: black;
    }
    .buttonForm{
        margin-top: 10px;
        grid-column: 1/3;
        text-align: center;
    }
    .buttonForm button{
        background-color: #e8a612;
        padding: 10px 30px;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        letter-spacing: 1px;
        font-weight: 500;
    }
    
    @media (max-width: 1100px){
        .form-bg p{
            margin: 10px 0;
            color: #fff;
            width: 50%;
            text-align: center;
        }
        form{
            width: 70%;
        }
    }
    @media (max-width: 840px){
        form{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 80%;
        }
    }
    @media (max-width: 730px){
        .form-bg p{
            width: 70%;
        }
    }
    @media (max-width: 620px){
        form{
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            width: 80%;
        }
        .inputName{
            grid-column: 1/2;
        }
        .buttonForm{
            margin-top: 10px;
            grid-column: 1/2;
            text-align: center;
        }
        .form-bg{
            padding: 10px;
        }
        .form-bg span{
        color: #fff;
        font-size: 25px;
        }
        .form-bg p{
            font-size: 14px;
        }
    }
    @media (max-width: 430px){
        input::placeholder{
            font-size: 14px;
        }
    }
`;