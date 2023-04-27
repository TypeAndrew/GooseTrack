import { Title,  FormComponent} from "./Form.styled";

export const Form = ({ title, noValidate, children }) => {
    return (
        <FormComponent noValidate={noValidate}>
            <Title>{title}</Title>
            {children}
        </FormComponent>
            
            
    );
}