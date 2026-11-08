import React, { useState } from "react";
import Swal from "sweetalert2";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const DailyCalorieCalculator = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [calories, setCalories] = useState(null);
  const [bmr, setBmr] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();

    const weightValue = Number(weight);
    const feetValue = Number(feet);
    const inchesValue = Number(inches);
    const ageValue = Number(age);

    if (
      gender === "" ||
      weight === "" ||
      feet === "" ||
      inches === "" ||
      age === "" ||
      activity === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in all the required fields.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (
      weightValue <= 0 ||
      feetValue <= 0 ||
      inchesValue < 0 ||
      ageValue <= 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Invalid Value",
        text: "Please enter valid weight, height and age.",
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

    if (weightValue > 500 || feetValue > 8 || ageValue > 120) {
      Swal.fire({
        icon: "error",
        title: "Invalid Value",
        text: "Please enter realistic values.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (ageValue < 18) {
      Swal.fire({
        icon: "info",
        title: "Adult Calculator",
        text: "This calculator uses an adult calorie estimation formula and is intended for adults aged 18 or older.",
        confirmButtonText: "OK",
      });
      return;
    }

    const totalInches = feetValue * 12 + inchesValue;
    const heightCm = totalInches * 2.54;

    let bmrValue;

    if (gender === "male") {
      bmrValue = 10 * weightValue + 6.25 * heightCm - 5 * ageValue + 5;
    } else {
      bmrValue = 10 * weightValue + 6.25 * heightCm - 5 * ageValue - 161;
    }

    const activityFactors = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };

    const dailyCalories = bmrValue * activityFactors[activity];

    setBmr(Math.round(bmrValue));
    setCalories(Math.round(dailyCalories));

    Swal.fire({
      icon: "success",
      title: "Calories Calculated!",
      text: `Your estimated daily calorie needs are ${Math.round(
        dailyCalories,
      )} kcal.`,
      confirmButtonText: "OK",
    });
  };

  const resetCalculator = () => {
    setGender("");
    setWeight("");
    setFeet("");
    setInches("");
    setAge("");
    setActivity("");
    setCalories(null);
    setBmr(null);
  };

  return (
    <ScrollReveal>
      <section className="relative min-h-screen overflow-hidden bg-[#f2fbf3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#dff3df] opacity-70" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-[#e3f5e4] opacity-70" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-3 text-5xl text-green-700">🔥</div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span className="text-green-700">Daily Calorie</span> Calculator
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">
              Understand your daily calorie needs for a healthier lifestyle.
            </p>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Enter your personal information and activity level to estimate
              your daily calorie requirements.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="lg:border-r lg:border-gray-200 lg:pr-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl text-green-700">
                    🔥
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Your Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter your details and activity level below.
                    </p>
                  </div>
                </div>

                <form onSubmit={calculateCalories}>
                  <div className="mb-6">
                    <label
                      htmlFor="gender"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Gender
                    </label>

                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

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

                  <div className="mb-6">
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

                  <div className="mb-6">
                    <label
                      htmlFor="age"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Age
                    </label>

                    <input
                      id="age"
                      type="number"
                      min="18"
                      max="120"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g. 25"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="activity"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Activity Level
                    </label>

                    <select
                      id="activity"
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select activity level</option>
                      <option value="sedentary">
                        Sedentary — Little or no exercise
                      </option>
                      <option value="lightlyActive">
                        Lightly Active — 1–3 days/week
                      </option>
                      <option value="moderatelyActive">
                        Moderately Active — 3–5 days/week
                      </option>
                      <option value="veryActive">
                        Very Active — 6–7 days/week
                      </option>
                      <option value="extraActive">
                        Extra Active — Very hard exercise/physical job
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="flex-1 cursor-pointer rounded-xl bg-green-600 px-5 py-4 font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-700"
                    >
                      Calculate Calories
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

              <div className="rounded-2xl bg-[#f0faf1] p-5 sm:p-7">
                <div className="flex justify-center">
                  <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border-[12px] border-green-500 bg-white shadow-sm">
                    <span className="text-sm font-semibold text-slate-600">
                      Daily Calories
                    </span>

                    <span className="mt-1 text-4xl font-extrabold text-slate-900">
                      {calories ?? "--"}
                    </span>

                    <span className="mt-2 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {calories ? "kcal / day" : "Not calculated"}
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3 rounded-xl bg-green-100 px-4 py-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    i
                  </div>

                  <p className="text-sm leading-6 text-green-800">
                    {calories
                      ? `Your estimated BMR is ${bmr} kcal/day. Your daily calorie estimate includes your selected activity level.`
                      : 'Enter your details and click "Calculate Calories" to see your estimated daily calorie needs.'}
                  </p>
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-bold text-slate-900">
                    Activity Levels
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-sky-400 ring-4 ring-sky-100" />
                      <span className="w-28 text-sm text-slate-700">
                        Sedentary
                      </span>
                      <span className="text-sm text-slate-500">
                        Little or no exercise
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-100" />
                      <span className="w-28 text-sm text-slate-700">
                        Lightly Active
                      </span>
                      <span className="text-sm text-slate-500">
                        1–3 days/week
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-yellow-400 ring-4 ring-yellow-100" />
                      <span className="w-28 text-sm text-slate-700">
                        Moderately Active
                      </span>
                      <span className="text-sm text-slate-500">
                        3–5 days/week
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-100" />
                      <span className="w-28 text-sm text-slate-700">
                        Very Active
                      </span>
                      <span className="text-sm text-slate-500">
                        6–7 days/week
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3 border-t border-green-100 pt-5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-400 text-xs font-bold text-slate-500">
                    i
                  </span>

                  <p className="text-xs leading-5 text-slate-500">
                    This calculator provides an estimate using the Mifflin–St
                    Jeor equation and activity factors. Individual energy needs
                    can vary.
                  </p>
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

export default DailyCalorieCalculator;
