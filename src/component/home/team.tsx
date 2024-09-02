import { team } from "../../data/service";

const Team = () => {
  return (
    <div className="w-screen h-auto">
      <div className="flex items-center justify-center">
        <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
        <p className="mx-8 font-rubik_regular tracking-wider uppercase">
          TEAM MEMBERS
        </p>
        <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
      </div>
      <p className="text-5xl font-rubik_medium text-black tracking-wide capitalize my-8 text-center">
        Our Top Skilled Experts
      </p>
      <div className="md:flex flex-wrap items-center justify-center lg:justify-start xl:justify-center lg:mx-2 xl:mx-2 py-12 grid">
        {team.map((item, index) => {
          return (
            <div
              key={index}
              className="relative mx-2 overflow-hidden md:w-80 md:h-96 rounded-xl group mb-5"
            >
              <img
                src={item.img}
                alt="profile"
                className="w-96 md:w-80 md:h-96 rounded-xl overflow-hidden group-hover:scale-125 transition duration-500"
              />
              <div className="w-96 h-full ms:w-80 md:h-96 bg-black/60 group-hover:bg-black/20 absolute top-0 rounded-xl" />
              <div className="absolute bottom-4 w-80">
                <p className="text-center font-rubik_medium text-white tracking-wider capitalize text-xl mb-1">
                  {item.name}
                </p>
                <p className="text-center font-rubik_regular text-white text-sm">
                  {item.designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
