import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import './CreditCard.css';

export default function PaymentInputs() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper {...wrapperProps} className="input ">
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper>
  );
}
