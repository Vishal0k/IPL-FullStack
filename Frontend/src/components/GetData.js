import axios from "axios";

const URL = `http://localhost:5262/api/ipl/details`;
async function GetData() {
  let data = null;
  try {
    let response = await axios.get(URL);
    if (response.data !== null) {
      data = await response.data;
      // console.log("Data from api" + JSON.stringify(data));
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

export { GetData };
