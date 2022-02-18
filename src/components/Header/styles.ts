import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  border-bottom: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-bottom-width: 1px;
`;

export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media(max-width: 480px) {
    width: 100%;
  }
`;

export const Content = styled.div`
`;

export const TitleLogo = styled.h1`
  @media(max-width: 480px) {
    font-size: 1.5rem;
  }

  :hover {
    opacity: 0.8;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  svg {
    :hover {
      opacity: 0.8;
    }
  }
`;

export const WrapperQuantityItensCart = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: -8px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 9px;
`;

export const QuantityItensCart = styled.strong`
  font-size: 0.7rem;
`;