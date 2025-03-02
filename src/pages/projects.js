import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icon";
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import {useScroll} from "framer-motion";
import LiIcon from "@/components/LiIcon";

const FramerImage = motion(Image);





const FeaturedProduct = ({ type, title, summary, img, link, github }) => {
    return (<article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark dark:text-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "/>
        <Link href={link} target={"_blank"}
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <FramerImage src={img} alt={title} className={'w-full h-auto'}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                priority
                sizes={"(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"}
            />
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>

            <Link href={link} target={"_blank"} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>

            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

            <div className='mt-2 flex items-center'>
                <Link href={github} target={"_blank"} className='w-10'><GithubIcon /></Link>
                <Link href={link} target={"_blank"} className='ml-4 rounded-lg bg-dark text-light p-2
                    px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
                >Visit Project</Link>

            </div>
        </div>
    </article>

    )
}
const Project = ({ type, title, img, link, github }) => {
    return (<article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4 dark:text-light'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2
            md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
        <Link href={link} target={"_blank"}
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className={'w-full h-auto'}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }} priority
                sizes={"(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"}
            />
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target={"_blank"} cl3ssName='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full  text-left  text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>

            <div className='w-full justify-between mt-2 flex items-center'>
                <Link href={link} target={"_blank"} className='underline text-lg font-semibold md:text-base'>Visit</Link>
                <Link href={github} target={"_blank"} className='w-8 md:w-6'>
                    {" "}<GithubIcon />{" "}</Link>

            </div>
        </div>
    </article>

    )
}
const Details=({type ,time,place,info})=>{
    const ref = useRef(null);
    return<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>

        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5 ,type:"spring"}}

        >
            <h3 className={'capitalize font-bold text-2xl sm:text-xl xs:text-lg '}>{type} </h3>
            <span className={'capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'}>
                {time} | {place}
            </span>
            <p className={'font-medium w-full  md:text-sm'}>
                {info}
            </p>
        </motion.div>
    </li>

}
const Projects = () => {
    const ref = useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
    return (
        <>
            <Head>
                <title>Varsha cd G</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className={'w-full mb-16 flex flex-col items-center justify-center'}>
                <Layout className={'pt-16'}>
                    <AnimatedText text='Imagination Trumps Knowledge!'

                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className={'grid grid-cols-12 gap-24 gap-y-32 xl:ga-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'}>
                        <div className={'col-span-12'}>
                            <FeaturedProduct
                                title='Cloud-Based Price Comparison E-Commerce Website'
                                img={project1}
                                summary='Suggested best price for every product searched by the customer from the pool of prices acquired from various e-commerce and wholesale
 online marts; used Microsoft Excel to aggregate and analyze price data. 
 Made significantly cheaper and reasonable purchases while purchasing a bulk cart, and offers and discounts from various e-commerce
 resulted in an approx. 65% more reasonable purchase compared to buying from a regular e-commerce platform'
                                link='/'
                                github='/'
                                type='Featured Project'

                            />
                        </div>
                        <div className={'col-span-12'}>
                            <FeaturedProduct
                                title='Medical Appointments and Reports Management App'
                                img={project1}
                                summary='Designed a user-friendly experience for older adults using Flutter, Python, MySQL, and DBMS, with simplicity, legibility, and security for
 storing patient records and bills in Tamil, incorporating feedback to expand language options and simplify navigation
 ● Surveyed elderly patients at an eye and dental hospital on record and bill storage issues; conducted usability testing and cognitive
 walkthroughs and integrated hospital suggestions to incorporate third-party service compatibility into the app'
                                link='/'
                                github='/'
                                type='Featured Project'

                            />
                        </div>
                        {/*                        
                       <div className={'col-span-6 sm:col-span-12'}>
                           <Project
                               title='Crypto Screener Application'
                               img={project1}
                               summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency.'
                               link='/'
                               github='/'
                               type='Featured Project'/>
                       </div>
                       <div className={'col-span-12 sm:col-span-12'}>
                           <FeaturedProduct
                               title='Crypto Screener Application'
                               img={project1}
                               summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency.'
                               link='/'
                               github='/'
                               type='Featured Project'

                           />
                       </div>
                       <div className={'col-span-6 sm:col-span-12'}>
                           <Project
                               title='Crypto Screener Application'
                               img={project1}
                               summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency.'
                               link='/'
                               github='/'
                               type='Featured Project'/>
                       </div>
                       <div className={'col-span-6 sm:col-span-12'}>
                           <Project
                               title='Crypto Screener Application'
                               img={project1}
                               summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency.'
                               link='/'
                               github='/'
                               type='Featured Project'/>
                       </div> */}

                    </div>


                </Layout>

                                
            </main>
            <div className={`my-64`}>
            <h2 className={'font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'}>
                Extra Curricular Activities

            </h2>
            <div  ref={ref} className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>

                <motion.div
                    style={{scaleY:scrollYProgress}}
                    className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[20px] xs:left-[20px]'}/>

                <ul className={'w-full flex flex-col items-start justify-between mi-4 xs:ml-2'}>
                    <Details
                        type=" Lead, GDSC (Google Developers Student Club) BIT"
                        time=" Jul 2023– Jul 2024"
                        place="Bannari Amman Institute of Technology (BIT)"
                        info= "Achieved a 63.3% membership increase, led 501 members and 4 student heads in organising 5 Gen AI and Google Cloud events, facilitated Gen AI Study Jams 2024, and reached Tier #1 Milestone with 84 completions"/>
                     <Details
                        type=" Core Member, GDSC (Google Developers Student Club) BIT"
                        time=" Nov 2022– July 2023"
                        place="Bannari Amman Institute of Technology (BIT)"
                        info= "Revitalized and Registered the club, leading 371 members and a team of 9 to organise 6 events, including learning campaigns, hackathons and Extended Google I/O, organised 4 learning campaigns and 2 tech talks, registering 800+ in campaigns and participation of 500+"
                    />
                    <Details
                        type=" Volunteer,Bhumi"
                        time="  Sep 2022– Aug 2023"
                        place=" Chennai"
                        info= " Fundraised INR 3.4 lakh for annual sports events within 4 months by engaging private hospitals and medical associations while leading a team of 7 volunteers; maintained 78% attendance in weekly civic activities such as upcycling workshops and afforestation camps"/>

                    <Details
                        type=" Secretary, BOE (Bureau of Overseas Education) Club"
                        time=" Jun 2021– Mar 2022"
                        place="Bannari Amman Institute of Technology (BIT)"
                        info= " Led 141 members and 62 volunteers, partnered with consultancy agencies like IDP & Career Zone, organised 8+ events, including 2 career fairs for 150 students, and guided admissions for September 2024 through social media promotions"
                    />
                </ul>
            </div>
        </div>
        </>
    )
}


export default Projects;