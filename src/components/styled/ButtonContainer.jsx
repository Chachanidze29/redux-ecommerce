import styled from "styled-components";

const ButtonContainer = styled.button`
    padding: 1rem 2rem;
    font-size: large;
    background-color: cornflowerblue;
    color: white;
    border: 2px solid transparent;
    border-radius: 5%;
  
    &:hover {
        background-color: white;
        color: cornflowerblue;
        border: 2px solid cornflowerblue;
        cursor: pointer;
    }  
`

export default ButtonContainer;