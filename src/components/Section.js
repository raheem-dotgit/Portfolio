'use client'
import Image from 'next/image'


const Section = () =>

{
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                I am <strong>Raheem</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Full Stack Dev</p>
            <img
                src="/images/IMG_1679.jpeg"
                alt="a picture of Raheem smiling"
                className="intro__img"
            />
        </section>
    )
}


export default Section