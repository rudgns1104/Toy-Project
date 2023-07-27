import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          // 검색어
          query: "미움받을 용기",
        },
        headers: {
          Authorization: "KakaoAK 32ef34e03f3422aaa153e14c9ea112a7",
        },
      })
      .then((res) => setData(res.data.documents))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    // 렌더링될때 한번 data에 변화가 생기면 한번더 실행
    console.log(data);
  }, [data]);
  return (
    <div>
      {data.map((v, i) => {
        // v = value, i = index
        return (
          <div key={i}>
            <h2>{v.title}</h2>
            <div>{v.contents}</div>
            <div>
              {v.price}원 저자 {v.authors.map((v) => v)}
            </div>
            <div>
              링크 <a href={v.url}>클릭</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
