import { motion } from 'framer-motion'

type Props = {
  action: string;
}

const Action = ({action}:Props) => {
  return (
    <div className='fixed h-screen w-screen flex flex-col items-center justify-center top-0 left-0 z-20 backdrop-blur backdrop-brightness-50'>
      <motion.div className="py-2 px-4 bg-background shadow-md shadow-stone-800 rounded-sm"
      whileInView="visible"
      initial="hidden"
      transition={{duration:0.4}}
      variants={{
        hidden: {opacity: 0.7, scale:1},
        visible: {opacity: 1,  scale:1.2}
      }}>
      <h3 className="text-sm">{action}</h3>
      </motion.div>
    </div>
  )
}

export default Action