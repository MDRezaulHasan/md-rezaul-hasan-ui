import {useTheme} from '../../context/ThemeContext';
import { useRef } from 'react';
import {delay, motion,stagger,useInView, useScroll,useTransform} from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/helper';
import {JOURNEY_STEPS,PASSIONS } from '../../utils/data';
import SIGNATURE from '../../assets/images/signature.png';


const AboutSection = () => {


    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin:"-100px" });

    const { scrollYProgress } = useScroll(
        { target: sectionRef, offset: ["start end", "end start"] }
    );

    const timeLineRef = useRef(null);
    const timeLineInView = useInView(timeLineRef, { once: true, margin:"-50px" });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    
    const timeLineVariants = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        }
    };

  return (
    <section
        ref={sectionRef}
        id="about"
        className={`py-24 px-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} relative overflow-hidden`}
    >
        <motion.div style = {{ y }} className='absolute inset-0 overflow-hidden'>
            <div className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}/>
            <div className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}/>
        </motion.div>
        <div className='max-w-6xl mx-auto relative z-10'>
            {/* Section header */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className='text-center mb-20'
            >
                <motion.div
                    variants={itemVariants}
                    className={`text-sm uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} mb-4`}
                >
                    About Me
                </motion.div>
                <motion.h2
                    variants={itemVariants}
                    className='text-3xl md:text-5xl font-light mb-6'
                >
                    My Journey & 
                    <span className='text-blue-500 font-medium'> Passions</span>
                </motion.h2>
            </motion.div>

            <div className='grid lg:grid-cols-2 gap-16 items-start'>
                {/* Personal Story */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className='space-y-8'
                >
                    <motion.div
                        variants={itemVariants}
                        className={`p-8 rounded-2xl border ${isDarkMode ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm' : 'bg-gray-50/80 border-gray-200 backdrop-blur-sm'} `}
                    >
                        <h3 className='text-2xl font-medium mb-6'>My Story</h3>
                        <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300': 'text-gray-700'}`}>
                            I am a passionate software developer with a love for creating innovative solutions. My journey began with a fascination for technology and has evolved into a career where I can combine my creativity with technical skills.
                        </p>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}>
                            Over the years, I have honed my skills in various programming languages and frameworks, always striving to learn and adapt to new challenges. My goal is to build applications that not only solve problems but also enhance user experiences.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className='space-y-4'>
                        <h3 className='text-xl font-medium mb-6'>What I love Building</h3>
                        <div className='grid gap-4'>
                            {PASSIONS.map((passion, index) => (
                                <motion.div
                                key={passion.title}
                                variants={itemVariants}
                                whileHover={{x:4}}
                                className={`flex items-center space-x-4 p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/30 hover:bg-gray-800/50 ' : 'bg-gray-50/50 hover:bg-gray-100/50'} transition-all duration-300`}
                                >
                                    <div className={`p-3 rounded-lg ${
                                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                                    }`}><passion.icon size={20} className='text-blue-500' />
                                    </div>
                                    <div>
                                        <h4 className='font-medium mb-1'>{passion.title}</h4>

                                        <p className={`text-sm ${
                                            isDarkMode? 'text-gray-400':'text-gray-600'
                                        }`}>
                                            {passion.description}
                                        </p>
                                    </div>
                                </motion.div>

                            ))}
                        </div>
                    </motion.div>
                          {/* Digital signature */}
                    <motion.div
                    variants={itemVariants}
                    className='text-center py-8'
                    >
                        <div
                        className={`text-sm ${
                            isDarkMode? 'text-gray-500' : 'text-gray-600'
                        } mb-4`}>
                            Crafted with passion by
                        </div>
                        <div className='flex justify-center'>
                            <img src={SIGNATURE} alt="Rezaul" className='w-28' />
                        </div>
                        <div className='text-lg font-medium text-blue-500 mt-2'>
                            Md Rezaul Hasan
                        </div>
                    </motion.div>
                </motion.div>

                {/* Developer Journey Timeline */}
                <motion.div
                ref = {timeLineRef}
                initial= "hidden"
                animate= {timeLineInView?"visible":"hidden"}
                variants={timeLineVariants}
                className='relative'
                >
                    <h3 className='text-2xl font-medium mb-8 text-center lg:text-left'>
                        My developer journey
                    </h3>

                    {/* Timeline line */}
                    <div
                    className={`absolute left-8 top-16 bottom-0 w-px ${
                        isDarkMode? 'bg-gray-700':'bg-gray-300'
                    }`}
                    />

                    <div className='space-y-8'>
                        
                        {JOURNEY_STEPS.map((step,index)=>(
                            <motion.div
                            key={step.year}
                            variants={stepVariants}
                            whileHover={{x:4}}
                            className='relative flex items-start space-x-6 group'
                            >

                                {/* Timeline dot */}
                                <div
                                className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <step.icon size={24} className='text-white'/>
                                </div>

                                {/* Content */}
                                <div
                                className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                                    isDarkMode?'bg-gray-800/50 border-gray-700 group-hover:border-grey-600 group-hover:bg-gray-800/70'
                                    : 'bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white'
                                } backdrop-blur-sm`}>
                                    <div className='flex items-center justify-between mb-2'>
                                        <h4 className='text-xl font-medium'>{step.title}</h4>
                                        <span
                                        className={`text-sm px-3 py-1 rounded-full ${
                                            isDarkMode? 'bg-gray-700 text-gray-300':'bg-gray-100 text-gray-700'
                                        }`}>{step.year}</span>
                                    </div>
                                    <div
                                    className={`text-sm font-medium ${
                                        isDarkMode? 'text-blue-400':'text-blue-600'
                                    } mb-3`}>
                                        {step.company}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${
                                        isDarkMode? 'text-gray-400':'text-gray-600'
                                    }`}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>


                </motion.div>

          

            </div>
        </div>
    </section>
  )
}

export default AboutSection