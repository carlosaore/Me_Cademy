import styled, { css } from 'styled-components';

const ComponentWrapper = styled.div`
    padding-top: ${props => props.theme.inbetweenPadding};
    padding-bottom: ${props => props.theme.inbetweenPadding};

    ${props => props.first && css`
        padding-top: 0;
    `}

    ${props => props.last && css`
        padding-bottom: 0;
    `}
`;

export default ComponentWrapper;