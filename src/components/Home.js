import React from 'react'
import Section from './Section';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bckGrnImg="model-s.jpg"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bckGrnImg="model-y.jpg"
        />
        <Section 
        title="Model 3"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bckGrnImg="model-3.jpg"
        />
        <Section 
        title="Model X"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bckGrnImg="model-x.jpg"
        />
        <Section 
        title="Solar Panel To Save Energy"
        description="1 Year Guarantee"
        leftBtn="Order now"
        rightBtn="Learn more"
        bckGrnImg="solar-panel.jpg"
        />
        <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtn="Order now"
        rightBtn="Learn more"
        bckGrnImg="solar-roof.jpg"
        />
        <Section 
        title="Accesories"
        description=""
        leftBtn="Shop now"
        bckGrnImg="accessories.jpg"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`