import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const WrapperWithoutContentCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 10rem;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  border-radius: 4px;
`;

export const TitleWithoutContent = styled.strong`
  text-align: center;
  line-height: 1.5rem;
`;

export const WrapperContent = styled.div`
  display: flex;
  margin: 0 1rem;

  @media(max-width: 540px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-left: 0.5rem;

  @media(max-width: 768px) {
    width: 75%;
  }

  @media(max-width: 480px) {
    width: 100%;
  }
`;

export const ContainerTotalItens = styled.div`
  display: flex;
  flex: 1;
  height: 10rem;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
  background-color: #171717;
  border-radius: 4px;
`;

export const TitleOrder = styled.h3`
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 0.5rem;

  @media(max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const WrapperSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleQuantityItens = styled.h6`
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const TitleSumPrice = styled.h5`
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Hr = styled.hr`
  margin: 1rem 0;
`;

export const TitleTotal = styled.h3`
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 0.5rem;

  @media(max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const TitleResultTotal = styled.h3`
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  margin-bottom: 0.5rem;

  @media(max-width: 768px) {
    font-size: 0.8rem;
  }
`;