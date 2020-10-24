import React from 'react';

import {
    Container,
    Fieldset,
    Legend,
    TextArea,
    InputWrapper,
    Label,
    Input,
    Span,
    ImagesWrapper,
    ImageWrapper,
    ImageLabel,
    ImageInput,
    ImageButton,
    SelectWrapper,
    Select,
    Submit,
    ButtonWrapper,
    Button,
    FormWrapper
} from './styles';

interface FormProps {
    children: React.ReactNode;
    onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
};

interface TextAreaProps {
    id?: string | undefined;
    maxLength?: number | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined;

};

interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string | undefined;
};

interface InputProps {
    id?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    type?: 'file';
    multiple?: boolean | undefined;
};

interface ButtonProps {
    children: React.ReactNode;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    type?: 'button' | undefined;
    className?: string | undefined;
};

function Form({ children, onSubmit }: FormProps) {
    return <Container onSubmit={onSubmit}>{children}</Container>;
};

Form.Fieldset = function FormFieldset({ children, ...props }: { children: React.ReactNode }) {
    return <Fieldset {...props}>{children}</Fieldset>;
};

Form.Legend = function FormLegend({ children, ...props }: { children: React.ReactNode }) {
    return <Legend {...props}>{children}</Legend>;
};

Form.TextArea = function FormTextArea({ id, maxLength, value, onChange }: TextAreaProps) {
    return (
        <TextArea
            id={id}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
        />
    );
};

Form.InputWrapper = function FormInputWrapper({ children, ...props }: { children: React.ReactNode }) {
    return <InputWrapper {...props}>{children}</InputWrapper>;
};

Form.Label = function FormLabel({ children, ...props }: LabelProps) {
    return <Label {...props}>{children}</Label>;
};

Form.Input = function FormInput({ id, value, onChange }: InputProps) {
    return (
        <Input
            id={id}
            value={value}
            onChange={onChange}
        />
    )
};

Form.Span = function FormSpan({ children, ...props }: { children: React.ReactNode }) {
    return <Span {...props}>{children}</Span>;
};

Form.ImagesWrapper = function FormImagesWrapper({ children, ...props }: { children: React.ReactNode }) {
    return <ImagesWrapper {...props}>{children}</ImagesWrapper>;
};

Form.ImageWrapper = function FormImageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ImageWrapper>
            {children}
        </ImageWrapper>
    )
}

Form.ImageLabel = function FormImageLabel({ children, htmlFor }: LabelProps) {
    return (
        <ImageLabel
            htmlFor={htmlFor}
        >
            {children}
        </ImageLabel>
    )
};

Form.ImageInput = function FormImageInput({ type, id, onChange, multiple, value }: InputProps) {
    return <ImageInput id={id} type={type} multiple={multiple} value={value} onChange={onChange} />;
};

Form.ImageButton = function FormImageButton({ children, type, onClick }: ButtonProps) {
    return (
        <ImageButton type={type} onClick={onClick}>
            {children}
        </ImageButton>
    );
};

Form.SelectWrapper = function FormSelectWrapper({ children, ...props }: { children: React.ReactNode }) {
    return <SelectWrapper {...props}>{children}</SelectWrapper>;
};

Form.Select = function FormSelect({ children, onClick, type, className }: ButtonProps) {
    return (
        <Select
            className={className}
            onClick={onClick}
            type={type}
        >
            {children}
        </Select>
    );
};

Form.Submit = function FormSubmit({ children, type }: { children: React.ReactNode, type?: 'submit' | undefined }) {
    return (
        <Submit
            type={type}
        >
            {children}
        </Submit>
    )
};

Form.ButtonWrapper = function FormButtonWrapper({ children }: { children: React.ReactNode }) {
    return <ButtonWrapper>{children}</ButtonWrapper>
};

Form.FormWrapper = function FormFormWrapper({ children }: { children: React.ReactNode }) {
    return <FormWrapper>{children}</FormWrapper>
};

Form.Button = function FormButton({ children, onClick, type }: ButtonProps) {
    return (
        <Button onClick={onClick} type={type}>
            {children}
        </Button>
    )
}

export default Form;
