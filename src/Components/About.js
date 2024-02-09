import React from "react"
import '../App.css';


function About() {



    return (
        <div className="AboutPage">

            {/* Header */}


            <section className="about-section">
            <div className="general-info">
            <h2>About The Site!</h2>
            <p>All work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boy</p>
           </div>
            <div className="hero-image">
                <img src="HeroCat.jpg" alt="Hero Cat!"></img>
            </div>
            </section>

            <section className="developers">
                <h2>Developers</h2>


                <div className="Rene">
                    <div className="ReneImage">
                        <img src="" alt="Rene"></img>
                    </div>
                    <h3>Rene Acosta</h3>
                    <p>All work and no play makes Jack a dull boy</p>
                </div>


                <div className="Hunter">
                    <div className="HunterImage">
                        <img src="" alt="Hunter"></img>
                    </div>
                    <h3>Hunter Matyi</h3>
                    <p>All work and no play makes Jack a dull boy</p>
                </div>

                <div className="Eve">
                    <div className="EveImage">
                        <img src="" alt="Eve"></img>
                    </div>
                    <h3>Eve Strittmatter</h3>
                    <p>All work and no play makes Jack a dull boy</p>
                </div>

                <div className="SomethingAbout">
                    <h3>Something About the Project</h3>
                    <p>All work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boy</p>

                </div>
                {/* Footer */}
            </section>
        </div>



    )

}

export default About;