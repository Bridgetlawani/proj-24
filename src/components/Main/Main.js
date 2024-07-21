import React from 'react'
import './Main.css'
import bars from '../assets/Images/bars.svg'
import doticon from '../assets/Images/icon.svg'
import image1 from '../assets/Images/imageuser.svg'
import image2 from '../assets/Images/imageuser2.svg'
import image3 from '../assets/Images/imageuser3.svg'
import image4 from '../assets/Images/imageuser4.svg'

function Main() {
  return (
    <div className='main'>
        <div className='main2'>
            <div>
                <h1>Users</h1>
            </div>
            <div className='user-wrap'>
                <div className='user-cont'>
                    <img src={image1} alt='image' className='image1'/>
                    <p>USERS</p>
                    <p>2453</p>
                </div>
                <div className='user-cont'> 
                    <img src={image2} alt='image' className='image2'/>
                    <p>ACTIVE USERS</p>
                    <p>2,453</p>
                </div>
                <div className='user-cont'>
                    <img src={image3} alt='image' className='image3'/>
                    <p>USERS WITH LOAN</p>
                    <p>12,453</p>
                </div>
                <div className='user-cont'>
                    <img src={image4} alt='image' className='image4'/>
                    <p>USERS WITH SAVINGS</p>
                    <p>102,453</p>
                </div>
            </div>
            <div>
                <div className='main-wrap'>
                    <div>
                        <div className='org-wrap'>
                        <p>ORGANIZATION</p>
                        <img src={bars} alt='icon' className='bars'/>
                        </div>
                        
                        <div>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Irorun</p>
                        <hr/>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Lendsqr</p>
                        <hr/>
                        <p>Lendsqr</p>
                        

                        </div>
                    </div>
                   

                    <div>
                        <div className='org-wrap'>
                            <p>USERNAME</p>
                            <img src={bars} alt='icon' className='bars'/>
                        </div>
                        <p>Adedeji</p>
                        <hr/>
                        <p>Debby Ogana</p>
                        <hr/>
                        <p>Grace Effiom</p>
                        <hr/>
                        <p>Tosin Dokunmu</p>
                        <hr/>
                        <p>Grace Effiom</p>
                        <hr/>
                        <p>Tosin Dokunmu</p>
                        <hr/>
                        <p>Grace Effiom</p>
                        <hr/>
                        <p>Tosin Dokunmu</p>
                        <hr/>
                        <p>Grace Effiom</p>

                    </div>
                    <div>
                        <div className='org-wrap'>
                            <p>Email</p>
                            <img src={bars} alt='icon' className='bars'/>
                        </div>
                        <p>adedeji@lendsqr.com</p>
                        <hr/>
                        <p>debby2@irorun.com</p>
                        <hr/>
                        <p>grace@lendsqr.com</p>
                        <hr/>
                        <p>tosin@lendsqr.com</p>
                        <hr/>
                        <p>grace@lendsqr.com</p>
                        <hr/>
                        <p>tosin@lendsqr.com</p>
                        <hr/>
                        <p>grace@lendsqr.com</p>
                        <hr/>
                        <p>tosin@lendsqr.com</p>
                        <hr/>
                        <p>grace@lendsqr.com</p>
                    </div>
                    <div>
                        <div className='org-wrap'>
                            <p>PHONE NUMBER</p>
                            <img src={bars} alt='icon' className='bars'/>
                        </div>
                        <p>08078903721</p>
                        <hr/>
                        <p>08160780928</p>
                        <hr/>
                        <p>07060780922</p>
                        <hr/>
                        <p>07060780922</p>
                        <hr/>
                        <p>07060780922</p>
                        <hr/>
                        <p>07060780922</p>
                        <hr/>
                        <p>07060780922</p>
                        <hr/>
                        <p>07060780922</p>
                        <hr/>
                        <p>07060780922</p>
                    </div>
                    <div>
                        <div className='org-wrap'>
                            <p>DATE JOINED</p>
                            <img src={bars} alt='icon' className='bars'/>
                        </div>
                        <p>May 15,2020 10am</p>
                        <hr/>
                        <p>April 30,2020 10am</p>
                        <hr/>
                        <p>April 30,2020 10am</p>
                        <hr/>
                        <p>April 10,2020 10am</p>
                        <hr/>
                        <p>April 30,2020 10am</p>
                        <hr/>
                        <p>April 10,2020 10am</p>
                        <hr/>
                        <p>April 30,2020 10am</p>
                        <hr/>
                        <p>April 10,2020 10am</p>
                        <hr/>
                        <p>April 30,2020 10am</p>
                    </div>

                    <div>
                        <div className='org-wrap'>
                            <p>STATUS</p>
                            <img src={bars} alt='icon' className='bars'/>
                        </div>
                        <h3 className='main-btn'>Inactive</h3>
                        <hr/>
                        <h3  className='main-btn'>Pending</h3>
                        <hr/>
                        <h3  className='main-btn'>Blacklisted</h3>
                        <hr/>
                        <h3  className='main-btn'>Pending</h3>
                        <hr/>
                        <h3  className='main-btn'>Active</h3>
                        <hr/>
                        <h3  className='main-btn'>Active</h3>
                        <hr/>
                        <h3 className='main-btn'>Blacklisted</h3>
                        <hr/>
                        <h3 className='main-btn'>Inactive</h3>
                        <hr/>
                        <h3  className='main-btn'>Inactive</h3>
                    </div>
                    
                    
                    
                </div>
                <div>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                    <img src={doticon} alt='icon' className='icon'/>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Main