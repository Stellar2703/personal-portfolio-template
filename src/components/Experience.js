import React, {useRef} from "react";
import {useScroll,motion} from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details=({position,company,companyLink,time,address,work})=>{
    const ref = useRef(null);
    return<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 ,type:"spring"}}

        >
            <h3 className={'capitalize font-bold text-2xl sm:text-xl xs:text-lg'}>{position}&nbsp;<a href={companyLink} target={"_blank"} className={'text-primary capitalize '}>@{company} </a> </h3>
            <span className={'capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'}>
                {time} | {address}
            </span>
            <p className={'font-medium w-full  md:text-sm'}>
                {work}
            </p>
        </motion.div>
    </li>

}
const Experience=()=>{
    const ref = useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
    return(
        <div className={`my-64`}>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience

            </h2>
            <div  ref={ref} className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>

                <motion.div
                    style={{scaleY:scrollYProgress}}
                    className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[20px] xs:left-[20px]'}/>

                <ul className={'w-full flex flex-col items-start justify-between mi-4 xs:ml-2'}>
                   <Details
                       position={"Intern"}
                       company={"Circuit House Technologies"}
                    //    companyLink="www.google.com"
                       time="Aug 2024 – Present"
                       address="Bangalore"
                       work= " Scraped data from 1,000+ e-commerce products, identifying 52 essential products and 25 leading brands in the Indian smart lock market,
 and presented insights on SKU counts, rankings, ratings, and prices for market entry strategy. Conducted in-depth sentiment analysis on Amazon reviews of 12 leading projectors to assess consumer demand and pain points, aiding
 Lumio's entry into the projector market"

                   />

                    <Details
                        position={"Product Marketing Intern "}
                        company={"Skylark Drones"}
                        // companyLink="www.facebook.com"
                        time="May2024– Jul 2024"
                        address="Bangalore"
                        work= " Drafted and formatted weekly blogs, newsletters, and monthly cheat sheets on drone pilots; conducted market research on potential clients
 and use cases for drone services and presented findings to the Head of Staff for proposal drafting.
 Managed LinkedIn content calendars using tools like Notion and Asana while monitoring HubSpot analytics to enhance post-performance"

                    />

                    <Details
                        position={" Freelance Graphic Designer"}
                        company={"RAY Media House"}
                        // companyLink="www.amazon.com"
                        time=" Jun 2023– Jul 2024"
                        address="Hyderabad"
                        work= "Collaborated with 6+ clients (Bambino, JAS Event Decors, Craft & Kar, GoliPop) to evolve the social media creative process.
 Joined a team of 2 digital marketing experts; for each brand, created 18+ social media posts monthly for Instagram, websites, and LinkedIn;
 increased engagement for Bambino by 205% in one year, and for Golipop, increased engagement by 813% in 9 months"

                    />


                    <Details
                        position={" Marketing Intern Chennai"}
                        company={"ANAROCK Property Consultants"}
                        // companyLink="www.microsoft.com"
                        time="Feb 2023– May 2023"
                        address="Chennai"
                        work= "Pitched marketing strategies concentrated on digital presence enhancement, email marketing, and client testimonials, increasing sales by
 4%; designed 62+ contents and daily creatives like property ads, hoardings service posts, and individual realtors’ posts. Organized a channel partner event with a mandated client, increasing visibility among 30+ real estate and 180+ independent realtors"

                    />

                    <Details
                        position={" Business Analyst & Digital Transformation Intern"}
                        company={" Milky Mist Dairy Food Pvt. Ltd"}
                        // companyLink="www.google.com"
                        time="Nov 2022– Jan 2023"
                        address=" Erode "
                        work= "Researched blockchain traceability to track milkshake ingredient sources and improve transparency by 4x; enhanced the blockchain
 system’s efficiency by 56%, providing a tracking solution for stakeholders and partners, including farmers and suppliers"

                    />

                </ul>
            </div>
        </div>
    )
}
export default Experience