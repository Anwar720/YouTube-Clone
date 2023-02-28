import Icon from "../icons/Icon"

const Banner = (props) => {
    return (
        <div className='banner'>
            <img src="./images/youtubeTv.png" height="22" />
            <h2>No cable box. No DVR space limits. No hidded<br/>
                fees. No contract. It's cable reimagined.
            </h2>
            <button className='banner-btn'>Try it free</button>
            <button className="close-btn" onClick={()=>props.close()}> <Icon name="close" /> </button>
        </div>
    )
}

export default Banner