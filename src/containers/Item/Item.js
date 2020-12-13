import React, {useContext} from "react";
import {ItemWrapper, ItemData} from "./Item.styled"
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import Cosmetology from "../../components/Cosmetology";

function Item() {
    const cosmetologyBuildList = useContext(Cosmetology)
    const {id} = useParams();
    const cosmetologyBuildItems = cosmetologyBuildList.find(cosmetologyBuildItem => (cosmetologyBuildItem.id === parseInt(id)));

    return (
        <ItemWrapper>
            <img src={cosmetologyBuildItems.img} alt="Sport"/>
            <ItemData>
                <h1>{cosmetologyBuildItems.cosmetologyName}</h1>
                <h3>Appoinment For: {cosmetologyBuildItems.appointment_for}</h3>
                <h3>Produce Country: {cosmetologyBuildItems.produce_country}</h3>
                <h3>Capacity: {cosmetologyBuildItems.capacity}</h3>
                <h3>Price In UAH: {cosmetologyBuildItems.priceInUah}</h3>
                <h3>Amount :{cosmetologyBuildItems.amountInPacket}</h3>
                <div>
                    <Link exact to="/catalog">
                        <Button buttonText="Go Back" backgroundColor="#fff" color="#000000" fontSize="15px"
                                padding="13px 20px"
                                border="1px solid"/>
                    </Link>
                    <Button buttonText="Add to cart" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 25px"/>
                </div>
            </ItemData>

        </ItemWrapper>
    );

}

export default Item;
