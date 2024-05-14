import Film from "./Film";

function FilmList({films}) {
  return (
    <div style={{display : "flex",flexDirection:"column"}}>
      {films?.map((e, i) => {
        return <Film key={i} e={e} />;
      })}
    </div>
  );
}

export default FilmList;