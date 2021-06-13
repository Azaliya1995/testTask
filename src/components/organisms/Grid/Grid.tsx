import React, {FC} from "react";
import {StyledGrid} from "./Grid.sc";
import Card from "../../molecules/Card";
import {Link} from "react-router-dom";

export interface Home {
    id: string; // I assume ID is defined elsewhere
    title: string;
    address: string;
    type: "IndependentLiving" | "SupportAvailable";
    price: string;
}

interface Props {
    homes: Home[]
}

const Grid: FC<Props> = ({homes = []}: Props) => (
    <StyledGrid>
        {
            homes.map((el, idx) => {
                return <Link style={{textDecoration: 'none'}} to={`/details/${idx}`}>
                            <Card key={`${idx}card_item`} home={el}/>
                       </Link>
            })
        }
    </StyledGrid>
);

export default Grid;
