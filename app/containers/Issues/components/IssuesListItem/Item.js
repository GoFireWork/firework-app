import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 5px;
  color: ${props =>
    props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  background: ${props =>
    props.selectedIssueID === props.item.id ? '#3EF298' : 'rgb(28, 32, 34)'};
`;

export default Item;
