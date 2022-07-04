import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";

const SHeader = styled.header`
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
  font-size: 18px;
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>Logo</Logo>
      <MenuWrap>
        <Menu>Menu1</Menu>
        <Menu>Menu2</Menu>
        <Menu>Menu3</Menu>
      </MenuWrap>
    </SHeader>
  );
};
