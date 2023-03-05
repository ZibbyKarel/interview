import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TableProps {}

const StyledTable = styled.div`
  color: pink;
`;

export function Table(props: TableProps) {
  return (
    <StyledTable>
      <h1>Welcome to Table!</h1>
    </StyledTable>
  );
}

export default Table;
