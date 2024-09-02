import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import TextGradiant from "../../Animation/textGradiant";
import person from "../../Assets/about.png";

const About = () => {
  return (
    <div className="w-full h-auto bg-background_second md:flex items-center justify-center md:py-10">
      <div className="w-full 2xl:w-auto flex items-center justify-center 2xl:block mt-12 2xl:mt-0 2xl:ml-16">
        <img
          src={person}
          alt="person"
          className="w-48 lg:w-[25rem] xl:w-[28rem]"
        />
      </div>
      <div className="mx-5 2xl:mx-0">
        <TextGradiant text="about me" style={"mb-5"} />
        <div className="lg:w-[40rem]">
          <text className="text-text_color leading-relaxed">
            Hardworking Full Stack Web/App Developer experienced in the field
            and ready for challenging assignments. I am reliable in completing
            quality work and exceeding expectations.
          </text>
        </div>
        <div className="w-full mt-8 pb-10">
          <Timeline>
            <TimelineItem>
              <TimelineConnector className="ml-1" />
              <TimelineHeader className="h-3">
                <TimelineIcon color="amber" />
                <text className="capitalize text-lg text-white">
                  main skills
                </text>
              </TimelineHeader>
              <TimelineBody className="ml-7 pb-8 pt-2">
                <div>
                  <text className="block text-text_1">
                    User experience design - UI/UX
                  </text>
                  <text className="block text-text_2">
                    Delight the user and make it work.
                  </text>
                </div>
                <div className="my-3">
                  <text className="block text-text_1">
                    MERN Stack Development - Web/Mobile
                  </text>
                  <text className="block text-text_2">
                    Delight the user and make it work.
                  </text>
                </div>
                <div>
                  <text className="block text-text_1">
                    Javascript Development - All Frameworks
                  </text>
                  <text className="block text-text_2">
                    Delight the user and make it work.
                  </text>
                </div>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector className="ml-1" />
              <TimelineHeader className="h-3">
                <TimelineIcon color="amber" />
                <text className="capitalize text-lg text-white">
                  Experience
                </text>
              </TimelineHeader>
              <TimelineBody className="ml-7 pb-8 pt-2">
                <div>
                  <text className="block text-text_1">
                    MERN Stack Developer - Freelancing
                  </text>
                  <text className="block text-text_2">2021 - current</text>
                </div>

                <div className="my-3">
                  <text className="block text-text_1">
                    ReactJS & React-Native Developer
                  </text>
                  <text className="block text-text_1">
                    {`(Flowsome Technology)`}
                  </text>
                  <text className="block text-text_2 mt-1">2021 - 2022</text>
                </div>
                <div>
                  <text className="block text-text_1">
                    React-Native Developer - Light Infotech
                  </text>
                  <text className="block text-text_2">2020 - 2021</text>
                </div>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector className="ml-1" />
              <TimelineHeader className="h-3">
                <TimelineIcon color="amber" />
                <text className="capitalize text-lg text-white">
                  {" "}
                  Education
                </text>
              </TimelineHeader>
              <TimelineBody className="ml-7 pb-4 pt-2">
                <div>
                  <text className="block text-text_1">
                    BCA - UKA Tarsadia University, Bardoli, Surat
                  </text>
                </div>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default About;
