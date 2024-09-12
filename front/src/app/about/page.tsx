/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import "../globals.css";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div
      id="wholeContainer"
      className="border border-gray-700 rounded-lg p-6 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText m-6 md:m-24"
    >
      <div id="frontContainer" className="m-6 md:m-12 h-fit">
        <div id="frontTitle" className="text-center">
          <h1 className="text-6xl font-extrabold">Team Front</h1>
        </div>

        <div
          id="frontCards"
          className="flex flex-col md:flex-row justify-around gap-6 mt-6"
        >
          <div
            id="frontCard"
            className="w-full md:w-64 p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-xl"
          >
            <img
              src="/img/pfp/stefa.jpeg"
              alt="profilePicture"
              className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
            />
            <h1 className="text-center text-2xl p-2">Stefano Corteggiano</h1>
            <hr className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText" />
            <p className="text-lightText dark:text-darkText text-wrap">
              Estudie Administración de empresas en UADE. Frontend developer con
              foco en React, Nextjs y ocasionalmente backend dev. Entusiasta del
              BJJ.
            </p>
            <div id="frontSocial" className="flex justify-around mt-4">
              <Link
                target="_blank"
                href="https://github.com/SCorteggiano"
                className="h-20"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/stefano-corteggiano-a68978311/"
                className="h-20"
              >
                <img
                  src="/img/linkedinLogo.png"
                  alt="linkedin"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
            </div>
          </div>

          <div
            id="frontCard"
            className="w-full md:w-64 p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-xl"
          >
            <img
              src="/img/pfp/mauri.jpg"
              alt="profilePicture"
              className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
            />
            <h1 className="text-center text-2xl p-2">Mauricio Tognoli</h1>
            <hr className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText" />
            <p className="text-lightText dark:text-darkText text-wrap">
              Soy un desarrollador Fullstack especializado en Frontend con fuerte experiencia en JavaScript, HTML, CSS, React y NextJS.
            </p>
            <div id="frontSocial" className="flex justify-around mt-4">
              <Link
                target="_blank"
                href="https://github.com/MauricioTognoli"
                className="h-20"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com/"
                className="h-20"
              >
                <img
                  src="/img/linkedinLogo.png"
                  alt="linkedin"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
            </div>
          </div>

          <div
            id="frontCard"
            className="w-full md:w-64 p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-xl"
          >
            <img
              src="/img/pfp/diego.JPEG"
              alt="profilePicture"
              className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
            />
            <h1 className="text-center text-2xl p-2">Diego Carreon</h1>
            <hr className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText" />
            <p className="text-lightText dark:text-darkText text-wrap">
              Soy un desarrollador FrontEnd apasionado por crear experiencias
              web dinámicas y atractivas. Disfruto transformar ideas en
              interfaces intuitivas y responsivas.
            </p>
            <div id="frontSocial" className="flex justify-around mt-4">
              <Link
                target="_blank"
                href="https://github.com/dg24crn"
                className="h-20"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/diego-carreon-7854412a4/"
                className="h-20"
              >
                <img
                  src="/img/linkedinLogo.png"
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
          <div
            id="backCard"
            className="w-full md:w-64 p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-xl"
          >
            <img
              src="/img/pfp/kelvin.png"
              alt="profilePicture"
              className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
            />
            <h1 className="text-center text-2xl p-2">Kelvin Vidal</h1>
            <hr className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText" />
            <p className="text-lightText dark:text-darkText text-wrap">
              Soy desarrollador Full Stack con experiencia en TypeScript, React,
              Node.js, y NestJS. He liderado proyectos de APIs, branding,
              marketing digital, y soy consultor certificado en Google Ads.
            </p>
            <div id="backSocial" className="flex justify-around mt-4">
              <Link
                target="_blank"
                href="https://github.com/Kelvinvida99"
                className="h-20"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/kelvin-vidal-0b3b59228/"
                className="h-20"
              >
                <img
                  src="/img/linkedinLogo.png"
                  alt="linkedin"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
            </div>
          </div>

          <div
            id="backCard"
            className="w-full md:w-64 p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-xl"
          >
            <img
              src="/img/pfp/manu.jpg"
              alt="profilePicture"
              className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
            />
            <h1 className="text-center text-2xl p-2">Manuel Jimenez</h1>
            <hr className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText" />
            <p className="text-lightText dark:text-darkText text-wrap">
              Soy desarrollador fullstack y estudiante de ingeniería
              informática, especializado en backend con experiencia en NestJS,
              GraphQL, TypeScript, Node.js, PostgreSQL y MongoDB.
            </p>
            <div id="backSocial" className="flex justify-around mt-4">
              <Link
                target="_blank"
                href="https://github.com/Manuel-jimenez10"
                className="h-20"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/manuel-jimenez-a86504217/"
                className="h-20"
              >
                <img
                  src="/img/linkedinLogo.png"
                  alt="linkedin"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
            </div>
          </div>

          <div
            id="backCard"
            className="w-full md:w-64 p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-xl"
          >
            <img
              src="/img/pfp/sebas.jpeg"
              alt="profilePicture"
              className="h-72 w-full md:w-64 object-cover m-auto rounded-xl"
            />
            <h1 className="text-center text-2xl p-2">John Buitrago</h1>
            <hr className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText" />
            <p className="text-lightText dark:text-darkText text-wrap">
              Apasionado por la tecnología, con experiencia en proyectos de
              Backend para e-commerce y plataformas de streaming. Hábil en el
              análisis y resolución de problemas complejos con diversas
              tecnologías.
            </p>
            <div id="backSocial" className="flex justify-around mt-4">
              <Link
                target="_blank"
                href="https://github.com/ssebass1045"
                className="h-20"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/john-sebastian-buitrago-lopez-72b7822b7/"
                className="h-20"
              >
                <img
                  src="/img/linkedinLogo.png"
                  alt="linkedin"
                  className="h-12 rounded-2xl hover:h-14 transition-all duration-250"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
