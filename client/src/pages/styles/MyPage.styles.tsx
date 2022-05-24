import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  max-width: var(--width);
  margin: 0 auto;
  color: var(--white);

  & > h2 {
    margin: 1rem;
  }
`;

export const MyPageList = styled.ul`
  border-radius: 0.5rem;
  background-color: var(--dark-green);

  & > div {
    display: flex;
    margin: 0 2rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--white);
    font-size: 1.2rem;
    font-weight: 600;
  }

  & > div > div {
    flex: 1;
    text-align: right;

    :first-of-type {
      flex: 1.5;
      text-align: left;
    }
  }
`;

export const MyPageItem = styled.li`
  display: flex;
  margin: 0 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;
  font-weight: 600;

  & > div {
    flex: 1;
    text-align: right;

    :first-of-type {
      flex: 1.5;
      text-align: left;
    }
  }

  :last-of-type {
    border: 0;
  }
`;

export const MyPageBar = styled.div<{
  yes: number;
  no: number;
  totalSupply: string;
}>`
  display: flex;
  min-width: 600px;
  background-color: var(--white);

  & > div {
    &:first-of-type {
      width: ${(props) => {
        const calcPercent = (props.yes / +props.totalSupply) * 100;
        return `${calcPercent}%`;
      }};
      background-color: var(--blue);
    }

    &:last-of-type {
      width: ${(props) => {
        const calcPercent = (props.no / +props.totalSupply) * 100;
        return `${calcPercent}%`;
      }};
      background-color: var(--red);
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;