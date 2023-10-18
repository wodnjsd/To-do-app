

type Props = {
  action: string;
}

const Action = ({action}:Props) => {
  return (
    <div className='fixed h-screen w-screen flex flex-col items-center justify-center top-0 left-0 z-20 backdrop-blur backdrop-brightness-50'>
      <div className="p-1 bg-background border">
      <h3 className="p-1 text-xs">{action}</h3>
      </div>
    </div>
  )
}

export default Action