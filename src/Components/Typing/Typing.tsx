import Typed from "react-typed";

function Typing() {
  return (
    <div>
      <div className="text-base md:text-2xl lg:text-3xl mt-2 font-normal">
        <Typed
          strings={[
            "Chúc cậu ngày mới vui vẻ.",
            "Rất vui vì bạn đã ghé thăm. ❤️",
          ]}
          typeSpeed={10}
          backSpeed={10}
        />
      </div>
    </div>
  );
}

export default Typing;
