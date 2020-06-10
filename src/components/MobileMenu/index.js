import React from "react";
import { Link } from "gatsby";

// styles
import { OverrideGlobalStyle, Wrapper, Nav } from "./MobileMenu.styles";

const MobileMenu = ({ menuOpen, items }) => (
  <div>
    <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          {items.map(item => (
            <li key={item.id}>
              <Link to={item.link} activeClassName="active">
                {item.name}
              </Link>
            </li>
          ))}
        </Nav>
      </Wrapper>
  </div>
);

export default MobileMenu;