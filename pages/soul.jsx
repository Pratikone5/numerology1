import React from "react";


import Link from "next/link";


export function SubPara(props) {
    return (
      <p
        className={`${props.extra} dark:text-zinc-300 text-zinc-700 text-[15px] md:text-lg`}
      >
        {props.children}
      </p>
    );
  }

export default function SoulLandingPage({ formdata }) {
  const color = [
    "bg-gradient-to-tl from-purple-200 to-sky-100/60",
    "bg-gradient-to-tl from-amber-200/60 to-yellow-100/50",
    "bg-gradient-to-tl from-fuchsia-200 to-violet-50",
  ];
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
      
      
      
      
      <div className="dark:bg-[#2F2F31] bg-white">
<div className=" flex pt-12 pb-20 md:py-14 max-w-7xl mx-auto items-center">
<div className="w-full flex justify-center">
<div id="birth-chart" className=" flex flex-col gap-10 md:gap-16 max-w-4xl w-full mx-auto md:px-10">
<div className="flex flex-col gap-6 px-5">
<h2 className=" text-center  font-cera_bold dark:text-white dark:text-zinc-50 text-zinc-900 md:text-4xl text-3xl" >
<b className="text-transparent bg-clip-text bg-gradient-to-l from-[#8259FF] to-[#58DDFE]">{staticData.section1.title}</b>
</h2>
<div className="flex flex-col gap-6">
<p className="text-zinc-600 max-w-3xl mx-auto text-center font-semibold text-2xl leading-7 dark:text-zinc-100">
    {staticData.section1.subtitle}
</p>
<p className="text-zinc-600 max-w-2xl mx-auto text-center text-lg leading-7 dark:text-zinc-100">A Whimsical Dive into the Wonders of Your Inner World</p>

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
<button className="w-full bg-sky-600 py-3 text-white rounded-md font-cera_bold md:text-xl text-lg hover:bg-sky-500">Calculate your Soul Surge Number</button>
</form>
</div>


</div>
</div>
</div>

<section className="bg-gray-50 py-10 dark:bg-zinc-800">
<div className="max-w-4xl  flex flex-col gap-10 md:gap-14 w-full mx-auto">
<h2 className="md:text-2xl  dark:text-white font-semibold text-3xl " >{staticData.section2.title}

    </h2>
    <h3 className="md:text-lg dark:text-zinc-300  text-zinc-800">{staticData.section2.subtitle}

    </h3>

<div className="max-w-4xl mx-auto flex flex-col gap-10">
<h3 className='text-xl dark:text-white font-semibold'>{staticData.section2.listtitle}</h3>
<ul className=" md:text-lg  text-zinc-800 dark:text-zinc-300 dark:!list-none md:ml-10 flex flex-col gap-3">
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[0]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[1]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[2]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[3]}
    </li>

</ul>
<p className="md:text-xl text-zinc-800 dark:text-zinc-200"> {staticData.section2.desc}
    </p>
</div>

</div>
</section>
<div className="bg-blue-50 bg-opacity-50 dark:bg-zinc-900 ">
<div className="max-w-6xl px-5 py-14 md:py-24 mx-auto flex md:flex-row-reverse flex-col items-center gap-14 md:gap-20">
<div className=" w-full ">
<img src="/imgs/birth1.png" alt="insideSplash" className="w-8/12 mx-auto h-full"/>
</div>
<div className="w-full">
<div className="flex flex-col max-w-3xl gap-6 w-full">
<h2 className="md:text-4xl font-cera_bold !leading-[1.3] dark:text-white text-zinc-800 text-3xl">{staticData.section3.title}</h2>
<p className="undefined dark:text-zinc-200 text-zinc-700 text-[15px] md:text-lg">{staticData.section3.desc[0]}</p>

<p className=" text-zinc-700 dark:text-zinc-200 text-zinc-700 text-[15px] md:text-lg ">{staticData.section3.desc[1]}</p>
</div>
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
<p className="undefined dark:text-zinc-200 text-zinc-700 text-[15px] md:text-lg">{staticData.section3.desc[2]}</p>
<p className="undefined dark:text-zinc-200 text-zinc-700 text-[15px] md:text-lg">{staticData.section3.desc[3]}</p>

