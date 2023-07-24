import React from "react";


import Link from "next/link";



export function SubPara(props) {
    return (
      <p
        className={`${props.extra}  text-[15px] md:text-lg`}
      >
        {props.children}
      </p>
    );
  }

  export function Head1(props) {
    return (
        <h1
        className={`${props.extra} dark:text-zinc-300 text-zinc-700 text-[50px] `}
        >
            {props.children}
        </h1>
    )
  }

  export function Head2(props) {
    return (
        <h3
      
        className= {`${props.extra}  md:text-[40px] font-bold !leading-[1.3]  text-3xl ` }>
            {props.children}
        </h3>
    )
  }



export default function ExpressionLandingPage () {

  const handleTheme = (e) => {
    const { checked } = e.target;
    if (checked) {
    
      localStorage.theme = "dark";
    } else {
  
      localStorage.theme = "light";
    }
    document.documentElement.classList.toggle("dark");
  };







  return (
    <div>
      <style jsx>
        {`
          .hero {
            position: relative;
            z-index: 1;
          }
          .hero:before {
            position: absolute;
            content: " ";
            width: 1000px;
            top: -100px;
            opacity: 0.5;
            z-index: -1;
            left: -600px;
            height: 1000px;
            background-image: url("/imgs/red_gradient.svg");
            background-size: cover;
            background-position: left;
          }
        `}
      </style>








      <div className=" fixed top-5 md:top-7 max-w-max w-full  right-5 md:right-7 z-[2]  flex justify-end">
        <label
          htmlFor="toggle-example"
          className="flex items-center cursor-pointer relative "
        >
          <input
          
            onChange={handleTheme}
            type="checkbox"
            id="toggle-example"
            className="sr-only switcher "
          />
          <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
        </label>
      </div>
      
      
      
      
      <div className="dark:bg-[#2F2F31] pb-10 bg-white">
<div className=" flex pt-12 pb-20 md:py-14 max-w-7xl mx-auto items-center">
<div className="w-full flex justify-center">
<div id="birth-chart" className=" flex flex-col gap-10 md:gap-16 max-w-4xl w-full mx-auto md:px-10">
<div className="flex items-center flex-col gap-6 px-5">
<Head1>
<b className="text-transparent     bg-clip-text bg-gradient-to-r from-yellow-500 to-rose-400">{staticData.section1.title}</b>

</Head1>

<div className="flex flex-col text-xl max-w-2xl  gap-6">
    <SubPara extra="dark:text-zinc-300 text-zinc-700">

  
{staticData.section1.subtitle}
</SubPara>
</div>
</div>
<div className="px-5">
<form className="max-w-xl mx-auto bg-gray-50 shadow-lg dark:shadow-zinc-900 dark:bg-zinc-800 p-6 sm:p-10 rounded-md w-full flex flex-col gap-8 md:gap-12 dark:text-zinc-100">
<div className="w-full flex relative flex-col pt-2 gap-4 ">
<input type="text" placeholder=" Enter Your Name" id="name" name="name" className="w-full py-2   st bg-transparent text-zinc-800 dark:text-zinc-100 border-b-2 border-zinc-400  focus:border-sky-500      " value=""/>
</div>
<div className="w-full flex flex-col gap-4 ">
<div className="grid grid-cols-4 gap-5 sm:items-center w-full dark:text-zinc-200">
<div className="flex col-span-2 items-center w-full gap-5">
<select name="month" className="text-gray-500 dark:text-zinc-100 dark:bg-zinc-800 py-3 border-b-2 w-full bg-transparent  focus:border-sky-500 focus:outline-none border-zinc-400">
<option value="true">Birth Month</option>
<option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
</select>
</div>
<div className="w-full flex relative flex-col mt-1  gap-4 ">
<input type="number" placeholder=" DD" min="1" max="31" id="day" name="day" className="w-full  bg-[#F9FAFB] py-2 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border-b-2 border-zinc-400  focus:border-sky-500    " value=""/>

</div>
<div className="w-full flex relative flex-col mt-1  gap-4 ">
<input type="number" placeholder=" YYYY" min="1" max="31" id="day" name="day" className="w-full  bg-[#F9FAFB] dark:bg-zinc-800 py-2 text-zinc-800 dark:text-zinc-100 border-b-2 border-zinc-400  focus:border-sky-500    " value=""/>

</div>
</div>
</div>
<button className="w-full bg-[#F28341] py-3 text-zinc-800 rounded-md font-bold md:text-xl text-lg hover:bg-orange-500">Calculate your Expression number</button>
</form>
</div>
</div>
</div>
</div>



<div className="max-w-4xl dark:bg-[#2F2F31] bg-white  py-16 flex flex-col gap-10 md:gap-14 w-full mx-auto">
<div className="max-w-4xl items-center  mx-auto flex flex-col gap-10">
<Head2 extra="dark:text-zinc-300 text-zinc-700">{staticData.section2.title}</Head2>
<div className="flex dark:text-zinc-300 text-zinc-700 flex-col max-w-3xl items-center gap-6 ">
<SubPara >{staticData.section1.desc[0]}</SubPara>
<SubPara>{staticData.section1.desc[1]}</SubPara>
<SubPara >{staticData.section1.desc[2]}</SubPara>
<SubPara >{staticData.section1.desc[3]}</SubPara>
<SubPara >{staticData.section1.desc[4]}</SubPara>

</div>
<div className="  rounded-sm bg-gradient-to-r from-yellow-500 to-rose-400 max-w-5xl  p-1 ">


<div className="  w-full rounded-sm dark:bg-[#2f2f31]  bg-white space-y-4 py-10 px-5">
  <h1 className="text-xl font-semibold  text-black dark:text-white md:ml-6">
    {staticData.section2.listtitle}
  </h1>
  <ul className=" md:text-lg   text-zinc-800 mr-5 dark:text-zinc-300 dark:!list-none max-w-2xl md:ml-10 flex flex-col gap-4">
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section2.list[0]}</SubPara>
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.og/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section2.list[1]}</SubPara>
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section2.list[2]}</SubPara>
    </li>


