import styled from 'styled-components';

export const OptionList = styled.ul`
  display: inline-flex;
  margin-top: 30px;
`;

export const OptionItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;
export const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 18px;
  // font-weight: 500;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #6350ba;
  cursor: pointer;
  :hover {
    background-color: #069c6e;
    color: black;
  }
`;
