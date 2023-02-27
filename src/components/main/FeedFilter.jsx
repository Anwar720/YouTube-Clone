import DefaultButton from "../buttons/DefaultButton"
import { useState } from "react"
const FeedFilter = (props) => {
    const [activeFilter,setActiveFilter] = useState('All')
    const setFilter = (filterString)=>{
        setActiveFilter(filterString)
    }
    return (
        <div className="feed-filter">
            {/* <button className="filter-back-btn">
                <Icon name="arrow_back_ios"/>
            </button> */}
            <span className="filter-scroll">
                {
                    props.filters.map((filter,idx)=>
                        <DefaultButton name={filter} key={idx} className={activeFilter===filter?"active-filter-btn":""} activateFilter={setFilter}/>
                    )
                }
            </span>
            {/* <button  className="filter-forward-btn">
                <Icon name="arrow_forward_ios" />
            </button> */}
        </div>
    )
}

export default FeedFilter