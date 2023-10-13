

type Props = {
  name:string;
  date:string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  handleEditSubmit(event: React.FormEvent): void;
}

const EditForm = ({ name, date, setName, setDate, setEditId, handleEditSubmit}: Props) => {


  return (
    <form onSubmit={handleEditSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name' />
      <label>URL</label>
      <input type="date" name="url" value={date} onChange={(e) => setDate(e.target.value)} required placeholder='URL' />
      <input type="submit" value="Edit" />
      <button onClick={()=>setEditId('')}>Cancel</button>
    </form>
  )
}

export default EditForm