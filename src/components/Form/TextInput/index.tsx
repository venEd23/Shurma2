import React, {FC} from "react";
import style from '../Form.module.scss';

type TProps = {
    placeholder: string;
    handler: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput: FC<TProps> = (props: TProps) => {
    const { placeholder, handler } = props;
    return (
        <input 
            type="text" 
            className={style.auth_form_input} 
            onChange={(e) => handler(e.currentTarget.value)}
            placeholder={placeholder} 
      />
    );
};

export default TextInput;