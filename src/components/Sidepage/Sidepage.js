import React from 'react'
import './Sidepage.css'
import star1 from '../assets/Images/star1.svg'
import star2 from '../assets/Images/star2.svg'
import sidearrow from '../assets/Images/sidearrow.svg'
import userimg from '../assets/Images/sideuser.svg'


function Sidepage() {
  return (
    
    <div className='sidepage-wrap'>
      <div className='arrow-wrap'>
        <img src={sidearrow} alt='arrowkey' className='side-arrow'/>
        <p>Back to Users</p>

      </div>
      <div className='details-wrap'>
        <h2>User Details</h2>
        <div>
          <button className='detail-btn1'> BLACKLIST USER</button>
          <button className='detail-btn2'>ACTIVATE USER</button>
        </div>
      </div>
      <div className='side1-div'>
        <div className='side2-div'> 
          <img src={userimg} alt='userimage' className='user-side-img'/>
          <div>
            <p>Grace Effiom</p>
            <p>LSGFf587g90</p>
          </div>
          <hr/>
          <div className='side3-div'>
            <p>User's Tier</p>
            <div>
              <img src={star1} alt='star' className='star-icon'/>
              <img src={star2} alt='star' className='star-icon'/>
              <img src={star2} alt='star' className='star-icon'/>
            </div>
          </div>
          <hr/>
          <div>
            <p>#200,000.00</p>
            <p>991234678/Providus Bank</p>
          </div>
        </div>
        <div className='general-wrap'>
          <p className='green-txt'>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className='side4-wrap'>    
              <div>
                <h3 className='side4-text'>Personal Information</h3>
              </div>
          <div className='sub-wrap'>
            <div>
              <div>
                <p className='sub-txt'>FULLNAME</p>
                <p className='sub-p'>Grace Effiom</p>
              </div>
              <div>
                <p className='sub-txt'>MARITAL STATUS</p>
                <p className='sub-p'>Single</p>
              </div>
            </div>
            <div>
            <div>
                <p className='sub-txt'>PHONE NUMBER</p>
                <p className='sub-p'>07060780922</p>
              </div>
              <div>
                <p className='sub-txt'>CHILDREN</p>
                <p className='sub-p'>None</p>
              </div>
            </div>
            <div>
            <div>
                <p className='sub-txt'>EMAIL ADDRESS</p>
                <p className='sub-p'>grace@gmail.com</p>
              </div>
              <div>
                <p className='sub-txt'>TYPE OF RESIDENCE</p>
                <p className='sub-p'>Parent's Apartment</p>
              </div>
            </div>
            <div>
              <div>
                <p className='sub-txt'>BVN</p>
                <p className='sub-p'>07060780922</p>
              </div>
            </div>
            <div>
            <div>
                <p className='sub-txt'>GENDER</p>
                <p className='sub-p'>Female</p>
              </div>
            </div>
          </div>
          <hr/>
              <div>
                <h3 className='side4-text'>Education and Employment</h3>
              </div>
          <div className='sub-wrap'>
            <div>
              <div>
                <p className='sub-txt'>LEVEL OF EDUCATION</p>
                <p className='sub-p'>B.Sc</p>
              </div>
              <div>
                <p className='sub-txt'>OFICE EMAIL</p>
                <p className='sub-p'>grace@lendsqr.com</p>
              </div>
            </div>
            <div>
            <div>
                <p className='sub-txt'>EMPLOYMENT STATUS</p>
                <p className='sub-p'>Employed</p>
              </div>
              <div>
                <p className='sub-txt'>MONTHLY INCOME</p>
                <p className='sub-p'>#200,000.00-#400,000.00</p>
              </div>
            </div>
            <div>
            <div>
                <p className='sub-txt'>SECTOR OF EMPLOYMENT</p>
                <p className='sub-p'>FinTech</p>
              </div>
              <div>
                <p className='sub-txt'>LOAN REPAYMENT</p>
                <p className='sub-p'>40,000</p>
              </div>
            </div>
            <div>
              <div>
                <p className='sub-txt'>DURATION OF EMPLOYMENT</p>
                <p className='sub-p'>2 Years</p>
              </div>
            </div>
            <div>
            </div>
          </div>
          <hr/>
              <div>
                <h3 className='side4-text'>Socials</h3>
              </div>
          <div className='sub-wrap'>
            <div>
              <div>
                <p className='sub-txt'>TWITTER</p>
                <p className='sub-p'>@grace_effiom</p>
              </div>
              
            </div>
              <div>
                <p className='sub-txt'>FACEBOOK</p>
                <p className='sub-p'>Grace Effiom</p>
              </div>
              <div>
                <p className='sub-txt'>INSTAGRAM</p>
                <p className='sub-p'>@grace_effiom</p>
              </div>
            
          </div>
          <hr/>
          <div>
                <h3 className='side4-text'>Guarantor</h3>
              </div>
          <div className='sub-wrap'>
            <div>
              <div>
                <p className='sub-txt'>FULL NAME</p>
                <p className='sub-p'>Debby Ogana</p>
              </div>
              
            </div>
              <div>
                <p className='sub-txt'>PHONE NUMBER</p>
                <p className='sub-p'>07060780922</p>
              </div>
              <div>
                <p className='sub-txt'>EMAIL ADDRESS</p>
                <p className='sub-p'>debby@gmail.com</p>
              </div>
              <div>
                <p className='sub-txt'>RELATIONSHIP</p>
                <p className='sub-p'>Sister</p>
              </div>
            
          </div>
          <hr/>
          <div className='sub-wrap'>
            <div>
              <div>
                <p className='sub-txt'>FULL NAME</p>
                <p className='sub-p'>Debby Ogana</p>
              </div>
              
            </div>
              <div>
                <p className='sub-txt'>PHONE NUMBER</p>
                <p className='sub-p'>07060780922</p>
              </div>
              <div>
                <p className='sub-txt'>EMAIL ADDRESS</p>
                <p className='sub-p'>debby@gmail.com</p>
              </div>
              <div>
                <p className='sub-txt'>RELATIONSHIP</p>
                <p className='sub-p'>Sister</p>
              </div>
            
          </div>
      </div>

    </div>
  )
}

export default Sidepage