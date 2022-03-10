import ilustrHome1nance1 from 'assets/svg/ilustrHome1nance1.svg'

export const HomeComponent = () => {
  return (
    <div className="flex m-auto items-center">
      <div className="flex w-1/2 justify-end">
        <p className="font-medium text-4xl leading-[46.88px] px-6 w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>

        </div>
      </div>
      <div className="w-1/2">
        <img src={ilustrHome1nance1} alt="Home ilustr" />
      </div>
    </div>
  )
}
