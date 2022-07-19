import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0; padding: 0; border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        overflow-x: hidden;
    }
    .modal{
        padding: 40px 20px;
        background-color: #e8a612;
        border-radius: 3px;
        border: 1px solid white;
        position: fixed;
        top: 40%;
        left: 40%;
    }
    .modal span{
        font-size: 16px;
    }
`;  