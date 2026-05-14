import React, { useState, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom';

const Modal = ({ref, children }) => {
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            },
            close(){
                dialog.current.close();
            }
        }
    },[])



  return createPortal(
    <>
        {/* 2. MODAL CARD */}
        <dialog ref={dialog} className="backdrop:bg-stone-900/80 bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200" >
            {children}
        </dialog>
    </>, document.getElementById("modal-root")
  )
}

export default Modal