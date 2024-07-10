import { FaSearch } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import React from 'react';
import styled from 'styled-components';
import { GrAnalytics } from 'react-icons/gr';
import { grey } from '@mui/material/colors';

const Container = styled.div`
  height: 60px;
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  align-itens: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
`;

const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <FaSearch style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GHAUS</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <MdOutlineShoppingCart />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
