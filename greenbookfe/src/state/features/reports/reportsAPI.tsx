import getAllCompanies from "../../requests/getAllCompanies";

// A mock function to mimic making an async request for data
export const fetchAllCompanies = () => {
  return new Promise<any>((resolve) =>
    getAllCompanies().then((res: any) => {
      resolve(res);
    })
  );
};
