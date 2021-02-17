import styled from "styled-components";

const MainContentWrapper = styled.div`
    width : ${props => props.theme.mainContentWidth};
    max-width : ${props => props.theme.mainContentMaxWidth};
    margin : 0 auto 0 auto;
`

export default MainContentWrapper;