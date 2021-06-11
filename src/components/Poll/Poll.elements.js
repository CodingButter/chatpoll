import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 3px;
  overflow: hidden;
  padding: ${({ theme }) => theme.padding.base}px;

  & > * {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.font.color.light};
  background: ${({ theme }) => theme.palette.primary.lighter};
  font-size: ${({ theme }) => theme.font.size.extraLarge};
  padding: ${({ theme }) => theme.padding.small}px;
  margin: ${({ theme }) => theme.padding.small}px;
  border-radius: 3px;
  list-style: none;
  display: flex;
  align-items: center;

  & > * {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.screenSize.desktop.small}px) {
    font-size: ${({ theme }) => theme.font.size.large};
  }
`;

export const ListItemContent = styled.p``;
