import styled from 'styled-components'

export const LeftContainer = styled.div`
  background-color: #3b4b69;
  height: 95vh;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 576px) {
    height: 55vh;
  }
`

export const RightContainer = styled.div`
  background-color: #ffffff;
  height: 50vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 45vh;
    padding: 25px;
  }
`
export const MainContainer = styled.div`
  display: flex;

  box-shadow: 0px 4px 16px 0px #bfbfbf;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`
export const HorizontalLine = styled.hr`
  background-color: #ffd773;
  width: 140px;
  height: 3px;
`
export const MainHeading1 = styled.h1`
  color: #ffffff;
`
export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 80%;
  height: 28vh;
  background-size: cover;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const CardNumberContainer = styled.div`
  height: 40px;
  margin-top: 60px;
  margin-left: 30px;
  margin-bottom: 20px;
`
export const CardNameContainer = styled.div`
  height: 20px;
  margin-left: 30px;
  margin-top: 15px;
`
export const CardHolderHead = styled.p`
  color: #ffffff;
`

export const CardHolderName = styled.h3`
  color: #ffffff;
  margin-top: 5px;
`
export const CardNumber = styled.h1`
  color: #ffffff;
`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbfbf;
  height: 350px;
  width: 350px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 290px;
  padding-bottom: 55px;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
    padding-top: 120px;
    height: 200px;
    width: 100%;
    padding-bottom: 120px;
  }
`
export const PaymentHead = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
`
export const Inputs = styled.input`
  padding: 5px;
  margin: 10px;
  width: 100%;
  font-size: 18px;
  border-width: 0.5px;
  border-radius: 5px;
  border-style: solid;
  border-color: #c3cad9;
  font-family: 'Roboto';
  outline: none;
`
