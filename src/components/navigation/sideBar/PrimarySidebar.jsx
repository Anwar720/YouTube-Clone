import Icon from "../../icons/Icon"

const PrimarySidebar = (props) => {
return (
    <div className={"primary-sidebar " + props.display}>
                <span className="sidebar-btn">
                    <Icon name="home" className="icon-fill"/>
                    <p>Home</p>
                </span>
                <span className="sidebar-btn">
                    <img src="./images/short2.png" height="22"/>
                    <p>Shorts</p>
                </span>
                <span className="sidebar-btn">
                    <Icon name="subscriptions"/>
                    <p>Subscriptions</p>
                </span>
                <span className="sidebar-btn">
                    <Icon name="video_library"/>
                    <p>Library</p>
                </span>
                <span className="sidebar-btn">
                    <Icon name="history"/>
                    <p>Library</p>
                </span>
            </div>
)
}

export default PrimarySidebar