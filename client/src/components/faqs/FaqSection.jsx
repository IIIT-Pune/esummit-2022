import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import "./styles.css";

export default function FaqSection() {
  const [questions] = useState(data);

  return (
    <div className="p-5">
      <h1 className="text-xl mb-5">
        FAQ<span>S</span>
      </h1>
      {questions.map((question) => (
        <SingleQuestion {...question} key={question.id}/>
      ))}
    </div>
  );
}
