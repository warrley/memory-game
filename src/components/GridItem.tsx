import { GridItemType } from "@/app/page"
import { items } from "@/data/items";

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <div onClick={onClick} >
            {!item.permanentShow && !item.show && 
                <div className={`bg-white flex items-center justify-center size-20 md:size-24 rounded-3xl cursor-pointer`}>
                    <h1 className="text-black/30 font-bold text-2xl md:text-4xl">{"</w>"}</h1>
                </div>
            }
            {(item.permanentShow || item.show) && item.item !== null && 
                <div className={`bg-blue-700 flex p-5 items-center justify-center size-20 md:size-24 rounded-3xl cursor-pointer`}>
                    <img src={items[item.item].icon}/>
                </div>
            }
        </div>
    )
}