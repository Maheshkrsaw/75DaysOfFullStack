// import { loadMovie, removeMovie } from "../reducers/movieSlice";
import axios from "../../Utils/Axios";
import { loadMovie } from "../Reducers/Movieslice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    // Fetch all TV details
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

    // Pick first Trailer video (if exists)
    const trailerVideo = videos.data.results.find((m) => m.type === "Trailer");

    // Prepare final object
    const tvDetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: trailerVideo || null,
      watchproviders: watchproviders.data.results?.IN || null,
    };

    dispatch(loadMovie(tvDetails));
    console.log(tvDetails);
  } catch (error) {
    console.log("Error loading TV details: ", error);
  }
};
