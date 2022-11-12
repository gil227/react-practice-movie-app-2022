import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const getMovDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
  };
  useEffect(() => {
    getMovDetail();
  }, []);

  return <h1>hi</h1>;
}
export default Detail;
