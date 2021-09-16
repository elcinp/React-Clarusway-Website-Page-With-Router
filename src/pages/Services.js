import React from 'react'

const Services = () => {
    return (
        <main class="main-services">
        
        <div class="main-services-div">

            <h3>Services</h3>
            <div class="main-services-divs">
                
               <p><b>Website Design</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque magni sunt?</p>
                <p>Pricing: $1000-$3000</p>
            </div>

            <div class="main-services-divs">
                <p><b>Website Maintenance</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea excepturi accusamus!</p>
                <p>Pricing:$250 per month</p>
            </div>

            <div class="main-services-divs">
                <p><b>Website Hosting</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim earum distinctio.</p>
                <p>Pricing:$25 per month</p>
            </div>

        </div>
    

        <div class="quote">
        
            <form action="#">
                <h3>Get A Quote</h3>
                <label for="name">Name</label><br/>
                <input type="text" name="name" id="nameform" placeholder=" Name" required/><br/>

                <label for="email">Email</label><br/>
                <input type="text" name="email" id="emailform" placeholder="Email Adress" required/><br/>

                <label for="message">Message</label><br/>
                <input name="message" id="message" cols="30" rows="10" placeholder=" Message" /><br/>
                <button id="send-btn">Send</button>
            </form>
        
        </div>

    </main>
    )
}

export default Services
