import React from 'react'
import './Elements.css'
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

function Elements() {
  return (
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
        <div className='third-div'>
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
        </div>

        </div>
        
        
    </div>
  )
}

export default Elements