import { LabelComponent} from "./Label_css";

export const Label = ({ children }) => {
    return (
        <LabelComponent>
            { children }
        </LabelComponent>     
    );
}