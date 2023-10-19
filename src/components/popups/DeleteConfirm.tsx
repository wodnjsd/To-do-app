

type Props = {
  handleDelete(): void;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
}

const DeleteConfirm = ({ handleDelete, setDeleteId }: Props) => {
  return (
    <div className="fixed w-full h-screen left-0 top-0 flex justify-center items-center z-20 backdrop-blur backdrop-brightness-50 ">
      <div className="flex flex-col gap-10 items-center p-10 rounded-sm bg-background border-t-20 border-red-400 shadow-lg shadow-slate-800">
        <p>Are you sure you want to delete?</p>
        <section className="flex gap-10">
             <button onClick={handleDelete} className="shadow-inner">Delete</button>
             <button onClick={() => setDeleteId('')}>Cancel</button>
        </section>
  
      </div>

    </div>
  )
}

export default DeleteConfirm