import Icons from "./common/Icons";
import { CARD_DATA } from "../utils/helper";
import Button from "./common/Button";
import Heading from "./common/Heading";
import { useNavigate, useParams } from "react-router-dom";

function PupiloTopic({ text, description }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div className="py-40">
      <div className="max-w-285 mx-auto px-3">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-3 text-center max-w-125.25 mx-auto pb-10">
            <Heading
              text={text}
              description={description}
              className={"gap-3"}
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARD_DATA.slice(0, 3).map((card, i) => {
              return (
                <div
                  key={i}
                  onClick={() =>
                    navigate(
                      `/${card.blog.title.toLowerCase().replaceAll(" ", "-")}`,
                    )
                  }
                  className="shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] p-4 rounded-3xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <img src={card.pupilo.img} alt="image" />
                    <span className="text-normal leading-150 tracking-normal text-purple">
                      {card.pupilo.date}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-2xl font-semibold leading-120 tracking-normal text-black">
                        {card.pupilo.title}
                      </h4>
                      <p className="font-normal leading-150 tracking-normal text-black">
                        {card.pupilo.paragraph}
                      </p>
                    </div>
                    <button className="flex flex-row items-center gap-2.5 underline font-semibold leading-100 tracking-normal hover:no-underline cursor-pointer w-fit">
                      Learn More
                      <span>
                        <Icons icon="arrow" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            className="mt-10 flex items-center py-3.5 px-8 bg-yellow max-w-40 rounded-[400px] hover:text-yellow hover:bg-black group"
            text="View All"
            icon={
              <Icons
                icon={"btn_arrow"}
                pathClass={
                  "group-hover:fill-yellow duration-200 ease-in fill-black"
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PupiloTopic;
