import React from 'react';
import StyledLink from '../StyledLink';
import styled from 'styled-components';
import { ContentMarginX } from '../../styles/utils';
import Link from 'next/link';

const Container = styled.header`
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${ContentMarginX};
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: Mulish, sans-serif;
  font-weight: 900;
  font-size: 22px;
  line-height: 25px;
`;

const LinkGroup = styled.nav`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    align-self: start;
    > * {
      justify-self: start;
    }
  }
`;

const Header = () => (
  <Container>
    <Logo>Ethan.Liu</Logo>
    <LinkGroup>
      <Link href={`/my-work`}><StyledLink>my work</StyledLink></Link>
      <Link href={`/`}><StyledLink>get in touch</StyledLink></Link>
    </LinkGroup>
  </Container>
);

export default Header;