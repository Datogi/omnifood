import React, {useState} from 'react'



function App() {

  return (
    <div>
  <header className='bg-gray-500 min-w-full md:bg-hero bg-cover bg-center h-screen bg-fixed '>

      <img src="logo-white.png" alt="Omnifood logo" class="w-24 h-auto"/>
      <ul className="hidden lg:block float-right -mt-10 mr-10">
      <li className='inline-block ml-10 text-white text-xl'>Food delivery</li>
      <li className='inline-block ml-10 text-white text-xl'>How it works</li>
      <li className='inline-block ml-10 text-white text-xl'>Our cities</li>
      <li className='inline-block ml-10 text-white text-xl'>Sign up</li>
      </ul>
     
    <div className="absolute w-4/6 top-1/2 ml-20 ">
      <h1 className='uppercase mb-5 text-white text-5xl text-left '>Goodbye junk food.<br/>Hello super healthy meals.</h1>
      <button className="mr-8 border-2 border-orange-400 bg-orange-400 p-2 w-40 text-lg hover:text-white hover:bg-orange-500 hover:border-orange-500 rounded-full h-auto" >I’m hungry</button>
      <button className="border-2 border-orange-400 hover:bg-orange-400 p-2 w-40 text-lg hover:text-white rounded-full h-auto">Show me more</button>
    </div>
  </header>
  <section className='h-96'>
  <div className='flex flex-wrap justify-center '>
                <h2 className='text-6xl font-thin'>Get food fast &mdash; not fast food</h2>
                <p className='leading-6 w-4/6 mt-5 text-center '>
                Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                </p>
            </div>
            <div className="flex  justify-center">
                <div className="p-1 mt-3">
                <ion-icon class="icon-big text-orange-500 text-5xl  ml-3" name="infinite-outline" role="img" aria-label="infinite outline"></ion-icon>
                    <h3 className="mb-4 ml-2">Up to 365 days/year</h3>
                    <p className='text-center'>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                    </p>    
                </div>
                
                <div class=" p-1 mt-3 ">
                    <ion-icon class="icon-big text-orange-500 text-5xl ml-3"  name="time-outline"></ion-icon>
                    <h3 className="mb-4 ml-2">Ready in 20 minutes</h3>
                    <p className='text-center'>
                        You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                    </p>
                </div>
                <div class="p-1 mt-3 ">
                    <ion-icon class="icon-big text-orange-500 text-5xl"  name="nutrition-outline"></ion-icon>
                    <h3 className="mb-4">100% organic</h3>
                    <p className='text-center h-2'>
                        All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                    </p>
                </div>
                <div class=" p-1 mt-3 ">
                    <ion-icon class="icon-big text-orange-500 text-5xl"  name="cart-outline"></ion-icon>
                    <h3 className="mb-4">Order anything</h3>
                    <p className='text-center'>
                        We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                    </p>
                </div>
            </div>
</section>
<section>
<ul class="w-full flex">
                <li className='w-1/4'>
                    <figure className="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="1.jpg" alt="Korean bibimbapÂ with egg and vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 ' >
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="2.jpg" alt="Simple italian pizza with cherry tomatoes"/>
                    </figure>
                </li>
                <li className='w-1/4 ' >
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="3.jpg" alt="Chicken breast steak with vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 ' >
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="4.jpg" alt="Autumn pumpkin soup"/>
                    </figure>
                </li>
            </ul>
            <ul class="flex">
                <li className='w-1/4 '>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="5.jpg" alt="Paleo beef steak with vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 '>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="6.jpg" alt="Healthy baguette with egg and vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 '>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="7.jpg" alt="Burger with cheddar and bacon"/>
                    </figure>
                </li>
                <li className='w-1/4 '>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="8.jpg" alt="Granola with cherries and strawberries"/>
                    </figure>
                </li>
            </ul>
</section>

<section className='bg-gray-500 '>
<div class="flex flex-wrap justify-center  ">
                <h2 className='text-5xl lg:text-6xl font-thin' >How it works - Simple as 1, 2, 3</h2>
            </div>
            <div class="columns-3 flex justify-center items-center mt-5">
                <div className=''>
                    <img className='h-96' src="app-iPhone.png" alt="Omnifood app on iPhone" />
                </div>
              <div className='w-10'></div>
                <div class="">
                    <div className='flex  mb-4 '>
                        <div className='  text-orange-500 border-2  border-orange-500 w-14 h-14 rounded-full pl-5 pt-4 '>1</div>
                        <p className='mt-3 ml-5'>Choose the subscription plan that best fits your needs <br/>and sign up today.</p>
                    </div>
                    <div class='flex mb-4 '>
                        <div className='text-orange-500 border-2  border-orange-500 w-14 h-14 rounded-full pl-5 pt-4 '>2</div>
                        <p className='mt-3 ml-10 '>Order your delicious meal using our mobile app or<br/> website. Or you can even call us!</p>
                    </div>
                    <div class="flex mb-4">
                        <div className='text-orange-500 border-2  border-orange-500 w-14 h-14 rounded-full pl-5 pt-4 '>3</div>
                        <p className='mt-3 ml-9'>Enjoy your meal after less than 20 minutes. See you<br/> the next time!</p>
                    </div>
                    <div className='flex mt-2'>
                    <a ><img className='h-14 w-auto' src="download-app.svg" alt="App store"/></a>
                    <a  ><img className='h-14 w-auto' src="download-app-android.png" alt="Play story"/></a>
                </div></div>
            </div>
</section>
<section >
<div class="flex justify-center mt-3">
                <h2  className='text-5xl lg:text-6xl font-thin'>We're currently in these cities</h2>
            </div>
            <div class="flex justify-center mt-12 ml-2">
                <div class="mr-3">
                    <img src="lisbon-3.jpg" alt="Lisbon"/>
                    <div class="mt-2">
                        <ion-icon class="icon-small text-orange-500 mr-1 " name="person"></ion-icon>
                        1600+ happy eaters
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1 " name="star"></ion-icon>
                        60+ top chefs
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1 " name="logo-twitter"></ion-icon>
                        @omnifood_lx
                    </div>
                </div>
                <div class="mr-3">
                    <img src="san-francisco.jpg" alt="San Francisco"/>
                    <div class="mt-2">
                        <ion-icon class="icon-small text-orange-500 mr-1 " name="person"></ion-icon>
                        3700+ happy eaters
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1 " name="star"></ion-icon>
                        160+ top chefs
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1 " name="logo-twitter"></ion-icon>
                        @omnifood_sf
                    </div>
                </div>
                <div class="mr-3">
                    <img src="berlin.jpg" alt="Berlin"/>
                    <div class="mt-2">
                        <ion-icon class="icon-small text-orange-500 mr-1" name="person"></ion-icon>
                        2300+ happy eaters
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1" name="star"></ion-icon>
                        110+ top chefs
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1" name="logo-twitter"></ion-icon>
                        @omnifood_berlin
                    </div>
                </div>
                <div class="">
                    <img src="london.jpg" alt="London"/>
                    <div class="mt-2">
                        <ion-icon class="icon-small text-orange-500 mr-1" name="person"></ion-icon>
                        1200+ happy eaters
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1" name="star"></ion-icon>
                        50+ top chefs
                    </div>
                    <div class="city-feature">
                        <ion-icon class="icon-small text-orange-500 mr-1" name="logo-twitter"></ion-icon>
                        @omnifood_london
                    </div>
                </div>
            </div>
</section>
<section class="bg-customers bg-cover bg-fixed">
    <div className='flex justify-center flex-wrap'>
            <div class="max-w-6xl ">
                <h2 className='text-5xl lg:text-6xl font-thin text-white' >Our customers can't live without us</h2>
            </div>
            <div class="max-w-7xl flex justify-center items-center">
                <div class="mt-5 ml-2">
                    <blockquote className='leading-6 text-white'>
                        Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite className='flex mt-6 text-base h-28'>
                            <img className='h-12 rounded-full' src="customer-1.jpg" alt="Alberto Duncan"/>
                           <div className='mt-5 ml-1'>Alberto Duncan</div> 
                        </cite>
                    </blockquote>
                </div>
                <div class="mt-5 ml-2">
                    <blockquote className='leading-6 text-white'>
                        Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                        <cite className='flex mt-6 text-base h-28'>
                            <img className='h-12 rounded-full' src="customer-2.jpg" alt="Joana Silva"/>
                            <div className='mt-5 ml-1'>Joana Silva</div>             
                        </cite>
                    </blockquote>
                </div>
                <div class="mt-5 ml-2">
                    <blockquote className='leading-6 text-white'>
                        I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                        <cite className='flex mt-6 text-base h-28'>
                            <img className='h-12 rounded-full' src="customer-3.jpg" alt="Milton Chapman"/>
                            <div className='mt-5 ml-1'>Milton Chapman</div> 
                        </cite>
                    </blockquote>
                </div>
            </div></div>
        </section>
        <section class="mt-3 ">
            <div className='flex justify-center flex-wrap '>
            <div class="columns">
                <h2 className='text-5xl lg:text-6xl font-thin '>START EATING HEALTHY TODAY</h2>
            </div>
            <div class="flex flex-wrap mt-5 columns-3">
                
                
                    <div class="border-2 border-black rounded ml-3 ">
                        <div  className='bg-slate-300 p-4 border-b-2 border-b-slate-300  '>
                            <h3>Premium</h3>
                            <p className='text-orange-500 text-6xl'>399$ <div className='text-2xl ml-32 -mt-9'>/ month</div></p>
                            <p class="mt-3">That’s only 13.30$ per meal</p>
                        </div>
                        <div className=' p-4 border-b-2 border-b-slate-300'>
                            <ul>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon>1 meal every day
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Order 24/7
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Access to newest creations
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Free delivery
                                </li>
                            </ul>
                        </div>
                        <div className='h-16'>
                        <div className='flex justify-center mt-3'>
                            <button href="" className="flex justify-center border-2 border-orange-400 hover:bg-orange-400 p-2 w-40 text-lg hover:text-white rounded-full h-auto">Sign up</button>
                        </div>
                        </div>
                    </div>
                
                
                    <div class="border-2 border-black rounded ml-3 max-w-fit">
                       <div  className='bg-slate-300 p-4 border-b-2 border-b-slate-300 h-40'>
                            <h3>Pro</h3>
                            <p className='text-orange-500 text-6xl'>149$ <div className='text-2xl ml-32 -mt-9'>/ month</div></p>
                            <p class="mt-3">That’s only 14.90$ per meal</p>
                        </div>
                        <div className=' p-4 border-b-2 border-b-slate-300'>
                            <ul>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> 1 meal 10 days/month
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Order 24/7
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Access to newest creations
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Free delivery
                                </li>
                            </ul>
                        </div>
                        <div className='h-16'>
                        <div className='flex justify-center mt-3'>
                            <button href="" className="flex justify-center border-2 border-orange-400 hover:bg-orange-400 p-2 w-40 text-lg hover:text-white rounded-full h-auto">Sign up</button>
                        </div>
                        </div>
                    </div>
               
                    <div class="border-2 border-black rounded ml-3 max-w-fit">
                        <div  className='bg-slate-300 p-4 border-b-2 border-b-slate-300 h-40'>
                            <h3>Pro</h3>
                            <p className='text-orange-500 text-6xl'>19$ <div className='text-2xl ml-32 -mt-9'>/ meal</div></p>
                            <p class="mt-3"></p>
                        </div>
                        <div className=' p-4 border-b-2 border-b-slate-300'>
                            <ul>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> 1 meal 
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Order from 8 am to 12 pm
                                </li>
                                <li >
                                <ion-icon name="close-outline" class="icon-small text-red-900" ></ion-icon>
                                </li>
                                <li >
                                    <ion-icon name="checkmark-outline" class="icon-small text-green-900" ></ion-icon> Free delivery
                                </li>
                            </ul>
                        </div>
                        <div className='h-16'>
                        <div className='flex justify-center mt-3'>
                            <button href="" className="flex justify-center border-2 border-orange-400 hover:bg-orange-400 p-2 w-40 text-lg hover:text-white rounded-full h-auto">Sign up</button>
                        </div>
                        </div>
                    </div>
                </div>
               
         
</div>
        </section>
        <section class="bg-gray-200">
            <div class="max-w-6xl ml-80">
                <h2 className='text-5xl lg:text-6xl font-thin '>We're happy to hear from you</h2>
            </div>
            <div class="max-w-6xl">
                <form class="w-3/5">
                    <div class="max-w-6xl mt-8 columns-2 ml-96">
                        <div className='flex justify-center'>
                            <label className='mr-28' for="name">Name</label>
                        </div>
                        <div className='col-start-1 col-span-3'>
                            <input className='w-96 p-2 rounded border-2 border-gray-500' type="text" name="name" id="name" placeholder="Your name" required/>
                        </div>
                    </div>
                    <div class="max-w-6xl columns-2 ml-96 mt-3">
                        <div class='flex justify-center'>
                            <label className='mr-28' for="email">Email</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input className='w-96 p-2 rounded border-2 border-gray-500' type="email" name="email" id="email" placeholder="Your email" required/>
                        </div>
                    </div>
                    <div class="max-w-6xl columns-2 ml-96 mt-4">
                        <div class="mr-12 w-40">
                            <label  for="find-us">How did you find us?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <select className='w-96 p-2 rounded border-2 border-gray-500'  name="find-us" id="find-us">
                                <option value="Friends">Friends</option>
                                <option value="Search engine">Search engine</option>
                                <option value="Advertisment">Advertisment</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="max-w-6xl grid grid-cols-3 ml-96 mt-5">
                        <div >
                            <label>Newsletter</label>
                        </div>
                        <div class="ml-16 w-24">
                            <input type="checkbox" name="news" id="news" checked required/> Yes, please
                        </div>
                    </div>
                    <div class="max-w-6xl columns-2 ml-96 mt-5">
                        <div class="">
                            <label>Drop us a line</label>
                        </div>
                        <div class="col span-2-of-3 w-96">
                            <textarea className='w-full p-2 rounded border-2 border-gray-500'  name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div class="max-w-6xl ">
                        <div class="col span-1-of-3">
                            &nbsp;
                        </div>
                        <div class="ml-96 pl-64">
                            <input className=' border-2 border-orange-400 bg-orange-400 p-2 w-40 text-lg hover:text-white hover:bg-orange-500 hover:border-orange-500 rounded-full h-auto"' type="submit" value="Send it !"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>

</div>
  );
}

export default App;
