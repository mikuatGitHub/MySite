import style from "styles/cards.module.css"

export default function Cards({ skills }) {
  return (
    <ul className={style.cards}>
      {skills.map((skill) => {
        return (
          <li key={skill.id} className={style.card}>
            <h3 className={style.title}>{skill.title}</h3>

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

// <FontAwesomeIcon icon={faStar} color={"#e4dccb"} />
// <FontAwesomeIcon icon={faStar} color={"#ffd233"} />
