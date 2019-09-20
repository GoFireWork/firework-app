import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px 10px 5px 10px;
  position: relative;
  border-bottom: 2px solid #263238;
  color: ${props =>
    props.theme.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  background: ${props =>
    props.selectedIssueID === props.item.id ? '#2d8daf' : 'rgb(28, 32, 34)'};
  div:nth-child(3) {
    top: ${props => props.selectedIssueIndex === 0 && '35px'};
      div {
      &:before {
  transform: ${props =>
    props.selectedIssueIndex === 0 ? 'rotate(180deg)' : 'unset'};
        top: ${props => props.selectedIssueIndex === 0 && '-10px'};
        bottom: ${props => props.selectedIssueIndex === 0 && '140px'};
       }
      }
    }
   }
`;

export default Item;
