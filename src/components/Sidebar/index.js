import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={closeSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={closeSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="/discover" onClick={closeSidebar}>
            Discover
          </SidebarLink>
          <SidebarLink to="/services" onClick={closeSidebar}>
            Services
          </SidebarLink>
          <SidebarLink to="/signup" onClick={closeSidebar}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
