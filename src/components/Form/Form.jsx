import { Title,  FormComponent} from "./Form_css";

export const Form = ({ title, children }) => {
    return (
        <FormComponent>
            <Title>{title}</Title>
            {children}
        </FormComponent>
            
            
    );
}