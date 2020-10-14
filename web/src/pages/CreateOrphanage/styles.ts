import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
`; 

export const Inner = styled.main`
    flex: 1;
`;

export const Form= styled.form`
    width: 700px;
    margin: 64px auto;

    background: #FFFFFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;
`;

export const Fieldset = styled.fieldset`
    border: 0;;

    & + & {
        margin-top: 80px
    }
`;

export const Legend = styled.legend`
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #5C8599;
    font-weight: 700;

    border-bottom: 1px solid #D3E2E5;
    margin-bottom: 40px;
    padding-bottom: 24px;
`;

export const InputWrapper = styled.div`
    & + & {
        margin-top: 24px;
    }
`;

export const Label = styled.label`
    display: flex;
    color: #8FA7B3;
    margin-bottom: 8px;
    line-height: 24px;
`;

export const Span = styled.span`
    font-size: 14px;
    color: #8FA7B3;
    margin-left: 24px;
    line-height: 24px;
`;

export const Input = styled.input`
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    outline: none;
    color: #5C8599;

    height: 64px;
    padding: 0 16px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    outline: none;
    color: #5C8599;

    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
`;

export const NewImage = styled.button`
    width: 100%;
    height: 64px;
    background: #F5F8FA;
    border: 1px dashed #96D2F0;
    border-radius: 20px;
    cursor: pointer;
`;

export const Select = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ButtonSelect =  styled.button`
    height: 64px;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    color: #5C8599;
    cursor: pointer;
    border-radius: 20px 0px 0px 20px;

    & + & {
        border-radius: 0 20px 20px 0;
        border-left: 0;
    };

    &.active {          // need check
        background: #EDFFF6;
        border: 1px solid #A1E9C5;
        color: #37C77F;
    };
`;

export const Submit = styled.button`
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3CDC8C;
    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
        background: #36CF82;
    };

    svg {
        margin-right: 16px;
    };
`;