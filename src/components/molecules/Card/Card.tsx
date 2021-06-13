import React, {FC} from "react";
import {StyledCard} from "./Card.sc";
import CardImage from "../CardImage";
import CardInfo from "../CardInfo";
import {Home} from "../../organisms/Grid/Grid";

interface Props {
    home: Home;
}

const Card: FC<Props> = ({home = {id: '', title: '', address: '', type: 'IndependentLiving', price: '0'}}: Props) => (
    <StyledCard>
        <CardImage imageUrl={'http://placekitten.com/204/100'}
                   labelUrl={`https://via.placeholder.com/204x50/${home.type === 'IndependentLiving' ? '006F79' : 'EC6608'}/FFFFFF?text=${home.type}`}
                   altImage={home.title}/>
        <CardInfo address={home.address} price={home.price} houseName={home.title}/>
    </StyledCard>
);

export default Card;
