import css from "./FriendList.module.css"

export const FriendList = ({friends}) => {
    return (
    <ul className={css.friendList}>
    {friends.map(friend =>
        <li key={friend.id}>
		<FriendListItem friends={friend}/>
	</li>
    )}
</ul>
    )
}

const FriendListItem = ({friends:{avatar, name, isOnline}}) =>  {
    const onlineStatus = isOnline ? css.online : css.offline
    return (
    <div className={css.item}>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
  <p className={onlineStatus}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}