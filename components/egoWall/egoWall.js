import style from "./egoWall.module.css";
import utilStyles from "../../styles/utils.module.css";
import LeetCodeProfile from "./leetCodeProfile";
import StackOverflowProfile from "./stackOverflowProfile";

export default function EgoWall() {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Ego Wall</h2>
      <div className={style.layout}>
        <LeetCodeProfile />
        <StackOverflowProfile />
      </div>
    </section>
  );
}
