import { useState } from "react";


export interface notification{
    expanded:boolean,
    content:string,
    isLoading?:boolean,
    notification_id:string
}

export function Notification(args:{expanded:boolean, isLoading?:boolean, onExpandClick:Function, notifications:Array<notification>, setNotifications:Function}){

 
    function expandNotif(notification:notification, index:number){
        let notifs = [...args.notifications];
        notifs[index].expanded = !notifs[index].expanded;
        args.setNotifications(notifs);
    }

    function removeNotif(index:number){
        let notifs = [...args.notifications];
        notifs.splice(index,1);

        args.setNotifications(notifs);
    }


    

    return (
        <div className={`${args.expanded?'flex':'hidden'} w-96 min-h-20 text-sm shadow-2xl text-gray-500 bg-gray-100 dark:bg-dark-700 dark:border-dark-900  flex-col fixed z-40 border bottom-10 right-2`}>
            <div className="w-full h-7 bg-white dark:bg-dark-200  flex items-center justify-between">
                <div className="pl-1">
                    <p>NOTIFICATIONS</p>
                </div>
                <div className="flex">
                    <button onClick={()=>args.onExpandClick()} className="p-1 hover:bg-gray-300 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col overflow-y-auto max-h-96">
            {
                args.notifications.map((notification,index)=>
                <div key={'notification_'+(Date.now())+'_'+index} className=" hover:bg-white dark:hover:bg-dark-200 cursor-pointer border-t dark:border-dark-900 flex p-2 flex-row justify-start items-start">
                <div className="mr-2 text-orange-500">
                <svg  xmlns="http://www.w3.org/2000/svg" className={args.isLoading?' h-6 w-6 animate-spin':"h-6 w-6 "} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                </div>
                <div className="w-full flex flex-col">
                    {(notification.expanded)?notification.content:notification.content.substring(0,50)+'...'}
                </div>
                <div className="flex">
                    <button onClick={()=>expandNotif(notification,index)} className=" hover:bg-gray-300 rounded-sm ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button onClick={()=>removeNotif(index)} className=" hover:bg-gray-300 rounded-sm ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    </button>
                </div>
            </div>)
            }
            </div>

        </div>
    )
}