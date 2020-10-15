import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
`; 

export const Inner = styled.main`
    flex: 1;
`;

export const Form= styled.form`
    width: 70rem;
    margin: 64px auto;

    background: #FFFFFF;
    border: .1rem solid #D3E2E5;
    border-radius: 20px;

    padding: 6.4rem 8rem;

    overflow: hidden;

    .leaflet-container {
        margin-bottom: 4rem;
        border: .1rem solid #D3E2E5;
        border-radius: 2rem;
    };
`;

export const Fieldset = styled.fieldset`
    border: 0;;

    & + & {
        margin-top: 8rem;
    };
`;

export const Legend = styled.legend`
    width: 100%;

    font-size: 3.2rem;
    line-height: 3.4rem;
    color: #5C8599;
    font-weight: 70rem;

    border-bottom: .1rem solid #D3E2E5;
    margin-bottom: 4rem;
    padding-bottom: 2.4rem;
`;

export const InputWrapper = styled.div`
    & + & {
        margin-top: 2.4rem;
    }
`;

export const Label = styled.label`
    display: flex;
    color: #8FA7B3;
    margin-bottom: .8rem;
    line-height: 2.4rem;
`;

export const Span = styled.span`
    font-size: 1.4rem;
    color: #8FA7B3;
    margin-left: 2.4rem;
    line-height: 2.4rem;
`;

export const Input = styled.input`
    width: 100%;
    background: #F5F8FA;
    border: .1rem solid #D3E2E5;
    border-radius: 2rem;
    outline: none;
    color: #5C8599;

    height: 6.4rem;
    padding: 0 1.6rem;
`;

export const TextArea = styled.textarea`
    width: 100%;
    background: #F5F8FA;
    border: .1rem solid #D3E2E5;
    border-radius: 2rem;
    outline: none;
    color: #5C8599;

    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
    padding: 1.6rem;
    line-height: 2.8rem;
`;

export const NewImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1.6rem;

    img {
        width: 100%;
        height: 9.6rem;
        object-fit: cover;
        border-radius: 2rem;
    };
`;

export const NewImageLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9.6rem;
    background: #F5F8FA;
    border: .1rem dashed #96D2F0;
    border-radius: 2rem;
    cursor: pointer;
`;

export const NewImageInput = styled.input`
    display: none;
`;

export const Select = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ButtonSelect =  styled.button`
    height: 6.4rem;
    background: #F5F8FA;
    border: .1rem solid #D3E2E5;
    color: #5C8599;
    cursor: pointer;
    border-radius: 2rem 0px 0px 2rem;

    & + & {
        border-radius: 0 2rem 2rem 0;
        border-left: 0;
    };

    &.active {          // need check
        background: #EDFFF6;
        border: .1rem solid #A1E9C5;
        color: #37C77F;
    };
`;

export const Submit = styled.button`
    margin-top: 6.4rem;

    width: 100%;
    height: 6.4rem;
    border: 0;
    cursor: pointer;
    background: #3CDC8C;
    border-radius: 2rem;
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
        margin-right: 1.6rem;
    };
`;