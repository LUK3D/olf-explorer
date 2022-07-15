import * as React from "react"

function FolderIcon(args?:{className?:string}){
    return (
        <svg
        width={237}
        height={237}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...args}
      >
        <path
          d="M7.194 180V57c0-8.284 6.716-15 15-15h47.234a15 15 0 0 1 10.607 4.393l3.912 3.912a15 15 0 0 0 10.606 4.393h118.469c8.285 0 15 6.716 15 15V180c0 8.284-6.715 15-15 15H22.194c-8.284 0-15-6.716-15-15Z"
          className="fill-indigo-600 dark:fill-gray-700"
        />
        <rect
          x={18.344}
          y={71.733}
          width={73.713}
          height={34.069}
          rx={7}
          className="fill-indigo-500 dark:fill-gray-600"
        />
        <rect
          x={105.065}
          y={71.733}
          width={55.13}
          height={34.069}
          rx={7}
          className="fill-white dark:fill-gray-200"
        />
        <rect
          x={167.008}
          y={71.733}
          width={55.13}
          height={34.069}
          rx={7}
          fill="#C6A6F0"
        />
        <path
          d="M1.906 96.644c-.492-9.16 6.803-16.859 15.977-16.859h201.081c9.258 0 16.584 7.835 15.964 17.073l-5.593 83.215c-.564 8.401-7.544 14.927-15.964 14.927H22.357c-8.503 0-15.52-6.651-15.977-15.141L1.906 96.644Z"
          className="fill-indigo-400 dark:fill-gray-500"
        />
      </svg>
    )
}
export default FolderIcon
