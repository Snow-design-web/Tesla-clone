import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/car/carSlice';


function Header() {
  const [sideNavStatus, setSideNavStatus] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt=''/>
      </a>
      <LeftMenu>
        {cars && cars.map((car, i) => (
          <a key={i} href='#'>{car}</a>
        ))}
      </LeftMenu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <MenuBar onClick={()=>setSideNavStatus(true)} />
      </RightMenu>
      <SideNav show={sideNavStatus}>
        <CloseWrapper onClick={()=>setSideNavStatus(false)}>
            <CloseX />
        </CloseWrapper>
        {cars && cars.map((car, i) => (
          <li><a key={i} href='#'>{car}</a></li>
        ))}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Test Drive</a></li>
      </SideNav>
    </Container>
  )
}


export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex: nowrap;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
a {
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 10px 0 0;
}
`

const MenuBar = styled(MenuIcon)`
  cursor: pointer;
`

const SideNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 2;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s ease-in-out;
  border-left: 1px solid lightgrey;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
`
const CloseX = styled(CloseIcon)`
  cursor: pointer;
`


const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`