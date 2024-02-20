import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text, TextArea } from "components";

const DesktopFourPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[2467px] mx-auto relative w-full">
        <div className="md:h-[1256px] h-[2467px] m-auto md:px-5 w-full">
          <div className="absolute h-[1527px] md:h-[796px] inset-x-[0] mx-auto top-[1%] w-full">
            <div className="absolute md:h-[796px] h-[1075px] inset-x-[0] mx-auto top-[2%] w-full">
              <div className="absolute h-[825px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[48rem] ml-auto object-cover w-[64%]"
                  src="images/img_rectangle40_1.png"
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
                          Empresas
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
              </div>
            </div>
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
          <div className="absolute bg-gradient1  bottom-[0] h-[1675px] flex flex-col gap-[50px] inset-x-[0] items-center justify-start mx-auto p-[119px] md:px-10 sm:px-5 w-full">
            <Text
              className="mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratRomanBold32"
            >
              Maximizá el Potencial de tu Empresa con MKT eLearning
            </Text>
            <Text
              className="text-white-A700 font-montserrat mt-[-25px] text-[22px] text-left font-medium"
              size="txtMontserratRegular20"
            >
              Transformá a tus colaboradores en líderes del mercado con nuestro
              programa de membresía corporativa. Diseñado para empresas
              visionarias, nuestro programa ofrece una ruta de aprendizaje
              integral que fusiona teoría y práctica en áreas clave como
              marketing digital, finanzas, administración, ventas y la
              revolucionaria inteligencia artificial.
            </Text>
            <div className="absolute bg-gradient4  flex flex-col inset-x-[0] items-center justify-end max-w-[1096px] mx-auto p-[39px] md:px-5 rounded-[41px] top-[25%] w-full">
              <Text
                className="mt-[23px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                <>
                  - Acceso exclusivo a más de 90 cursos, meticulosamente
                  actualizados y dictados por renombrados especialistas de habla
                  hispana.
                  <br />
                  - Desarrollo profesional continuo con materiales didácticos
                  que marcan tendencia en la industria.
                  <br />
                  - Herramientas avanzadas para monitorear el progreso
                  individual, asegurando un aprendizaje efectivo y medible.
                  <br />- Flexibilidad para crear programas de aprendizaje
                  personalizados, adaptados a las necesidades y objetivos
                  específicos de cada miembro de tu equipo.
                </>
              </Text>
            </div>
            <div className="absolute  flex flex-col inset-x-[0] items-center justify-end max-w-[1096px] mx-auto p-[39px] md:px-5 rounded-[41px] top-[55%] w-full">
              <Text
                className="text-center text-white-A700 text-xl w-[92%] sm:w-full"
                size="txtMontserratSemiBold20"
              >
                Invertí en el crecimiento de tu empresa con MKT eLearning, donde
                cada curso es un paso adelante hacia la excelencia empresarial.
              </Text>
              <div className="flex flex-col items-center justify-start  w-[45%] mt-[35px] md:w-full">
                <Input
                  name="groupfour"
                  placeholder="Empresa"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                  wrapClassName="w-full"
                  shape="round"
                  variant="fill"
                ></Input>
                <Input
                  name="groupthree"
                  placeholder="Teléfono"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                  wrapClassName="mt-[18px] w-full"
                  shape="round"
                  variant="fill"
                ></Input>
                <Input
                  name="grouptwoone"
                  placeholder="Mail"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                  wrapClassName="mt-[18px] w-full"
                  shape="round"
                  variant="fill"
                ></Input>
                <TextArea
                  className="bg-deep_purple-A100 border-0 leading-[normal] mt-[18px] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-[9px] text-base text-center placeholder:text-white-A700 text-white-A700 w-full"
                  name="grouponeone"
                  placeholder="Consulta"
                ></TextArea>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[309px] mt-7 rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="deep_purple_A200"
                  size="sm"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
