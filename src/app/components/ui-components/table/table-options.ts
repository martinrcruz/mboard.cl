
export interface TableButton {
  type: string,
  action: string,
  text: string,
  icon: string,
  component: Object
}

export interface TableFilters {
  filter1: string,
  filter2: string
}

export interface TableExtraOptions {
  search: boolean,
  filters: boolean,
  exportToPdf: boolean,
  exportToCsv: boolean,
  exportToXlsx: boolean

}

export interface TableHeader {
  title: string,
  subtitle: string
}