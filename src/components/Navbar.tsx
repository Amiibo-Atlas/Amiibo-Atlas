import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const NavbarUL = styled.ul`
  background-color: #a08aa0;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin: 0;
  @media (min-width: 587px) {
    flex-direction: row;
  }
`;

const NavbarLi = styled.li`
  list-style-type: none;
  color: white;
  align-self: flex-start;
  flex-grow: 1;
  font-size: 2rem;
  a.active {
    background-color: #d1cbcb;
  }
  @media (min-width: 587px) {
    align-self: center;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarUL>
        <NavbarLi>
          <NavLink to="/">Amiibo Atlas</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="/search">Search</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="#">Dummy Link</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="#">Dummy Link</NavLink>
        </NavbarLi>
      </NavbarUL>
    </NavbarContainer>
  );
}

export default Navbar;
