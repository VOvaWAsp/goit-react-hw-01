import css from "./Profile.module.css"

export const Profile = ({name, tag, location, image, stats: {
    followers,
    views,
    likes
}}) => {
    return (
        <div className={css.container}>
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={image}
      alt={name}
      className={css.avatar}
    />
    <h2 className={css.name}>{name}</h2>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>


  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.value}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.value}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.value}>{likes}</span>
    </li>
  </ul>
</div>
        </div>
    )
}