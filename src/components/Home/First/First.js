import React, { useRef } from 'react';
import css from './First.module.scss';

function First() {
  const slider = useRef();

  const first_button = () => {
    slider.current.style.transform = `translate(0vw)`;
    slider.current.style.transition = `transform 1s`;
  };
  const second_button = () => {
    slider.current.style.transform = `translate(-100vw)`;
    slider.current.style.transition = `transform 1s`;
  };
  const third_button = () => {
    slider.current.style.transform = `translate(-200vw)`;
    slider.current.style.transition = `transform 1s`;
  };
  const fourth_button = () => {
    slider.current.style.transform = `translate(-300vw)`;
    slider.current.style.transition = `transform 1s`;
  };
  const fifth_button = () => {
    slider.current.style.transform = `translate(-400vw)`;
    slider.current.style.transition = `transform 1s`;
  };

  return (
    <>
      <div className={css.wrapercontainer}>
        <div ref={slider} className={css.container}>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://lush.co.kr/data/editor/goods/200624/perfume01_134035.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2018/05/23/22/37/chinchillas-3425370__340.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2016/11/29/04/42/conifers-1867371__340.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2021/02/06/14/24/lavanttal-5988332__340.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279__480.jpg"
              alt="이미지"
            />
          </div>
        </div>
      </div>
      <div className={css.wrapbutton}>
        <button className={css.button} onClick={first_button} />
        <button className={css.button} onClick={second_button} />
        <button className={css.button} onClick={third_button} />
        <button className={css.button} onClick={fourth_button} />
        <button className={css.button} onClick={fifth_button} />
      </div>
    </>
  );
}

export default First;
