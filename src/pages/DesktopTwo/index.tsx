import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="sm:h-[1235px] h-[1822px] md:h-[2530px] md:px-5 relative w-full">
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
                        Nuestros Cursos
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
          <div className="absolute  bg-deep_purple-B500 bg-gradient1 top-[750px] bottom-[-125px] h-[70%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[76px] md:px-100 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:ml-[0] ml-[19px] mt-[171px] w-[89%] md:w-full">
              <div className="bg-indigo-900 flex flex-col items-start justify-start mb-[473px] p-[26px] sm:px-5 rounded-[32px] w-[26%] md:w-full">
                <Input
                  name="groupfortynine"
                  placeholder="Buscar curso"
                  className="leading-[normal] p-0 placeholder:text-indigo-900 text-base text-left w-full"
                  wrapClassName="mt-[5px] rounded-[18px] w-full"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[38px] w-[99%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Marketing
                  </Text>
                  <Line className="bg-deep_purple-A100 h-px w-full" />
                </div>
                <Input
                  name="groupeighty"
                  placeholder="Inteligencia Artificial"
                  className="leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                  wrapClassName="mt-[21px] pr-[35px] w-[99%]"
                ></Input>
                <Input
                  name="groupeightyfour"
                  placeholder="Inteligencia Artificial"
                  className="leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                  wrapClassName="mt-5 pr-[35px] w-[99%]"
                ></Input>
                <Input
                  name="groupeightytwo"
                  placeholder="Inteligencia Artificial"
                  className="leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                  wrapClassName="mt-[19px] pr-[35px] w-[99%]"
                ></Input>
                <Input
                  name="groupeightysix"
                  placeholder="Inteligencia Artificial"
                  className="leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                  wrapClassName="mt-[18px] pr-[35px] w-[99%]"
                  size="md"
                ></Input>
                <Input
                  name="groupeightyeigh"
                  placeholder="Inteligencia Artificial"
                  className="leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                  wrapClassName="mt-[17px] pr-[35px] w-[99%]"
                  size="md"
                ></Input>
                <Text
                  className="mb-8 mt-4 text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Inteligencia Artificial
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:mt-0 mt-3.5 w-[73%] md:w-full">
                <div className="sm:flex-col flex-row gap-6 grid md:text-[200.51px] mt-[20px] md:grid-cols-1 grid-cols-2 justify-center w-full">
                  <Img
                    className="h-[286px] md:h-auto ml-[70px] mt-[13px] object-cover"
                    src="images/img_rectangle10.png"
                    alt="rectangletwenty"
                  />
                  <Img
                    className="h-[286px] md:h-auto ml-[70px] mt-[13px] object-cover"
                    src="images/img_rectangle10.png"
                    alt="rectangletwenty"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-6 grid md:text-[20.51px] md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[153px] h-[175px] sm:ml-[0] relative w-full">
                    <div className="absolute bg-deep_purple-600 flex flex-col inset-x-[0] w-[75%] h-[153px] items-start justify-center mx-auto p-[25px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] top-[0] w-full">
                      <Text
                        className="mt-[5px] sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-white-A700"
                        size="txtMontserratRomanBold2814"
                      >
                        Marketing Digital
                      </Text>
                      <Text
                        className="sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratMedium2251"
                      >
                        Claudio Cavezzali
                      </Text>
                      <Text
                        className="mb-[11px] sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratRomanLight2251"
                      >
                        14 clases
                      </Text>
                    </div>
                    <Button
                      className="common-pointer absolute bottom-[0] cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[305px] w-[305px] mx-auto text-center text-xl"
                      onClick={() => navigate("/desktopthree")}
                      shape="round"
                    >
                      QUIERO MI MEMBRESÍA
                    </Button>
                  </div>
                  <div className="md:h-[153px] h-[175px] sm:ml-[0] relative w-full ">
                    <div className="absolute bg-deep_purple-600 flex flex-col inset-x-[0] w-[75%] h-[153px] items-start justify-center mx-auto p-[25px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] top-[0] w-full">
                      <Text
                        className="mt-[5px] sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-white-A700"
                        size="txtMontserratRomanBold2814"
                      >
                        Marketing Digital
                      </Text>
                      <Text
                        className="sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratMedium2251"
                      >
                        Claudio Cavezzali
                      </Text>
                      <Text
                        className="mb-[11px] sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratRomanLight2251"
                      >
                        14 clases
                      </Text>
                    </div>
                    <Button
                      className="common-pointer absolute bottom-[0] cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[305px] w-[305px] mx-auto text-center text-xl"
                      onClick={() => navigate("/desktopthree")}
                      shape="round"
                    >
                      QUIERO MI MEMBRESÍA
                    </Button>
                  </div>
                </List>
                <div className="sm:flex-col flex-row gap-6 grid md:text-[200.51px] mt-[20px] md:grid-cols-1 grid-cols-2 justify-center w-full">
                  <Img
                    className="h-[286px] md:h-auto ml-[70px] mt-[13px] object-cover"
                    src="images/img_rectangle10.png"
                    alt="rectangletwenty"
                  />
                  <Img
                    className="h-[286px] md:h-auto ml-[70px] mt-[13px] object-cover"
                    src="images/img_rectangle10.png"
                    alt="rectangletwenty"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-6 grid md:text-[20.51px] md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[153px] h-[175px] sm:ml-[0] relative w-full">
                    <div className="absolute bg-deep_purple-600 flex flex-col inset-x-[0] w-[75%] h-[153px] items-start justify-center mx-auto p-[25px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] top-[0] w-full">
                      <Text
                        className="mt-[5px] sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-white-A700"
                        size="txtMontserratRomanBold2814"
                      >
                        Marketing Digital
                      </Text>
                      <Text
                        className="sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratMedium2251"
                      >
                        Claudio Cavezzali
                      </Text>
                      <Text
                        className="mb-[11px] sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratRomanLight2251"
                      >
                        14 clases
                      </Text>
                    </div>
                    <Button
                      className="common-pointer absolute bottom-[0] cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[305px] w-[305px] mx-auto text-center text-xl"
                      onClick={() => navigate("/desktopthree")}
                      shape="round"
                    >
                      QUIERO MI MEMBRESÍA
                    </Button>
                  </div>
                  <div className="md:h-[153px] h-[175px] sm:ml-[0] relative w-full ">
                    <div className="absolute bg-deep_purple-600 flex flex-col inset-x-[0] w-[75%] h-[153px] items-start justify-center mx-auto p-[25px] sm:px-5 rounded-bl-[18px] rounded-br-[20px] top-[0] w-full">
                      <Text
                        className="mt-[5px] sm:text-[24.14px] md:text-[26.14px] text-[28.14px] text-white-A700"
                        size="txtMontserratRomanBold2814"
                      >
                        Marketing Digital
                      </Text>
                      <Text
                        className="sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratMedium2251"
                      >
                        Claudio Cavezzali
                      </Text>
                      <Text
                        className="mb-[11px] sm:text-[18.51px] md:text-[20.51px] text-[22.51px] text-white-A700"
                        size="txtMontserratRomanLight2251"
                      >
                        14 clases
                      </Text>
                    </div>
                    <Button
                      className="common-pointer absolute bottom-[0] cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[305px] w-[305px] mx-auto text-center text-xl"
                      onClick={() => navigate("/desktopthree")}
                      shape="round"
                    >
                      QUIERO MI MEMBRESÍA
                    </Button>
                  </div>
                </List>
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

export default DesktopTwoPage;
