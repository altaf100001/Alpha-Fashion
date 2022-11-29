import React from 'react'
import styles from './Styles/footer.modules.css'

export const Footer = () => {
  return (
    <div className='footer'>
     <h1>Alpha Fashion</h1>
     <div className='footicon'>
      
      <p><i class="fa-brands fa-facebook"></i></p>
      <p><i class="fa-brands fa-twitter"></i></p>
      <p><i class="fa-brands fa-linkedin"></i></p>
      <p><i class="fa-brands fa-instagram"></i></p>
      
     </div>
     <div>
     <span>Phone Number : 1234567899 </span>
     <span> / Email : example123@gmail.com</span>
     </div>
     <div className='copyright'>
      <a href="">Privacy Policy</a>
      <a href="">Terms and Conditions</a>
      <a href="">Return Policy</a>
     </div>
     <h6><i class="fa-solid fa-copyright"></i> Copyright 2022 by Alpha Fashion</h6>
    </div>
  )
}
