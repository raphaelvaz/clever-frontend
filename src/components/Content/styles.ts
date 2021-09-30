import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const FormArea = styled.div`
    width:80%;
    height: 100vh;
    margin:0 auto;

    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content: center;

    h2{
        color:var(--textHeading);
        line-height: 3.5rem;
    }
    span{
        color: var(--textHeading);
    }
`;