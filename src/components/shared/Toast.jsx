import { useState } from "react";

function Toast({toastMsg}) {
  const [toast, setToast] = useState(false);

  return (
    <>
      <div className="flex fixed z-10 shadow-lg shadow-green-500 top-20 items-center justify-center left-2 bg-black w-xs h-lg rounded-lg">
          <h1 className="text-white">{toastMsg}</h1>
      </div>
    </>
  ) 
}

export default Toast;