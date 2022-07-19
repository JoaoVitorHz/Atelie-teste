import styled from 'styled-components'
import bg from '../../../assets/header/background.png'

export const HeaderStyle = styled.header `
    width: 100vw;
    min-height: 100vh;
    height: auto;
    background-image: url(${bg});

    display: flex;
    justify-content: center;
    align-items: center;
    header{
        width: 85%;
        height: 100%;
        display: flex;
        padding: 40px;
    }
    .headerLeftSide{
        width: 35%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    .headerLeftSide .headerItens{
        width: 300px;
        height: 80%;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .headerLeftSide svg{
        width: 100%;
        height: 60%;
        flex: 1;
    }
    .headerButtons{
        width: 100%;
        margin-top: 20px;

        display: flex;
        gap: 10px;
    }
    .btnHeader{
        background-color: #e8a612;
        flex: 1;
        border-radius: 3px;
        color: white;
        padding: 10px 5px;
        font-weight: 500;
        font-size: 14px;
        width: auto;
    }
    .headerRightSide{
        width: 65%;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .headerRightSide img{
        width: 630px;
        padding: 10px;
    }
    
    @media (max-width: 1000px){
        .headerRightSide img{
            width: 530px;
        }
    }
    @media (max-width: 840px){
        .headerRightSide img{
            width: 430px;
        }
        .headerLeftSide .headerItens{
            width: 200px;
        }
        .btnHeader{
            font-size: 11px;
        }
    }
    @media (max-width: 690px){
        header{
            flex-direction: column;
            align-items: center;
        }
        .headerLeftSide{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
         }
        .headerRightSide{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .headerLeftSide svg{
            width: 200px;
        }
    }
    @media (max-width: 450px){
        .headerRightSide img{
            width: 380px;
        }
    }
`;
