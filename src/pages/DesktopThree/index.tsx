import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DesktopThreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[2467px] mx-auto relative w-full">
        <div className="md:h-[1045px] h-[2467px] sm:h-[892px] m-auto md:px-5 w-full">
          <div className="h-[2467px] md:h-[892px] m-auto w-full">
            <div className="absolute md:h-[796px] h-[1075px] inset-x-[0] mx-auto top-[2%] w-full">
              <div className="absolute h-[825px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[48rem] ml-auto object-cover w-[64%]"
                  src="images/img_rectangle40.png"
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
                          Membresías
                        </Text>
                        <Img
                          className="h-[133px] md:ml-[0] ml-[254px] mt-[27px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                      <Img
                        className="h-[316px] md:h-auto ml-1 md:ml-[0] object-cover"
                        src="images/img_group2_deep_purple_a100.png"
                        alt="grouptwo"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[333px] left-[20%] top-[7%]"
                  src="images/img_group1.svg"
                  alt="groupone"
                />
              </div>
            </div>
            <div className="absolute bg-deep_purple-A200 flex sm:flex-col  flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-[9px] top-[0] w-full">
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
            <div className="absolute bg-gradient1  bottom-[-8%] h-[1870px] md:h-[892px] inset-x-[0] mx-auto p-[23px] sm:px-5 w-full">
              <div className="absolute bottom-[20%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[77%]">
                <div className="flex flex-col justify-start w-full">
                  <Text
                    className="ml-6 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtMontserratRomanBold32"
                  >
                    <span className="text-white-A700 font-montserrat font-bold">
                      <>
                        Transformá tu futuro con MKT E-Learning.
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-montserrat font-medium">
                      <>
                        Convertite en un Profesional Versátil en el Mundo de los
                        Negocios
                        <br />
                      </>
                    </span>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[15px] mt-[87px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtMontserratSemiBold24"
                  >
                    Acceso Ilimitado a Conocimiento Multidisciplinario y
                    Vanguardista:
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl"
                    size="txtMontserratRegular20"
                  >
                    <>
                      - Sumergite en una amplia gama de cursos que abarcan desde
                      marketing digital y finanzas hasta administración y
                      ventas, todos enriquecidos con la última tecnología en
                      inteligencia artificial.
                      <br />
                      - Desarrollá habilidades prácticas para lanzar o escalar tu
                      propia empresa con nuestra ruta de aprendizaje en
                      emprendimiento.
                      <br />
                      - Dominá las finanzas corporativas y personales para tomar
                      decisiones informadas y potenciar el crecimiento.
                      <br />
                      - Convertite en un estratega de ventas, aprendiendo técnicas
                      avanzadas para cerrar acuerdos y expandir tu cartera de
                      clientes.
                      <br />
                      - Aprendé a gestionar equipos y proyectos con eficiencia,
                      elevando tu capacidad de liderazgo y administración.
                      <br />
                      - Mejorá tu perfil profesional con certificados digitales
                      que respaldan tu expertise y dedicación.
                    </>
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[253px] object-cover right-[2%] bottom-[28%]"
                src="images/img_group11.png"
                alt="groupeleven"
              />
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto top-[45%] w-[92%]">
            <div className="bg-deep_purple-A100 flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[23px] p-[34px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] w-[33%] md:w-full">
              <Text
                className="sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-center text-white-A700"
                size="txtMontserratRomanBold2814"
              >
                <>
                  Membresía:
                  <br />
                  Impulso Mensual
                </>
              </Text>
              <Text
                className="mt-[15px] text-base text-center text-white-A700 w-[97%] sm:w-full"
                size="txtMontserratRegular16"
              >
                Esta membresía está diseñada para aquellos que desean explorar y
                comenzar a aprender con flexibilidad, ofreciendo acceso completo
                a todos los cursos con un compromiso mensual renovable.
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[343px] my-[9px] rounded-[16px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl"
                color="deep_purple_A200"
                size="sm"
              >
                $3.000 ARS / mes
              </Button>
            </div>
            <div className="bg-deep_purple-600 flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[23px] p-[34px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] w-[33%] md:w-full">
              <Text
                className="sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-center text-white-A700"
                size="txtMontserratRomanBold2814"
              >
                <>
                  Membresía:
                  <br />
                  Progreso Semestral
                </>
              </Text>
              <div className="h-48 md:h-[149px] mb-2.5 relative w-[99%]">
                <Text
                  className="absolute inset-x-[0] mx-auto text-[15px] text-center text-white-A700 top-[0] w-[99%] sm:w-full"
                  size="txtMontserratRegular15"
                >
                  Orientada a individuos o empresas que están comprometidos con
                  el aprendizaje continuo y desean una solución a medio plazo,
                  esta membresía ofrece un descuento por el compromiso de seis
                  meses y posiblemente características adicionales o contenido
                  exclusivo.
                </Text>
                <Button
                  className="absolute bottom-[0] cursor-pointer mx-[20px] w-[75%] ml-[10%] font-bold inset-x-[0] leading-[normal] min-w-[343px] mx-auto rounded-[16px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl"
                  color="deep_purple_A200"
                  size="sm"
                >
                  $5.000 ARS / 6 meses
                </Button>
              </div>
            </div>
            <div className="bg-indigo-900 flex flex-col h-[370px] gap-4 items-center justify-start md:ml-[0] ml-[23px] p-[34px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] w-[33%] md:w-full">
              <Text
                className="sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-center text-white-A700"
                size="txtMontserratRomanBold2814"
              >
                <>
                  Membresía:
                  <br />
                  Premium Anual
                </>
              </Text>
              <Text
                className="mt-[15px] text-base text-center text-white-A700 w-[97%] sm:w-full"
                size="txtMontserratRegular16"
              >
                La opción para los más dedicados al crecimiento y desarrollo
                profesional. 
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[343px] my-[50px] rounded-[16px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl"
                color="deep_purple_A200"
                size="sm"
              >
                $12.000 ARS / año
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[314px] inset-x-[0] items-end justify-start max-w-[1203px] mx-auto md:px-5 top-[38.5%] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[94%] md:w-full">
            <Img
              className="h-[195px] md:h-auto object-cover w-[195px]"
              src="images/img_group9.png"
              alt="groupnine"
            />
            <Img
              className="h-[194px] md:h-auto md:ml-[0] ml-[335px] object-cover w-[194px]"
              src="images/img_group8.png"
              alt="groupeight"
            />
            <Img
              className="h-[195px] md:h-auto md:ml-[0] ml-[350px] mr-[-150px] object-cover "
              src="images/img_group10.png"
              alt="groupten"
            />
          </div>
          <div className="md:gap-10 gap-[143px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mr-0.5 w-full">
            <Button
              className="!text-deep_purple-A100 cursor-pointer flex-1 font-bold leading-[normal] ml-[-126px] min-w-[305px] text-center text-xl w-full"
              shape="round"
            >
              SUSCRIBIRME AHORA
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold leading-[normal] min-w-[305px] text-center text-xl w-full"
              shape="round"
            >
              SUSCRIBIRME AHORA
            </Button>
            <Button
              className="!text-indigo-900 cursor-pointer flex-1 font-bold leading-[normal] ml-[156px] min-w-[305px] text-center text-xl w-full"
              shape="round"
            >
              SUSCRIBIRME AHORA
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
