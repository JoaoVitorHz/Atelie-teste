import styled from "styled-components"
import bgCinza from '../../../assets/footer/background-cinza.png'

export const FooterStyle = styled.div `
    width: 100vw;
    min-height: 60vh;
    height: auto;
    background-image: url(${bgCinza});

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    footer{
        width: 80%;
        height: 80%;
        display: flex;
    }
    .footerLeftSide{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .footerLeftSide span{
        font-size: 30px;
        display: block;
        margin-bottom: 20px;
        font-weight: 500;
        line-height: 40px;
    }
    .footerLeftSide p{
        font-size: 13px;
    }
    .footerRightSide{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footerRightSide svg{
        width: 200px;
    }
    .footerBar{
        width: 100vw;
        min-height: 5vh;
        height: auto;
        background-color: #e8a612;
        display: flex;
        justify-content: center;
    }
    .footerBarBg{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        padding: 10px;
    }
    .footerBar span{
        font-size: 11px;
        color: #fff;
    }
    .footerBarBg span a{
        color: #000;
    }

    @media (max-width: 1090px){
        .footerLeftSide span{
            font-size: 25px;
            display: block;
            margin-bottom: 20px;
            font-weight: 500;
            line-height: 40px;
        }
    }
    @media (max-width: 910px){
        .footerLeftSide span{
            font-size: 22px;
            line-height: auto;
        }
    }
    @media (max-width: 795px){
        .footerLeftSide span{
            font-size: 19px;
            line-height: 25px;
            margin-bottom: 5px;
        }
        .footerLeftSide p{
            font-size: 12px;
        }
    }
    @media (max-width: 690px){
        footer{
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .footerLeftSide{
            width: 90%;
        }
        .footerRightSide{
            width: 80%;
        }
    }
    @media (max-width: 400px){
        .footerLeftSide span{
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 5px;
        }
    }
`;