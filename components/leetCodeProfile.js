import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LeetCodeProfile() {
  const { data, error } = useSWR("/api/getLeetCodeProfile", fetcher);

  return data ? (
    <div>
      <div className="stat-wrapper top" size="108">
        <div className="problems-solved">Problems Solved</div>
        <div className="total-solved-count"></div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
