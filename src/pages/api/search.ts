// /src/pages/api/search.ts

// Next.js의 API 라우팅을 위해 필요한 타입을 임포트합니다.
import { NextApiRequest, NextApiResponse } from "next";

// 검색할 mock 데이터를 임포트합니다.
import { searchData } from "../data/searchData";

// Next.js의 API 라우터 핸들러 함수를 정의합니다.
// 이 함수는 NextApiRequest와 NextApiResponse 타입의 인자를 받습니다.
const search = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // 클라이언트에서 전달한 검색 쿼리를 가져옵니다.
    const { query } = req.query;

    // 전달된 검색 쿼리가 문자열이 아닌 경우, 400 상태 코드와 에러 메시지를 반환합니다.
    if (typeof query !== "string") {
      res.status(400).json({ error: "Invalid query parameter." });
      return;
    }

    // searchData에서 쿼리와 일치하는 항목을 찾습니다.
    // 제목(title) 또는 설명(description)이 쿼리와 일치할 때 필터링합니다.
    // 대소문자를 구분하지 않기 위해 모두 소문자로 변환하여 비교합니다.
    const results = searchData.filter(
      (item: { title: string; description: string }) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    // 찾은 결과를 JSON 형식으로 반환하고, 상태 코드를 200으로 설정합니다.
    res.status(200).json(results);
  } catch (error) {
    // 오류가 발생한 경우, 콘솔에 오류를 출력하고 500 상태 코드와 함께 에러 메시지를 반환합니다.
    console.error("Error in search API route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// search 함수를 내보냅니다.
export default search;
