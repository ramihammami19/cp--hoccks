// DescriptionPage.jsx
import React, { useEffect, useState, useContext } from "react";
import MovieContext from "./context/Movie_context";
import { Link, useParams } from "react-router-dom";

const DescriptionPage = () => {
  const { id } = useParams();
  const { films } = useContext(MovieContext);
  const [movie, setMovie] = useState();
  console.log(films);

  useEffect(() => {
    setMovie(films.find((movie) => movie.id == id));
  }, [[]]);

  return (
    <section className="bg-white py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
          <aside>
            <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
           <iframe src={movie?.try} ></iframe>
            </div>
            <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
              <a className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer">
                {/* <img
                  className="w-14 h-14"
                  src={"/logo192.png"}
                  alt="Product title"
                  width="500"
                  height="500"
                /> */}
                
              </a>
            </div>
          </aside>
          <main>
            <h2 className="font-semibold text-2xl mb-4">{movie?.title}</h2>

            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <div className="ratings"></div>

              <svg
                width="6px"
                height="6px"
                viewBox="0 0 6 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
              </svg>
            </div>

            <p className="mb-4 text-gray-500">
            {movie?.description}
            </p>
          </main>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default DescriptionPage;
