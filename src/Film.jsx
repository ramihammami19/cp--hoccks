import "./film.css"
function Film({e}) {
  console.log(e);

    

  return (
<div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{e.title}</h1>
            <div className="card_cat">
              <p className="PG">PG - 13</p>
              <p className="year">{e.date}</p>
              <p className="genre">{e.type}</p>
              <p className="time">{e.time}</p>
            </div>
            <p className="disc">{e.description}</p>
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
            <div className="social-btn">
              {/* WATCH TRAILER */}
              
              {/* USERS RATINGS */}
             
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={e.ph} alt="" />
            
          </div>
          <div className="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i className="fas fa-play-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>  )
}

export default Film