import React from 'react'
import './Home.scss';

const Home = () => {
  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp">
        <div className="blog-slider__item">
          <div className="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">Welcome to Botsonic</span>
            <div className="blog-slider__text">Create shared Bots in your Workspace</div>
            <div className="blog-slider__text">Invite your team and start collaborating</div>
            <div className="blog-slider__text">Work synchronously and get the most done</div>
          </div>
          <div className="blog-slider__button">
            Create new Bot
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Home