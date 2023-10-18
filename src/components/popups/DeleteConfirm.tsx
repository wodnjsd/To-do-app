

type Props = {
  handleDelete(): void;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
}

const DeleteConfirm = ({ handleDelete, setDeleteId }: Props) => {
  return (
    <div className="fixed w-full h-screen left-0 top-0 flex justify-center items-center z-20 backdrop-blur backdrop-brightness-50 ">
      <div className="flex flex-col justify-between p-8 rounded-sm bg-background">
        <p>Are you sure you want to delete?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setDeleteId('')}>Cancel</button>
      </div>

    </div>
  )
}

export default DeleteConfirm