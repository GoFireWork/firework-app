import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 5px 0 5px 15px;
  border-bottom: 2px solid #263238;
  color: ${props =>
    props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  background: ${props =>
    props.selectedIssueID === props.item.id ? '#2d8daf;' : 'rgb(28, 32, 34)'};
`;

export default Item;
