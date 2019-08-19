import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 1em;
  background: ${props =>
    props.selectedIssueID === props.item.url ? '#3EF298' : 'white'};
`;

export default Item;
