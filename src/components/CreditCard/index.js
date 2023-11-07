import {useState} from 'react'
import {
  LeftContainer,
  RightContainer,
  MainContainer,
  OuterContainer,
  HorizontalLine,
  MainHeading1,
  CreditCardImage,
  CardNumberContainer,
  CardNameContainer,
  CardHolderHead,
  CardHolderName,
  CardNumber,
  PaymentContainer,
  PaymentHead,
  Inputs,
} from './styledComponents'

import './index.css'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const getCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const getCardHolderName = event => {
    setName(event.target.value)
  }

  return (
    <OuterContainer>
      <MainContainer>
        <LeftContainer>
          <div>
            <MainHeading1>CREDIT CARD</MainHeading1>
            <HorizontalLine />
          </div>

          <CreditCardImage>
            <CardNumberContainer>
              <CardNumber>{cardNumber}</CardNumber>
            </CardNumberContainer>
            <CardNameContainer>
              <CardHolderHead>CARDHOLDER NAME</CardHolderHead>
              <CardHolderName>{name}</CardHolderName>
            </CardNameContainer>
          </CreditCardImage>
        </LeftContainer>
        <RightContainer>
          <PaymentContainer>
            <PaymentHead>Payment Mode</PaymentHead>
            <Inputs
              type="text"
              placeholder="Card Number"
              onChange={getCardNumber}
            />
            <Inputs
              type="text"
              placeholder="Cardholder Name"
              onChange={getCardHolderName}
            />
          </PaymentContainer>
        </RightContainer>
      </MainContainer>
    </OuterContainer>
  )
}

export default CreditCard
