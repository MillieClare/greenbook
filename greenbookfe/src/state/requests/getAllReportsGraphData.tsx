import axios from "axios";

const getAllReportGraphData = async () => {
  try {
    const { data, status } = await axios.get<any>(
      "https://greenbookbe.herokuapp.com/graphdata",
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

export default getAllReportGraphData;
