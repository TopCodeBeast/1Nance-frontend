import { ChevronRightIcon } from "@heroicons/react/solid"

interface ArrowComponentProps {
  content?: string,
  emphasize?: string,
}

const ArrowComponent: React.FC<ArrowComponentProps> = ({ content = "", emphasize = "" }) => {
  return (
    <div className="flex my-4 text-4 leading-[19px] items-center gap-2">
      <div className="border-2 border-white rounded-full "><ChevronRightIcon className="w-8 h-8" /></div>
      <div>{content}<p className="font-bold">{emphasize}</p></div>
    </div>
  )
}

export default ArrowComponent