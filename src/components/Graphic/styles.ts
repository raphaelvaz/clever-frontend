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
            margin-top: 6rem;
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

            margin-top: 50px;
        }
    }
    main{
        width: 70%;
        margin:auto;

        button{
            width:100px;
            height: 45px;

            margin-right: 10px;

            border-radius: 4px;
            border:0;

            background-color: var(--backgroundSvgButtons);

            div{
                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    margin-right: 10px;
                }
            }
        }
    }
`;