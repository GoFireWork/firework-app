import styled from 'styled-components';

export const MailChimpStyles = styled.div`
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
    @media (max-width: 768px) {
      width: 86%;
      margin-left: 0 !important;
    }
  }
`;

export const SubHeading = styled.p`
  font-size: 30px;
`;
