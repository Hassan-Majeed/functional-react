import React from 'react'
const Input = (props) => {
  const handleChange = (e) => {
    props.onChangeValue(e.target.value)
  }
  return (
    <>
      <input
        id={props.id}
        type={props.inputType}
        className={props.inputCss}
        placeholder={props.inputPlaceholder}
        disabled={props.disable}
        onChange={handleChange}
      />
    </>
  )
}

export default Input