import { Title,  FormComponent} from "./Form_css";

export const Form = ({ title, noValidate, children }) => {
    return (
        <FormComponent noValidate={noValidate}>
            <Title>{title}</Title>
            {children}
        </FormComponent>
            
            
    );
}