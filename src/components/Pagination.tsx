import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

type Props = {
  totalTasks: number;
  currentPage: number;
  nPages: number;
  paginate(pgNumber: number): void;
  next(): void;
  previous(): void
}

const Pagination = ({ nPages, totalTasks, currentPage, paginate, next, previous }: Props) => {

  // total number of pages
  const pageNumbers = []
  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="my-2">
      <ul className="flex justify-center items-center gap-3">
        <li>
          {/* arrow to previous page */}
          {totalTasks !== 0 && <a onClick={(e) => { previous(); e.preventDefault() }} href='#'>
            <HiArrowLongLeft className="text-xl hover:text-2xl mx-2" />
          </a>
          }
        </li>
        {pageNumbers.map(pgNumber => (
          <li key={pgNumber}>
            {/* current page- underlined  */}
            {pgNumber === currentPage ? (<a onClick={e => e.preventDefault()} href="#" className="opacity-70 underline underline-offset-2">
              {pgNumber}
            </a>) : (
              // going to different page by clicking on page number
              <a onClick={(e) => { paginate(pgNumber); e.preventDefault() }} href="#" className="hover:underline hover:opacity-70 underline-offset-2">
                {pgNumber}
              </a>
            )}
          </li>
        ))}
        <li>
          {/* arrow to next page */}
          {totalTasks !== 0 && <a onClick={(e) => { next(); e.preventDefault() }} href='#' className="hover:text-lg">
            <HiArrowLongRight className="mx-2 text-xl hover:text-2xl" />
          </a>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Pagination