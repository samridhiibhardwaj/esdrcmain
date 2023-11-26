import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Workshops and Events
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Projects and Games
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Our Team
          </SidebarLink>
        </SidebarMenu>

      
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
