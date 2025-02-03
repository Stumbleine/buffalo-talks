import { GrammarExercise } from "../../../models/exercise";
import FillParagraphExerciseView from "./FillParagraphExerciseView";
import FillSentenceExerciseView from "./FillSentenceExerciseView";
import MatchExerciseView from "./MatchExerciseView";
import QAExerciseView from "./QAExerciseView";

const ExerciseRenderer: React.FC<{ exercise: GrammarExercise }> = ({
  exercise,
}) => {
  switch (exercise.type) {
    case "fill-paragraph":
      return <FillParagraphExerciseView exercise={exercise} />;
    case "fill-sentence":
      return <FillSentenceExerciseView exercise={exercise} />;
    case "q&a":
      return <QAExerciseView exercise={exercise} />;
    case "match":
      return <MatchExerciseView exercise={exercise} />;
    default:
      return <div>Tipo de ejercicio no soportado</div>;
  }
};

export default ExerciseRenderer;
