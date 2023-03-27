import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: all 0.5s;

  &::after {
    content: "";
    top: calc(100% + 2px);
    left: 0;
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 1px;
    /* background: black; */
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    color: var(--color-active);

    &::after {
      background: var(--color-active);
      opacity: 1;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
`;
