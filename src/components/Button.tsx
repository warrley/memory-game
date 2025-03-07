type Props = {
    label: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    icon?: any;
}

export const Button = ({ label, onClick, icon }: Props) => {
    return (
        <div onClick={onClick} className="flex w-[200px] bg-[#1550FF] h-[50px] rounded-[10px] cursor-pointer transition-all duration-300 hover:opacity-80">
            {icon && 
                <div className="h-[50px] flex justify-center items-center border-r-[1px] border-r-white/20 px-[15px]">
                    <img className="h-[20px]" src={icon}/>
                </div>
            }
            <div className="h-[50px] text-white flex items-center justify-center flex-1 px-[20]">
                {label}
            </div>
        </div>
    )
}