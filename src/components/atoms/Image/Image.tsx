import React, {FC} from "react";
import {StyledImage} from "./Image.sc";

interface Props {
    imageUrl: string
    alt?: string
    isLabel?: boolean
}

const Image: FC<Props> = ({imageUrl = '', alt = '', isLabel = false}: Props) => (
    <StyledImage src={imageUrl} alt={alt} isLabel={isLabel} />
);

export default Image;