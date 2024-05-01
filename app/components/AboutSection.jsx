"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className = "text-white">
        <div className = "md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">

            <Image src = "/images/AboutMeImage.png" width={600} height={600} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">
                    About Me
                </h2>
                <p className="text-base lg:text-lg">
                    I am a recent graduate with a bacherlor's in Computer Science.
                    I have experience working in C++, Javascript, Kotlin, React,  HTML, CSS and SQL.
                    I am a quick learner, eager to expand my knowledge and skill set. I enjoy teamwork 
                    and I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    > 
                    {" "} Skills {" "} 
                    </TabButton>
                    
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                    > 
                    {" "} Education {" "} 
                    </TabButton>
                    
                    <TabButton 
                    selectTab={() => handleTabChange("certifications")} 
                    active={tab === "certifications"}
                    > 
                    {" "} Certifications {" "} 
                    </TabButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection