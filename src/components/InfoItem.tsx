type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <div className="mx-[20px]">
            <div className="text-[15px] text-[#6a7d8b]">
                {label}
            </div>
            <div className="text-[37px] font-bold text-[#101c40]">
                {value}
            </div>
        </div>
    );
}