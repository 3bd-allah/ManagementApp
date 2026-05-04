import { TimerIcon } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

const UndoDelete = ({ deletedProjectId, deletedProjectTitle, onUndoClose })=>{

    const [timer, setTimer] = useState(5);
    setTimeout(()=>{
        if(timer > 1){
            setTimer(timer-1);
        }else{
            onUndoClose()
        }
    },1000)

    console.log(timer)
return createPortal(
 <div className="fixed bottom-4 inset-x-0 flex justify-center z-50">
  <div className="flex items-center gap-4 bg-zinc-800 text-white px-4 py-2 rounded shadow-lg text-sm">
    
    <p>
      Deleting <span className="font-bold">{deletedProjectTitle}</span>
    </p>

    <div className="flex items-center border-l border-zinc-600 pl-4 gap-2">
      <TimerIcon />
      <span>{timer} s</span>
      <button 
        className="ml-2 font-bold text-sky-400 uppercase hover:text-sky-300" 
        onClick={onUndoClose}
      >
        Undo
      </button>
    </div>

  </div>
</div>
, document.getElementById("undoId"));
}

export default UndoDelete;