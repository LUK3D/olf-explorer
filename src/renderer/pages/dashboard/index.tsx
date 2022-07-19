import FileCard from './components/fileCard';
import HorizontalLine from './components/horizontalLine';
import LeftMenu from './components/sideMenu';

import logo from '../../../assets/logo.png';
import PopUp from 'renderer/Components/popup';
import { Options } from '../options';
import { Header } from './components/header';
import { FileDroped, FolderListType, Settings } from '../../../types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from 'renderer/Components/notification';

import useDashboard from './useDashboard';
import { UploadDialog } from './components/upload';

function App() {
  const {
    darkmode,
    login,
    user,
    showPopUp,
    setShowPopUp,
    dropHandler,
    dragOverHandler,
    fileicon,
    fragmentFile,
    isLoading,
    progress,
    filUpload,
    setFilUpload,
    minimize,
    maximize,
    notifications,
    setNotifications,
    showNotification,
    setShowNotification,
    setDarkmode,
    settings,
    setSettings,
    folders,
  } = useDashboard();

  return (
    <div
      className={`${darkmode ? 'dark' : ''} w-screen h-screen flex flex-col`}
    >
      <PopUp
        tittle="Options"
        child={<Options loginFunction={login} user={user} />}
        state={{ isOpen: showPopUp, setPopupOpen: setShowPopUp }}
        width="w-2/5"
        height="h-auto"
      ></PopUp>
      <PopUp
        width="w-2/5"
        height="h-auto"
        child={
          <UploadDialog dropHandler = {dropHandler} dragOverHandler = {dragOverHandler} fileicon = {fileicon} fragmentFile = {fragmentFile} isLoading = {isLoading} progress = {progress} ></UploadDialog>
        }
        tittle="File upload"
        state={{ isOpen: filUpload, setPopupOpen: setFilUpload }}
      />

      <Header logo={logo} minimize={minimize} maximize={maximize}></Header>

      <ToastContainer />

      <Notification
        notifications={notifications}
        setNotifications={setNotifications}
        expanded={showNotification}
        onExpandClick={() => setShowNotification(!showNotification)}
      ></Notification>

      <div
        className={`w-screen  h-full  dark:text-gray-300 text-gray-500 flex bg-gray-200 overflow-hidden dark:bg-dark-900  `}
      >
        <LeftMenu
          user={user}
          popUpState={{
            state: { isOpen: showPopUp, setPopupOpen: setShowPopUp },
          }}
          key="teste"
          onclick={{ function: setDarkmode, state: darkmode }}
        />

        <div className="w-full h-full overflow-y-auto grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9 h-full  overflow-y-auto p-1 md:p-5 lg:p-10 pb-0 lg:pb-0 flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                {' '}
                <p className="font-bold">OLF-Explorer</p>{' '}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setFilUpload(!filUpload)}
                  className="p-2 mx-1 flex items-center rounded-md bg-white hover:bg-gray-300 dark:hover:bg-dark-100 dark:bg-dark-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      className="stroke-current"
                      id="plus-circle"
                      d="M12,9v3m0,0v3m0-3h3m-3,0H9m12,0a9,9,0,1,1-9-9A9,9,0,0,1,21,12Z"
                      transform="translate(-2 -2)"
                      fill="none"
                      stroke="#4a5568"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>

                  <p className="ml-2">Add File</p>
                </button>
                <button className="p-2 mx-1 rounded-md bg-white hover:bg-gray-300 dark:hover:bg-dark-100 dark:bg-dark-300 flex group">
                  <input
                    type="text"
                    className="bg-transparent outline-none w-bg-light-100   pr-2  "
                    placeholder="Search Here..."
                  />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.414"
                      height="20.414"
                      viewBox="0 0 20.414 20.414"
                    >
                      <path
                        className="stroke-current"
                        id="search"
                        d="M21,21l-6-6m2-5a7,7,0,1,1-7-7A7,7,0,0,1,17,10Z"
                        transform="translate(-2 -2)"
                        fill="none"
                        stroke="#4a5568"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </button>
                <button className="p-2 mx-1 rounded-md bg-white dark:bg-dark-300 dark:hover:bg-dark-100 hover:bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.723"
                    height="19.899"
                    viewBox="0 0 20.723 19.899"
                  >
                    <path
                      className="stroke-current"
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
                </button>
              </div>
            </div>
            <HorizontalLine></HorizontalLine>
            <div className="flex justify-between items-center mt-3 border-b border-bg-gray-400 dark:border-dark-800 pb-2 shadow-md">
              <div className="flex items-center">
                <button className="p-2 bg-white dark:bg-dark-300 rounded-md flex items-center mr-3 shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                    >
                      <path
                        className="stroke-current"
                        id="folder"
                        d="M3,7V17a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V9a2,2,0,0,0-2-2H13L11,5H5A2,2,0,0,0,3,7Z"
                        transform="translate(-2 -4)"
                        fill="none"
                        stroke="#4a5568"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 16.828 9.414"
                    >
                      <path
                        className="stroke-current"
                        id="chevron-down"
                        d="M19,9l-7,7L5,9"
                        transform="translate(-3.586 -7.586)"
                        fill="none"
                        stroke="#4a5568"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </button>
                <p className="font-bold">Recent Files</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center bg-gray-300 dark:bg-dark-100 p-1 rounded-md">
                  <button
                    onClick={() =>
                      setSettings({
                        ...settings,
                        folderListType: FolderListType.list,
                      })
                    }
                    className={`p-1 ${
                      settings.folderListType == FolderListType.list
                        ? 'bg-white dark:bg-dark-300 rounded-md shadow-md'
                        : ''
                    }`}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <path
                          className="stroke-current"
                          id="menu-alt-1"
                          d="M4,6H20M4,12h8M4,18H20"
                          transform="translate(-3 -5)"
                          fill="none"
                          stroke="#4a5568"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </button>
                  <button
                    onClick={() =>
                      setSettings({
                        ...settings,
                        folderListType: FolderListType.grid,
                      })
                    }
                    className={`p-1 mx-1 ${
                      settings.folderListType == FolderListType.grid
                        ? 'bg-white dark:bg-dark-300 rounded-md shadow-md'
                        : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                    >
                      <g id="view-grid" transform="translate(-3 -3)">
                        <path
                          className="stroke-current"
                          id="Path_50"
                          data-name="Path 50"
                          d="M4,6A2,2,0,0,1,6,4H8a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H6A2,2,0,0,1,4,8Z"
                          fill="none"
                          stroke="#374151"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          className="stroke-current"
                          id="Path_51"
                          data-name="Path 51"
                          d="M14,6a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H16a2,2,0,0,1-2-2Z"
                          fill="none"
                          stroke="#374151"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          className="stroke-current"
                          id="Path_52"
                          data-name="Path 52"
                          d="M4,16a2,2,0,0,1,2-2H8a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z"
                          fill="none"
                          stroke="#374151"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          className="stroke-current"
                          id="Path_53"
                          data-name="Path 53"
                          d="M14,16a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H16a2,2,0,0,1-2-2Z"
                          fill="none"
                          stroke="#374151"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </button>
                  <button className="p-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                        viewBox="0 0 18 14"
                      >
                        <path
                          className="stroke-current"
                          id="menu"
                          d="M4,6H20M4,12H20M4,18H20"
                          transform="translate(-3 -5)"
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
              </div>
            </div>
            <div
              className={`grid gird-cols-1 h-full  ${
                settings.folderListType == FolderListType.list
                  ? ' md:grid-cols-2'
                  : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '
              }   gap-4 py-5 overflow-y-auto pr-2`}
            >
              {folders.map((folder, index) => (
                <FileCard
                  settings={settings}
                  key={'id' + index}
                  owner="@Luk3d"
                  
                  filename={folder.name}
                ></FileCard>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex col-span-3 h-full bg-white dark:bg-dark-300  flex-col px-10 py-5">
            <div className="flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                >
                  <path
                    id="document-text"
                    d="M9,12h6M9,16h6m2,5H7a2,2,0,0,1-2-2V5A2,2,0,0,1,7,3h5.586a1,1,0,0,1,.707.293l5.414,5.414A1,1,0,0,1,19,9.414V19A2,2,0,0,1,17,21Z"
                    transform="translate(-4 -2)"
                    fill="none"
                    stroke="#374151"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-bold">File Preview</p>
            </div>
            <HorizontalLine></HorizontalLine>
            <div className="w-full flex justify-center my-4">
              <img src={logo} />
              {/* <svg className='drop-shadow-lg' xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 96 122.857">
                <path id="document" d="M18.429,123.857H85.571A13.428,13.428,0,0,0,99,110.429V46.067a6.715,6.715,0,0,0-1.967-4.748L60.681,4.967A6.714,6.714,0,0,0,55.933,3h-37.5A13.429,13.429,0,0,0,5,16.429v94A13.428,13.428,0,0,0,18.429,123.857Z" transform="translate(-4 -2)" fill="none" stroke="#4a5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              </svg> */}
            </div>
            <p className="text-center font-bold mt-5">
              Basic teste file for dat.pdf
            </p>
            <p className="text-center  mt-2 text-sm text-gray-400">
              1.5MB | 20/05/2022
            </p>

            <HorizontalLine></HorizontalLine>
            <p className="my-4 text-sm font-bold">File Description</p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              tenetur eos fugit illum minus modi non quis dolorem dicta,
              voluptatum illo unde, ea, eligendi aperiam odio atque laborum a
              quia.
            </p>
            <HorizontalLine></HorizontalLine>
            <div className="flex items-center mt-4">
              <button className="px-2 py-2 mr-2 shadow-lg flex justify-center w-full rounded-md bg-indigo-500 hover:bg-indigo-600 text-white">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                  >
                    <path
                      className="stroke-current"
                      id="document-download"
                      d="M12,10v6m0,0L9,13m3,3,3-3m2,8H7a2,2,0,0,1-2-2V5A2,2,0,0,1,7,3h5.586a1,1,0,0,1,.707.293l5.414,5.414A1,1,0,0,1,19,9.414V19A2,2,0,0,1,17,21Z"
                      transform="translate(-4 -2)"
                      fill="none"
                      stroke="#4a5568"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                Download File
              </button>
              <button className="bg-red-500 hover:bg-red-600 dark:bg-dark-100 text-white px-4 py-2 shadow-lg rounded-md flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                  >
                    <path
                      className="stroke-current"
                      id="trash"
                      d="M19,7l-.867,12.142A2,2,0,0,1,16.138,21H7.862a2,2,0,0,1-1.995-1.858L5,7m5,4v6m4-6v6M15,7V4a1,1,0,0,0-1-1H10A1,1,0,0,0,9,4V7M4,7H20"
                      transform="translate(-3 -2)"
                      fill="none"
                      stroke="#4a5568"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-7 bg-indigo-500 flex items-center justify-between text-white">
        <div></div>
        <div>
          <button
            onClick={() => setShowNotification(!showNotification)}
            className="w-7 h-7"
          >
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
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
