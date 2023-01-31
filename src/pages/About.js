import DetailNav from "../components/detail/DetailNav";
import ListMenu from "../components/about/ListMenu";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

const About = () => {
  let { siSeq } = useParams();
  console.log("siSeq", siSeq);
  return (
    <Layout>
    <div>
      <DetailNav />
      <ListMenu siSeq={siSeq} />
    </div></Layout>
  );
};

export default About;
