"use client"

import { Button } from '@/components/Button';
import { GridItem } from '@/components/GridItem';
import { InfoItem } from '@/components/InfoItem';
import { items } from '@/data/items';
import { formatTimeElapsed } from '@/helpers/formatTimeElapsed';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type GridItemType = {
  item: number | null;
  show: boolean;
  permanentShow: boolean;
}

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  const handleReset = () => {
    //step 1 - reset game
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);

    //step 2 - create the grid
    //2.1 - create the empty grid
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        show: false,
        permanentShow: false,
      })
    }
    //2.2 - fill grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }

    //2.3 - const array
    setGridItems(tmpGrid);

    //step 3 - start game
    setPlaying(true);
  }

  useEffect(() => {
    handleReset()
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(prev => prev + 1);
      };
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);
  
  const handleClickItem = (index: number) => {

  }

  return (
    <div className='container bg-white/40 rounded-2xl mx-auto flex-col lg:flex-row w-100% max-w-[850px] flex py-10 select-none px-10'>
      <div className='flex flex-col w-auto mb-[50px] items-center lg:items-stretch lg:m-0'>
        <Link className='block' href="">
          <img className='w-[300px]' src="logo.png"/>
        </Link>
        <div className='w-auto my-[10px] flex justify-around text-center lg:block lg:text-left'>
          <InfoItem label='Temp' value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label='Movements' value='0'/>
        </div>

        <Button label='Reset' icon="svgs/restart.svg" onClick={handleReset}/>
      </div>
      <div className='flex-1 flex justify-center mx-[20px] lg:mx-[0] lg:justify-end'>
        <div className='grid grid-cols-4 gap-6 w-[430px] '>
          {gridItems.map((item, index) => (
          <GridItem 
            key={index}
            item={item}
            onClick={() => handleClickItem(index)}  
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default App;