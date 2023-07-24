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
      className={`${props.extra} dark:text-zinc-300 text-zinc-700 text-[40px] `}
      >
          {props.children}
      </h1>
  )
}

export function Head2(props) {
  return (
      <h2
    
      className= {`${props.extra}  md:text-[40px] font-bold !leading-[1.3]  text-3xl ` }>
          {props.children}
      </h2>
  )
}


export function Head3(props) {
  return (
      <h3
    
      className= {`${props.extra}  md:text-[30px] font-bold !leading-[1.3]  text-2xl ` }>
          {props.children}
      </h3>
  )
}




export default function SoulLandingPage({ formdata }) {
  
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
      
      
      
      
      <div className="dark:bg-[#2F2F31] bg-white">
<div className=" flex pt-12 pb-20 md:py-14 max-w-7xl mx-auto items-center">
<div className="w-full flex justify-center">
<div id="birth-chart" className=" flex flex-col gap-10 md:gap-16 max-w-4xl w-full mx-auto md:px-10">
<div className="flex flex-col text-center gap-6 px-5">
<Head1 >
<b  className="text-transparent bg-clip-text  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900">{staticData.section1.title}</b>
</Head1>
<div className="flex flex-col gap-6">
<p className="text-zinc-600 max-w-2xl mx-auto text-center font-semibold text-xl leading-7 dark:text-zinc-100">
    {staticData.section1.subtitle}
</p>

</div>
</div>
<div className="px-5">
<form id="numerology" className="max-w-xl flex flex-col gap-8 mx-auto bg-gray-50 shadow-lg dark:shadow-zinc-900 dark:bg-zinc-800 p-6 sm:p-10 rounded-md w-full flex flex-col gap-8 md:gap-12 dark:text-zinc-100">
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
<button className="w-full py-3 text-white  bg-gradient-to-bl from-amber-300 via-violet-600 to-sky-900  rounded-md font-semibold md:text-xl text-lg hover:bg-sky-500">Calculate your Numerology number</button>
</form>
</div>
<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <p className="ml-4">"{staticData.section1.desc[0]}"</p>
</blockquote>

</div>
</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-800">
<div className="max-w-6xl px-5 py-14 md:py-24 mx-auto flex md:flex-row flex-col items-center gap-14 md:gap-20">
<div className=" w-full ">
<img src="/bc-wheel.png" alt="wheel" className="w-8/12 mx-auto h-full"/>
</div>
<div className="w-full">
<div className="flex flex-col max-w-3xl gap-6 w-full">
<SubPara extra="text-zinc-800 dark:text-gray-300">{staticData.section1.desc[1]}</SubPara>
<SubPara extra="text-zinc-800 dark:text-gray-300">{staticData.section1.desc[2]}</SubPara>

<a className="bg-gradient-to-bl from-amber-300 via-violet-600 to-sky-900 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-red-400  font-cera_bold text-lg">{staticData.section1.btntxt}</a>

</div>
</div>
</div>
</div>

<section className="bg-gray-50 py-10 dark:bg-zinc-800">
<div className="max-w-4xl items-center  flex flex-col gap-10 md:gap-14 w-full mx-auto">
 <Head2 extra="text-zinc-800 dark:text-gray-300">
 {staticData.section2.title}
 </Head2>


    

<div className="max-w-3xl items-center  mx-auto flex flex-col gap-5">

<SubPara extra="text-zinc-800 dark:text-gray-300"> {staticData.section2.desc[0]}
    </SubPara>
    <SubPara extra="text-zinc-800 dark:text-gray-300"> {staticData.section2.desc[1]}
    </SubPara>
    <SubPara extra="text-zinc-800 dark:text-gray-300"> {staticData.section2.desc[2]}
    </SubPara>
    <SubPara extra="text-zinc-800 dark:text-gray-300"> {staticData.section2.desc[3]}
    </SubPara>
    <a  className="bg-gradient-to-bl from-amber-300 via-violet-600 to-sky-900 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">{staticData.section1.btntxt}</a>

    <SubPara extra="text-zinc-800 dark:text-gray-300"> {staticData.section2.desc[4]}
    </SubPara>

</div>
<div className=" max-w-3xl items-center p-8 mx-auto flex flex-col gap-7 bg-fuchsia-300 rounded-[30px]">
<Head3 >{staticData.section2.title2}
    </Head3>
    <SubPara>{staticData.section2.listhead}</SubPara>
<ul className=" md:text-lg !list-none md:ml-10 flex flex-col gap-3">
<li className=" flex gap-2 text-lg  items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className=" w-6 fill-green-700 h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section2.list[0]}
    </li>
<li className=" flex gap-2 text-lg md:text-lg items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 fill-green-700 h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section2.list[1]} </li>
<li className=" flex gap-2 text-lg items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 fill-green-700 h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section2.list[2]}</li>
<li className=" flex gap-2 text-lg  items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6  fill-green-700 h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section2.list[3]}
    </li>
</ul>
<a href="#birth-chart" className="bg-gradient-to-bl from-amber-300 via-violet-600 to-sky-900 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">{staticData.section1.btntxt}</a>

</div>
</div>
</section>


<div className="max-w-4xl  bg-transperent  py-16 flex flex-col gap-10 md:gap-14 w-full mx-auto">

<div className="max-w-4xl items-center  flex flex-col gap-10 md:gap-14 w-full mx-auto">
<Head2 extra="text-zinc-800 dark:text-gray-300" >{staticData.section3.title}

    </Head2>
    
