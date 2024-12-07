import styled from 'styled-components';
import Heading from './Heading';

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 0.1rem solid var(--color-grey-light-1);
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as='h1'>User Management</Heading>
    </StyledHeader>
  );
}

export default Header;
