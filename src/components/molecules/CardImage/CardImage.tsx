import React, {FC} from "react";
import {StyledCardImage} from "./CardImage.sc";
import Image from "../../atoms/Image";

interface Props {
    imageUrl: string
    labelUrl: string
    altImage: string
}

const CardImage: FC<Props> = ({imageUrl= '', labelUrl = '', altImage= ''}: Props) => (
    <StyledCardImage>
        <Image imageUrl={imageUrl} alt={altImage}/>
        <Image imageUrl={labelUrl} isLabel={true}/>
    </StyledCardImage>
);

export default CardImage;