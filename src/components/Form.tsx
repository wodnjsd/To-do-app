import {BsListTask} from 'react-icons/bs'

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit(event: React.FormEvent): void;
  getTodayString(): string;
  nameDuplicate: boolean;
  setNameDuplicate: React.Dispatch<React.SetStateAction<boolean>>;

}


const Form = (props: Props) => {

  return (
    <form onSubmit={props.handleSubmit} className='border border-black rounded-sm  shadow-lg shadow-slate-800'>
      <div className='flex flex-col justify-center items-end px-4 h-8 w-full bg-black'> <BsListTask className='text-white text-2xl'/></div>
      <div className='px-10 flex flex-col items-center gap-8 py-6'>
      <h2 className="font-geostar text-2xl py-10">Add Your Task</h2>
      <div className="flex flex-col">
        <section>
          <label className="px-2">Name:</label>
          <input type="text" name="name" value={props.name} onChange={(e) => { props.setName(e.target.value), props.setNameDuplicate(false) }} maxLength={30} required placeholder='Name' />
          <p className={`visible text-xs text-center text-red-700 pt-2 ${!props.nameDuplicate && 'invisible'}`}>Same task already exists!</p>
        </section>
        <section>
          <label className="px-2">Due Date:</label>
          <input type="date" name="date" min={props.getTodayString()} value={props.date} onChange={(e) => props.setDate(e.target.value)} />
        </section>
      </div>
      <button type="submit" className="my-12 w-3/5">Add</button>
      </div>
      
    </form>

  )
}

export default Form