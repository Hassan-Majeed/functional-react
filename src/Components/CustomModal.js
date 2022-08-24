import React from 'react'
import { Modal } from 'react-bootstrap'

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='p-5'>
        {props.children}
      </div>
    </Modal>
  )
}

export default CustomModal;
