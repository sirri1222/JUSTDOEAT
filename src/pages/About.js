import DetailNav from "../components/detail/DetailNav";
import ListMenu from "../components/about/ListMenu";
import { useParams, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";

const About = () => {
  let { siSeq } = useParams();
  // console.log("siSeq", siSeq);
  const location = useLocation();
  const storeInfo = location.state;
  return (
    <Layout>
      <div>
        <DetailNav />
        <ListMenu siSeq={siSeq} storeInfo={storeInfo} />
      </div>
    </Layout>
  );
};

export default About;
