import styles from './ContactForm.module.css'
import useInput from '../../hooks/use-input'
//import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { BadgeCheckIcon } from '@heroicons/react/solid'

interface ChildProps {
  gridArea: any
  title: string
  titleStyle: any
  contactFormBox: any
  subTitleStyle: any
  subTitle: string
  contactFormContainer: any
  submittedFormSuccess: string
}

function ContactUs({
  gridArea,
  title,
  titleStyle,
  contactFormBox,
  subTitleStyle,
  subTitle,
  contactFormContainer,
  submittedFormSuccess,
}: ChildProps) {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => {
    return value.trim() !== ''
  })

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => {
    return value.includes('@')
  })

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(value => {
    return value.trim() !== ''
  })

  let formIsValid = false
  const [formHasBeenSubmitted, setFormHasBeenSubmited] = useState(false)

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true
  }

  /* const sendEmail = e => {
    emailjs.sendForm('service_46fx1gn', 'template_k4m33bm', e.target, 'pMc5raZkS0TF4mTl7').then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
  } */

  const onSubmitHandler = e => {
    e.preventDefault()

    if (!formIsValid) {
      return
    }
    console.log('submitted')
    console.log(enteredName)
    console.log(enteredEmail)
    console.log(enteredMessage)
    //sendEmail(e)
    resetNameInput()
    resetEmailInput()
    resetMessageInput()
    setFormHasBeenSubmited(true)
  }

  let errorMessageStyle = 'text-red-700 mt-[0px] text-sm lg:text-lg'

  if (!formHasBeenSubmitted) {
    return (
      <div>
        <div className={contactFormContainer} style={{ gridArea: gridArea }}>
          <div className={contactFormBox}>
            <div className="flex justify-center items-center min-w-[300px] md:h-[200px] font-bold text-[3rem]">
              <div className="flex flex-col items-center">
                <p className={titleStyle}>{title}</p>
                <p className={subTitleStyle}>{subTitle}</p>
              </div>
            </div>

            <form className="flex flex-col items-center" onSubmit={onSubmitHandler}>
              <input
                className={`h-[50px] my-[3px] md:my-[7px] mx-[20px] p-[15px] w-[280px] md:w-[300px] lg:w-[350px] xl:w-[450px] lg:h-[50px] lg:mx-[50px] lg:my-[7px] lg:text-lg lg:p-[15px] border-2`}
                placeholder="Navn / Selskap"
                name="name"
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />

              {nameInputHasError && <p className={errorMessageStyle}>Vennligst fyll inn ditt navn</p>}
              <input
                className={`h-[50px] my-[3px] md:my-[7px] mx-[20px] p-[15px] w-[280px] md:w-[300px] lg:w-[350px] xl:w-[450px] lg:h-[50px] lg:mx-[50px] lg:my-[7px] lg:text-lg lg:p-[15px] border-2`}
                placeholder="Epost"
                name="email"
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
              {emailInputHasError && (
                <p className={errorMessageStyle}>Vennligst fyll inn en gyldig epost-adresse</p>
              )}
              <input
                type="text"
                className={`${styles.input_three} my-[4px] md:my-[7px] mx-[20px] p-[15px] pb-[130px] pl-[15px] lg:h-[158px] w-[280px] md:w-[300px] lg:w-[350px] xl:w-[450px] lg:mt-[7px] lg:mb-[14px] lg:text-lg border-2 lg:pb-[122px] lg:pl-[15px]`}
                placeholder="Din melding"
                name="message"
                onChange={messageChangedHandler}
                onBlur={messageBlurHandler}
                value={enteredMessage}
              />

              {messageInputHasError && <p className={errorMessageStyle}>Vennligst fyll inn din melding</p>}
              <button
                className={`${styles.button} w-[250px] flex justify-center items-center bg-[#4eca22] text-white px-[0.5rem] py-[1.5rem] rounded-md cursor-pointer lg:w-[350px] h-[50px] mb-[20px] mt-[15px] md:mt-[30px] md:mb-[40px] font-bold hover:bg-[#40b117]`}
                disabled={!formIsValid}
              >
                Send inn
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={submittedFormSuccess} style={{ gridArea: gridArea }}>
        <div className="flex flex-col justify-center items-center mt-[100px] z-50 h-[650px] w-[310px] text-center">
          <BadgeCheckIcon className="h-[100px] text-[#008000]" />
          Takk for din melding. Du hører fra oss senest innen 48 timer
        </div>
      </div>
    )
  }
}

export default ContactUs
