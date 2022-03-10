type Props = {
  illust: any
  title?: any
  content: any
  isRTL?: boolean
}

const IllustComponent = ({ illust, title = "", content, isRTL = false }: Props) => {
  return (
    <div className="flex gap-x-24 m-auto items-center">
      <div className={`flex ${isRTL && "order-last"} min-w-[30%] justify-center`}><img src={illust} alt="Illust" /></div>
      <div className="flex-row space-y-4">
        <div className="font-bold uppercase text-[28px] leading-[32.81px] max-w-xl">{title}</div>
        <div className="font-medium text-[24px] leading-[28.13px] max-w-xl">{content}</div>
      </div>
    </div >
  )
}

export default IllustComponent