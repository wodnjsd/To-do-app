

type Props = {
  handleDelete(): void;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
}

const DeleteConfirm = ({handleDelete, setDeleteId}: Props) => {
  return (
    <div>
      <button  onClick={handleDelete}>Delete</button>
      <button onClick={() => setDeleteId('')}>Cancel</button>
    </div>
  )
}

export default DeleteConfirm