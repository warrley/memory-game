import { GridItemType } from "@/app/page"
import { items } from "@/data/items";

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <div  onClick={onClick}>
            {!item.permanentShow && !item.show && 
                <div className={`bg-white flex items-center justify-center size-24 rounded-xl cursor-pointer`}>
                    <h1 className="text-black/30 font-bold text-4xl">{"</w>"}</h1>
                </div>
            }
            {(item.permanentShow || item.show) && item.item !== null && 
                <div className={`bg-gray-600 flex p-4 items-center justify-center size-24 rounded-xl cursor-pointer`}>
                    <img src={items[item.item].icon}/>
                </div>
            }
        </div>
    )
}