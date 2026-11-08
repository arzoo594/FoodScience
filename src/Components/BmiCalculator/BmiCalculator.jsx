import React, { useState } from "react";
import Swal from "sweetalert2";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();

    const weightValue = Number(weight);
    const feetValue = Number(feet);
    const inchesValue = Number(inches);

    if (weight === "" || feet === "" || inches === "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please enter your weight, feet and inches.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (weightValue <= 0 || feetValue <= 0 || inchesValue < 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Value",
        text: "Please enter valid weight and height.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (inchesValue >= 12) {
      Swal.fire({
        icon: "error",
        title: "Invalid Inches",
        text: "Inches must be between 0 and 11.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (weightValue > 500 || feetValue > 8) {
      Swal.fire({
        icon: "error",
        title: "Invalid Value",
        text: "Please enter a realistic weight and height.",
        confirmButtonText: "OK",
      });
      return;
    }

    const totalInches = feetValue * 12 + inchesValue;
    const heightInMeters = totalInches * 0.0254;

    const bmiValue = weightValue / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
      setMessage("Below the usual adult BMI range.");
    } else if (bmiValue < 25) {
      setCategory("Normal");
      setMessage("Within the usual adult BMI range.");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
      setMessage("Above the usual adult BMI range.");
    } else {
      setCategory("Obese");
      setMessage("In the obesity range for adults.");
    }

    Swal.fire({
      icon: "success",
      title: "BMI Calculated!",
      text: `Your BMI is ${bmiValue.toFixed(2)}`,
      confirmButtonText: "OK",
    });
  };

  const resetCalculator = () => {
    setWeight("");
    setFeet("");
    setInches("");
    setBmi(null);
    setMessage("");
    setCategory("");
  };

  return (
    <ScrollReveal>
      <section className="relative min-h-screen overflow-hidden bg-[#f2fbf3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#dff3df] opacity-70" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-[#e3f5e4] opacity-70" />

        <div className="relative mx-auto max-w-6xl">
          {/* Hero */}
          <div className="mb-10 text-center">
            <div className="mb-3 text-5xl text-green-700">♡</div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span className="text-green-700">BMI</span> Calculator
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">
              Know your BMI, take a step towards a healthier you.
            </p>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Enter your weight and height in feet and inches to calculate your
              Body Mass Index (BMI).
            </p>
          </div>

          {/* Main Card */}
          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Left Side */}
              <div className="lg:border-r lg:border-gray-200 lg:pr-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl text-green-700">
                    ♙
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Your Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter your weight and height below.
                    </p>
                  </div>
                </div>

                <form onSubmit={calculateBmi}>
                  {/* Weight */}
                  <div className="mb-6">
                    <label
                      htmlFor="weight"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Weight (kg)
                    </label>

                    <input
                      id="weight"
                      type="number"
                      min="0"
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 70"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  {/* Height */}
                  <div className="mb-8">
                    <label className="mb-3 block text-sm font-bold text-slate-800">
                      Height
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="feet"
                          className="mb-2 block text-sm text-slate-600"
                        >
                          Feet
                        </label>

                        <input
                          id="feet"
                          type="number"
                          min="1"
                          max="8"
                          value={feet}
                          onChange={(e) => setFeet(e.target.value)}
                          placeholder="e.g. 5"
                          className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inches"
                          className="mb-2 block text-sm text-slate-600"
                        >
                          Inches
                        </label>

                        <input
                          id="inches"
                          type="number"
                          min="0"
                          max="11"
                          step="1"
                          value={inches}
                          onChange={(e) => setInches(e.target.value)}
                          placeholder="e.g. 8"
                          className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="flex-1 cursor-pointer rounded-xl bg-green-600 px-5 py-4 font-bold text-white shadow-md transitiontransition duration-300 hover:bg-green-700 hover:scale-105"
                    >
                      Calculate BMI
                    </button>

                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="flex-1 cursor-pointer rounded-xl bg-gray-100 px-5 py-4 font-bold text-slate-700 transition hover:bg-gray-200"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Side */}
              <div className="rounded-2xl bg-[#f0faf1] p-5 sm:p-7">
                {/* BMI Circle */}
                <div className="flex justify-center">
                  <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border-[12px] border-green-500 bg-white shadow-sm">
                    <span className="text-sm font-semibold text-slate-600">
                      Your BMI
                    </span>

                    <span className="mt-1 text-4xl font-extrabold text-slate-900">
                      {bmi ?? "--"}
                    </span>

                    <span className="mt-2 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {category || "Not calculated"}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-7 flex items-start gap-3 rounded-xl bg-green-100 px-4 py-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    i
                  </div>

                  <p className="text-sm leading-6 text-green-800">
                    {message ||
                      'Enter your details and click "Calculate BMI" to see your result.'}
                  </p>
                </div>

                {/* Categories */}
                <div className="mt-7">
                  <h3 className="text-lg font-bold text-slate-900">
                    BMI Categories (Adults)
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-sky-400 ring-4 ring-sky-100" />
                      <span className="w-24 text-sm text-slate-700">
                        Below 18.5
                      </span>
                      <span className="text-sm text-slate-500">
                        Underweight
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-100" />
                      <span className="w-24 text-sm text-slate-700">
                        18.5 - 24.9
                      </span>
                      <span className="text-sm text-slate-500">Normal</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-yellow-400 ring-4 ring-yellow-100" />
                      <span className="w-24 text-sm text-slate-700">
                        25 - 29.9
                      </span>
                      <span className="text-sm text-slate-500">Overweight</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-100" />
                      <span className="w-24 text-sm text-slate-700">
                        30 and above
                      </span>
                      <span className="text-sm text-slate-500">Obese</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-7 flex items-start gap-3 border-t border-green-100 pt-5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-400 text-xs font-bold text-slate-500">
                    i
                  </span>

                  <p className="text-xs leading-5 text-slate-500">
                    BMI is a screening measure and does not by itself determine
                    overall health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
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

export default BmiCalculator;
