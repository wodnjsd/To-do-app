
type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit(event: React.FormEvent): void;
  getTodayString(): string;

}


const Form = (props: Props) => {

  return (
    <form onSubmit={props.handleSubmit} className='flex flex-col h-full justify-between items-center py-10 border border-black rounded-sm px-20'>
      <h2 className="font-geostar text-xl py-12">Add Your Task</h2>
      <div className="flex flex-col gap-8">
      <section>
        <label>Name:</label>
        <input type="text" name="name" value={props.name} onChange={(e) => props.setName(e.target.value)} required placeholder='Name' />
      </section>
      <section>
        <label>Due Date:</label>
        <input type="date" name="date" min={props.getTodayString()} value={props.date} onChange={(e) => props.setDate(e.target.value)} />
      </section>
      </div>
      <button type="submit" className="my-12">Add</button>
    </form>

  )
}

export default Form