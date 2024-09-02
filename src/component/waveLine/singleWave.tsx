import "./single.css";

const SingleWaveLine = () => {
  return (
    <div className="curveWrap overflow-visible z-50 -mt-12 lg:-mt-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="curve" fill="none">
          <path d="M 0, 60 S 300, -80, 600, 80, 800, -200, 1200 60" />
        </g>
      </svg>
    </div>
  );
};

export default SingleWaveLine;
