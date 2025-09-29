// path: 41,42,43,44_Movieapp-project/src/Components/PersonsDetails.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "../Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import HorizontalCards from "../Partials/HorizontalCards";

const PersonsDetails = () => {
  document.title = "FW | Person Details";
  const navigate = useNavigate();
  const { id } = useParams();

  const [info, setInfo] = useState(null);
  const [category, setCategory] = useState("movie"); // movie or tv
  const [loading, setLoading] = useState(true);

  const fetchPersonDetails = async () => {
    try {
      setLoading(true);
      const { data: detail } = await axios.get(`/person/${id}`);
      const { data: externalid } = await axios.get(`/person/${id}/external_ids`);
      const { data: combinedCredits } = await axios.get(`/person/${id}/combined_credits`);
      const { data: tvCredits } = await axios.get(`/person/${id}/tv_credits`);
      const { data: movieCredits } = await axios.get(`/person/${id}/movie_credits`);

      setInfo({
        detail,
        externalid,
        combinedCredits,
        tvCredits,
        movieCredits,
      });
    } catch (error) {
      console.error("Error fetching person details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading || !info) {
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center bg-[#1F1E24]">
        <ClipLoader color="#36d7b7" size={60} />
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-[#1F1E24] text-white px-[10%] py-10">
      {/* Navigation */}
      <div className="flex items-center gap-3 mb-8">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-2xl cursor-pointer hover:text-[#6556CD]"
        ></i>
        <h1 className="text-2xl font-semibold text-zinc-400">{info.detail.name}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Profile & Info */}
        <div className="w-[250px] flex-shrink-0">
          <img
            src={
              info.detail.profile_path
                ? `https://image.tmdb.org/t/p/w300/${info.detail.profile_path}`
                : "/no-image.png"
            }
            alt={info.detail.name}
            className="w-[250px] h-[350px] object-cover rounded-lg shadow-lg"
          />

          <div className="mt-5 text-zinc-400">
            <h2 className="text-lg font-semibold">Known For</h2>
            <p>{info.detail.known_for_department}</p>

            <h2 className="text-lg font-semibold mt-3">Gender</h2>
            <p>{info.detail.gender === 2 ? "Male" : "Female"}</p>

            <h2 className="text-lg font-semibold mt-3">Birthday</h2>
            <p>{info.detail.birthday}</p>

            <h2 className="text-lg font-semibold mt-3">Deathday</h2>
            <p>{info.detail.deathday || "Still Alive"}</p>

            <h2 className="text-lg font-semibold mt-3">Place of Birth</h2>
            <p>{info.detail.place_of_birth}</p>

            <h2 className="text-lg font-semibold mt-3">Also Known As</h2>
            <p>{info.detail.also_known_as.join(", ")}</p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3 text-2xl">
              {info.externalid.twitter_id && (
                <a
                  href={`https://twitter.com/${info.externalid.twitter_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              )}
              {info.externalid.instagram_id && (
                <a
                  href={`https://instagram.com/${info.externalid.instagram_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              )}
              {info.externalid.facebook_id && (
                <a
                  href={`https://facebook.com/${info.externalid.facebook_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Biography & Credits */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-zinc-400">{info.detail.name}</h2>

          <h2 className="text-xl font-semibold mt-5">Biography</h2>
          <p className="mt-2 text-zinc-400">{info.detail.biography || "No biography available."}</p>

          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-zinc-400">Acting Credits</h2>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#2a2935] text-zinc-400 p-1 rounded"
            >
              <option value="movie">Movies</option>
              <option value="tv">TV Shows</option>
            </select>
          </div>

          <div className="mt-4 list-disc text-zinc-400 max-h-[50vh] overflow-y-auto overflow-x-hidden border border-zinc-700 p-4 rounded shadow-lg">
            {(info[category + "Credits"]?.cast || []).map((c) => (
              <li
                key={c.id}
                className="hover:text-white p-2 rounded hover:bg-[#19191d] cursor-pointer transition-all"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  {c.title || c.name}
                  {c.character && <span className="block ml-5 mt-1">Character: {c.character}</span>}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonsDetails;
