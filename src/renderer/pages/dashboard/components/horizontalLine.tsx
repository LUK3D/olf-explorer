export default function HorizontalLine(){
    return (
        <div className='w-full flex items-center h-5 dark:text-dark-800'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 14 14">
                <path className='stroke-current' id="plus-sm" d="M12,6v6m0,0v6m0-6h6m-6,0H6" transform="translate(-5 -5)" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              </svg>
            </div>
            <div style={{height:0.5}} className=' w-full bg-gray-400 dark:bg-dark-800'></div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 14 14">
                <path className='stroke-current' id="plus-sm" d="M12,6v6m0,0v6m0-6h6m-6,0H6" transform="translate(-5 -5)" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              </svg>
            </div>
          </div>
    );
}