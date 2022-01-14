import useSWR from "swr";
import Image from "next/image";
import style from "./leetCodeProfile.module.css";
import stackOverflowProfileStyle from "./stackOverflowProfile.module.css";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StackOverflowProfile() {
  const { data, error } = useSWR("/api/getStackOverflowProfile", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className={style["background"]}>
      <div className={style.upper}>
        <div className={`${style["stat-wrapper"]} ${style["top"]}`} size="108">
          <div className={style["problems-solved"]}>Reputation</div>
          <div className={style["total-solved-count"]}>
            {data.items[0].reputation}
          </div>
        </div>
        <a
          className={style.logo}
          href="https://stackoverflow.com/users/7755019/evilcat0911"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/stackOverflowLogo.png"
            height={372}
            width={1866}
            alt={"stackOverflowLogo.png"}
          />
        </a>
      </div>

      <div className={style["total-solved-container"]}>
        <div className={style["stat-wrapper"]}>
          <div
            className={`${style["difficulty-label"]} ${stackOverflowProfileStyle["bronze"]}`}
          >
            bronze
          </div>
          <div
            className={`${style["solved"]} ${stackOverflowProfileStyle["badge-count-bronze"]}`}
          >
            {data.items[0].badge_counts.bronze}
          </div>
        </div>
        <div className={style["stat-wrapper"]}>
          <div
            className={`${style["difficulty-label"]} ${stackOverflowProfileStyle["silver"]}`}
          >
            silver
          </div>
          <div
            className={`${style["solved"]} ${stackOverflowProfileStyle["badge-count-silver"]}`}
          >
            {data.items[0].badge_counts.silver}
          </div>
        </div>
        <div className={style["stat-wrapper"]}>
          <div
            className={`${style["difficulty-label"]} ${stackOverflowProfileStyle["gold"]}`}
          >
            gold
          </div>
          <div
            className={`${style["solved"]} ${stackOverflowProfileStyle["badge-count-gold"]}`}
          >
            {data.items[0].badge_counts.gold}
          </div>
        </div>
      </div>
    </div>
  );
}
