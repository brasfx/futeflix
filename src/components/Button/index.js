import styled from 'styled-components';

const Button = styled.button`
  color: var(--black);
  border: 1px solid var(--white);
  background: var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
    transform: scale(1.05);
  }
`;

export default Button;
