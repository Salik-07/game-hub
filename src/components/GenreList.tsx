import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  console.log("genres", genres);
  return <div></div>;
};

export default GenreList;
