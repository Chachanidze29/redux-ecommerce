import styled from "styled-components";

const ProductListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  
    a {
      text-decoration: none;
      color: black;
    }
    
    img {
      max-width: 100%;
    }
`

export default ProductListContainer;