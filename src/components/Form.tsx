
type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit(event: React.FormEvent): void;

}

const Form = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit} className='flex flex-col gap-3 items-center py-20 border rounded-sm px-10'>
      <h2 className="font-geostar text-xl">Add Your Task</h2>
      <label>Name:</label>

      <input type="text" name="name" value={props.name} onChange={(e) => props.setName(e.target.value)} required placeholder='Name' />
      <label>Due Date:</label>
      <input type="date" name="date" value={props.date} onChange={(e) => props.setDate(e.target.value)} />
  
      <button type="submit">Add</button>

    </form>

  )
}

export default Form