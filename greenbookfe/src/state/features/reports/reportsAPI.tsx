import getAllCompanies from "../../requests/getAllCompanies";
import getAllSectorGraphData from "../../requests/getAllSectorGraphData";

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
      console.log({ res });
      resolve(res);
    })
  );
};
