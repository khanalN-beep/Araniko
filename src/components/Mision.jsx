import { IoBookmark } from "react-icons/io5";
import Journey from "../components/Journey"

const Mission = () => {
  const items = [
    {
      id: 1,
      title: "Vision",
      description:
        "To nurture quality human resource to serve the changing needs of the society by building an institution of excellence",
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border border-gray-300",
    },
    {
      id: 2,
      title: "Mission",
      description:
        "We shall sincerely and relentlessly strive to provide value-based education that can prepare enlightened citizens with great foresight for the society and the nation as a whole by developing leadership qualities and skills with ever-cherished universal human values which will enable them to get employed or prepare them as socially responsible entrepreneurs",
      bgColor: "bg-teal-700",
      textColor: "text-white",
    },
  ];

  return (
    <div >
      <div className="mt-20">
        <div className="flex flex-wrap justify-center gap-8 p-8 cursor-pointer">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex-1 justify-center min-w-[400px] max-w-xl p-8 rounded-lg border-none shadow-2xl ${item.bgColor} ${item.border}`}
            >
              <IoBookmark size={48} className={`mb-6 ${item.textColor}`} />
              <h2 className={`text-3xl font-bold mb-4 ${item.textColor}`}>
                {item.title}
              </h2>
              <p className={`mt-3 text-base leading-relaxed ${item.textColor}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Journey/>
      </div>
    </div>
  );
};

export default Mission;
