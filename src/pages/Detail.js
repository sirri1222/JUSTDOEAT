import { useParams } from "react-router-dom";
import DetailNav from "../components/detail/DetailNav";
import List from "../components/detail/List";
import Layout from "../components/layout/Layout";

// redux Patch 보내서 state 업데이트
import { useDispatch, useSelector } from "react-redux";
import { cateUpdate } from "../redux/cateSliced";

const Detail = () => {
  // const dispatch = useDispatch();
  // const cateGory = useSelector((state) => {
  //   return state.cate.cate;
  // });

  // let { cate } = useParams();
  // cate = cate.replace("_", "/");
  // console.log("카테고리 : ", cate);
  // dispatch(cateUpdate({ cate: cate }));
  return (
    <Layout>
      <div>
        <DetailNav />
        <div>
          {/* 한식, 일식 등의 글자가 전달 된다. */}
          <List />
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
