import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    min-width:450px;

    display: flex;
    flex-direction: column;

    background: var(--backgroundAside);

    strong{
        max-width: 290px;
        color: var(--asideText);
        font-size: 2.0rem;
        line-height: 2.5rem;
        margin: 60px;
    }
`;

export const Logo = styled.img`
    width: 12rem;
    padding: 25px 0px 0px 25px;
`;