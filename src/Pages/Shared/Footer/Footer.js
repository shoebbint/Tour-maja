import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

                    <div className='bg-dark text-light '>
            <footer className=' '>
           <div className='container'>
           <div class=" row  text-start py-5">
                    <div class="col-4">
                           <div>
                                <h1>   Explore planet</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi vero temporibus autem dolore sunt rerum dolorem quisquam officiis tempore quaerat obcaecati unde, voluptate recusandae? Quisquam magnam aut nobis animi?</p>
                                <div>

                                </div>
                            </div>
                     </div>
                    <div class="col-2">
                         
                         <ul>
                         <h3 className=''>Links</h3>
                            <li> 
                                 <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        About
                                </Link>  
                            </li>
                            <li> 
                                 <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Services
                                </Link>  
                            </li>
                            <li> 
                                 <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Destination
                                </Link>  
                            </li>
                            <li>  
                                <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Team
                                    </Link>  
                            </li>
                            <li>  
                                <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Contact
                                </Link>  
                            </li>
                         </ul>
               
                    </div>
                    <div class="col-2">
                    
                    <ul>
                    <h3>Support</h3>
                            <li> 
                                 <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        About
                                </Link>  
                            </li>
                            <li> 
                                 <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Services
                                </Link>  
                            </li>
                            <li> 
                                 <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Destination
                                </Link>  
                            </li>
                            <li>  
                                <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Team
                                    </Link>  
                            </li>
                            <li>  
                                <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                                        Contact
                                </Link>  
                            </li>
                         </ul>
                    </div>
                    <div class="col-4">
      
         <ul>
         <h3>Quick contact</h3>
            <li>
            Callison Laney Buoy Building
            W 13th Parks Suite 559, Denver
            </li>
            <li>
            Office 478 Vienna, AU 92101
            </li>
            <li>
            +0 (555) 123 45 67
            </li>
            <li>
            Ravelio@support.com
            </li>
         </ul>
                    </div>
             </div>
           </div>
           <div className='bg-dark p-3 d-flex justify-content-between container pe-5 border-top border-warning'>
               <div>
               <p>Copyright © 2021 Explore planet. All rights reserved.</p>
               </div>
               <div className='d-flex align-items-center'>
                <div className=' border-end border-light px-2'>
                    <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                        Privacy Policy
                    </Link>
                </div>
                <div className='border-end border-light  px-2'>
                    <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                        Terms & Condition
                    </Link>
                </div>
                <div className='  px-2'>
                    <Link className='no-underline hover:underlineno-underline hover:underline text-red-400' to="/home">
                        FAQ
                    </Link>
                </div>
               </div>

             </div>
            </footer>
        </div>
    );
};

export default Footer;