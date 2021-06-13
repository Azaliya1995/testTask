import React, {FC} from "react";
import {StyledInput} from "./Input.sc";

interface Props {
    onChange: (a: string) => void;
}

const Input: FC<Props> = ({onChange}: Props) => (
    <StyledInput onChange={(e) => onChange(e.target.value)} />
);

export default Input;