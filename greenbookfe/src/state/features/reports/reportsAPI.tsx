import getAllCompanies from "../../requests/getAllCompanies";
import getAllSectorGraphData from "../../requests/getAllSectorGraphData";
import getAllReportGraphData from "../../requests/getAllReportGraphData";

// A mock function to mimic making an async request for data
export const fetchAllCompanies = () => {
  return new Promise<any>((resolve) =>
    getAllCompanies().then((res: any) => {
      resolve(res);
    })
  );
};
export const fetchAllSectorGraphData = () => {
  return new Promise<any>((resolve) =>
    getAllSectorGraphData().then((res: any) => {
      resolve(res);
    })
  );
};

export const fetchAllReportGraphData = () => {
  return new Promise<any>((resolve) =>
    getAllReportGraphData().then((res: any) => {
      resolve(res);
    })
  );
};
