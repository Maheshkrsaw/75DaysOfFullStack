// path: 41,42,43,44_Movieapp-project/src/Store/actions/personsActions.jsx
import axios from "../../Utils/Axios";
import { loadperson, removeperson } from "../Reducers/personsSlice";

// Fetch single person details + credits + external IDs
export const asyncLoadPerson = (id) => async (dispatch) => {
  try {
    const { data: detail } = await axios.get(`/person/${id}`);
    const { data: externalid } = await axios.get(`/person/${id}/external_ids`);
    const { data: combinedCredits } = await axios.get(`/person/${id}/combined_credits`);
    const { data: tvCredits } = await axios.get(`/person/${id}/tv_credits`);
    const { data: movieCredits } = await axios.get(`/person/${id}/movie_credits`);

    const theUltimateDetails = {
      detail,
      externalid,
      combinedCredits,
      tvCredits,
      movieCredits,
    };

    dispatch(loadperson(theUltimateDetails));
  } catch (err) {
    console.error("Error fetching person details:", err);
  }
};

// Remove person details from state
export { removeperson };
