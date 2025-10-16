import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
// import { removeMovie } from "../Store/reducers/movieSlice";
import ClipLoader from "react-spinners/ClipLoader";
import HorizontalCards from "../Partials/HorizontalCards";
import { asyncloadtv } from "../Store/actions/Tvactions";
import { removeMovie } from "../Store/Reducers/Movieslice";

const Tvdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie); // or state.tv if using separate slice

  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removeMovie());
    };
  }, [id, dispatch]);

  if (!info) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-black">
        <ClipLoader color="#36d7b7" size={60} />
      </div>
    );
  }

  const posterUrl = info.detail.poster_path || info.detail.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`
    : "/noimage.jpeg"; // fallback from public folder

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${posterUrl})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="relative w-screen min-h-[185vh] px-[10%] py-5"
    >
      {/* Nav */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <button
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></button>

        <a target="_blank" rel="noreferrer" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        {info.externalid.imdb_id && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            imdb
          </a>
        )}
      </nav>

      {/* Poster & Info */}
      <div className="w-full flex flex-col md:flex-row mt-5">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover rounded-lg"
          src={posterUrl}
          alt={info.detail.name}
        />

        <div className="content ml-0 md:ml-[5%] mt-5 md:mt-0 text-white flex-1">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name}
            <small className="text-2xl font-bold text-zinc-200 ml-2">
              ({info.detail.first_air_date?.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-10 flex flex-wrap text-white items-center gap-x-3 gap-y-2">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres?.map((g) => g.name).join(",")}</h1>
            <h1 className="font-bold">{info.detail.number_of_seasons} Seasons</h1>
          </div>

          {info.detail.tagline && (
            <h1 className="text-xl font-semibold italic text-zinc-200">
              {info.detail.tagline}
            </h1>
          )}

          <h1 className="text-2xl mb-3 mt-5">Overview</h1>
          <p className="mb-5">{info.detail.overview}</p>

          {/* Trailer Button */}
          {info.videos && (
            <Link
              className="inline-flex items-center gap-2 p-3 bg-[#6556CD] rounded-lg"
              to="trailer"
            >
              <i className="text-xl ri-play-fill"></i>
              Play Trailer
            </Link>
          )}
        </div>
      </div>

      {/* Watch Providers */}
      <div className="flex flex-col gap-y-5 mt-10 mb-2">
        {info.watchproviders?.flatrate?.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-white mr-2">Available on Flatrate:</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={`flatrate-${i}`}
                className="h-[7vh] w-[7vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
        {info.watchproviders?.rent?.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-3">
            <h1 className="text-white mr-2">Available on Rent:</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={`rent-${i}`}
                className="h-[7vh] w-[7vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
        {info.watchproviders?.buy?.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-3">
            <h1 className="text-white mr-2">Available to Buy:</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={`buy-${i}`}
                className="h-[7vh] w-[7vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Seasons */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white mb-5">Seasons</h1>
      <div className="flex overflow-x-auto gap-6 py-4 px-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {info.detail.seasons.map((s, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-[30vh] object-cover rounded-lg"
              src={
                s.poster_path
                  ? `https://image.tmdb.org/t/p/original/${s.poster_path}`
                  : "/noimage.jpeg"
              }
              alt={s.name || s.title || s.original_name || s.original_title}
            />
            <h1 className="text-xl text-zinc-300 mt-2 font-semibold text-center">
              {s.name || s.title || s.original_name || s.original_title}
            </h1>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <hr className="mt-5 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">Recommendations & Similar Stuff</h1>
      <HorizontalCards
        data={info.recommendations.length > 0 ? info.recommendations : info.similar}
      />

      {/* Nested Trailer Route */}
      <Outlet />
    </div>
  );
};

export default Tvdetails;
