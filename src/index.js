import React from 'react';
import ReactDOM from 'react-dom';
import profile from './img/login2.png';
import email from './img/email.jpg';
import pass from './img/pass.png';





import './estilos.css';


    const element=<div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
           <img src={profile} alt="profile" className="profile"/>
           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <form action='ver'>

           <div className='second-input'>
             <img src={email} alt="pass" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">

          <button type='submit'>Login</button>
 
          </div>
          </form>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>


const container=document.getElementById("root");


ReactDOM.render(element,container);













  