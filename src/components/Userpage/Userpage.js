import React from 'react'
import './Userpage.css'
import doticon from '../assets/Images/icon.svg'
import image1 from '../assets/Images/imageuser.svg'
import image2 from '../assets/Images/imageuser2.svg'
import image3 from '../assets/Images/imageuser3.svg'
import image4 from '../assets/Images/imageuser4.svg'
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
import { FaAlignCenter } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


function Userpage() {
  return (
    <div className='userpage-wrap'>
        <div className='User1-wrap'>
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
            <div className='third-div'  id='user-color'>
                <img src={users} alt='users' className='users-img'/>
                <p>Users</p>
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
            </div>

            </div>


        </div>
        <div className='user2-wrap'>
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
                    <table>
                        <tr > 
                            <td className='no-border'>
                            ORGANIZATION <FaAlignCenter className='react-icon' />
                            </td>
                            <td className='no-border'>
                                USERNAME  <FaAlignCenter className='react-icon' />
                            </td>
                            
                            <td className='no-border'>
                                EMAIL  <FaAlignCenter className='react-icon' />

                            </td>
                            <td className='no-border'>
                                PHONE NUMBER  <FaAlignCenter className='react-icon' />
                            </td>
                            <td className='no-border'>
                                DATE JOINED  <FaAlignCenter className='react-icon' />

                            </td>
                            <td className='no-border'>
                                STATUS <FaAlignCenter className='react-icon' />

                            </td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10am</td>
                        <td className='main-btn1'>Inactive</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Irorun</td>
                        <td>Debby Ogana</td>
                        <td>debby2@irorun.com</td>
                        <td>08160780928</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn2'>Pending</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Grace Effiom</td>
                        <td>grace@lendsqr.com</td>
                        <td>08160780928</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn3'>Blacklisted</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Tosin Dokunmu</td>
                        <td>tosin@lendsqr.com</td>
                        <td>07003309226</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn2'>Pending</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Grace Effiom</td>
                        <td>grace@lendsqr.com</td>
                        <td>08160780928</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn4'>Active</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Tosin Dokunmu</td>
                        <td>tosin@lendsqr.com</td>
                        <td>07003309226</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn4'>Active</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Grace Effiom</td>
                        <td>grace@lendsqr.com</td>
                        <td>08160780928</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn3'>Blacklisted</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Tosin Dokunmu</td>
                        <td>tosin@lendsqr.com</td>
                        <td>07003309226</td>
                        <td>April, 30 2020 10am</td>
                        <td className='main-btn1'>Inactive</td>
                        <td><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                        <tr>
                        <td className='no-border'>Lendsqr</td>
                        <td className='no-border'>Grace Effiom</td>
                        <td className='no-border'>grace@lendsqr.com</td>
                        <td className='no-border'>08160780928</td>
                        <td className='no-border'>April, 30 2020 10am</td>
                        <td className='no-border' id='main-btn1'>Inactive</td>
                        <td className='no-border'><img src={doticon} alt='icon' className='icon'/></td>
                        </tr>
                    </table>
                                              
                            
            </div>  
            <div className='bottom-div'>
                <div>
                    <p>Showing <mark>100 < FaAngleDown/> </mark> out of 100</p>
                </div>
                <div>
                    <p> <mark><FaAngleLeft/> </mark> 1 2 3 ... 15 16 <mark><FaAngleRight/> </mark> </p>
                </div>
            </div>
                        
                    </div>
                            
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default Userpage