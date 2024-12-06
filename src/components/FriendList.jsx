import FriendListItem from "./FriendListItem";
import style from './FriendList.module.css';

export default function FriendList({friends}){
    return(
        <ul className={style.frList}>
            { friends.map( (friend) => {
                return <li key={friend.id}> <FriendListItem name={friend.name} isOnline={friend.isOnline} avatar={friend.avatar} /> </li> ;
            })}
        </ul>
    );
}