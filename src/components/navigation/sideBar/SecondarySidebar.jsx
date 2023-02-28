import Icon from "../../icons/Icon"
import SigninButton from '../../buttons/SigninButton'

const SecondarySidebar = (props) => {
return (
    <div className={'secondary-sidebar '+props.display} tabIndex='3' onBlur={(e)=>props.blur(e)}>
        <ul className="border-bottom-box">
                <li className='grid-column-3 hover-background selected'>
                        <Icon name="home" className="icon-fill"/>
                        <p>Home</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <img src="./images/short2.png" width="17" />
                    <p>Shorts</p>
                </li>
                <li className='grid-column-3 hover-background'>
                        <Icon name="subscriptions" />
                        <p>Subscriptions</p>
                </li>
        </ul>
        <ul className="border-bottom-box">
                <li className='grid-column-3 hover-background'>
                    <Icon name="video_library" />
                    <p>Library</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="history" />
                    <p>history</p>
                </li>
        </ul>
        <ul className="border-bottom-box pd1">
            <h6 className="reg-text">
                Sign in to like videos,<br/>
                comment, and subscribe.
            </h6>
            <SigninButton />
        </ul>
        <ul className="border-bottom-box">
                <li className='grid-column-3 bold def-cursor'>
                    <p>Explore</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="local_fire_department" />
                    <p>Trending</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="shopping_bag" />
                    <p>Shopping</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="music_note" />
                    <p>Music</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="movie" />
                    <p>Movie</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="sensors" />
                    <p>Live</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="sports_esports" />
                    <p>Gaming</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="newspaper" />
                    <p>News</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="military_tech" />
                    <p>Sports</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="lightbulb" />
                    <p>Learning</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="diamond" />
                    <p>Fashion & Beauty</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="podcasts" />
                    <p>Podcast</p>
                </li>
        </ul>
        <ul className="border-bottom-box">
                <li className='grid-column-3 hover-background'>
                    <Icon name="add_circle_outline" />
                    <p>Browse Channels</p>
                </li>
        </ul>
        
        <ul className="border-bottom-box">
                <li className='grid-column-3 hover-background'>
                    <Icon name="settings" />
                    <p>Settings</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="flag" />
                    <p>Report history</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="help" />
                    <p>Help</p>
                </li>
                <li className='grid-column-3 hover-background'>
                    <Icon name="sms_failed" />
                    <p>Send Feedback</p>
                </li>
        </ul>
        <ul className="policy-info">
            <li className='grid-column-3'>
                    <div>
                        <p>About</p>       
                        <p>Press</p>       
                        <p>Copyright</p>   
                        <p>Contact</p>     
                        <p>usCreators</p>   
                        <p>Advertise</p>   
                        <p>Developers</p>      
                    </div>
                </li>
            <li className='grid-column-3'>
                    <div>
                        <p> Terms    Privacy & Safety </p>  
                        <p>How YouTube works     </p>      
                        <p>Test new features     </p>      
                        <p>NFL Sunday Ticket     </p>      
                    </div>
            </li>
        </ul>
        
    </div>
)
}


export default SecondarySidebar