</ul>


</div>
</div>
<a href="#birth-chart" className=" bg-[#F28341] text-center max-w-max mt-5 px-12 py-2 rounded-md text-zinc-800 hover:bg-orange-400 font-bold text-lg">{staticData.section1.btntxt}</a>

</div>




</div>






<div className="max-w-4xl dark:bg-[#2F2F31] bg-white  py-16 flex flex-col gap-10 md:gap-14 w-full mx-auto">
<div className="max-w-4xl items-center  mx-auto flex flex-col gap-10">
<Head2 extra="dark:text-zinc-300 text-zinc-700">{staticData.section3.title}</Head2>
<div className="flex flex-col max-w-3xl items-center gap-6 ">
<p className="text-zinc-700  mx-auto  text-lg leading-7 dark:text-zinc-100">{staticData.section1.desc[0]}</p>
<p className="text-zinc-700 mx-auto  text-lg leading-7 dark:text-zinc-100">{staticData.section1.desc[1]}</p>


</div>

<div className="   bg-gradient-to-r from-yellow-500 to-rose-400 rounded-lg p-1 max-w-2xl">
    <div className=" w-full  rounded-sm  bg-white dark:bg-[#2f2f31] py-10 px-5 ">
    <h1 className="text-xl font-semibold  text-black dark:text-white md:ml-6">
    {staticData.section3.listhead}
  </h1>
  <ul className=" md:text-lg  pt-6 text-zinc-800 mr-5 dark:text-zinc-300 dark:!list-none max-w-2xl md:ml-10 flex flex-col gap-4">
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section3.list[0]}</SubPara>
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.og/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section3.list[1]}</SubPara>
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section3.list[2]}</SubPara>
    </li>

    <li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section3.list[3]}</SubPara>
    </li>
    <li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span><SubPara> {staticData.section3.list[4]}</SubPara>
    </li>
</ul>
    </div>
  


</div>
<a href="#birth-chart" className= " bg-[#F28341] text-lg text-center max-w-max mt-5 px-12 py-2 rounded-md text-zinc-800 hover:bg-orange-400 font-semibold">{staticData.section1.btntxt}</a>

</div>




</div>

<div className="max-w-4xl bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 rounded-2xl  py-10 flex flex-col gap-10 md:gap-14 w-full mx-auto">
<div className="max-w-3xl items-center  mx-auto flex flex-col gap-5">
<Head2 extra=" text-zinc-700">{staticData.section4.title}</Head2>
<SubPara extra="text-gray-800">{staticData.section4.desc[0]}</SubPara>
<SubPara extra="text-gray-800">{staticData.section4.desc[1]}</SubPara>
<SubPara extra="text-gray-800">{staticData.section4.desc[2]}</SubPara>

    <a href="#birth-chart" className=" bg-[#F28341] text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-orange-400 font-bold text-lg">{staticData.section1.btntxt}</a>

