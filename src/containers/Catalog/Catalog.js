import React, {useContext, useEffect, useState} from 'react';
import {data} from "../../components/data";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import {Container, CardWrapper,CatalogSelect} from "../../components/Global.styled";
import {MenuBar, DropdownBar} from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import Cosmetology from "../../components/Cosmetology";
import Search from "../../components/Search/Search";

function Catalog() {

    const cosmetologyBuilds = useContext(Cosmetology)

    const [items, setItems] = useState(cosmetologyBuilds.slice(0));
    const [searchCosmetologyBuildName, setSearchCosmetologyBuildName] = useState('')
    const [filterCosmetologyBuildName, setFilterCosmetologyBuildName] = useState('None');
    const [filterLocation, setFilterLocation] = useState('None');

    useEffect(() => {
        const pattern = new RegExp(searchCosmetologyBuildName, 'i');
        let filteredItems = cosmetologyBuilds;

        if (searchCosmetologyBuildName !== '') {
            filteredItems = filteredItems.filter(item => (pattern.test(item.cosmetologyName)));
        }

        if (filterCosmetologyBuildName !== 'None') {
            filteredItems = filteredItems.filter(item => (item.cosmetologyName === filterCosmetologyBuildName));
        }

        if (filterLocation !== 'None') {
            filteredItems = filteredItems.filter(item => (item.appointment_for === filterLocation));
        }

        setItems(filteredItems.slice(0));
    }, [filterCosmetologyBuildName, filterLocation, searchCosmetologyBuildName, cosmetologyBuilds]);

    return (
        <Container>
            <MenuBar>
                <Search searchState={[searchCosmetologyBuildName, setSearchCosmetologyBuildName]}/>
                <DropdownBar>
                    <Filter name='Name' options={['Mask', 'Powder','Lipstick','Scrub','Powder']}
                            filterState={[filterCosmetologyBuildName, setFilterCosmetologyBuildName]}/>
                    <Filter name='Appoinment For' options={['Body', 'Face', 'Hands','Lips']}
                            filterState={[filterLocation, setFilterLocation]}/>
                    <CatalogSelect>
                        {data.map(dataItem =>
                            <option>
                                {dataItem.optionName}</option>)
                        }
                    </CatalogSelect>
                </DropdownBar>
                <div>
                    <Button buttonText="Apply" backgroundColor="#fff" color="#000000" fontSize="15px"
                            padding="10px 45px"
                            border="1px solid"/>
                </div>
            </MenuBar>
            <CardWrapper>
                {items.map((cosmetologyBuild) => (
                    <Card cosmetologyBuild={cosmetologyBuild}/>
                ))}
            </CardWrapper>
        </Container>
    );
}

export default Catalog;