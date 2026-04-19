import React, { useState, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom';

const Modal = ({ref, children, onReset }) => {
    const dialog = useRef();
    const [isClosed, setIsClosed] = useState(true);
    
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
                setIsClosed(false);
            }, 
            close(){
                dialog.current.close();
                setIsClosed(true);
            }
        }
    },[])

    const handleClose = ()=>{
        onReset();
        setIsClosed(true)   
    }

  return createPortal(
    <>
        <div className={`${isClosed? '':'fixed'} inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4`}/>
        {/* 2. MODAL CARD */}
        <dialog ref={dialog} onClose={handleClose} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200" >
            {children}
        </dialog>
    </>, document.getElementById("modal-root")
  )
}

export default Modal