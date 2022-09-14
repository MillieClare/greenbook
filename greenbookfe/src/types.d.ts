interface IReport {
  id: number;
  _id: string;
  companyName: string;
  country?: string;
  sector?: string;
  reviewer?: string;
  reviewLink?: string;
  marketInformationDate?: string;
  marketInformationLink?: string;
  sentimentScore?: number;
}

interface IFilterOptions {
  field: string;
  value: string;
}

type ReportState = {
  reports: IReport[];
  IFilterOptions: IFilterOptions;
};

type ReportAction = {
  type: string;
  report: IReport;
  filter?: IFilterOptions;
};

type ContextType = {
  reports: IReport[];
  // saveTodo: (todo: ITodo) => void;
  // updateTodo: (id: number) => void;
};
