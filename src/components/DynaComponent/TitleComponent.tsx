interface TitleComponentProps {
  anchor: string,
  title: string,
  content: string,
}

const TitleComponent: React.FC<TitleComponentProps> = ({ anchor, title, content }) => {
  return (
    <div className="grid justify-items-center gap-2 my-16" id={anchor}>
      <p className="text-center uppercase font-bold text-[36px]">{title}</p>
      <div className="w-[150px] h-[5px] bg-gradient-to-r from-[#FFAF10] to-[#F97919]" />
      <p className="text-center text-[24px] font-light mt-8 max-w-5xl">{content}</p>
    </div>
  )
}

export default TitleComponent