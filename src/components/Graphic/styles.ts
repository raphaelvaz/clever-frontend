import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-bottom: 50px;

        img{
            margin-top: 2rem;
        }
        strong{
            font-size: 1.5rem;
            color:var(--textHeading);
            margin-top: 1rem;
        }
        span{
            color: var(--textBody)
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin-top: 25px;
            border-top: 1px solid #E4ECF7;
            padding-top: 24px;
        }
    }
    main{
        width: 70%;
        margin:auto;
    }
`;

export const Content = styled.div`
    width:80%;
    margin:auto;
    margin-top: 100px;
    background-color: #ffffff;

    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
    border-radius: 16px;
`;

interface CustomButtonProps {
    active: boolean;
}

export const CustomButton = styled.button<CustomButtonProps>`
    width:100px;
    height: 45px;

    margin-right: 10px;

    border-radius: 4px;
    border:0;

    background: ${(props) => props.active ? 'var(--backgroundAside)' : 'var(--backgroundSvgButtons)'};
    color:${(props) => props.active ? '#fff' : '#40465C'};

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            margin-right: 10px;
        }
    }
`;