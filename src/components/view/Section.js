import React from 'react'
import styles from './style'

export default (props) => {
    switch (props.content){
        case 'header':
            return (header(props))

        case 'welcome':
            return (welcome)

        case 'testimonials':
            return (testimonials)

        case 'join':
            return (join)

        default:
            return (header)
    }
}

const header = (props) => {
    return (
        <div className="parallax-window" id="booking" data-parallax="scroll" data-image-src="/img/girl.jpg" data-natural-width="1400" data-natural-height="550">
            <div className="promo_full_wp">
                <div style={{paddingTop:164}}>
                    <h3>
                        Learn Full Stack Development
                        <span>Real World Node, React, and Redux Projects</span>
                    </h3>
                    <a href="#tutorials" onClick={props.showElement.bind(this, 'tutorials')} style={{height:36, borderRadius:18, paddingTop:9}} className="btn_1 white">Learn More</a>
                </div>
            </div>
        </div>
    )
}

const welcome = (
    <div>
        <div className="container_styled_1">
            <div className="container margin_60">
                <div className="row">
                    <div className="col-md-5 col-md-offset-1">
                        <figure className="room_pic">
                            <a href="#">
                                <img src="/img/react-node.jpg" alt="Velocity 360" className="img-responsive" />
                            </a>
                        </figure>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <div className="room_desc_home">
                            <h3>Project Based Learning</h3>
                            <p>
                                Our video tutorial series are based on full stack projects that incorporate elements 
                                of realistic sites: front end, back end, database, design, and UI. Some of these projects are 
                                actual sites (like <a target="_blank" style={{color:'red'}} href="http://thevarsity.co">this</a> one) 
                                while others are full stack apps that demonstrate the usage of key tools and concepts such as 
                                Google Maps, sending emails, image uploading and more.
                            </p>
                            <ul>
                                <li>
                                    <div className="tooltip_styled tooltip-effect-4">
                                        <span className="tooltip-item"><i className="icon-video-5"></i></span>
                                        <div className="tooltip-content">
                                            Detailed Videos
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tooltip_styled tooltip-effect-4">
                                        <span className="tooltip-item"><i className="icon-download-cloud"></i></span>
                                        <div className="tooltip-content">
                                            Download Source Code
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container margin_60">
            <div className="row">
                <div className="col-md-5 col-md-offset-1 col-md-push-5">
                    <figure className="room_pic left">
                        <a href="#"><img src="/img/girls.jpg" alt="Velocity 360" className="img-responsive" /></a>
                    </figure>
                </div>
                <div className="col-md-4 col-md-offset-1 col-md-pull-6">
                    <div className="room_desc_home">
                        <h3>Complete Explanations</h3>
                        <p>
                            We do not start a 'beginner' tutorial with several hundred files and lines of pre-scaffolded 
                            code like so many other tutorials on the internet like 
                            <a target="_blank" style={{color:'red'}} href="https://www.youtube.com/watch?v=TSAw5f8mOQs"> this</a>. 
                            Every series begins from step zero and goes all the way to deployment. Tutorials that begin with 
                            pre-scaffolded code and setup may be helpful for some but we find that users miss basic fundamentals 
                            when learning this way. Our tutorials start from the ground and work their way up to a fully functioning site.
                        </p>
                        <ul>
                            <li>
                                <div className="tooltip_styled tooltip-effect-4">
                                    <span className="tooltip-item"><i className="icon-chat"></i></span>
                                    <div className="tooltip-content">
                                        Live Forum
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="tooltip_styled tooltip-effect-4">
                                    <span className="tooltip-item"><i className="icon-meetup"></i></span>
                                    <div className="tooltip-content">
                                        Events in NYC
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

const testimonials = (
    <section className="promo_full" style={{background: 'url(/img/rooftop.jpg) no-repeat center center'}}>
        <div className="promo_full_wp">
            <div>
                <h3>Testimonials</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">

                            <div>
                                <div style={{marginBottom:16}}>
                                    <div className="box_overlay">
                                        <div className="pic">
                                            <figure><img src="/img/jake.jpg" alt="Velocity 360" className="img-circle" /></figure>
                                            <h4>Jake<small>Node JS Developer</small></h4>
                                        </div>
                                        <div className="comment">
                                            "Finding tutorials online is pretty easy but finding good tutorials that tie various 
                                            concepts together - this is where Velocity 360 shines. Bringing together the backend,
                                            frontend and even design into tutorials really separated Velocity from the others."
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{marginBottom:16}}>
                                    <div className="box_overlay">
                                        <div className="pic">
                                            <figure><img src="/img/alex.jpg" alt="Velocity 360" className="img-circle" /></figure>
                                            <h4>Alex<small>React Developer</small></h4>
                                        </div>
                                        <div className="comment">
                                            "Velocity helped tremendously when trying to learn React. The React world changed so rapidly over 
                                            the past two years - ES5 vs ES6, Browserify or Webpack, JSX, Babel, JSX Transform etc - that starting
                                            out was overwhelming. The Velocity courses really clarified the picture."
                                        </div>
                                    </div>
                                </div>
                                                                
                            </div>

                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
)

const join = (
    <section className="image-square left">
        <div className="col-md-6 image">
            <div className="background-image-holder">
                <img alt="image" className="background-image" src="/theme/img/cover11.jpg" />
            </div>
        </div>
        <div className="col-md-6 col-md-offset-1 content">
            <h4 className="uppercase mb12 mt0 mt-xs-0">Premium Membership</h4>
            <form className="text-center form-email">
                <div className="overflow-hidden pt24">
                    <input type="text" name="name" style={{background:'#ededed'}} placeholder="Name" />
                    <input type="text" name="email" style={{background:'#ededed'}} placeholder="Email" />
                    <button type="submit">Join</button>
                </div>
            </form>

            <div style={{fontSize:12+'px'}}>
                <p className="lead mb12 mb-xs-24" style={{fontWeight:100}}>
                    Join as a premium member for $19.99 each month and receive unlimited access to all tutorials, 
                    code samples, and forums on the site.
                </p>
                <hr />
                &#8226; <strong style={{color:'#5fcf80', fontSize:14}}>Downloadable Code Samples</strong><br />
                &#8226; <strong style={{color:'#5fcf80', fontSize:14}}>Downloadable Videos</strong><br />
                &#8226; <strong style={{color:'#5fcf80', fontSize:14}}>Q&A Forum Access</strong><br />
                &#8226; <strong style={{color:'#5fcf80', fontSize:14}}>Discounts on Live Courses</strong>
            </div>
        </div>
    </section>
)