
type Props = {
  id: string;
  name: string;
  date: string;
}

const Bookmark = ({ name, date}: Props) => {
  return (
    <div>
      <p>{name}</p>
      <p>{date}</p>
    </div>
  )
}

export default Bookmark