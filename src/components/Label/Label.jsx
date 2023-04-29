import { LabelComponent} from "./Label.styled";

export const Label = ({ children, color }) => {
    return (
        <LabelComponent color={color}>
            { children }
        </LabelComponent>     
    );
}