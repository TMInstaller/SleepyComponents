// /src/pages/components/Search.tsx

// useState를 사용하기 위해 React에서 필요한 모듈을 불러옵니다.
import { useState } from "react";

// SearchResult 인터페이스를 정의합니다. 검색 결과로 반환되는 데이터의 형식을 지정합니다.
interface SearchResult {
  id: number;
  title: string;
  description: string;
}

// Search 컴포넌트를 정의합니다.
export default function Search() {
  // 검색어를 저장할 상태 변수(query)와 그 값을 설정하는 함수(setQuery)를 선언합니다.
  const [query, setQuery] = useState("");

  // 검색 결과를 저장할 상태 변수(results)와 그 값을 설정하는 함수(setResults)를 선언합니다.
  // 결과는 SearchResult 형식의 배열입니다.
  const [results, setResults] = useState<SearchResult[]>([]);

  // 검색 기능을 구현하는 비동기 함수입니다.
  const handleSearch = async () => {
    // 검색어가 비어있으면 함수를 종료합니다.
    if (!query.trim()) return;

    // 서버에 검색 요청을 보냅니다. 검색어를 encodeURIComponent로 인코딩하여 URL에 포함시킵니다.
    const response = await fetch(
      `/api/search?query=${encodeURIComponent(query)}`
    );
    // 서버로부터 받은 응답을 JSON 형식으로 변환합니다.
    const data = await response.json();

    // 응답이 성공적인 경우, 결과를 저장하고 콘솔에 메시지를 출력합니다.
    if (response.ok) {
      console.log("정상적으로 검색 완료");
      setResults(data);
    } else {
      // 응답에 문제가 있을 경우, 에러 메시지를 콘솔에 출력합니다.
      console.error(data.error);
    }
  };

  // Search 컴포넌트의 JSX를 반환합니다.
  return (
    <div>
      {/* 검색어를 입력하는 텍스트 필드 */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      {/* 검색 버튼 */}
      <button onClick={handleSearch}>검색</button>
      {/* 검색 결과를 표시하는 부분 */}
      <ul>
        {/* 검색 결과를 순회하며 각 결과를 리스트 항목으로 표시합니다. */}
        {results.map((result) => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
