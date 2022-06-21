import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkContainer = styled(Link)`
    font-size: x-large;
    font-weight: bold;
    color: white;
    outline: none;
    text-decoration: none;
    border-bottom: 2px solid white;
    
    &:hover {
        border-color: cyan;
    }
`

export default LinkContainer;