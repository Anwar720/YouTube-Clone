import './App.css'
import { useEffect, useState, useRef } from 'react'
import NabBar from './components/navigation/navBar/NabBar'
import SideBar from './components/navigation/sideBar/SideBar'
import { useMediaQuery } from 'react-responsive';
import FeedFilter from './components/main/FeedFilter';
import Banner from './components/main/Banner';
import VideoCard from './components/main/VideoCard';
function App() {
  const [isSidebarActive,setIsSidebarActive] = useState(true)
  const [isActiveBanner,setIsActiveBanner] = useState(true)
  const isMobile = useMediaQuery({ query: `(max-width: 1330px)` });
  const filters = ['All','Music','Laughter','Live','Gaming','Basketball','Comedy','Background music','Culinary arts','Teams','Recently uploaded']
  const cards = new Array(20).fill().map((i,v)=>v)

  useEffect(()=>{
    console.log(cards)
      if(isMobile) setIsSidebarActive(false)
      else setIsSidebarActive(true)
  },[isMobile])

  const handleMenuClick = ()=>{
    if(isSidebarActive) setIsSidebarActive(false)
    else setIsSidebarActive(true)
  }
  const hideBanner = ()=>{
    setIsActiveBanner(false);
  }
  // handle morevert click ripple animation
  const handleRippleAnimation = (e)=>{
    // handle ripple animation
    e.target.classList.add('ripple')
    setTimeout(()=>{
        e.target.classList.remove('ripple')
    },500)
  }

  // secondary sidebar blur event
  const sideBarOnBlur = (e)=>{
    // console.log(e.currentTarget)
    // if(isMobile && isSidebarActive=== true && !e.currentTarget.contains(document.querySelector('.sidebar'))){        
    //     setIsSidebarActive(false)
    // }
  }

  return (
    <div className={isSidebarActive?'App active':"App" }>
      <NabBar handleMenuClick={handleMenuClick} sideBarOnBlur={sideBarOnBlur} />
      <div className='hero'>
        <SideBar isSidebarActive={isSidebarActive} isMobile={isMobile} setIsSidebarActive={setIsSidebarActive}/>
        <div className='content'>
          <FeedFilter filters={filters}/>
          <div className='main-wrapper'>
          {isActiveBanner && <Banner close={hideBanner}/>}
              <div className="media-wrapper">
                {
                  cards.map((card,key)=>
                    <VideoCard key={key} handleRippleAnimation={handleRippleAnimation} index={key}/>
                  )
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
