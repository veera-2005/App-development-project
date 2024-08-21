import React from 'react'
import '../Assets/PaymentDone.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
function PaymentDone() {
    const navi = useNavigate();
    const OnhandleBack2home = () => {
        navi('/Home');
    }
  return (
    <>
    <Navbar/>
    <div className='PaymentDoneTotal'>
        <div className='Reciept'>
            <h1>Payment Done</h1>
            <i class="fa-solid fa-circle-check" style={{color: "#09be36",fontSize:"45px"}}></i>
            <p>Your payment has been successful.</p>
            <p>Your event ID: 123456</p>
            <button className='back-to-home' onClick={OnhandleBack2home} >Back to Home</button>

            <p>For any further assistance, please contact our support team at 123-456-7890.</p>

            <p>Thank you for choosing us.</p>

            <p>Best Regards,</p>
        </div>
        <div className='Recieptpic'></div>
    </div>

    </>
  )
}

export default PaymentDone