import { Dispatch } from "react";
import { PopUpProps } from "renderer/Components/popup";
import SideMenuButton from "./sideMenuButton";
import logoCircle from "../../../../assets/logo-circle.png";

interface leftMenuModel{
    key:string,
    onclick?:{state:boolean, function:Dispatch<boolean>},
    popUpState?: PopUpProps
}
/**
 * ## LeftMenu
 * Component to create a Left Side Menu
 * @param args File properties
 * @returns Component
 */
export default function LeftMenu(args:leftMenuModel) {

    var controller = new SideMenuController(args);
  

  return (
    <div className="items-center  pt-5 w-15 h-full bg-white dark:bg-dark-400 flex flex-col justify-start items-start">
     
        {
            controller.btns.map((btn,i)=>(
                <SideMenuButton onclick={()=>btn.onclick(controller)}  key={"sideBtn"+i} dontGhost={true} icon={(args.onclick?.state)?btn.dark??btn.icon:btn.icon} ></SideMenuButton>
            ))
        }
        <div className="h-full w-full flex flex-col"></div>
        <div className="h-60 flex flex-col justify-center items-center w-full  border-t dark:border-gray-700 p-2">
            <button onClick={()=>args.popUpState?.state?.setPopupOpen(!args.popUpState?.state?.isOpen)} className="w-12 h-12 relative border-4 border-gray-200  dark:border-indigo-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Logo Github</title><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
                <img  className="w-full h-full rounded-full absolute  top-0 right-0 object-center" src="https://picsum.photos/200"  />
            </button>
        </div>
    </div>
  );
}


/**## Controller
 * Side Menu Controller
 */
class SideMenuController {
     btns = [
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="20.828" height="20" viewBox="0 0 20.828 20" > <path className=" stroke-current" id="home" d="M3,12l2-2m0,0,7-7,7,7M5,10V20a1,1,0,0,0,1,1H9M19,10l2,2m-2-2V20a1,1,0,0,1-1,1H15M9,21a1,1,0,0,0,1-1V16a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v4a1,1,0,0,0,1,1M9,21h6" transform="translate(-1.586 -2)" fill="none" stroke="#4a5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            ),
            onclick(ctrl:SideMenuController){
                
            }
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" > <path className="stroke-current" id="folder" d="M3,7V17a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V9a2,2,0,0,0-2-2H13L11,5H5A2,2,0,0,0,3,7Z" transform="translate(-2 -4)" fill="none" stroke="#4a5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /> </svg>
            ),
            onclick(ctrl:SideMenuController){
                
            }
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" > <path className="stroke-current" id="film" d="M7,4V20M17,4V20M3,8H7M17,8h4M3,12H21M3,16H7m10,0h4M4,20H20a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H4A1,1,0,0,0,3,5V19A1,1,0,0,0,4,20Z" transform="translate(-2 -3)" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /> </svg>
            ),
            onclick(ctrl:SideMenuController){
                
            }
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="18.828" height="18" viewBox="0 0 18.828 18" > <path className="stroke-current" id="photograph" d="M4,16l4.586-4.586a2,2,0,0,1,2.828,0L16,16m-2-2,1.586-1.586a2,2,0,0,1,2.828,0L20,14M14,8h.01M6,20H18a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V18A2,2,0,0,0,6,20Z" transform="translate(-2.586 -3)" fill="none" stroke="#4a5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /> </svg>
            ),
            onclick(ctrl:SideMenuController){
                
            }
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" > <path className="stroke-current" id="sparkles" d="M5,3V7M3,5H7M6,17v4M4,19H8M13,3l2.286,6.857L21,12l-5.714,2.143L13,21l-2.286-6.857L5,12l5.714-2.143Z" transform="translate(-2 -2)" fill="none" stroke="#4a5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /> </svg>
            ),
            onclick(ctrl:SideMenuController){
                
            }
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" > <path className="stroke-current" id="clock" d="M12,8v4l3,3m6-3a9,9,0,1,1-9-9A9,9,0,0,1,21,12Z" transform="translate(-2 -2)" fill="none" stroke="#4a5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /> </svg>
            ),
            onclick(ctrl:SideMenuController){
                
            },
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            dark:(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
            ),
            onclick(ctrl:SideMenuController){
                ctrl.darmode();
            },
        },
        {
            icon:(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
            ),
            onclick(ctrl:SideMenuController){
                
            },
        },
    ];
    args:leftMenuModel;
    constructor(args:leftMenuModel){
        this.args = args;
    }
    

    isdark:boolean = false;

    darmode(){
        // console.log("Clicado!!");
        if(this.args.onclick){
            this.isdark = !this.isdark;
            this.args.onclick.function(!this.args.onclick.state);
        }
    }
  
}