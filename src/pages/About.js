import DetailNav from "../components/detail/DetailNav";
import ListMenu from "../components/about/ListMenu";
import { useParams } from "react-router-dom";

const About = () => {
  let { siSeq } = useParams();
  console.log("siSeq", siSeq);
  return (
    <div>
      <DetailNav />
      <ListMenu siSeq={siSeq} />
    </div>
  );
};

export default About;
