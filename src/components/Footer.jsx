import React from 'react';
export const Footer = () => {
  return (
    <div>
    <hr className="border-yellow-400 my-2 mx-auto w-20" />
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <link rel="icon" type="image/svg+xml" href="/JIRDS (3).svg" />
            <span className="ml-2 text-xl font-bold tracking-wide text-yellow-400 uppercase">
              JIRDS
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-yellow-400">
            JIRDS is a Comprehensive
multi service place that provides educational, Therapeutic 
and recreational services for children with special needs for 
fostering their physical, educational, emotional and social
development and thus enabling them to play, learn, live and 
function in the real world by encouraging them to realize 
their true potential.
            </p>
            <p className="mt-4 text-sm text-yellow-400">
            Our objective is to provide quality education, functional skill
programme that will child or that will enable the child 
to realize their optimal potential in academics, development 
of various skills socio - emotional functions and independent 
livin
            </p>
          </div>
        </div>
       
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-yellow-400">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-yellow-400">Pay here:</p>
            <a
              href="https://rzp.io/l/janani"
              aria-label="Payment"
              title="Payment Page"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Payment Page
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-yellow-400">Phone:</p>
            <a
              href="tel:+91 9948199921"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              9948199921
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-yellow-400">Phone:</p>
            <a
              href="tel:+91 7780392868"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              7780392868
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-yellow-400">Email:</p>
            <a
              href="mailto:jananichilddevelopmentcenter@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              jananichilddevelopment <br /> center@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-yellow-400">Address:</p>
            <a
              href="https://maps.app.goo.gl/4TWngc8pzrhX4p536"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
             2nd Floor, Gopala Nilayam,
Beside Korukonda Coaching Center,
Mayuri Nagar, Miyapur, Hyd- 049.
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-yellow-400">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.youtube.com/@jananichilddevelopmentcent3348/"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100067097294056&sk=about"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="yellow" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="yellow" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-yellow-400">
            Follow Us to get connected and get updates about our work..!
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p className="text-sm text-yellow-400">
          © Copyright 2024 JIRDS. All rights reserved.
          <br />
           Designed and Managed by <a href="https://github.com/njrgourav11" target='_blank'>Gourav</a>
</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/faq"
              className="text-sm text-yellow-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-sm text-yellow-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="text-sm text-yellow-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;