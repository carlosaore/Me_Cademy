import styled from "styled-components";

const TextBox = styled.article`


.numbered {
    max-width:40%;
    margin:0 auto;
    vertical-align:middle;
    display: flex;
    flex-direction: column;
}

img {
    width: 30px;
    margin-right: 5px;
    vertical-align:middle;
}

@media screen and (max-width: 1265px) {
    .numbered {
    max-width:50%; 
    }
}

@media screen and (max-width: 1000px) {
    .numbered {
    max-width:60%; 
    }
}

@media screen and (max-width: 768px) {
    .numbered {
    max-width:70%; 
    }
}



`;

export default TextBox;