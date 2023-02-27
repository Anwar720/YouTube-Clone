import PrimarySidebar from "./PrimarySidebar"
import SecondarySidebar from "./SecondarySidebar"

const SideBar = (props) => {
    const isSecondarySidebarActive = props.isSidebarActive;
    // const sideBarOnBlur = (e)=>{
    //     if(props.isMobile && isSecondarySidebarActive === true && !e.currentTarget.contains(e.relatedTarget)){
    //         // alert('hi')
    //         return props.setIsSidebarActive(false)
    //     }
    // }
    return (
        <div className='sidebar'>
            {
                (!isSecondarySidebarActive )
                ?<>
                    <PrimarySidebar display=""/>
                    <SecondarySidebar  display="hidden translate-right inactive"/>
                </>
                :<>
                    <PrimarySidebar display="hidden"/>
                    <SecondarySidebar display="" /*blur={sideBarOnBlur}*//>
                </>
            }
        </div>
    )
}

export default SideBar