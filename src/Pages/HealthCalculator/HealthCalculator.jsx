import BmiCalculator from "../../Components/BmiCalculator/BmiCalculator";
import BmrCalculator from "../../Components/BmrCalculator/BmrCalculator";
import IdealWeight from "../../Components/IdealWeight/IdealWeight";

const HealthCalculator = () => {
  return (
    <div>
      <BmiCalculator />
      <BmrCalculator />
      <IdealWeight />
    </div>
  );
};

export default HealthCalculator;
