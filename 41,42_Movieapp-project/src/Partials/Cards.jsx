import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
  return (
    <div>
      {data.map((c, i) => (
        <Link className="w-[25vh]" key={i}>
          <img
            className="h-[40vh]"
            src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path}`}
            alt=""
          />
          {c.name || c.title || c.original_name || c.original_title}
        </Link>
      ))}
    </div>
  );
};  

export default Cards