import { LabelComponent} from "./Label.styled";

export const Label = ({ children }) => {
    return (
        <LabelComponent>
            { children }
        </LabelComponent>     
    );
}