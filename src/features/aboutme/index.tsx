import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me h-auto text-center flex items-center justify-center px-6 py-6">
      <div className="flex flex-wrap md:flex-no-wrap items-center">
        <div className="md:w-1/2 w-full mr-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Hello I'm <span className="text-blue-600">Ari Woods</span>
          </h2>
          <p className="mt-2 text-left">
            I am a Full Stack developer based out of Navarre, FL.
          </p>
          <p className="mt-2 text-left">
            It's my passion to dig in and truly understand how things work. I
            love writing code and it shows in what I do.
          </p>
          <p className="mt-2 text-left">
            I currently work at <a>CDK Global</a> where I lead a team of
            talented developers. We create and maintain Communication APIs and responsive web applications.
            I have extensive experience with high volume, large scale web APIs.
          </p>
          <div className="flex text-left">
            <section className="mr-12">
              <h3 className="mt-2 text-left">Languages</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>C#</li>
                <li>SQL</li>
                <li>Html/CSS</li>
              </ul>
            </section>
            <section>
              <h3 className="mt-2 text-left">Frameworks</h3>
              <ul>
                <li>.Net</li>
                <li>React</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="border-solid border-2 sm:mx-auto sm:w-full md:w-1/2 h-64">
          This is my online portfolio that I use to play with new frameworks.  It's very much a work in progress.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
