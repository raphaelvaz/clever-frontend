import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    min-width:500px;

    display: flex;
    flex-direction: column;

    background: var(--backgroundAside);

    strong{
        max-width: 290px;
        color: var(--asideText);
        font-size: 2.0rem;
        line-height: 2.5rem;
        margin: 60px 0 25px 60px;
    }
    span{
        color: var(--asideText);
        line-height: 1.8rem;
        max-width: 270px;
        align-self: end;
        margin-right: 15px;
        line-break: normal;
    }
    img:last-of-type{
        position: absolute;
        bottom: 0px;
        left:0px;

        max-width: 15%;
        mix-blend-mode: multiply;
    }
`;

export const Logo = styled.img`
    width: 12rem;
    padding: 25px 0px 0px 25px;
`;