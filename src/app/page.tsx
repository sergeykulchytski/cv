'use client'

import photoCV from '../assets/cv.jpg'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="max-w-7xl mx-auto text-gray-600">

      <header className="p-4 md:px-8 bg-gray-100 uppercase tracking-[0.2rem] md:tracking-[0.5rem] flex flex-wrap">
        <div className="mr-auto py-2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl">Sergey Kulchytski</h1>
          <p className="md:text-xl mt-1">Front-end Software Engineer</p>
        </div>
        <Image src={photoCV} alt="Sergey Kulchytski" loading={'eager'} width={200} height={200} className="py-2 rounded-[50%]" />
      </header>

      <article className="flex flex-wrap">
        <aside className="w-full md:w-1/3">
          <section className="p-4 md:p-8">
            <h2 className="heading">Contact</h2>
            <ul>
              <li>Minsk, Belarus</li>
              <li>workintellect@gmail.com</li>
              <li className="hidden"><a href="https://t.me/sergeykulchytski" target="_blank" rel="nofollow noopenner" className="underline">Telegram (@sergeykulchytski)</a>
              </li>
              <li><a href="https://www.linkedin.com/in/sergey-kulchytski/" target="_blank" rel="nofollow noopenner" className="underline">Linkedin</a></li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Github</h2>
            <ul>
              <li><a href="https://github.com/sergeykulchytski" target="_blank" rel="nofollow noopenner" className="underline">Link to the github</a></li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Education</h2>
            <p>Belarusian State University of Informatics and Radioelectronics (2011)</p>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Languages</h2>
            <ul>
              <li>English - B1</li>
              <li>Russian - Native</li>
              <li>Belarussian - Native</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Workflow Skills</h2>
            <ul>
              <li>Task estimation</li>
              <li>Attended daily stand-ups with the development team</li>
              <li>Participated in weekly check-ins with the client</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Soft Skills</h2>
            <ul>
              <li>Team collaboration</li>
              <li>Self-organization</li>
              <li>Accountable</li>
              <li>Communication</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Programming</h2>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>storybook</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Frameworks</h2>
            <ul>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Drupal Experience</h2>
            <ul>
              <li>Drupal 7–11</li>
              <li>theme development</li>
              <li>twig templating</li>
              <li>custom JS behaviors</li>
              <li>Composer</li>
              <li>Drush</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Task Runners & Bundlers</h2>
            <ul>
              <li>Gulp</li>
              <li>Webpack</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Code Quality</h2>
            <ul>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>Husky</li>
              <li>Stylelint</li>
            </ul>
          </section>
        </aside>
        
        <div className="w-full md:w-2/3">
          <section className="p-4 md:p-8">
            <h2 className="heading">Work experience</h2>
            <div className="mb-3">
              <h3>LLC “Attico”</h3>
              <p className="period">06.2019 – present</p>
              <p>Worked as a frontend developer for Drupal-based projects.</p>
              <p>Worked with Drupal 7–11 on theme development:</p>
              <ul>
                <li>Created responsive layouts with HTML/CSS</li>
                <li>Built custom Twig templates (Drupal 8+)</li>
                <li>Wrote JavaScript behaviors using Drupal.attachBehaviors()</li>
              </ul>
            </div>
            <div>
              <h3>LLC “Eastern Technologies”</h3>
              <p className="period">07.2015 – 05.2019</p>
              <p>Independently built complete Drupal 7 websites</p>
            </div>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Projects</h2>
            <div className="pb-4 md:p-4">
              <h3>Artec</h3>
              <ul>
                <li><strong>Position:</strong> Frontend developer</li>
                <li><strong>Responsibilities:</strong> frontend, support, estimations, implement features, refactorings, design system, code review</li>
                <li><strong>Environment:</strong> html, css, sass, bootstrap, javascript, twig, storybook, jQuery, gulp, Drupal 9, docker4drupal, drush, composer, Notion, Weeek</li>
                <li><strong>Period:</strong> 2020 - now</li>
              </ul>
            </div>
            <div className="pb-4 md:p-4">
              <h3>Landing jordan-revaz.ch</h3>
              <ul>
                <li><strong>Position:</strong> Frontend developer</li>
                <li><strong>Responsibilities:</strong> frontend</li>
                <li><strong>Environment:</strong> html, css, javascript</li>
              </ul>
            </div>
            <div className="pb-4 md:p-4">
              <h3>Landing “application solution”</h3>
              <ul>
                <li><strong>Position:</strong> Frontend developer</li>
                <li><strong>Responsibilities:</strong> frontend</li>
                <li><strong>Environment:</strong> html, css, javascript</li>
                <li><strong>Period:</strong> 2020</li>
              </ul>
            </div>
            <div className="pb-4 md:p-4">
              <h3>Redstone</h3>
              <ul>
                <li><strong>Position:</strong> Fullstack developer</li>
                <li><strong>Link:</strong> <a href="https://redstone.by/" target="_blank" rel="nofollow noopenner" className="underline">https://redstone.by/</a></li>
                <li><strong>Responsibilities:</strong> backend and frontend</li>
                <li><strong>Environment:</strong> Drupal 7, css, html, php, js, jQuery, Bootstrap, webform, colorbox, slick slider, fullPage slider, lamp server</li>
                <li><strong>Period:</strong> 2017</li>
              </ul>
            </div>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Development Environment</h2>
            <ul>
              <li>VSCode</li>
              <li>PHPStorm</li>
              <li>Sublime Text</li>
              <li>Git</li>
              <li>GitLab</li>
              <li>GitHub</li>
              <li>Bitbucket</li>
              <li>Terminal</li>
              <li>Chrome DevTools</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Container & Local Development</h2>
            <ul>
              <li>docker</li>
              <li>Lando</li>
              <li>docker4drupal</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Design tools</h2>
            <ul>
              <li>Figma</li>
              <li>Avocode</li>
            </ul>
          </section>
          <section className="p-4 md:p-8">
            <h2 className="heading">Operating Systems</h2>
            <ul>
              <li>Linux</li>
            </ul>
          </section>
        </div>
        
      </article>
    </main>
  )
}
