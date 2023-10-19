

type Props = {
  name: string;
  date: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  handleEditSubmit(event: React.FormEvent): void;
  getTodayString(): string;
}

const EditForm = ({ name, date, setName, setDate, setEditId, handleEditSubmit, getTodayString }: Props) => {


  return (
    <form onSubmit={handleEditSubmit} className="fixed h-full w-screen left-0 top-0 flex flex-col justify-center items-center z-20 backdrop-blur backdrop-brightness-50">
      <div className="flex flex-col justify-between items-center gap-10 rounded-sm bg-background text-sm p-20">
        <h3>Make changes to your task here. Click save when you're done!</h3>
        <div className="flex gap-8">
          <section className="flex flex-col gap-2">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name' />
          </section>
          <section className="flex flex-col gap-2">
            <label>Due:</label>
            <input type="date" name="date" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} required />
          </section>
        </div>

        <section className="flex justify-center gap-5">
          <input type="submit" value="Save" />
          <button onClick={() => setEditId('')}>Cancel</button>

        </section>

      </div>

    </form>
  )
}

export default EditForm