<a href="#birth-chart" className="bg-sky-500 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">{staticData.section1.btntxt}</a>

</div>
</div>
</div>
</div>
<div className="max-w-4xl  bg-transperent  py-16 flex flex-col gap-10 md:gap-14 w-full mx-auto">
<div className="max-w-4xl items-center  mx-auto flex flex-col gap-10">
<h3 className='text-3xl dark:text-white font-semibold'>{staticData.section4.title}</h3>
<ul className=" md:text-lg max-w-2xl dark:text-gray-300 !list-none md:ml-10 flex flex-col gap-3">
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section4.list[0]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section4.list[1]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section4.list[2]}
    </li>


</ul>
<p className="md:text-lg text-white max-w-3xl"> {staticData.section4.desc}
    </p>

    <a href="#birth-chart" className="bg-sky-500 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">{staticData.section1.btntxt}</a>

</div>

</div>
</div>




      
    

    </div>
  );
}

const staticData = {
  section1: {
    title: "Soul Urge Number Calculator ",
    subtitle: "Find Your True Desires with Our Free Soul Urge Number Calculator ",
   

    desc : [
"Want to know what really motivates you from within? Eager to discover your deepest desires? Try our Free Soul Urge Number Calculator.",
"Our easy-to-use tool helps you find your Soul Urge Number, a key aspect of numerology based on the vowels in your full birth name. With this number, you'll gain a deeper understanding of your true self and what drives you."
    ],
    btntxt: 
    "Calculate Your Soul Urge Number NOW!"
 
  },
  section2: {
    title:
      "Want to know what really motivates you from within? Eager to discover your deepest desires? Try our Free Soul Urge Number Calculator.\n",
    subtitle: 
    "Our easy-to-use tool helps you find your Soul Urge Number, a key aspect of numerology based on the vowels in your full birth name. With this number, you'll gain a deeper understanding of your true self and what drives you.",
    listtitle:"Here's why you should try our Soul Urge Number Calculator",
      list: [
      "It's free - Get valuable insights into your Soul Urge Number without any cost.",
      "It's simple - Calculate your Soul Urge Number quickly with our user-friendly tool.",
      "It's accurate - Rely on dependable numerology principles to get precise results.",
      "It's insightful - Learn more about your inner desires and motivations, guiding your personal growth.Here's why you should try our Soul Urge Number Calculator",
    
    ],

    desc:
    "Start discovering your Soul Urge Number today with our free calculator. Begin your journey into self-awareness and unlock the secrets to a more purposeful life.",
    
  },

  section3 : {
    title: 
    "What is Soul Urge Number? ",
desc:[
  "Soul Urge Numbers, also known as Heart's Desire Numbers, are derived from numerology, an ancient belief system that attributes meanings to numbers. These particular numbers are thought to reveal a person's inner desires, passions, and genuine essence of who they are.",
  "In numerology, Soul Urge Numbers are calculated based on the vowels in a person's full birth name. Each vowel is assigned a numerical value, and then these values are added together and reduced to a single digit (or Master Number 11 or 22, if applicable). The resulting number is said to reveal deep secrets about a person's true aspirations and motivations.",
  "For example, if your full birth name is John Smith, the vowels would be O and I. The numerical values for these vowels are 6 and 9, so your soul urge number would be 6+9=15, which reduces to 1+5=6. Therefore, your soul urge number would be 6.",
  "Each soul urge number is believed to have its own unique characteristics and meanings and can provide insight into a person's deepest motivations and desires"
]
    
  },

  section4: {
    title: "Here is a simple guide for calculating Soul Urge Numbers",
list: [
    "Assign the corresponding numerical value to each vowel in the full birth name - A = 1, E = 5, I = 9, O = 6, U = 3, Y = 7 (if it acts as a vowel)",
    "Add the values of all the vowels together.",
    "Reduce the resulting sum to a single digit or Master Number (11 or 22) by adding each digit together."
],
    desc: 
    "There are several interpretations for each Soul Urge Number, which are thought to provide insights into a person's desires, dreams, and motivations.  ",
   
  
  },
 
  
};
