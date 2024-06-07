import React from "react";


interface CardsProps {
  title: string;
  day: number;
  month: string;
  type: string;
}

const EventCards: React.FC<CardsProps> = (props: CardsProps) => {
  if (props.type === "top") {
    return (
      <div className="border-4 border-whiteNew font-bold rounded-3xl w-48 h-80 text-center place-content-center">
        <p className="text-2xl mb-5">{props.title}</p>
        <p className="text-orangeNew text-8xl font-orbitron">{props.day}</p>
        <p className="font-normal mt-7">de {props.month}</p>
      </div>
    );
  }

  if (props.type === "bot"){
    return (
      <div className="border-4 border-whiteNew font-bold rounded-3xl w-72 h-52 text-center place-content-center">
      <p className="text-2xl">{props.title}</p>
      <p className="text-whiteNew text-8xl font-orbitron">{props.day}</p>
      <p className="font-normal">de {props.month}</p>
    </div>
    );
  }
};

export default EventCards;
