import styled from 'styled-components';

export const MailChimpForm = styled.div`
  > form {
    max-width: 400px;
    margin: 10px auto;
    background: #f7f7f7;
  }

  & input {
    height: 50px;
    padding: 7px;
    color: gray;
  }

  & button {
    height: 50px;
    margin-left: 5px;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #26a65b;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
  }
`;

export const SubHeading = styled.p`
  font-size: 30px;
`;

export const SubSubHeading = styled.p`
  font-size: 20px;
  margin: 0px 0 5px 0;
`;
