import { Dispatch, ReactChild, ReactElement, ReactNode } from "react"

interface leftMenuButtonModel{
    key:string,
    /**The iocn Component */
    icon:ReactNode,
    /**If true the btn will have a background on hover and a indogo-500 text color */
    dontGhost?:boolean,
    onclick?:Function
}
/**
 * ## SideMenuButton
 * Component to create a Left Side Menu Buttons
 * @param args Button properties
 * @returns Component
 */
export default function SideMenuButton(args:leftMenuButtonModel ){
    if(!args.dontGhost)
    return (

        <button   className="flex items-center py-4 text-sm mb-20 text-gray-400  hover:text-gray-700">
            <div className="">
            {(args.icon)}
            </div>
        </button>
    )
    else
    return (
        <button  onClick={()=>args.onclick?.()} className=" w-full justify-center flex items-center my-1 text-sm  hover:text-indigo-500 hover:text-gray-700 hover:bg-indigo-100 dark:hover:bg-dark-200  py-4  flex px-3">
        <div>
        {(args.icon)}
        </div>
      </button>
    )
}