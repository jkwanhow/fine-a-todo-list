
export interface CheckboxProps {
    checked: boolean;
    handleClick: () => void;
}

export interface TextInputProps {
    value: string;
    placeholder?: string;
    handleChange: (value:string) => void;
}