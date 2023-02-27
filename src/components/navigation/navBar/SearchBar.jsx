import Icon from "../../icons/Icon"

const SearchBar = (props) => {

    return (
        <div className='search-wrapper' tabIndex={0}>
            <span className="input-wrappper">
                <Icon name="search" className="display-on-active" />
                <input type="text" placeholder='Search' className="searchBox-input"/>
            </span>
            <button className="search-btn" title="search">
                <input type="checkbox" id="search-switch" ref={props.mobileSearchSwitch} />
                <label onClick={()=>!props.mobileSearchSwitch.current.checked?props.mobileSearchSwitch.current.checked = true:false}><Icon name="search" className="search-btn-icon"/></label>
            </button>
        </div>
    )
}

export default SearchBar