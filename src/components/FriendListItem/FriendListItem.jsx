import css from "./FriendList.module.css"

export const FriendListItem = ({friends:{avatar, name, isOnline}}) =>  {
    const onlineStatus = isOnline ? css.online : css.offline
    return (
    <div className={css.item}>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
  <p className={onlineStatus}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}