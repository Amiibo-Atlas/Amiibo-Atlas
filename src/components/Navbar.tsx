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
  @media (min-width: 587px) {
    flex-direction: row;
  }
`;

const NavbarLi = styled.li`
  list-style-type: none;
  color: white;
  padding: 0.5rem;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarUL>
        <NavbarLi>
          <NavLink to="https://google.com">Dummy Link</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="https://GitHub.com">Dummy Link</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="https://LinkedIn.com">Dummy Link</NavLink>
        </NavbarLi>
      </NavbarUL>
    </NavbarContainer>
  );
}

export default Navbar;
