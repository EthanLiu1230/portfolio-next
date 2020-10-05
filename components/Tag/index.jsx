import styled from 'styled-components';

const Tag = styled.span`
  padding: 6px 10px;
  margin-right: 1rem;
  width: fit-content;
  
  background-color: ${({ theme }) => theme.colors.primary};
  
  font-family: Mulish, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-transform: capitalize;
`;

export default Tag;