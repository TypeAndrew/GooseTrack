import { Title,  FormComponent} from "./Form_css";

export const Form = ({ title, novalidate, children }) => {
    return (
        <FormComponent novalidate={novalidate}>
            <Title>{title}</Title>
            {children}
        </FormComponent>
            
            
    );
}