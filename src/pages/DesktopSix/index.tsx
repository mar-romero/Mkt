import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text, Input } from "components";

const DesktopSixPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col  font-montserrat items-center justify-end mx-auto w-full">
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
        <div className="bg-gradient5  flex flex-col items-center justify-start h-[920px]  p-[77px] md:px-10 sm:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[2024px] items-center  w-[1400px] mt-[72px] h-[150px] justify-start mb-[302px] p-10 md:px-5 rounded-[36px]  md:w-full"
            style={{ backgroundImage: "url('images/img_group15.svg')" }}
          >
            <div className="flex flex-col gap-[58px] items-center justify-start  mb-[26px] mt-2 w-[9%] md:w-full">
              <div className="flex flex-row      w-[600%] md:w-full">
                <div className="flex flex-col  w-[60%]">
                  <Text
                    className="text-[18px] sm:text-[32px]  md:text-[34px] text-white-A700"
                    size="txtMontserratRegular36"
                  >
                    Nombre*:
                  </Text>
                  <Input
                    name="grouptwoone"
                    placeholder="Nombre"
                    className="leading-[normal] p-0  placeholder:text-white-A700 text-base text-center w-full"
                    wrapClassName="mt-[18px] w-full"
                    shape="round"
                    variant="fill"
                  ></Input>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[18px] text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratRegular36"
                  >
                    Apellido*:
                  </Text>
                  <Input
                    name="grouptwoone"
                    placeholder="Apellido"
                    className="leading-[normal] left-[2px] p-0 placeholder:text-white-A700 text-base text-center w-full"
                    wrapClassName="mt-[18px] w-full"
                    shape="round"
                    variant="fill"
                  ></Input>
                  <Text
                    className="mt-3.5 text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratRegular36"
                  >
                    Mail*:
                  </Text>
                  <Input
                    name="grouptwoone"
                    placeholder="Mail"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                    wrapClassName="mt-[18px] w-full"
                    shape="round"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col ml-[40px] w-[60%]">
                  <Text
                    className=" text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratRegular36"
                  >
                    Contraseña*:
                  </Text>
                  <Input
                    name="grouptwoone"
                    placeholder="Contraseña"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                    wrapClassName="mt-[18px] w-full"
                    shape="round"
                    variant="fill"
                  ></Input>
                  <Text
                    className="mt-[18px] text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratRegular36"
                  >
                    Repetir contraseña*:
                  </Text>
                  <Input
                    name="grouptwoone"
                    placeholder="Contraseña"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                    wrapClassName="mt-[18px] w-full"
                    shape="round"
                    variant="fill"
                  ></Input>
                  <Text
                    className="mt-[14px] text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratRegular36"
                  >
                    Celular:
                  </Text>
                  <Input
                    name="grouptwoone"
                    placeholder="Celular"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                    wrapClassName="mt-[18px] w-full"
                    shape="round"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button
                  className="cursor-pointer leading-[normal] text-[18px] min-w-[601px] md:min-w-full rounded-[30px] text-5xl sm:text-[38px] md:text-[44px] text-center"
                  color="deep_purple_A200"
                  size="sm"
                >
                  Crear Usuario
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] text-[18px] min-w-[601px] md:min-w-full rounded-[30px] text-5xl sm:text-[38px] md:text-[44px] text-center"
                  color="deep_purple_A200"
                  size="sm"
                >
                  Crearlo con Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSixPage;
