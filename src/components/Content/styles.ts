import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const FormArea = styled.div`
    width:80%;
    height: 100vh;
    margin:0 auto;

    padding-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content: start;

    h2{
        color:var(--textHeading);
        line-height: 3.5rem;
    }
    span{
        color: var(--textHeading);
        margin-bottom:35px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width:100%;

        label{
        color: var(--textBody);
        font-size:14px;
        line-height: 2rem;
        }
        input{
            width: 80%;
            height: 46px;

            border-radius: 6px;
            border: 1px solid #E1E8FF;

            padding: 10px;
            margin-bottom: 20px;

            &[type=date]::-webkit-datetime-edit{
                color: var(--textPlaceholder)
            }
        }
        button{
            width: 196px;
            height: 46px;

            align-self: center;

            border-radius: 50px;
            border:none;
            
            background-color: var(--PrimaryColor);
            color: var(--asideText);

            font-weight: 600;

            margin-top: 30px;
        }
    }
`;

export const HourSelectContainer = styled.div`
    display: flex;

    div{

        color: var(--SelectHourText);

        border: 1px solid #E5E5E5;
        border-radius:6px;

        padding: 12px;
        margin:8px;

        cursor: pointer;
    }
`;