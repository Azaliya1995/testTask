import React, {FC, SetStateAction} from "react";
import {StyledSearchBar} from "./SearchBar.sc";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";

interface Props {
    onChange: (a: SetStateAction<string>) => void;
}

const SearchBar: FC<Props> = ({onChange}: Props) => (
    <StyledSearchBar>
        <Text text='Filter' fontWeight='bold' padding={5} />
        <Input onChange={(text) => onChange(text)}/>
    </StyledSearchBar>
);

export default SearchBar;
