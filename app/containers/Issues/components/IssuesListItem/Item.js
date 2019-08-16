import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  background: ${props =>
    props.selectedIssueURL === props.item.url ? 'palevioletred' : 'white'};
`;

export default Item;
