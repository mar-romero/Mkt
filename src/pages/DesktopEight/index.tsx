import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text, Input, Button } from "components";

const DesktopEightPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col  font-montserrat items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-deep_purple-A200 flex flex-row md:gap-10  items-center justify-between p-[9px] w-full">
            <Img
              className="common-pointer h-[45px] ml-[67px]"
              src="images/img_close_3.svg"
              alt="close"
              onClick={() => navigate(-1)}
            />
            <Text
              className="common-pointer mr-16 text-white-A700 text-xl"
              size="txtMontserratRomanBold20"
              onClick={() => navigate("/desktopone")}
            >
              Inicio
            </Text>
          </div>
          <div className="md:h-[1253px] h-[856px]  md:px-5 relative w-full">
            <div className="absolute bg-gradient6  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[142px] md:px-10 sm:px-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[400px] items-center justify-start mb-[276px] p-[37px] sm:px-5 rounded-[36px] w-[400px] md:w-full"
                style={{ backgroundImage: "url('images/img_group15.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mb-[45px] mt-[58px] w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[90%] mt-[-70px] md:w-full">
                    <Text
                      className="text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtMontserratRegular36"
                    >
                      Mail o Usuario:
                    </Text>
                    <Input
                      name="groupthree"
                      placeholder="Mail o Usuario"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                      wrapClassName="mt-[18px] w-full"
                      shape="round"
                      variant="fill"
                    ></Input>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[15px] text-[18px] sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtMontserratRegular36"
                    >
                      Contraseña:
                    </Text>
                    <Input
                      name="groupthree"
                      placeholder="Contraseña"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-center w-full"
                      wrapClassName="mt-[18px] w-full"
                      shape="round"
                      variant="fill"
                    ></Input>
                  </div>
                  <Button
                    className="cursor-pointer text-[18px] font-bold leading-[normal] min-w-[309px] mt-7 rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="deep_purple_A200"
                    size="sm"
                    onClick={() => navigate("/desktopone")}
                  >
                    Iniciar sesion
                  </Button>
                  <Text
                    className="mt-10 text-[18px] md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtMontserratRegular24"
                  >
                    ¿Olvido contraseña o mail?
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopEightPage;
