import style from './FriendListItem.module.css';
import clsx from "clsx";



export default function FriendListItem({avatar, name, isOnline}){
    return (
        <div className={style.contain}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={
                clsx( isOnline? style.online : style.offline)
            }>{isOnline? "Online":"Offline"}</p>
        </div>
    );
}