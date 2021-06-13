import React, {FC} from "react";
import {StyledHeader} from "./Header.sc";

interface Props {
    text: string
}

const Image: FC<Props> = ({text = ''}: Props) => (
    <StyledHeader>{text}</StyledHeader>
);

export default Image;