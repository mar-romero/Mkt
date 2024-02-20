import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const DesktopFivePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[2467px] mx-auto relative w-full">
        <div className="absolute h-[1527px] sm:h-[796px] md:h-[967px] inset-x-[0] mx-auto md:px-5 top-[2%] w-full">
          <div className="flex flex-col m-auto w-full">
            <div className="absolute md:h-[796px] h-[1075px] inset-x-[0] mx-auto top-[1%] w-full">
              <div className="absolute h-[825px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[48rem] ml-auto object-cover w-[64%]"
                  src="images/img_rectangle40_2.png"
                  alt="rectangleTwo"
                />
                <Img
                  className="absolute h-[825px] inset-[0] justify-center m-auto object-cover md:w-full"
                  src="images/img_vector1.png"
                  alt="vectorOne"
                />
              </div>
              <div className="absolute h-[1083px] inset-[0] justify-center m-auto w-full">
                <div className="h-[1083px] m-auto w-full">
                  <div className="h-[1083px] m-auto w-full">
                    <Img
                      className="md:h-[1083px] h-[1500px] m-auto object-cover w-full"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                    <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start left-[4%] top-[24%] w-[48%]">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[57px] w-[59%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtMontserratMedium24"
                        >
                          MKT E-Learning
                        </Text>
                        <Text
                          className="sm:text-[37.05px] md:text-[43.05px] text-[47.05px] text-white-A700"
                          size="txtMontserratRomanBold4705"
                        >
                          Sobre Nosotros
                        </Text>
                        <Img
                          className="h-[133px] md:ml-[0] ml-[254px] mt-[27px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start mt-[-286px] mx-auto p-[172px]  md:px-10 sm:px-5 w-full z-[1]">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-start mb-[327px] mt-[1052px] w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px]  text-[32px] text-white-A700"
                    size="txtMontserratRomanBold32"
                  >
                    Sobre MKT E-Learning
                  </Text>
                  <Text
                    className="leading-[122.30%] text-base text-white-A700 w-full"
                    size="txtMontserratMedium16"
                  >
                    En MKT eLearning, nos impulsa la convicción de que una
                    educación de calidad en negocios debe ser accesible y
                    avanzada, capaz de equipar a los profesionales con las
                    herramientas necesarias para triunfar en un mercado en
                    constante evolución. Nuestra esencia se centra en la fusión
                    de conocimientos prácticos con tecnologías de punta,
                    ofreciendo cursos que abarcan desde marketing digital hasta
                    administración y ventas, todos liderados por expertos con
                    una profunda comprensión teórica y experiencia real en la
                    industria.
                  </Text>
                </div>
                <Img
                  className="md:flex-1 h-[275px] sm:h-auto object-cover rounded-[78px] w-[39%] md:w-full"
                  src="images/img_rectangle53.png"
                  alt="rectanglefiftyt"
                />
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[304px] left-[38%] object-cover top-[15%]"
            src="images/img_group2_deep_purple_a100_304x266.png"
            alt="grouptwo"
          />
        </div>
        <Img
          className="absolute h-[333px] left-[20%] top-[5%]"
          src="images/img_group1.svg"
          alt="groupone"
        />
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
        <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] mx-auto top-[33%] pb-[175px] md:px-5 px-[175px] w-full">
          <div className="flex flex-col mx-auto w-[76%] mt-[592px] md:w-full">
            <Text
              className="leading-[122.30%] mx-auto text-base text-white-A700 w-full"
              size="txtMontserratMedium16"
            >
              Bajo la dirección visionaria de Victoria Sangiovani Sandoval y
              Claudio Franco Cavezzali, MKT Elearning se compromete a mantenerse
              a la vanguardia de la innovación educativa, ofreciendo programas
              que no solo enseñan, sino que también inspiran y transforman.
              Valoramos la integridad, la excelencia y el empoderamiento, y nos
              esforzamos por reflejar estos principios en cada curso, cada
              lección y cada interacción, asegurando que nuestros estudiantes
              estén preparados para convertirse en los líderes y pioneros del
              mañana.
            </Text>
            <Img
              className="h-[405px] mt-[60px] object-cover rounded-[36px] w-[39%] z-[1]"
              src="images/img_rectangle54.png"
              alt="rectanglefiftyf"
            />
            <Img
              className="h-[405px] ml-auto mr-[90px] mt-[-406px] object-cover rounded-[36px] w-[39%] z-[1]"
              src="images/img_rectangle55.png"
              alt="rectanglefiftyf_One"
            />
          </div>
          <div className="bg-deep_purple-A200 flex flex-col gap-[17px] w-[463px] items-center justify-start mb-[260px] ml-[189px] mt-[-30px] mr-[1000px] p-[29px] sm:px-5 rounded-bl-[55px] rounded-br-[55px] z-[1]">
            <Text
              className="leading-[122.30%] text-center text-white-A700 text-xl"
              size="txtMontserratRomanBold20"
            >
              <>
                María Victoria
                <br />
                Sangiovani Sandoval
              </>
            </Text>
            <Text
              className="leading-[122.30%] mb-[3px] text-base text-center text-white-A700"
              size="txtMontserratMedium16"
            >
              <>
                Lic. en Administración y Gestión Empresarial - UNSAM
                <br />
                <br />
                Posgrado en Marketing Estratégico - UNSAM
                <br />
                <br />
                Posgrado en Gestión de Proyectos - UTN
                <br />
                <br />
                Posgrado en Marketing B2B - UNSAM
              </>
            </Text>
          </div>
          <div className="bg-deep_purple-A200 flex flex-col w-[463px]  gap-[22px] items-center justify-end ml-auto mr-[279px] mt-[-545px] p-[27px] sm:px-5 rounded-bl-[55px] rounded-br-[55px] z-[1]">
            <Text
              className="leading-[122.30%] mt-0.5 text-center text-white-A700 text-xl"
              size="txtMontserratRomanBold20"
            >
              <>
                Claudio Franco
                <br />
                Cavezzali
              </>
            </Text>
            <Text
              className="leading-[122.30%] text-base text-center text-white-A700"
              size="txtMontserratMedium16"
            >
              <>
                Lic. en Comercialización y Marketing - Universidad Siglo XXI
                <br />
                <br />
                Posgrado en Marketing Estratégico - UNSAM
                <br />
                <br />
                Posgrado en Marketing B2B - UNSAM
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
