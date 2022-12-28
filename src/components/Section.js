import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

function Section(props) {
  return (
    <Wrap bgImg={props.bckGrnImg}>
        <Fade top>
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                {props.leftBtn}
                </LeftButton>
                {props.rightBtn && 
                <RightButton>
                    {props.rightBtn}
                </RightButton>}
            </ButtonGroup> 
            </Fade>       
            <img className='downarrow' src='/images/down-arrow.svg' alt='' />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImg}")`}
`


const ItemText = styled.div`
    padding: 15vh 0 0;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

// const DownArrow = styled.div`
//     margin-top: 20px;
//     height: 40px;
//     width: 40px;
// `


const Buttons = styled.div`
`
