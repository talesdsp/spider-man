import React from "react"
import ListView, { ListViewProps } from "./ListView"

type ListProps = {
  data: {}[]
  builder(item: {}, index: number): JSX.Element
}

const ListViewBuilder: React.FC<ListProps & ListViewProps> = ({
  data,
  builder,
  children,
  ...props
}) => {
  function renderData() {
    return data.map((d, i) => builder(d, i))
  }

  return <ListView {...props}>{renderData()}</ListView>
}

export default ListViewBuilder
