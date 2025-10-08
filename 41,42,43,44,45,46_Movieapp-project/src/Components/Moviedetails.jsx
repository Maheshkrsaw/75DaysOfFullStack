import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import HorizontalCards from "../Partials/HorizontalCards";
import { asyncloadmovie } from "../Store/actions/Movieactions";
// import { removeMovie } from "../Store/reducers/movieSlice";
import { removeMovie } from "../Store/Reducers/Movieslice";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removeMovie());
    };
  }, [id, dispatch]);

  if (!info) {
    // Loading screen similar to Trending
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-black">
        <ClipLoader color="#36d7b7" size={60} />
      </div>
    );
  }

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className=" relative w-screen h-[148vh] px-[10%]"
    >
      {/* Part1 (Nav) */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* part-2 */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover ]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-10 flex text-white items-center gap-x-3">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1 className="font-bold">{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mb-3 mt-5">Overview</h1>

          <p className="mb-5">{info.detail.overview}</p>

          <Link
            className="inline-flex items-center gap-2 p-3 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* part-3 */}
      <div className="flex flex-col gap-y-5 mt-10 mb-3">
        {/* Flatrate */}
        {info.watchproviders?.flatrate?.length > 0 && (
          <div className="flex items-center gap-2">
            <h1 className="text-white mr-2">Available on Flatrate:</h1>
            {info.watchproviders.flatrate.map((w, index) => (
              <img
                key={`flatrate-${index}`}
                className="h-[7vh] w-[7vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {/* Rent */}
        {info.watchproviders?.rent?.length > 0 && (
          <div className="flex items-center gap-2 mt-3">
            <h1 className="text-white mr-2">Available on Rent:</h1>
            {info.watchproviders.rent.map((w, index) => (
              <img
                key={`rent-${index}`}
                className="h-[7vh] w-[7vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {/* Buy */}
        {info.watchproviders?.buy?.length > 0 && (
          <div className="flex items-center gap-2 mt-3">
            <h1 className="text-white mr-2">Available to Buy:</h1>
            {info.watchproviders.buy.map((w, index) => (
              <img
                key={`buy-${index}`}
                className="h-[7vh] w-[7vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Part 4 Recommendations and Similar Stuff */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

      <h1 className="text-3xl font-bold text-white">
        Recommendations & Similar Stuff
      </h1>

      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
    <Outlet />

    </div>
  );
};

export default Moviedetails;
