interface TokenSaleStepComponentProps {
  name: string,
}

export const TokenSaleStepComponent: React.FC<TokenSaleStepComponentProps> = ({ name }) => {
  return (
    <div className="grid justify-items-center gap-2 w-24">
      <div>{name}</div>
      <div className="w-1 h-5 bg-white">aaa</div>
    </div>
  )
}