import { FolderListType } from 'types';
import { FileModel } from '../types/FileModel';
import FolderIcon from './folderIcon';
import folderLight from '../../../../assets/folder-light.png';
import folderDark from '../../../../assets/folder-dark.png';
import HorizontalLine from './horizontalLine';

/**
 * ## FileCard
 * Component to create a File card
 * @param args File properties
 * @returns Component
 */
function FileCard(args: FileModel) {
  return args.settings?.folderListType == FolderListType.grid ? (
    <div
      className={` group hover:shadow-2xl  transition-shadow cursor-pointer bg-gray-50 dark:bg-dark-300 text-sm card p-5 hover:bg-white dark:hover:bg-dark-100 rounded-md border border-gray-300 dark:border-dark-100 shadow-sm flex flex-col `}
    >
      <div className="flex justify-between items-center">
        <button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.723"
              height="19.899"
              viewBox="0 0 20.723 19.899"
            >
              <path
                id="star"
                d="M11.049,2.927a1,1,0,0,1,1.9,0L14.47,7.6a1,1,0,0,0,.951.691h4.914a1,1,0,0,1,.588,1.809l-3.976,2.889a1,1,0,0,0-.363,1.118L18.1,18.781A1,1,0,0,1,16.563,19.9l-3.976-2.889a1,1,0,0,0-1.176,0L7.436,19.9A1,1,0,0,1,5.9,18.781l1.519-4.674a1,1,0,0,0-.363-1.118L3.077,10.1a1,1,0,0,1,.588-1.809H8.579A1,1,0,0,0,9.53,7.6Z"
                transform="translate(-1.639 -1.236)"
                fill="none"
                stroke="#4b5563"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>
        <button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="18"
              viewBox="0 0 4 18"
            >
              <path
                id="dots-vertical"
                d="M12,5v.01M12,12v.01M12,19v.01M12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Zm0,7a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm0,7a1,1,0,1,1,1-1A1,1,0,0,1,12,20Z"
                transform="translate(-10 -3)"
                fill="none"
                stroke="#4a5568"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="w-full flex justify-center my-4 group p-5">
        <img className='w-2/3 ' src={(args?.settings?.darkmod)?folderDark:folderLight} alt="" />
      </div>
      <div className="w-full justify-center text-center font-bold ">
        <p>{args.filename}</p>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-col">
          <p className="font-bold">Filesize:</p>
          <p>{args.size}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Created At:</p>
          <p>{args.createdAt?.toString()}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={`flex items-center  h-20 group hover:shadow-2xl  transition-shadow cursor-pointer bg-gray-50 dark:bg-dark-300 text-sm  px-2  hover:bg-white dark:hover:bg-dark-100 rounded-md border border-gray-300 dark:border-dark-100 shadow-sm   `}>
      <div className="flex   hidden">
        <button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.723"
              height="19.899"
              viewBox="0 0 20.723 19.899"
            >
              <path
                id="star"
                d="M11.049,2.927a1,1,0,0,1,1.9,0L14.47,7.6a1,1,0,0,0,.951.691h4.914a1,1,0,0,1,.588,1.809l-3.976,2.889a1,1,0,0,0-.363,1.118L18.1,18.781A1,1,0,0,1,16.563,19.9l-3.976-2.889a1,1,0,0,0-1.176,0L7.436,19.9A1,1,0,0,1,5.9,18.781l1.519-4.674a1,1,0,0,0-.363-1.118L3.077,10.1a1,1,0,0,1,.588-1.809H8.579A1,1,0,0,0,9.53,7.6Z"
                transform="translate(-1.639 -1.236)"
                fill="none"
                stroke="#4b5563"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>
        <button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="18"
              viewBox="0 0 4 18"
            >
              <path
                id="dots-vertical"
                d="M12,5v.01M12,12v.01M12,19v.01M12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Zm0,7a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm0,7a1,1,0,1,1,1-1A1,1,0,0,1,12,20Z"
                transform="translate(-10 -3)"
                fill="none"
                stroke="#4a5568"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className=" w-14  mr-4 flex   group">
      <img className='w-full h-full ' src={(args?.settings?.darkmod)?folderDark:folderLight} alt="" />

      </div>
      <div className="w-2/4  font-bold flex flex-col  ">
          <p>{args.filename}</p>
          <p className='font-normal text-xs'>{args.owner}</p>
      </div>
        
        <div className="flex flex-col  w-2/4 opacity-75 ">
          <div className="flex ">
            <p className="">Filesize:</p>
            <p className='mx-2'> 2.5MB</p>
          </div>
          <div className="flex ">
            <p className="">Created At:</p>
            <p className='mx-2'>22/03/2022</p>
          </div>
        </div>
    </div>
  );
}

export default FileCard;
