import React,{useRef,useState} from 'react';
import Icon from '../../icons/Icon';
import SearchBar from './SearchBar';
import SettingsDropdown from './SettingsDropdown';
import SigninButton from '../../buttons/SigninButton'
const NabBar = props => {
    const mobileSearchSwitch = useRef(null)
    const [isActiveSettings,setIsActiveSettings] = useState(false)

    const hideMobileSearch = ()=>{
        mobileSearchSwitch.current.checked = false;
        return 
    }
    const handleMoreVertClick = (e)=>{
        // toggle display for setting dropdown
        if(isActiveSettings)    setIsActiveSettings(false)
        else                    setIsActiveSettings(true)
    
        // handle ripple animation
        e.target.classList.add('ripple')
        setTimeout(()=>{
            e.target.classList.remove('ripple')
        },500)
    }
    

    return (
        <div className='navbar' tabIndex={0} >
            {/* mobile back btn from search */}
            <span className="nav-back-btn" onClick={()=>hideMobileSearch()}>
                <Icon name="arrow_back" />
            </span>

            <div className='nav-row opacity-1' tabIndex='3' onBlur={(e)=>props.sideBarOnBlur(e)}>
                <span onClick={()=>props.handleMenuClick()}>
                    <Icon name="menu" className="menu-btn"/>
                </span>
                <img src="./images/logo-light.png" className="logo" alt="logo" width="90" height="20"/>
            </div>

            <div className='row nav-row'>
                <SearchBar mobileSearchSwitch={mobileSearchSwitch }/>
                <Icon name="mic" className="mic icon-fill"/>
            </div>

            <div className='nav-row'>
                <span  className="more-vert-container" onBlur={()=>setIsActiveSettings(false)} tabIndex="1">
                    <Icon name="more_vert" className="more-vert" onClick={handleMoreVertClick}/>  
                    {isActiveSettings && <SettingsDropdown/>}
                </span>
                <SigninButton />
            </div>

        </div>
    )
}

export default NabBar;