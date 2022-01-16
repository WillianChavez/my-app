import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import '../styles/modal.css'
const modalRoot = document.getElementById('modal-root')

function ModalPortal({ children }) {
    const el = document.createElement('div')

    useEffect(() => {
        modalRoot.appendChild(el)

        return () => modalRoot.removeChild(el)
    }, [el])

    return ReactDOM.createPortal(children, el)
}

function ContentModal({ children, handleClose }) {
    return (
        <div className="modal-content">
            <p>{children}</p>
            <Button handleClick={handleClose}>Close</Button>
        </div>
    )
}

function HeaderModal({ children }) {
    return <div className="modal-header">{children}</div>
}
function Modal({ isOpen, handleClose }) {
    if (!isOpen) return null

    return (
        <ModalPortal>
            <div className="wrapper-modal">
                <div className="modal">
                    <HeaderModal>Header Modal</HeaderModal>
                    <ContentModal handleClose={handleClose}>Content Modal</ContentModal>
                </div>
            </div>
        </ModalPortal>
    )
}

export function ModalContainer() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Button handleClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
        </div>
    )
}
