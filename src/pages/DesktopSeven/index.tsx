import React from "react";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const DesktopSevenPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="sm:h-[1235px] h-[1822px] md:h-[2530px] md:px-5 relative w-full">
          <div className="flex flex-col items-start justify-start max-w-[1107px] mb-[0] mt-[26px] w-full">
            <div className="bg-indigo-900 h-[1222px] flex flex-col items-center justify-start p-9 sm:px-5 rounded-[32px] w-[1916px]">
              <iframe
                className="h-[548px] md:h-auto mb-[29px] mt-[70px] w-[63%]"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" // reemplaza {VIDEO_ID} con el id de tu video
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" h-[12px] p-[100px] sm:px-5  w-[1916px]">
              <Text
                className="mt-[-620px] text-white-A700 text-xl"
                size="txtMontserratRomanBold20"
              >
                1- ¿Que es ChatGpt?
              </Text>
              <Text
                className="md:ml-[0] ml-[22px] mt-3 text-white-A700 text-xl w-[97%] sm:w-full"
                size="txtMontserratRomanBold20"
              >
                ChatGPT es una inteligencia artificial avanzada desarrollada por
                OpenAI. Ofrece capacidades de procesamiento del lenguaje
                natural, ayudando a responder preguntas, generar texto creativo
                y proporcionar asistencia en diversas tareas basadas en el
                lenguaje. Intégralo en tu sitio web para mejorar la interacción
                y obtener respuestas contextualmente relevantes.
              </Text>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[11px] w-[98%] md:w-full">
                <Text
                  className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratRomanBold24"
                >
                  Video anterior
                </Text>
                <Text
                  className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratRomanBold24"
                >
                  Video siguiente
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-deep_purple-A200 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-[9px] top-[0] w-full">
            <header className="absolute bg-deep_purple-A200 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
              <Img
                className="common-pointer h-[57px] sm:ml-[0] ml-[76px] sm:mt-0 my-[9px]"
                src="images/img_close.svg"
                alt="close"
                onClick={() => navigate("/desktopone")}
              />
              <Text
                className="common-pointer sm:ml-[0] ml-[152px] sm:mt-0 my-6 text-white-A700 text-xl"
                size="txtMontserratRomanBold20"
                onClick={() => navigate("/desktopone")}
              >
                Inicio
              </Text>
              <Text
                className="common-pointer mb-[23px] sm:ml-[0] ml-[33px] sm:mt-0 mt-[26px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
                onClick={() => navigate("/desktoptwo")}
              >
                Cursos
              </Text>
              <Text
                className="common-pointer mb-[23px] ml-9 sm:ml-[0] sm:mt-0 mt-[26px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
                onClick={() => navigate("/desktopthree")}
              >
                Membresias
              </Text>
              <Text
                className="common-pointer mb-[21px] ml-9 sm:ml-[0] sm:mt-0 mt-7 text-white-A700 text-xl"
                size="txtMontserratRegular20"
                onClick={() => navigate("/desktopfour")}
              >
                Empresas
              </Text>
              <Text
                className="common-pointer mb-[23px] ml-9 sm:ml-[0] sm:mt-0 mt-[26px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
                onClick={() => navigate("/desktopfive")}
              >
                Sobre nosotros
              </Text>
              <Text
                className="mb-[21px] ml-9 sm:ml-[0] sm:mt-0 mt-7 text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                Blog
              </Text>
              <Img
                className="common-pointer h-6 mb-6 sm:ml-[0] ml-[68px] sm:mt-0 mt-[27px]"
                src="images/img_lock.svg"
                alt="lock"
                onClick={() => navigate("/desktopeight")}
              />
              <Text
                className="common-pointer mb-[25px] sm:ml-[0] ml-[13px] mr-[131px] sm:mt-0 mt-[29px] text-base text-white-A700 underline"
                size="txtMontserratRegular16"
                onClick={() => navigate("/desktopeight")}
              >
                Iniciar Sesión/Registrarse
              </Text>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
