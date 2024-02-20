import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Slider, Text } from "components";

const DesktopOnePage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  function handleNavigate() {
    const win = window.open("www.google.com", "_blank");
    win.focus();
  }
  function handleNavigate1() {
    const win = window.open("www.google.com", "_blank");
    win.focus();
  }
  function handleNavigate2() {
    const win = window.open("www.google.com", "_blank");
    win.focus();
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="md:h-[1145px] sm:h-[1311px] h-[1822px] md:px-5 relative w-full">
          <div className="absolute md:h-[1083px] h-[1086px] inset-x-[0] mx-auto top-[4%] w-full">
            <div className="absolute h-[825px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[48rem] ml-auto object-cover w-[64%]"
                src="images/img_rectangle2.png"
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
                  <div className="absolute flex flex-col gap-[15px] items-start justify-start left-[4%] top-[17%]">
                    <Text
                      className="sm:text-[37.05px] md:text-[43.05px] text-[47.05px] text-white-A700"
                      size="txtMontserratRomanBold4705"
                    >
                      <span className="text-white-A700 font-montserrat text-left font-bold">
                        <>
                          Transformá tu
                          <br />
                          Visión en Acción:
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-montserrat text-left font-medium">
                        <>
                          Aprendé, Emprendé y<br />
                          Liderá con Nosotros
                        </>
                      </span>
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-[35rem]"
                      size="txtMontserratRegular20"
                    >
                      <span className="text-white-A700 font-montserrat text-left font-normal">
                        Cursos 100% online de{" "}
                      </span>
                      <span className="text-white-A700 font-montserrat text-left font-semibold">
                        Marketing Digital, Comercialización, Finanzas,
                        Emprendedurismo, Administración, Liderazgo
                      </span>
                      <span className="text-white-A700 font-montserrat text-left font-normal">
                        <>
                          {" "}
                          y mucho más.
                          <br />
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute left-[4%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[14%]"
                  size="txtMontserratMedium24"
                >
                  MKT E-Learning
                </Text>
                <Img
                  className="absolute h-[356px] inset-x-[0] mx-auto object-cover top-[23%] left-[-12%] "	
                  src="images/img_group2.png"
                  alt="groupTwo"
                />
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[152px] justify-start  left-[4%] top-[5%] w-[44%]">
                <Img
                  className="h-[333px] md:ml-[0] ml-[293px] "
                  src="images/img_group1.svg"
                  alt="groupOne"
                />
                <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-start mr-[60px] w-[91%] md:w-full">
                  <div
                    className="common-pointer bg-indigo-900 flex flex-col items-center justify-start mb-[73px] p-2.5 rounded-[30px] shadow-bs mt-[60px]"
                    onClick={() => navigate("/desktopthree")}
                  >
                    <Text
                      className="text-base text-center text-white-A700 w-[97%] sm:w-full "
                      size="txtMontserratRomanBold16"
                    >
                      Suscribite a la plataforma más completa y económica del
                      mercado
                    </Text>
                  </div>
                  <Img
                    className="h-[133px] mt-[65px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-colors bg-gradient  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[76px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col justify-start mt-24 w-[84%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Sobre Nosotros
              </Text>
              <Text
                className="mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratRomanBold32"
              >
                ¿Qué ofrece MKT E-Learning?
              </Text>
              <Text
                className="mt-[35px] text-white-A700 text-xl w-full"
                size="txtMontserratMedium20"
              >
                <span className="text-white-A700 font-montserrat text-left font-medium">
                  Nuestra plataforma está meticulosamente diseñada para{" "}
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  ir más allá de la teoría
                </span>
                <span className="text-white-A700 font-montserrat text-left font-medium">
                  , brindándote acceso directo al{" "}
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  conocimiento práctico y a las estrategias comprobadas
                </span>
                <span className="text-white-A700 font-montserrat text-left font-medium">
                  {" "}
                  de un colectivo de{" "}
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  expertos en marketing, finanzas y negocios
                </span>
                <span className="text-white-A700 font-montserrat text-left font-medium">
                  , quienes han fusionado años de experiencia real para
                  enriquecer tu aprendizaje.
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[169px] mt-[78px] w-[71%] md:w-full">
                <Img
                  className="h-[156px] md:h-auto object-cover"
                  src="images/img_group5.png"
                  alt="groupFive"
                />
                <Img
                  className="h-[156px] md:h-auto object-cover"
                  src="images/img_group4.png"
                  alt="groupFour"
                />
              </div>
              <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between ml-28 md:ml-[0] mt-[35px] w-[81%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  <span className="text-white-A700 font-inter font-bold">
                    Cursos 100% online{" "}
                  </span>
                  <span className="text-white-A700 font-inter font-medium">
                    para que estudies desde donde quieras
                  </span>
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Membresías con acceso ilimitado a todos los cursos
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[191px] mt-[49px] w-[68%] md:w-full">
                <Img
                  className="h-[139px] md:h-auto mt-[17px] object-cover"
                  src="images/img_group6.png"
                  alt="groupSix"
                />
                <Img
                  className="h-[156px] md:h-auto object-cover"
                  src="images/img_group7.png"
                  alt="groupSeven"
                />
              </div>
              <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between md:ml-[0] ml-[150px] mt-6 w-3/4 md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Actualización constante
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Últimas tendencias en IA
                </Text>
              </div>
            </div>
          </div>
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
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-gradient1  flex flex-col items-center justify-end mx-auto p-[54px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start mt-[175px] w-[83%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Certificación
              </Text>
              <Text
                className="mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratRomanBold32"
              >
                Certificado Digital
              </Text>
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between mt-[38px] w-full">
                <Img
                  className="h-[378px] md:h-auto object-cover"
                  src="images/img_a411.png"
                  alt="a411"
                />
                <div className="md:h-[269px] h-[284px] relative w-[49%] md:w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-white-A700 text-xl top-[0] w-full"
                    size="txtMontserratMedium20"
                  >
                    MKT elearning te otorga un certificado digital que valida y
                    reconoce tus habilidades y conocimientos ante el mundo. No
                    solo aprenderás con expertos en marketing, finanzas y
                    negocios, sino que también obtendrás la acreditación que te
                    abrirá puertas en la industria. Asegurá tu futuro con
                    nuestras credenciales que te distinguen en el mercado
                    laboral digital.
                  </Text>
                  <Button
                    className="common-pointer absolute bottom-[0] cursor-pointer font-bold leading-[normal] left-[0] min-w-[309px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                    onClick={() => navigate("/desktopthree")}
                    color="deep_purple_A200"
                    size="sm"
                  >
                    Quiero Inscribirme
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient2  flex flex-col items-center justify-end mt-[-16px] mx-auto pt-[140px] md:px-10 sm:px-5 px-[140px] w-full z-[1]">
            <div className="flex flex-col justify-start w-[95%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Cursos
              </Text>
              <Text
                className="mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratRomanBold32"
              >
                Cursos más vistos
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-[84px] w-full">
                <Img
                  className="cursor-pointer h-[55px] mb-[150px] sm:mt-0 mt-[154px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                  onClick={() => sliderRef.current?.slidePrev?.()}
                />

                <Slider
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="md:ml-[0] ml-[59px] w-[90%]"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-deep_purple-A200 w-[67%] h-[305px] flex-col items-start justify-start ml-[25px]   rounded-bl-[18px] rounded-[20px]">
                        <div className="flex flex-col w-[350px] items-start justify-start my-4">
                          <Img
                            className="h-[214px] md:h-auto object-cover mb-[12px]"
                            src="images/img_rectangle10.png"
                            alt="rectangleTen"
                          />
                          <Text
                            className="text-white-A700 text-xl ml-[12px]"
                            size="txtMontserratRomanBold20"
                          >
                            Marketing Digital
                          </Text>
                          <Text
                            className="text-base text-white-A700 ml-[12px] "
                            size="txtMontserratMedium16"
                          >
                            Claudio Cavezzali
                          </Text>
                          <Text
                            className="text-base text-white-A700 ml-[12px]"
                            size="txtMontserratRomanLight16"
                          >
                            14 clases
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
                <Img
                  className="cursor-pointer h-[55px] mb-[150px] sm:mt-0 mt-[154px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                  onClick={() => sliderRef.current?.slideNext?.()}
                />
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[309px] md:ml-[0] ml-[395px] mr-[392px] mt-[54px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/desktopthree")}
                color="deep_purple_A200"
                size="sm"
              >
                Ver todos los cursos
              </Button>
              <Text
                className="md:ml-[0] ml-[313px] mt-[215px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratRomanBold32"
              >
                Seguinos en nuestras redes!
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[257px] mt-[43px] w-[54%] md:w-full">
                <Img
                  className="common-pointer h-[138px] w-[138px]"
                  src="images/img_vector_white_a700.svg"
                  alt="vector_One"
                  onClick={handleNavigate2}
                />
                <Img
                  className="common-pointer h-[138px] sm:ml-[0] ml-[84px] w-[139px]"
                  src="images/img_vector_white_a700_138x139.svg"
                  alt="vector_Two"
                  onClick={handleNavigate1}
                />
                <Img
                  className="common-pointer h-[138px] sm:ml-[0] ml-[83px] w-[138px]"
                  src="images/img_vector_white_a700_138x138.svg"
                  alt="vector_Three"
                  onClick={handleNavigate}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-deep_purple-A200 flex flex-col items-center justify-start p-[74px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-center mb-[69px] w-[47%] md:w-full">
            <Img
              className="h-[133px]"
              src="images/img_vector_white_a700_133x105.svg"
              alt="vector_Four"
            />
            <div className="flex flex-col gap-[9px] items-start justify-start md:mt-0 mt-0.5">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratRomanBold32"
              >
                Dirección
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] text-white-A700 text-xl w-full"
                size="txtMontserratMedium20"
              >
                asdahduasashshduashdasuhuaidhhdashhdasudhsauhduahdusahuhduashdhadasuhduahduasidhasdu
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
