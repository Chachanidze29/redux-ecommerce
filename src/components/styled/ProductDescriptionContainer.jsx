import styled from "styled-components";

const ProductDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  
    img {
        max-width: 30%;
        flex-basis: 40%;
    }
  
    p {
      flex-basis: 40%;
    }
`

export default ProductDescriptionContainer;