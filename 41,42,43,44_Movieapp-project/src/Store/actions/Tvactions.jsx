import { loadMovie, removeMovie } from "../reducers/movieSlice"; // You can rename to tvSlice if needed
import axios from "../../utils/axios";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    // Fetch TV show details
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

    // Pick the first trailer if available
    const trailerVideo = videos.data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    const theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: trailerVideo || null, // ensure always object or null
      watchproviders: watchproviders.data.results?.IN || {},
    };

    // Dispatch to store
    dispatch(loadMovie(theultimatedetails)); // use tvSlice if separate
    console.log("TV Details Loaded:", theultimatedetails);
  } catch (error) {
    console.error("Error loading TV details:", error);
  }
};
