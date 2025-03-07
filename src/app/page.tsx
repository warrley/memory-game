"use client"

import { Button } from '@/components/Button';
import { InfoItem } from '@/components/InfoItem';
import Link from 'next/link';

const App = () => {
  const handleReset = () => {

  }

  return (
    <div className='container bg-sky-500/10 mx-auto flex-col lg:flex-row w-100% max-w-[750px] flex py-[50px]'>
      <div className='flex flex-col w-auto mb-[50px] items-center lg:items-stretch lg:m-0'>
        <Link className='block' href="">
          <img className='w-[300px]' src="logo.png"/>
        </Link>
        <div className='w-auto my-[10px] flex justify-around text-center lg:block lg:text-left'>
          <InfoItem label='Temp' value='00:00'/>
          <InfoItem label='Movements' value='0'/>
        </div>

        <Button label='Reset' icon="svgs/restart.svg" onClick={handleReset}/>
      </div>

      <div className='flex-1 bg-blue-500 flex justify-center mx-[20px] lg:mx-[0] lg:justify-end'>
        <div className='grid grid-cols-4 gap-10'>
        
        </div>
      </div>
    </div>
  )
}

export default App;