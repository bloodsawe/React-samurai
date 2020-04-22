import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  const {fullName, aboutMe, facebook="facebook.com", lookingForAJob, lookingForAJobDescription} = props.profile;
  return (
    <div>
      <div>
        <img src="https://focus.ua/storage/pub/images/2017/2615387.jpg" alt="ProfileInfo" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar"/>
        ava + description
      </div>
      <div>
        <p> Имя: {fullName} </p>
        <p> Обо мне: {aboutMe ? aboutMe : "Нечего сказать"} </p>
        <p> Контакты:<a href="facebook.com"> {facebook}</a>  </p>
        <p> Работа: { (lookingForAJob === true) ? lookingForAJobDescription : "Ищу работу" } </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
