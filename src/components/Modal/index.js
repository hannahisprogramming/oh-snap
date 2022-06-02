import React from 'react';

function Modal({ onClose, currentPhoto }) {
  const { name, category, description, index } = currentPhoto;

  return (
    //jsx
    <div className="modalBackdrop">
      <div className="modalContainer">
        {/* Photo Name */}
        <h3 className='modalTitle'>{name}</h3>
        <img alt="current catgory" src={require(`../../assets/large/${category}/${index}.jpg`)} />
        {/*Photo Description*/}
        <p>{description}</p>
        {/* Close Modal */}
        <button  onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;