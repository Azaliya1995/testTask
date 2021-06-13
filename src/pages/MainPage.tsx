import React, {useEffect, useState} from 'react';
import Grid from "../components/organisms/Grid";
import {API_ROOT} from "../utils/api";
import SearchBar from "../components/molecules/SearchBar";
import {MIN_CHARS_TO_SEARCH} from "../utils/constants";
import Header from "../components/atoms/Header/Header";
import Button from "../components/atoms/Button/Button";
import { Link } from 'react-router-dom';

type Home = {
    id: string;
    title: string;
    address: string;
    type: "IndependentLiving" | "SupportAvailable";
    price: string;
}

export const MainPage = () => {
    const [homes, setHomes] = useState<Home[]>([])
    const [filteredHomes, setFilteredHomes] = useState<Home[]>([])

    const [error, setError] = useState<string>('')
    const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        if(searchText.length > MIN_CHARS_TO_SEARCH) {
            setFilteredHomes(homes.filter((el)=> el.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))
        }
    },[homes, searchText])

    useEffect(() => {
        fetch(API_ROOT)
            .then(res => res.json())
            .then((data) => {
                setHomes(data)
            })
            .catch((err) => {
                setError(err)
            })
    }, [])
    return (
        <>
            <Header text={'Our Latest Developments'}/>
            <SearchBar onChange={(e) => setSearchText(e)}/>
            {!error && <Grid homes={searchText.length > MIN_CHARS_TO_SEARCH ? filteredHomes : homes}/>}
            <Link to={'/nowhere'}>
                <Button text={'See more'}/>
            </Link>

        </>
    )
};

export default MainPage;
