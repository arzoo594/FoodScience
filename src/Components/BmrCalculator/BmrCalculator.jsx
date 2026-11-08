import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaUser,
  FaWeight,
  FaRulerVertical,
  FaBirthdayCake,
  FaVenusMars,
  FaCalculator,
  FaRedo,
  FaFire,
  FaInfoCircle,
} from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const BmrCalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmr, setBmr] = useState(null);

  const calculateBmr = (e) => {
    e.preventDefault();

    const weightValue = Number(weight);
    const feetValue = Number(feet);
    const inchesValue = Number(inches);
    const ageValue = Number(age);

    if (!weight || !feet || !age || !gender) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (weightValue <= 0 || ageValue <= 0 || feetValue <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Information",
        text: "Please enter valid positive values.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (inchesValue < 0 || inchesValue >= 12) {
      Swal.fire({
        icon: "error",
        title: "Invalid Inches",
        text: "Inches must be between 0 and 11.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (ageValue < 18) {
      Swal.fire({
        icon: "info",
        title: "Adult Calculator",
        text: "This BMR calculator uses an adult equation and is intended for people aged 18 or older.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    const totalInches = feetValue * 12 + inchesValue;
    const heightInCm = totalInches * 2.54;

    let bmrValue;

    if (gender === "male") {
      bmrValue = 10 * weightValue + 6.25 * heightInCm - 5 * ageValue + 5;
    } else {
      bmrValue = 10 * weightValue + 6.25 * heightInCm - 5 * ageValue - 161;
    }

    setBmr(Math.round(bmrValue));
  };

  const resetCalculator = () => {
    setWeight("");
    setFeet("");
    setInches("");
    setAge("");
    setGender("");
    setBmr(null);
  };

  return (
    <ScrollReveal>
      <section className="relative min-h-screen overflow-hidden bg-[#f2fbf3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#dff3df] opacity-70" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-[#e3f5e4] opacity-70" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700 shadow-sm">
              <FaFire />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span className="text-green-700">BMR</span> Calculator
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Estimate the amount of energy your body needs at complete rest.
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-500 sm:text-sm">
              Enter your weight, height, age, and sex to calculate your
              estimated Basal Metabolic Rate.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="lg:border-r lg:border-gray-200 lg:pr-10">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700">
                    <FaUser />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Your Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Enter your details below.
                    </p>
                  </div>
                </div>

                <form onSubmit={calculateBmr}>
                  <div className="mb-5">
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <FaWeight className="text-green-700" />
                      Weight (kg)
                    </label>

                    <input
                      type="number"
                      min="1"
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 70"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <FaRulerVertical className="text-green-700" />
                      Height
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-xs text-gray-500">
                          Feet
                        </label>

                        <input
                          type="number"
                          min="1"
                          max="8"
                          value={feet}
                          onChange={(e) => setFeet(e.target.value)}
                          placeholder="e.g. 5"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs text-gray-500">
                          Inches
                        </label>

                        <input
                          type="number"
                          min="0"
                          max="11"
                          value={inches}
                          onChange={(e) => setInches(e.target.value)}
                          placeholder="e.g. 8"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <FaBirthdayCake className="text-green-700" />
                      Age (years)
                    </label>

                    <input
                      type="number"
                      min="18"
                      max="120"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g. 25"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <div className="mb-7">
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <FaVenusMars className="text-green-700" />
                      Sex
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setGender("male")}
                        className={`rounded-xl border px-4 py-3 font-semibold transition ${
                          gender === "male"
                            ? "border-green-700 bg-green-700 text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-green-500 hover:bg-green-50"
                        }`}
                      >
                        Male
                      </button>

                      <button
                        type="button"
                        onClick={() => setGender("female")}
                        className={`rounded-xl border px-4 py-3 font-semibold transition ${
                          gender === "female"
                            ? "border-green-700 bg-green-700 text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-green-500 hover:bg-green-50"
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
                    >
                      <FaCalculator />
                      Calculate BMR
                    </button>

                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-200"
                    >
                      <FaRedo />
                      Reset
                    </button>
                  </div>
                </form>
              </div>

              <div className="rounded-2xl bg-[#f0faf1] p-5 sm:p-7">
                <div className="flex h-full flex-col">
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-white p-7 text-center shadow-sm">
                    <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border-8 border-green-600">
                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          Your BMR
                        </p>

                        <p className="mt-1 text-2xl font-bold text-gray-900">
                          {bmr ?? "--"}
                        </p>
                      </div>
                    </div>

                    {bmr ? (
                      <>
                        <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                          {bmr.toLocaleString()} kcal/day
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
                          This is an estimate of the energy your body uses each
                          day while at complete rest.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-500">
                          Not calculated
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                          Enter your information and click “Calculate BMR” to
                          see your estimated result.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <FaInfoCircle className="mt-1 shrink-0 text-lg text-green-700" />

                      <div>
                        <h3 className="font-bold text-gray-900">
                          How BMR is calculated
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          This calculator uses the Mifflin–St Jeor equation,
                          which estimates resting energy needs using weight,
                          height, age, and sex.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-semibold italic text-green-700">
              Good Food, Good Health
            </p>

            <p className="mx-auto mt-3 flex max-w-3xl items-start justify-center gap-2 text-center text-xs leading-5 text-gray-500">
              <FaInfoCircle className="mt-0.5 shrink-0" />
              BMR is an estimate and does not represent your complete daily
              calorie requirement. This calculator is intended for adults aged
              18 and above.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default BmrCalculator;
