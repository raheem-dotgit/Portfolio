import Image from "next/image";


const AboutMe = () =>
{
    return (
        <section className="about--me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">
                Designer & Developer based out of NYC
            </p>

            <div className="about--me__body">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo
                </p>
            </div>
            <img src="/images/WhatsApp%20Image%202023-10-22%20at%202.30.46%20AM.jpeg" alt=""  className="about-me__img"/>
        </section>

    )
}

export default AboutMe