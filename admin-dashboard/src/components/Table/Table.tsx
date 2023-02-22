import { v4 as uuidv4 } from "uuid"

type TableProps = {
  headers: React.ReactNode[]
  data: RowData[]
}

export default function Table({ headers, data }: TableProps) {
  return (
    <table className="border-collapse table-auto text-sm w-full overflow-auto ">
      {/* Headers */}
      <thead className="sticky top-0 bg-slate-500 h-12">
        <tr className="">
          {headers.map((header) => (
            <th
              key={uuidv4()}
              className="border-b dark:border-slate-600 font-medium text-slate-400 dark:text-slate-200 text-center">
              <div className="p-4 flex justify-center items-center m-auto h-12">
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      {/* Body */}
      <tbody className="bg-white dark:bg-slate-900">
        {data.map((rowData) => {
          return <Row key={uuidv4()} {...rowData} />
        })}
      </tbody>
    </table>
  )
}

type RowData = {
  clickFunc?: () => void
  data: React.ReactNode[]
}

const Row = ({ clickFunc, data }: RowData) => {
  return (
    <>
      <tr
        onClick={clickFunc}
        className={`h-12 ${
          clickFunc
            ? "group cursor-pointer hover:bg-white hover:text-black ease-linear duration-300 h-10"
            : ""
        }`}>
        {data.map((col) => (
          <td
            key={uuidv4()}
            className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 group-hover:text-black">
            <div className="flex justify-center items-center">{col}</div>
          </td>
        ))}
      </tr>
    </>
  )
}
