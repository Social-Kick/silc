import React, { useEffect } from 'react'
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ isOpen, handleSuccess, handleClose, title, children, confirmBtnTxt, cancelBtnTxt, style, isFullScreen }) => {

  useEffect(() => {
    if (document !== 'undefined') {
      if (isOpen) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }, [isOpen])

  return (
    isOpen ? (
      <Backdrop>
        <ModalWrapper style={style} isFullScreen={isFullScreen}>
          <ModalHeader>
            <h3>{title}</h3>
            <Button onClick={() => handleClose()}><FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={['fal', 'times']} /></Button>
          </ModalHeader>
          <ModalBody isFullScreen={isFullScreen}>
            {children}
          </ModalBody>
          {(cancelBtnTxt || confirmBtnTxt) &&
            <ModalFooter>
              {cancelBtnTxt && <button className="secondary-btn" onClick={() => handleClose()}>{cancelBtnTxt}</button>}
              {confirmBtnTxt && <button className="primary-btn" onClick={() => handleSuccess()}>{confirmBtnTxt}</button>}
            </ModalFooter>
          }
        </ModalWrapper>
      </Backdrop>
    )
      :
      <></>
  )
}

const Button = styled.button`
  background-color: transparent;
  border: none;
`

const Backdrop = styled.div`
  display: grid;
  place-items: center;
  background-color: rgb(35, 37, 58, .7);
  z-index: 1500;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const ModalWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content fit-content min-content;
  align-items: flex-start;
  background-color: #fff;
  padding: 1rem;
  border-radius: .25rem;
  min-width: 320px;
  max-height: 100vh;
  z-index: 999;
  overflow: auto;
  span {
    font-weight: bold;
  }
  @media (max-width: 767px) {
    max-height: ${p => p.isFullScreen ? 'unset' : '100vh'};
    max-width: ${p => p.isFullScreen ? 'unset' : '95vw'};
    height: ${p => p.isFullScreen ? '100vh' : 'unset'};
    width: ${p => p.isFullScreen ? '100vw' : 'unset'};
    border-radius: 0;
  }
  transition: min-height .3s ease;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.1rem;
`

const ModalBody = styled.div`
  margin: 1rem 0;
  @media (max-width: 767px) {
    padding-bottom: ${p => p.isFullScreen ? '8rem' : '0'};
    overflow: auto;
    overflow-x: hidden;
  }
`

const ModalFooter = styled.div`
  display:flex;
  button {
    font-size: .9rem;
    padding: .5rem 2rem;
    margin-right: 1rem;
  }
`


export default Modal