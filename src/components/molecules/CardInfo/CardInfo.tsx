import React, {FC} from "react";
import Text from '../../atoms/Text';
import {StyledCardInfo} from "./CardInfo.sc";

interface Props {
    houseName: string;
    address: string;
    price: string;
}

const CardInfo: FC<Props> = ({houseName = '', address = '', price = ''}: Props) => (
    <StyledCardInfo>
        <Text fontSize={18} fontWeight='bold' lineHeight={27} text={houseName}/>
        <Text fontSize={16} text={address}/>
        <br/>
        <div>
            <Text fontSize={14} text={`New Properties for Sale from`}/>
            <Text fontWeight={'bold'} fontSize={14} text={`£${price}`}/>
        </div>
        <Text fontSize={14} lineHeight={19} text='Shared Ownership Available'/>
    </StyledCardInfo>
);

export default CardInfo;