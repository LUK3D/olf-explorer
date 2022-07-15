/**
 * ## HEADER
 * creates a header with default menus
 * @param args Header Properties
 * @returns 
 */
export function Header(args:{logo:string, minimize:Function, maximize:Function}){
    return (
        <div className='w-full h-8 dark:bg-dark-500 text-gray-500 dark:text-gray-300 z-10 text-sm bg-white  border-b border-gray-300 dark:border-dark-800 drag flex justify-between items-center '>
        <div className='px-4 py-1 h-full flex items-center '>
            <img src={args.logo} className="h-full mr-4" />

            <button className="dark:hover:bg-dark-200 hover:bg-gray-200 px-2 h-full rounded-md ">File</button>
            <button className="dark:hover:bg-dark-200 hover:bg-gray-200 px-2 h-full rounded-md ">Edit</button>
            <button className="dark:hover:bg-dark-200 hover:bg-gray-200 px-2 h-full rounded-md ">Selection</button>
            <button className="dark:hover:bg-dark-200 hover:bg-gray-200 px-2 h-full rounded-md ">View</button>
            <button className="dark:hover:bg-dark-200 hover:bg-gray-200 px-2 h-full rounded-md ">Help</button>
        </div>
        <p>@LUK3D/teste-basico:</p>
        <div className='flex h-full'>

            <div className='flex h-full w-full'>
               
                <button onClick={()=>args.minimize()} className='hover:bg-gray-300 h-full px-2 dark:hover:bg-dark-300  dark:hover:text-gray-400'>
                    <div className='w-8 h-8 p-1'>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className='ionicon' viewBox="0 0 512 512"><title>Remove</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 256H112"/></svg>
                    </div>
                </button>
                <button onClick={()=>args.maximize()} className='hover:bg-gray-300 h-full px-2 dark:hover:bg-dark-300  dark:hover:text-gray-400'>
                    <div className='w-8 h-8 p-2 animate-flip'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Copy</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                    </div>
                </button>
                <button className='hover:bg-red-500 h-full px-2 hover:text-white'>
                    <div className='w-8 h-8 p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </div>
                </button>
            </div>
        </div>
    </div> 
    );
}