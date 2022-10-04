import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../globalFunctions'

const MailList = () => {
  return (
    <Container>
      <h2 className="mail-title">Save time, save money!</h2>
      <p className="mail-desc">Sign up and we'll send the best deals to you</p>
      <MailInput>
        <input type="text" placeholder='Your Email...' />
        <button>Subscribe</button>
      </MailInput>

    </Container>
  )
}

export default MailList

const Container = styled.section`
  width: 100%;
  margin-top: 50px;
  padding: 2rem 20px;
  color: white;
  background-color: var(--primaryBlue);
  ${flexCenter("", "column")};
  gap: 20px;
`

const MailInput = styled.div`
  width: min(100%, 300px);

  input {
    width: 100%;
    padding: 10px;
    height: 30px;
    border: none;
  }

  button {
    width: 100%;
    height: 30px;
    background-color: var(--secondaryBlue);
    color: var(--white);
  }
`;
