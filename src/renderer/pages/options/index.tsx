import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { GetFunctions } from "../../../git/auth";
import { User} from "../../../git/types";
import HorizontalLine from '../dashboard/components/horizontalLine';
const menus = [
  {
    name: 'Account',
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    val:0
  },
  {
    name: 'Appearance',
    icon: (
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
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
    val:1
  },
  {
    name: 'Abbout',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    val:1
  },
];

/**
 * ## Options Component
 * @returns
 */
export function Options(args:{user:User|null, loginFunction:Function }) {

  const [selected, setSelected] = useState(menus[0]);
  const [gitToken, setGitToken] = useState("");



    async function login() {
         await args.loginFunction(gitToken);
    }





  return (
    <div className="w-full h-full grid grid-cols-3 ">
      <div className="col-span-1 h-full border-r dark:border-dark-800">
        <div className="w-full px-4 py-4 ">
          <div className="mx-auto w-full max-w-md">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Server size
              </RadioGroup.Label>
              <div className="space-y-2">
                {menus.map((menu) => (
                  <RadioGroup.Option
                    key={menu.name}
                    value={menu}
                    className={({ checked }) =>
                      `
                  ${
                    checked
                      ? 'bg-indigo-500 bg-opacity-75 text-white'
                      : 'bg-white dark:bg-dark-300 text-gray-500'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-2 focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm flex items-center">
                                <div className='mr-2'>
                                    {menu.icon}
                                </div>
                              <RadioGroup.Label
                                as="p"
                                className={`  ${
                                  checked ? 'text-white' : 'text-gray-500'
                                }`}
                              >
                                {menu.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? 'text-sky-100' : 'text-gray-500'
                                }`}
                              ></RadioGroup.Description>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="col-span-2 h-full flex flex-col justify-center items-center">
        <div className="w-2/4 h-full overflow-y-auto flex flex-col">
          <div className="w-full flex flex-col items-center justify-center p-10">
            <div className="w-30 h-30 bg-gray-300 dark:bg-dark-500 rounded-full relative">
                <div className='w-5 h-5 bg-indigo-400 rounded-full right-0 absolute'>
                </div>
                <img className='w-full h-full rounded-full ' src={args.user?.avatar_url} alt="" />
            </div>
            <p className="mt-4">{args.user?.name}</p>
            <div className='flex flex-col text-center w-full'>
            <p className=" text-xs mx-1">@{args.user?.login}</p>
            <HorizontalLine></HorizontalLine>
            <p className=" text-xs mx-1">{args.user?.bio}</p>
            </div>
            <HorizontalLine></HorizontalLine>

            <div className="w-3/4 bg-gray-200 rounded-md mt-4 border dark:border-dark-800 dark:bg-dark-500">
              <input
              value={gitToken}
              onChange={(e)=>setGitToken(e.target.value)}
                type="password"
                className="w-full text-center bg-transparent px-4 py-1 outline-none  text-lg"
                placeholder="Github User Access Key"
              />
            </div>

            <button onClick={login} className="w-2/4 px-4 py-2 bg-indigo-500 rounded-lg mt-10 hover:shadow-2xl text-white">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
