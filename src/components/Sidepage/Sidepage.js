import React from 'react'
import './Sidepage.css'
import star1 from '../assets/Images/star1.svg'
import star2 from '../assets/Images/star2.svg'
import sidearrow from '../assets/Images/sidearrow.svg'
import userimg from '../assets/Images/sideuser.svg'
import arrow from '../assets/Images/arrow.svg'
import account from '../assets/Images/account.svg'
import audit from '../assets/Images/audit.svg'
import board from '../assets/Images/board.svg'
import charges from '../assets/Images/charges.svg'
import fees from '../assets/Images/fees.svg'
import guarantor from '../assets/Images/guarantor.svg'
import karma from '../assets/Images/karma.svg'
import models from '../assets/Images/models.svg'
import loanrequest from '../assets/Images/loan-request.svg'
import loan from '../assets/Images/loan.svg'
import organization from '../assets/Images/organization.svg'
import preference from '../assets/Images/preferences.svg'
import products from '../assets/Images/products.svg'
import reports from '../assets/Images/reports.svg'
import savings from '../assets/Images/savings.svg'
import services from '../assets/Images/services.svg'
import settle from '../assets/Images/settlements.svg'
import switchs from '../assets/Images/switch.svg'
import transaction from '../assets/Images/transactions.svg'
import users from '../assets/Images/users.svg'
import whitelist from '../assets/Images/whitelist.svg'
import System from '../assets/Images/system.svg'
import Logout from '../assets/Images/logout.svg'


function Sidepage() {
  return (
    <div className='main-side-wrap'>

      <div className='element-wrap'>
        <div id='element-wrap'>

        <div className='first-div'>
            <img src={switchs} alt='switch' className='switch-img'/>
            <p>Switch Organization</p>
            <img src={arrow} alt='arrow' className='arrow-img'/>
        </div>
        <div className='second-div'>
            <img src={board} alt='board' className='board-img'/>
            <p>Dashboard</p>
        </div>
        <div className='main-div'>
        <div>
            <h3 className='header3' >CUSTOMERS</h3>
        </div>
        <div className='third-div' id='user-color'>
            <img src={users} alt='users' className='users-img'/>
            <p className='user-color'>Users</p>
        </div>
        <div className='third-div'>
            <img src={guarantor} alt='guarantor' className='guarantor-img'/>
            <p>Guarantors</p>
        </div>
        <div className='third-div'>
            <img src={loan} alt='loan' className='loan-img'/>
            <p>Loans</p>
        </div>
        <div className='third-div'>
            <img src={models} alt='model' className='model-img'/>
            <p>Decision Models</p>
        </div>
        <div className='third-div'>
            <img src={savings} alt='savings' className='savings-img'/>
            <p>Savings</p>
        </div>
        <div className='third-div'>
            <img src={loanrequest} alt='loanreq' className='loanrequest-img'/>
            <p>Loan Requests</p>
        </div>
        <div className='third-div'>
            <img src={whitelist} alt='whitelist' className='whitelist-img'/>
            <p>Whitelist</p>
        </div>
        <div className='third-div'>
            <img src={karma} alt='karma' className='karma-img'/>
            <p>Karma</p>
        </div>

        </div>
        
        <div className='main-div'>
        <div>
            <h3 className='header3'>BUSINESSES</h3>
        </div>
        <div className='third-div'>
            <img src={organization} alt='organization' className='organization-img'/>
            <p>Organization</p>
        </div>
        <div className='third-div'>
            <img src={loanrequest} alt='loanreq' className='loanrequest-img'/>
            <p>Loan Products</p>
        </div>
        <div className='third-div'>
            <img src={products} alt='products' className='products'/>
            <p>Savings Products</p>
        </div>
        <div className='third-div'>
            <img src={charges} alt='charges' className='charges-img'/>
            <p>Fees and Charges</p>
        </div>
        <div className='third-div'>
            <img src={transaction} alt='transaction' className='transaction-img'/>
            <p>Transactions</p>
        </div>
        <div className='third-div'>
            <img src={services} alt='services' className='services-img'/>
            <p>Services</p>
        </div>
        <div className='third-div'>
            <img src={account} alt='account' className='account-img'/>
            <p>Service Account</p>
        </div>
        <div className='third-div'>
            <img src={settle} alt='settle' className='settle-img'/>
            <p>Settlements</p>
        </div>
        <div className='third-div'>
            <img src={reports} alt='reports' className='reports-img'/>
            <p>Reports</p>
        </div>
        </div>
        
        <div className='main-div'>
        <div>
            <h3 className='header3'>
                SETTINGS
            </h3>
        </div>
        <div className='third-div'>
            <img src={preference} alt='preference' className='preference-img'/>
            <p>Preferences</p>
        </div>
        <div className='third-div'>
            <img src={fees} alt='fees' className='fees-img'/>
            <p>Fees and Pricing</p>
        </div>
        <div className='third-div'>
            <img src={audit} alt='audit' className='audit-img'/>
            <p>Audit Logs</p>
        </div>
        <div className='third-div'>
            <img src={System} alt='audit' className='audit-img'/>
            <p>Systems Messages</p>
        </div>

      <div>
      <hr/>
      </div>
        
        <div className='logout-div'>
          
          <img src={Logout} alt='Logout' className='Logout-img'/>
            <p>Logout</p>
        </div>
        <div className='version-div'>
          
            <p>v1.2.0</p>
        </div>
        </div>

        </div>
        
    </div>

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
            <p className='providus-txt'>Grace Effiom</p>
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
          <div className='providus-div'>
            <p className='providus-txt'>#200,000.00</p>
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
    </div>
  )
}

export default Sidepage