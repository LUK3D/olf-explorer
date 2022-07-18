import { FileDroped } from "types";


export function UploadDialog(args:{dropHandler:Function, dragOverHandler:Function, fileicon:FileDroped|null, fragmentFile:Function, isLoading:boolean, progress:number} ){
    return (
        <div className="w-full p-10 flex flex-col">
            <div
              onDrop={(e)=>args.dropHandler(e)}
              onDragOver={(e)=>args.dragOverHandler(e)}
              className="w-full  flex flex-col justify-center items-center border-4 border-dashed rounded-lg border-indigo-500 p-5 text-indigo-500"
            >
              {args.fileicon ? (
                <>
                  <img className="w-20 h-20" src={args.fileicon.Base64ImageData} />
                  <p className="mt-5 font-bold text-xl">
                    {args.fileicon.Path.split('\\').at(-1)?.split('/').at(-1)}
                  </p>

                  <div className="flex justify-center items-center text-gray-500">
                    <p className="mx-2">
                      Size: <span>{args.fileicon.sizes?.mb}MB</span>
                    </p>
                    <p className="mx-2 my-2">
                      Fragments:{' '}
                      <span>{args.fileicon.sizes?.chunks.toFixed(0)}</span>
                    </p>
                  </div>

                  <button
                    onClick={()=>args.fragmentFile()}
                    className={`${
                        args.isLoading == true ? 'hidden' : 'flex'
                    } px-2 py-2 my-5 w-5/5 md:w-3/5 mr-2 shadow-lg  justify-center  rounded-md bg-indigo-500 hover:bg-indigo-600 text-white`}
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    Upload File
                  </button>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-30 w-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="mt-5 font-bold text-xl">
                    Dop a file or click to Upload
                  </p>
                </>
              )}

              <div
                className={`${
                    args.isLoading == true ? 'flex' : 'hidden'
                } transition-all h-5 my-2 w-full bg-dark-900 bg-opacity-10 rounded-lg p-1`}
              >
                <div
                  style={{ width: `${args.progress > 100 ? 100 : args.progress}%` }}
                  className=" bg-indigo-500  h-full  rounded-md"
                ></div>
              </div>
              <p className="text-gray-400 text-sm mb-10">
                Files more then 500 MB can take longger then smaller ones
              </p>
            </div>
          </div>
    )
}