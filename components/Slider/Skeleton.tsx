import React from 'react';

function Skeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        role="status"
        className="flex h-56 w-full max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300/50 "
      >
        <svg
          className="h-10 w-10 text-gray-200/50 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
      </div>
      <div className="h-2.5 w-60 rounded-full bg-gray-200/50 "></div>
      <div className=" h-2.5 w-40 rounded-full bg-gray-200/50 "></div>
    </div>
  );
}

export default Skeleton;
