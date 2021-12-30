import useSWR from "swr";
import style from "./leetCodeProfile.module.css";
import Image from "next/image";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LeetCodeProfile() {
  const { data, error } = useSWR("/api/getLeetCodeProfile", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div id={style["background"]}>
      <div className={style.upper}>
        <div className={`${style["stat-wrapper"]} ${style["top"]}`} size="108">
          <div className={style["problems-solved"]}>Problems Solved</div>
          <div className={style["total-solved-count"]}>
            {data.matchedUser.submitStats.acSubmissionNum[0].count}
          </div>
        </div>
        <a
          className={style.logo}
          href="https://leetcode.com/weichun0911/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/leetCodeLogo.svg"
            height={111}
            width={458}
            alt={name}
          />
        </a>
      </div>

      <div className={style["total-solved-container"]}>
        <div className={style["stat-wrapper"]}>
          <div className={`${style["difficulty-label"]} ${style["easy"]}`}>
            Easy
          </div>
          <div className={style["solved"]}>
            {data.matchedUser.submitStats.acSubmissionNum[1].count}
          </div>
        </div>
        <div className={style["stat-wrapper"]}>
          <div className={`${style["difficulty-label"]} ${style["medium"]}`}>
            Medium
          </div>
          <div className={style["solved"]}>
            {data.matchedUser.submitStats.acSubmissionNum[2].count}
          </div>
        </div>
        <div className={style["stat-wrapper"]}>
          <div className={`${style["difficulty-label"]} ${style["hard"]}`}>
            Hard
          </div>
          <div className={style["solved"]}>
            {data.matchedUser.submitStats.acSubmissionNum[3].count}
          </div>
        </div>
      </div>
    </div>
  );
}
