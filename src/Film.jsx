import "./film.css";
import { useNavigate } from "react-router-dom";

function Film({ film }) {
const navigate = useNavigate()
  return (
    <div className="min-h-screen grid place-items-center font-mono bg-gray-900">
      <div className="bg-white rounded-md bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={film.ph}
              alt="pic"
              className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div className="flex-col text-black-300">
            <p className="pt-4 text-2xl font-bold">{film.title}</p>
            <hr className="hr-text" data-content="" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">{film.time} | {film.type}</span>
              <span className="font-bold"></span>
            </div>
         
            <p className="flex text-md px-4 my-2">
              {film.ra}
             
            </p>

            <div className="text-xs">
              <button
              onClick={()=>{
                navigate('/film/'+film.id)
              }}
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                TRAILER
              </button>

            
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 mb-4 w-full">
       
         
        </div>
      </div>
    </div>
  );
}

export default Film;
