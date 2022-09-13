import axios from "axios";

const getAllSectorGraphData = async () => {
  try {
    const { data, status } = await axios.get<any>(
      "https://greenbookbe.herokuapp.com/sectorword",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log({ data });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
};

export default getAllSectorGraphData;
