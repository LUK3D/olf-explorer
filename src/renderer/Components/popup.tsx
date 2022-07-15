import { Transition } from "@headlessui/react";
import  { Dispatch, ReactNode } from "react";

export interface PopUpProps {
    child?:ReactNode,
    state?:PopUpState,
    tittle?:string,
    width?:string,
    height?:string

}
 
export interface PopUpState {
    isOpen:boolean,
    setPopupOpen:Dispatch<boolean>
}
 
/**
 * ## PopUp
 * Creates a popup
 * @param args Properties
 * @returns ReactNode
 */
function PopUp(args:PopUpProps = {}){
    return ( 
        <Transition
        show={args.state?.isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={"flex dark:text-gray-300  text-gray-600 fixed z-20 top-0 right-0 w-screen h-screen bg-dark-500 bg-opacity-50 flex-col justify-center items-center"}
        onClick={()=>args.state?.setPopupOpen(!args.state?.isOpen)}
      >
        
        <div onClick={(e)=>e.stopPropagation()} className={`${args.width?args.width:'w-3/4'} ${args.height?args.height:'h-3/4'}    bg-white dark:bg-dark-300  rounded-md shadow-2xl flex flex-col`}>
                <div className="w-full h-10 border-b dark:border-dark-800 px-4 py-2 flex justify-between items-center">
                    <div className="text-lg"><p>{args.tittle}</p></div>
                    <div className="flex ">
                        <button onClick={()=>args.state?.setPopupOpen(!args.state?.isOpen)}>
                            <div className='w-8 h-8 p-1  '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex w-full h-full">
                {args.child}
                </div>
            </div>
            
            
      </Transition>
    )
}
export default PopUp;