<div className="max-w-3xl items-center  mx-auto flex flex-col gap-5">

<SubPara extra=" text-zinc-800 dark:text-gray-300"> {staticData.section3.desc[0]}
    </SubPara>
    <SubPara extra=" text-zinc-800 dark:text-gray-300"> {staticData.section3.desc[1]}
    </SubPara>
    <SubPara extra=" text-zinc-800 dark:text-gray-300"> {staticData.section3.desc[2]}
    </SubPara>
    <SubPara extra=" text-zinc-800 dark:text-gray-300"> {staticData.section3.desc[3]}
    </SubPara>
   
</div>
<div className=" max-w-3xl items-center p-8 mx-auto flex flex-col gap-7 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 rounded-[30px]">
<Head3 extra="">{staticData.section3.title2}
    </Head3>
    <SubPara>{staticData.section3.listhead}</SubPara>
<ul className=" md:text-lg !list-none md:ml-10 flex flex-col gap-3">
<li className=" flex gap-2 text-lg  items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 fill-green-6 fill-green-600 h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section3.list[0]}
    </li>
<li className=" flex gap-2 text-lg md:text-lg items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6  fill-green-600 h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section3.list[1]} </li>
<li className=" flex gap-2 text-lg items-start">
<span className=" mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 fill-green-600  h-6">
<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" className="">
</path>
</svg>
</span>{staticData.section3.list[2]}</li>

</ul>
<a href="#birth-chart" className="bg-sky-500 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">{staticData.section1.btntxt}</a>
<SubPara className="text-lg ">{staticData.section3.desc2[0]}</SubPara>
<SubPara className="text-lg ">{staticData.section3.desc2[1]}</SubPara>
</div>
</div>
</div>
</div>




 

    </div>
  );
}

const staticData = {
  section1: {
    title: "Find Clarity with Our Simple Yet Insightful Numerology Calculator! ",
    subtitle: "Get to Know Your Numerology Numbers - A Straightforward Guide to Your Life Path ",
   

    desc : [
"Numbers are the highest degree of knowledge, and it is knowledge itself that balances the world. - Plato",
"Welcome to our free numerology calculator! Our tool is designed to help you calculate your numerological numbers and understand their significance in your life. Whether you're interested in finding your life path number, expression number, or soul urge number, our calculator can help.",
"Our calculator uses advanced algorithms to analyze your birth date and name, providing you with the outlines of your life path number, expression number, and soul urge number."
    ],
    btntxt: 
    "Calculate Your Numerology Now!"
 
  },
  section2: {
    title:
      "What is Numerology?\n",
   desc: [
    "Numerology is the study of how numbers can affect your life. Long ago, people believed that numbers had special powers and could represent different things in the world.",
    "To find your numerology number, you can use your birthday and a simple process to calculate a number that represents your life goals and challenges",
    " You can also turn the letters in your name into numbers to learn more about your personality, soul, and subconscious.",
    "If you're curious about numerology and want to find out what your number is, click the button below to try our numerology calculator.",
    "Our calculator will use your name and birthdate to calculate your numerology numbers and provide a personalized report with insights about your strengths, weaknesses, and life path. It's an easy and fun way to discover something new about yourself!"
   ],
   title2: 
   "Explore the benefits of our Numerology Number Calculator",

   listhead:
   "A numerology number calculator offers an accessible, easy-to-use tool to delve into the mystical principles of numerology. By using such a calculator, you can gain valuable insights into your life based on the numbers derived from your name and birthdate.",
      list: [
      "Simple & Accessible - Calculate your core numerology numbers in just a few clicks, with no prior knowledge needed.",
      "Personalized Insights - Gain invaluable, personalized insights into your life, relationships, career, and overall well-being.",
      "Empower Your Decisions - Make more informed choices that align with your personal strengths and desires, steering you toward a fulfilling life.",
      "100% Free - Experience the life-changing power of numerology at no cost, with no hidden fees or subscriptions",
    
    ],

    desc1:
    "Start discovering your Soul Urge Number today with our free calculator. Begin your journey into self-awareness and unlock the secrets to a more purposeful life.",
    
  },

  section3 : {
    title: 
    "How Numerology Can Benefit You  ",
desc:[
  "Step into the fascinating universe of numbers, where age-old digits influence our lives in distinctive, enjoyable, and deeply impactful ways!",
  "With our handy numerology calculator, uncover your personal numbers that reveal your character, strengths, weaknesses, and aspirations.",
  "This newfound understanding empowers you to grow, make wise choices, and strengthen your connections with others.",
  "Embrace numerology as a tool for self-awareness and personal development, guiding you to connect with your inner self and true purpose."
],
title2: " Applying Numerology in Daily Life",
    
listhead: "Numerology isn't just a quirky concept; it can be incredibly practical too! Apply the wisdom of your numerology numbers and discover -",

list:[
    "A career that complements your strengths and talents, making Mondays a lot more enjoyable!",
    "Better communication and deeper connections with friends, family, and partners. More empathy, less drama!",
    "Tips to tackle potential health issues and stay at the top of your wellness game, because a healthy life is a happy life."
],
desc2: [
    "But wait, there's more! Dive into your numerology numbers and embark on a spiritual adventure to uncover your life's purpose.",
    "So, grab a numerology calculator, and let the power of numerology uplift and transform your life."
]

  },

 
 
  
};
