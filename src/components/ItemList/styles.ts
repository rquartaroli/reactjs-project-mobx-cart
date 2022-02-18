import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ContentLeft = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 10rem;
  height: 10rem;

  @media(max-width: 480px) {
    width: 3.8rem;
    height: 6rem;
    object-fit: cover;
  }
  
`;

export const TitleItem = styled.h3`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1rem;

  @media(max-width: 480px) {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;

export const ContentRight = styled.div`
  display: flex;
`;

export const WrapperItemRightQuantity = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 4rem;

  @media(max-width: 768px) {
    margin-right: 2rem;
  }

  @media(max-width: 480px) {
    margin-right: 1rem;
  }
`;

export const WrapperQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const WrapperRemove = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleQuantity = styled.h4`
  @media(max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TitleRemove = styled.h4`
  color: ${({ theme }) => theme.COLORS.WARNING};
  margin-left: 0.5rem;

  @media(max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const WrapperItemRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const TitlePrice = styled.h3`
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1rem;

  @media(max-width: 480px) {
    font-size: 0.8rem;
  }

`;

export const Price = styled.h3`
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  font-size: 1rem;

  @media(max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Hr = styled.hr`
  width: 98%;
  margin: 0 auto;
  margin-bottom: 1rem;
  opacity: 0.3;
`;