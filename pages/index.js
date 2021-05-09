// Import Next Components
import Head from 'next/head';
import Image from 'next/image';

// components
import Avatar from '../components/Avatar';

// Import Hero Icons
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="A Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icons */}
          <ViewGridIcon className="h-10 w-10 text-gray-500 text-sm cursor-pointer hover:bg-gray-100 rounded-full p-2" />
          {/* Avatar */}
          <Avatar url={'https://coaching.papareact.com/ai9'} />
        </div>
      </header>

      {/* Body */}
      <div className="flex justify-center items-center">
        <Image
          src={'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
          height={100}
          width={300}
        />
        <div className="w-full flex justify-center items-center hover:shadow-lg 
        focus-within:shadow-lg mt-5 max-w-md rounded-full border 
        border-gray-200 px-5 py-5 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none bg-red-500" />
          <MicrophoneIcon  className="h-5 text-gray-500 ml-3" />
        </div>
      </div>

      {/* Footer */}
    </div>
  )
}
