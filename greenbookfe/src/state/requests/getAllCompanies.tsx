import axios from "axios";

type GetCompaniesResponse = {
  data: IReport[];
};

const getAllCompanies = async () => {
  try {
    const { data, status } = await axios.get<any>(
      "https://gbtest-og.herokuapp.com/companies",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
};

export default getAllCompanies;
