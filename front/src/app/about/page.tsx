/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import "../globals.css";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div>
      <div id="wholeContainer" className="m-6 md:m-24">
        <div id="frontContainer" className="m-6 md:m-12 h-fit">
          <div id="frontTitle" className="text-center">
            <h1 className="text-6xl font-extrabold">Team Front</h1>
          </div>

          <div
            id="frontCards"
            className="flex flex-col md:flex-row justify-around gap-6 mt-6"
          >
            <div id="frontCard" className="w-full md:w-64 p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="profilePicture"
                className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
              />
              <h1 className="text-center text-2xl p-2">Fulano Detal</h1>
              <hr />
              <p className="text-wrap">
                Soy una persona que no existo, esto solamente es una descripcion
                generica para corroborar que los estilos funcionen
                correctamente.
              </p>
              <div id="frontSocial" className="flex justify-around mt-4">
                <Link target="_blank" href="https://github.com/" className="h-20">
                  <img
                    src="/img/githubLogo.png"
                    alt="github"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
                <Link target="_blank" href="https://linkedin.com/" className="h-20">
                  <img
                    src="/img/linkedingLogo.png"
                    alt="linkedin"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
              </div>
            </div>

            <div id="frontCard" className="w-full md:w-64 p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="profilePicture"
                className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
              />
              <h1 className="text-center text-2xl p-2">Fulano Detal</h1>
              <hr />
              <p className="text-wrap">
                Soy una persona que no existo, esto solamente es una descripcion
                generica para corroborar que los estilos funcionen
                correctamente.
              </p>
              <div id="frontSocial" className="flex justify-around mt-4">
                <Link target="_blank" href="https://github.com/" className="h-20">
                  <img
                    src="/img/githubLogo.png"
                    alt="github"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
                <Link target="_blank" href="https://linkedin.com/" className="h-20">
                  <img
                    src="/img/linkedingLogo.png"
                    alt="linkedin"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
              </div>
            </div>

            <div id="frontCard" className="w-full md:w-64 p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="profilePicture"
                className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
              />
              <h1 className="text-center text-2xl p-2">Fulano Detal</h1>
              <hr />
              <p className="text-wrap">
                Soy una persona que no existo, esto solamente es una descripcion
                generica para corroborar que los estilos funcionen
                correctamente.
              </p>
              <div id="frontSocial" className="flex justify-around mt-4">
                <Link target="_blank" href="https://github.com/" className="h-20">
                  <img
                    src="/img/githubLogo.png"
                    alt="github"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
                <Link target="_blank" href="https://linkedin.com/" className="h-20">
                  <img
                    src="/img/linkedingLogo.png"
                    alt="linkedin"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="backContainer" className="m-6 md:m-12">
          <div id="backTitle" className="text-center mt-24">
            <h1 className="text-6xl font-extrabold">Team Back</h1>
          </div>

          <div
            id="backCards"
            className="flex flex-col md:flex-row justify-around gap-6 mt-6"
          >
            <div id="backCard" className="w-full md:w-64 p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="profilePicture"
                className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
              />
              <h1 className="text-center text-2xl p-2">Fulano Detal</h1>
              <hr />
              <p className="text-wrap">
                Soy una persona que no existo, esto solamente es una descripcion
                generica para corroborar que los estilos funcionen
                correctamente.
              </p>
              <div id="backSocial" className="flex justify-around mt-4">
                <Link target="_blank" href="https://github.com/" className="h-20">
                  <img
                    src="/img/githubLogo.png"
                    alt="github"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
                <Link target="_blank" href="https://linkedin.com/" className="h-20">
                  <img
                    src="/img/linkedingLogo.png"
                    alt="linkedin"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
              </div>
            </div>

            <div id="backCard" className="w-full md:w-64 p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="profilePicture"
                className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
              />
              <h1 className="text-center text-2xl p-2">Fulano Detal</h1>
              <hr />
              <p className="text-wrap">
                Soy una persona que no existo, esto solamente es una descripcion
                generica para corroborar que los estilos funcionen
                correctamente.
              </p>
              <div id="backSocial" className="flex justify-around mt-4">
                <Link target="_blank" href="https://github.com/" className="h-20">
                  <img
                    src="/img/githubLogo.png"
                    alt="github"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
                <Link target="_blank" href="https://linkedin.com/" className="h-20">
                  <img
                    src="/img/linkedingLogo.png"
                    alt="linkedin"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
              </div>
            </div>

            <div id="backCard" className="w-full md:w-64 p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                alt="profilePicture"
                className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
              />
              <h1 className="text-center text-2xl p-2">Fulano Detal</h1>
              <hr />
              <p className="text-wrap">
                Soy una persona que no existo, esto solamente es una descripcion
                generica para corroborar que los estilos funcionen
                correctamente.
              </p>
              <div id="backSocial" className="flex justify-around mt-4">
                <Link target="_blank" href="https://github.com/" className="h-20">
                  <img
                    src="/img/githubLogo.png"
                    alt="github"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
                <Link target="_blank" href="https://linkedin.com/" className="h-20">
                  <img
                    src="/img/linkedingLogo.png"
                    alt="linkedin"
                    className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
