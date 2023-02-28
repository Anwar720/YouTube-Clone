import Icon from "../icons/Icon"
import { useState } from "react"

const VideoCard = (props) => {
    const [isChecked,setIsChecked] = useState(false);
    const handleOnBlur = ()=>{
        setIsChecked(false)
    }
    const handleClick = ()=>{
        if(isChecked)
            setIsChecked(false)
        else 
            setIsChecked(true);
    }
    return (
        <div className='video-card'>
            <div className="media">
                <img src="./images/thumbnail.webp" alt="" width="100"/>
            </div>
            <div className="grid-media">
                <span className="grid-media_left">
                    <span className="media-logo">
                        <img src="./images/media_logo.jpeg" alt="" />
                    </span>
                </span>
                <div className="grid-media_right">
                    <span className="grid-media_right_top">
                        <div className="media-right-title">WARRIORS at LAKERS | FULL GAME HIGHLIGHTS | February 23, 2023</div>
                            <span className="media-vert">
                                <label htmlFor={"more-vert-switch"+props.index} onClick={()=>handleClick()} onBlur={(e)=>handleOnBlur(e)} tabIndex="4">
                                    <Icon name="more_vert" className='more-vert' onClick={props.handleRippleAnimation}/>
                                </label>
                                {
                                    isChecked 
                                    && 
                                    <div className="media-options">
                                        <button className="media-option_btn grid-column-2">
                                            <Icon name="docs_add_on"/> 
                                            <p>Add to queue</p>
                                        </button>
                                        <button className="media-option_btn grid-column-2">
                                            <Icon name="google_plus_reshare"/> 
                                            <p>Share</p>
                                        </button>
                                    </div>
                                }
                            </span>
                    </span>
                    <span className="media-right-channel">
                            NBA 
                            <Icon name="check_circle" className="icon-fill media-icon"/>
                    </span>
                    <span className="media-right-stats">
                        <span>1.75M views</span>
                        <span className="dot"></span>
                        <span>15 hours ago</span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default VideoCard