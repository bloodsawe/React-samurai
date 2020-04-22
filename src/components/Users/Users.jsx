import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/img/user.png"
import { NavLink } from 'react-router-dom';

let Users = (props) => {  
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];

    for(let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.pagination}>
                {pages.map((p) => {
                    return <span key={p} onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p ? styles.selectedPage : ""}>{p}</span>
                })}
            </div>
            {props.users.map((u) => 
            <div key={u.id}>
                <span >
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="fds"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                    {/* <div>
                        {u.followed 
                            ? <button onClick={()=>{
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true})
                                .then(response => {
                                    if(response.data.resultCode == 0 ) {
                                        props.follow(u.id)
                                    }
                                })}}>Unfollow</button> 
                            : <button onClick={()=>{
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true})
                                .then(response => {
                                    if(response.data.resultCode == 0 ) {
                                        props.follow(u.id)
                                    }
                                })
                                }}>Follow</button>}
                    </div> */}
                </span>
                <span>
                    <span>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {"u.location.country"} </div>
                        <div> {"u.location.city"} </div>
                    </span>
                </span>
            </div> )}
        </div>
    )
}

export default Users;