import { Container } from "@mui/material";
import React, { useState } from "react";
import Souz from "../../components/Souz";
import { SwiperComponent } from "../../components/Swiper";
import TabsComponent from "../../components/TabsComponent";



const VALUES = {
    souz: 'souz',
    history: 'history',
    organ: 'organ',
    projects: 'projects',
    ourTeam: 'ourTeam'
}

const GetCategories = ({ action }) => {
    
    switch (action) {
        case VALUES.souz: {
            return <Souz />
        }
        case VALUES.history: {
            return <h1>sdfdsfsdfsdfsdfsdfsdfsdf</h1>
        }
        default: return <></>
    }
}


const Main = () => {

    const categoriesSelect = [
        { value: VALUES.souz, label: 'О союзе' },
        { value: VALUES.history, label: 'История организации' },
        { value:  VALUES.organ, label: "Органы управления и их деятельность"},
        { value: VALUES.projects, label: "Реализуемые проекты"},
        { value: VALUES.ourTeam, label: "Наша команда"}
    ]

    const [value, setValue] = useState(categoriesSelect?.[1].value)

    const swiperImage = [
        { url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' },
        { url: 'https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?cs=srgb&dl=pexels-mo-eid-9454915.jpg&fm=jpg' },
        { url: 'https://i.pinimg.com/474x/6c/12/fd/6c12fdc402726c513901a61f512ba3c6.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg'}
        
    ]

    return (
        <Container maxWidth={'lg'} >
            <h1>О союзе МСУ</h1>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue} /> 
            <GetCategories action={value} />
            <SwiperComponent swiperImage={swiperImage} />
            {/* <PaginationComponent /> */}
        </Container>
    )

}

export default Main