</div>

</div>

</div>




      


    </div>
  );
}

const staticData = {
  section1: {
    title: "Expression Number calculator",
    subtitle: "Get valuable insights about yourself with our free Expression Number Calculator. Know your life path, natural talents, strengths, and weaknesses based on the letters in your name at birth. Give it a try now!",
    

    desc : [
"Looking for a sign to take control of your life? Look no further than the Life Path Calculator! It's like a roadmap for your soul, showing you the way to your true purpose in life.",
"Who knew that your birth date held so much valuable information? It's like a secret code that only the universe knows, and our calculator can help you unlock it. You'll discover your unique numerological profile and get a glimpse into your destiny.",
"But let's be real - who doesn't love a good personality quiz? Our Life Path Calculator is like the ultimate personality quiz, with a little more depth and meaning. Plus, it's a lot more fun than those boring career aptitude tests you took in high school.",
"So, whether you're feeling lost, stuck, or just curious about what the universe has in store for you, give our calculator a try. It might just change your life! Who knows, you might uncover a hidden talent or discover a passion you never knew existed.",
"So, don't wait any longer. Click that button below and see where your path takes you. It's time to take control of your destiny and start living the life you were meant to live!"
    ],
    btntxt: 
    "Calculate Your Expression Number Now"
 
  },
  section2: {
    title:
      "What is an Expression Number?  \n",
    desc: 
    [
       "It's a number that is derived from the letters in your full name at birth. Each letter corresponds to a number, and when you add them up, you get your Expression Number. This number can give you insight into your natural talents, strengths, weaknesses, and even your life path.",
       "With our free Expression Number Calculator, you'll receive an accurate calculation of your Expression Number in just seconds. Simply enter your full name at birth, and we'll do the rest. Our calculator uses the latest Numerology algorithms to ensure the most precise results.",
       "Discovering your Expression Number is easy, free, and can provide you with invaluable knowledge about yourself. So why wait? Try our free Numerology Calculator today and unlock the secrets of your life path!"
    ],
    
     listtitle: "Benefits of using our Expression Number Calculator",
     
     list: [
        "It's free!",
        "Accurate results based on the latest Numerology algorithms",
        "Easy to use – simply enter your full name at birth",
        "Discover your natural talents, strengths, weaknesses, and life path",
        "Gain invaluable insight into your purpose in life"
     ],
     desc: "So, what are you waiting for? Try our Expression Number Calculator today and discover your true self! It's free, it's fun, and it's enlightening. And who knows, you might be surprised by what you'll find out about yourself."

    
  },

  section3 : {
    title: 
    "What's Your Expression Number?",

desc:[
  "Come aboard the cosmic train to unveil the mystical details of your full name at birth. Our Expression Number Calculator is your free ticket to unlocking the secrets hidden within your name - diving into your natural talents, strengths, weaknesses, and life path.  ",
  "Can't contain the excitement? Get ready for a fascinating ride into the world of numerology! With cutting-edge algorithms and a super user-friendly interface, our The expression Number Calculator is your expressway to self-discovery. What's even better? It's free, fabulous, and full of surprises!"
],
listhead: "Perks of the Expression Number Calculator Journey",
list: [
  "Absolutely free!",
  "Precise results powered by the latest algorithms",
  "User-friendly - just put in your full name at birth",
  "Learn about your inherent talents, potential, and life mission",
  "Uncover the concealed wisdom of your numerological roots"
],
desc2: [
    "Hold on to your seats because we're diving into the heart of the Expression Number – a significant number in numerology derived from the letters in your full name at birth. Get ready to unveil your inherent talents, strengths, weaknesses, and your life path in a whole new light!",
    "Significance of the Expression Number: Discover your innate potential, life purpose, and the unique essence that makes you who you are. Your Expression Number is a window into your soul, guiding you towards the path of personal growth and self-discovery. "
]
  
  },

  section4: {
    title: "Why Choose Our Life Path Calculator? ",

    desc: 
    [
        "Embark on a memorable journey with a Life Path Calculator that ensures a user-friendly, fun, and insightful experience. ",
        "Dive into the captivating world of numbers and explore numerology's wisdom at its finest. Watch your life take on a new luminous direction as you unveil the unique traits and talents that make you special!",
        "The moment you've been waiting for has arrived! Embrace your remarkable inner self and allow the magical realm of numerology to illuminate your path."
    ]
   
  
  },
 
};
