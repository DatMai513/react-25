// A main component to test the custom modal component
import { useState } from "react"
import Modal from "./modal";
import "./modal.css"

export default function ModalTest() {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  }

  const onClose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleModal}>Open Modal Popup</button>
      {
        showModal && 
        <Modal
          id={"id"}
          header={<h1>Custom header</h1>}
          footer={<h1>Custom footer</h1>}
          onClose={onClose} body={<div>Custom</div>}
        />
      }
    </div>
  )
}