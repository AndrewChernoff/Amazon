import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  height: 100%;
  min-height: 100vh;
  background-color: white;
`;
const Main = styled.main`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;

const Title = styled.h1`
  margin: 24px 0 16px;
  line-height: 1.15;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const AmazonButton = styled.button`
  background: #ffd814;
  border-color: #fcd200;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  font-size: 0.8rem;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: silver;
    border-color: silver;
  }
`;

const InCartButton = styled.button`
  background: #cdcdc8;
  border-color: #747473;
  border-radius: 8px;
  color: white;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  font-size: 0.8rem;
  padding: 10px;
  cursor: pointer;
`;

const InCartBlock = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    @media (max-width: 501px) {
    width: 55%;
  }
  }
  
`;
const CountButton = styled.button`
  width: 30%;
  background: #cdcdc8;
  border-color: #747473;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  font-size: 0.8rem;
  padding: 10px;
  cursor: pointer;
`;

export {
  Container,
  Main,
  Title,
  Description,
  AmazonButton,
  InCartButton,
  InCartBlock,
  CountButton,
};
