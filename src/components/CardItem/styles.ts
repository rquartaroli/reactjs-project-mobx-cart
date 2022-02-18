import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin: 1rem auto;
`;

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 4px 4px 0 0;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  padding-Bottom: 0.8rem;
`;

export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.4rem;
  font-size: 1rem;
`;

export const TitleItem = styled.strong`
  font-size: 0.8rem;
`;

export const TitlePrice = styled.strong`
  margin-top: 0.8rem;
  font-size: 1rem;
`;

export const ButtonBuy = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 1.2rem;
  font-weight: 600;

  :hover {
    opacity: 0.8;
  }
`;

export const ButtonUnavailable = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.8;
  cursor: auto;
`;