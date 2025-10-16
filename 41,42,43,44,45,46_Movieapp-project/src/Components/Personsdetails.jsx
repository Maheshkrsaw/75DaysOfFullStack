// path: 41,42,43,44_Movieapp-project/src/Components/PersonsDetails.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPerson, removeperson } from "../Store/actions/personsActions";
import { useNavigate, useParams, Link } from "react-router-dom";
import HorizontalCards from "../Partials/HorizontalCards";
import ClipLoader from "react-spinners/ClipLoader";

const PersonsDetails = () => {
  document.title = "FW | Person Details";

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const info = useSelector((state) => state.persons?.info);
  const [category, setCategory] = useState("movie");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      setLoading(true);
      await dispatch(asyncLoadPerson(id));
      setLoading(false);
    };
    fetchPersonDetails();

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  if (loading || !info) {
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center bg-[#1F1E24]">
        <ClipLoader color="#36d7b7" size={60} />
      </div>
    );
  }

  const { detail, externalid, combinedCredits } = info;

  const personalInfo = [
    { label: "Known For", value: detail.known_for_department },
    { label: "Gender", value: detail.gender === 2 ? "Male" : "Female" },
    { label: "Birthday", value: detail.birthday },
    { label: "Deathday", value: detail.deathday || "Still Alive" },
    { label: "Place of Birth", value: detail.place_of_birth },
    { label: "Also Known As", value: detail.also_known_as.join(", ") },
  ];

  const socialLinks = [
    { id: externalid.twitter_id, url: `https://twitter.com/${externalid.twitter_id}`, icon: "ri-twitter-fill", color: "text-blue-400" },
    { id: externalid.instagram_id, url: `https://instagram.com/${externalid.instagram_id}`, icon: "ri-instagram-fill", color: "text-pink-500" },
    { id: externalid.facebook_id, url: `https://facebook.com/${externalid.facebook_id}`, icon: "ri-facebook-fill", color: "text-blue-600" },
  ].filter(link => link.id);

  // Format biography line by line
  const formatBiography = (bio) => {
    if (!bio) return <p className="text-zinc-400">No biography available.</p>;
    return bio.split("\n").map((line, idx) => (
      <p key={idx} className="mt-2 text-zinc-400 break-words">{line}</p>
    ));
  };

  return (
    <div className="w-screen min-h-screen bg-[#1F1E24] text-white px-[10%] py-10">
      {/* Navigation */}
      <div className="flex items-center gap-3 mb-8">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-2xl cursor-pointer hover:text-[#6556CD]"
        ></i>
        <h1 className="text-xl font-bold text-zinc-400">{detail.name}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Profile & Info */}
        <div className="w-[250px] flex-shrink-0">
          <img
            src={detail.profile_path ? `https://image.tmdb.org/t/p/w300/${detail.profile_path}` : "/noimage.jpeg"}
            alt={detail.name}
            className="w-[250px] h-[350px] object-cover rounded-lg shadow-lg"
          />

          <div className="mt-5 text-zinc-400">
            {personalInfo.map((item, index) => (
              <div key={index} className="mt-3">
                <h2 className="text-lg font-semibold">{item.label}</h2>
                <p>{item.value}</p>
              </div>
            ))}

            {/* Social Links */}
            <div className="mt-5 flex gap-3 text-2xl">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:${link.color}`}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Biography & Credits */}
        <div className="flex-1 bg-[#1F1E24] overflow-x-hidden">
          {/* Name */}
          <h2 className="text-5xl font-bold text-zinc-400">{detail.name}</h2>

          {/* Biography */}
          <h2 className="text-xl font-semibold mt-5">Biography</h2>
          <div>{formatBiography(detail.biography)}</div>

          {/* HorizontalCards with Known For */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-400 mb-2">Known For</h2>
            <HorizontalCards data={combinedCredits?.cast || []} />
          </div>

          {/* Acting Credits */}
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

          <ul className="mt-4 list-disc text-zinc-400 max-h-[50vh] overflow-y-auto overflow-x-hidden border border-zinc-700 p-4 rounded shadow-lg">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonsDetails;
