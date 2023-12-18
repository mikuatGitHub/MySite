import style from "styles/cards.module.css"

// import Rating from "react-rating";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { COLORS } from "utils/config";

export default function Cards({ skills }) {
  return (
    <ul className={style.cards}>
      {skills.map((skill) => {
        return (
          <li key={skill.id} className={style.card}>
              <h3 className={style.title}>{skill.title}</h3>

              <div className={style.rating}>
                <h2>{skill.rating}</h2>
                {/* {<Rating
                  emptySymbol={
                    <FontAwesomeIcon icon={faStar} color={COLORS.star.empty} />
                  }
                  fullSymbol={
                    <FontAwesomeIcon icon={faStar} color={COLORS.star.full} />
                  }
                  // fractions={1} // 星をいくつに分割するか。2にしたら星の半分も評価に入る
                  initialRating={skill.rating} // デフォルトの評価数。
                  // readonly={true} // 評価を変更できるかどうか。デフォルトはfalse
                />} */}
              </div>

              <div>
                <div className={style.subtitle}>説明</div>
                <p className="text">{skill.description}</p>
              </div>

              <div>
                <div className={style.subtitle}>コメント</div>
                <p className="text">{skill.comment}</p>
              </div>
          </li>
        );
      })
    }</ul>

  )
};
