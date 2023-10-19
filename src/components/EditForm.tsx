

type Props = {
  name: string;
  date: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  handleEditSubmit(event: React.FormEvent): void;
  getTodayString(): string;
  nameDuplicate: boolean;
}

const EditForm = ({ name, date, setName, setDate, setEditId, handleEditSubmit, getTodayString, nameDuplicate }: Props) => {


  return (
    <form onSubmit={handleEditSubmit} className="fixed h-full w-screen left-0 top-0 flex flex-col justify-center items-center z-20 backdrop-blur backdrop-brightness-50">
      <div className="flex flex-col justify-between items-center gap-10 rounded-sm bg-background text-sm p-20 border-t-20 border-amber-200 shadow-lg shadow-stone-800">
        <h3>Make changes to your task here. Click save when you're done!</h3>
        <div className="flex gap-8">
          <section className="flex flex-col gap-2">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name' />
            <p className={`visible text-xs text-center text-red-700 pt-2 ${!nameDuplicate && 'invisible'}`}>Same task already exists!</p>
          </section>
          <section className="flex flex-col gap-2">
            <label>Due:</label>
            <input type="date" name="date" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} />
          </section>
        </div>

        <section className="flex justify-center gap-5">
          <button type="submit" >Save</button>
          <button onClick={() => setEditId('')}>Cancel</button>
        </section>

      </div>
    </form>
  )
}

export default EditForm