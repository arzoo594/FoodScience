import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaUser,
  FaRulerVertical,
  FaCalculator,
  FaRedo,
  FaWeight,
  FaInfoCircle,
} from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const IdealWeight = () => {
  const [gender, setGender] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateIdealWeight = (e) => {
    e.preventDefault();

    const feetValue = Number(feet);
    const inchesValue = Number(inches);

    if (!gender || !feet || inches === "") {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (feetValue <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Height",
        text: "Please enter a valid height.",
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

    if (feetValue < 5) {
      Swal.fire({
        icon: "info",
        title: "Height Not Supported",
        text: "This calculator is designed for adults who are at least 5 feet tall.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    const totalInches = feetValue * 12 + inchesValue;
    const extraInches = totalInches - 60;

    let result;

    if (gender === "male") {
      result = 50 + 2.3 * extraInches;
    } else {
      result = 45.5 + 2.3 * extraInches;
    }

    setIdealWeight(Number(result.toFixed(1)));
  };

  const resetCalculator = () => {
    setGender("");
    setFeet("");
    setInches("");
    setIdealWeight(null);
  };

  return (
    <ScrollReveal>
      <section className="relative min-h-screen overflow-hidden bg-[#f2fbf3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#dff3df] opacity-70" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-[#e3f5e4] opacity-70" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700 shadow-sm">
              <FaWeight />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span className="text-green-700">Ideal Weight</span> Calculator
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Estimate your reference body weight based on your height and
              gender using the Devine formula.
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-500 sm:text-sm">
              Enter your gender and height to calculate your estimated reference
              weight.
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

                <form onSubmit={calculateIdealWeight} className="space-y-5">
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <FaUser className="text-green-700" />
                      Gender
                    </label>

                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <FaRulerVertical className="text-green-700" />
                      Height
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="number"
                          min="5"
                          value={feet}
                          onChange={(e) => setFeet(e.target.value)}
                          placeholder="Feet"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />

                        <span className="mt-1 block text-xs text-gray-500">
                          Feet
                        </span>
                      </div>

                      <div>
                        <input
                          type="number"
                          min="0"
                          max="11"
                          value={inches}
                          onChange={(e) => setInches(e.target.value)}
                          placeholder="Inches"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />

                        <span className="mt-1 block text-xs text-gray-500">
                          Inches
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                    >
                      <FaCalculator />
                      Calculate
                    </button>

                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-200"
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
                          Reference Weight
                        </p>

                        <p className="mt-1 text-2xl font-bold text-gray-900">
                          {idealWeight ?? "--"}
                        </p>
                      </div>
                    </div>

                    {idealWeight !== null ? (
                      <>
                        <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                          {idealWeight} kg
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
                          This is an estimated reference weight based on the
                          Devine formula.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-500">
                          Not calculated
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                          Enter your gender and height, then click “Calculate”
                          to see your estimated reference weight.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <FaInfoCircle className="mt-1 shrink-0 text-lg text-green-700" />

                      <div>
                        <h3 className="font-bold text-gray-900">
                          About this calculation
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          The Devine formula estimates reference body weight
                          from height and sex. It is intended as a general
                          reference for adults and should not be treated as an
                          exact target weight.
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
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default IdealWeight;
