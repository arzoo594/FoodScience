import React, { useState } from "react";
import Swal from "sweetalert2";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const DailyWaterIntake = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [activity, setActivity] = useState("");
  const [exercise, setExercise] = useState("");
  const [climate, setClimate] = useState("");

  const [water, setWater] = useState(null);
  const [glasses, setGlasses] = useState(null);
  const [message, setMessage] = useState("");

  const calculateWater = (e) => {
    e.preventDefault();

    const ageValue = Number(age);
    const weightValue = Number(weight);
    const exerciseValue = Number(exercise);

    if (!age || !weight || !sex || !activity || exercise === "" || !climate) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (ageValue < 18) {
      Swal.fire({
        icon: "info",
        title: "Adult Calculator",
        text: "This calculator is designed for adults aged 18 or older.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (ageValue > 120) {
      Swal.fire({
        icon: "error",
        title: "Invalid Age",
        text: "Please enter a valid age.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (weightValue <= 0 || weightValue > 500) {
      Swal.fire({
        icon: "error",
        title: "Invalid Weight",
        text: "Please enter a valid weight between 1 and 500 kg.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    if (exerciseValue < 0 || exerciseValue > 600) {
      Swal.fire({
        icon: "error",
        title: "Invalid Exercise Duration",
        text: "Exercise duration must be between 0 and 600 minutes.",
        confirmButtonColor: "#15803d",
      });
      return;
    }

    let waterMl = weightValue * 35;

    if (activity === "light") {
      waterMl += 100;
    } else if (activity === "moderate") {
      waterMl += 200;
    } else if (activity === "high") {
      waterMl += 300;
    } else if (activity === "very-high") {
      waterMl += 400;
    }

    if (exerciseValue >= 30 && exerciseValue < 60) {
      waterMl += 300;
    } else if (exerciseValue >= 60 && exerciseValue < 90) {
      waterMl += 500;
    } else if (exerciseValue >= 90 && exerciseValue < 120) {
      waterMl += 750;
    } else if (exerciseValue >= 120) {
      waterMl += 1000;
    }

    if (climate === "warm") {
      waterMl += 300;
    } else if (climate === "hot") {
      waterMl += 500;
    }

    const waterLiters = waterMl / 1000;
    const glassCount = waterMl / 250;

    setWater(waterLiters.toFixed(2));
    setGlasses(glassCount.toFixed(1));

    setMessage(
      "This is a personalized estimate based on your body weight, activity, exercise duration and climate. Actual water needs can vary from day to day.",
    );

    Swal.fire({
      icon: "success",
      title: "Water Intake Calculated!",
      text: `Your estimated daily water intake is ${waterLiters.toFixed(
        2,
      )} L/day.`,
      confirmButtonColor: "#15803d",
    });
  };

  const resetCalculator = () => {
    setAge("");
    setWeight("");
    setSex("");
    setActivity("");
    setExercise("");
    setClimate("");
    setWater(null);
    setGlasses(null);
    setMessage("");
  };

  return (
    <ScrollReveal>
      <section className="relative min-h-screen overflow-hidden bg-[#f2fbf3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#dff3df] opacity-70" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-[#e3f5e4] opacity-70" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-3 text-5xl">💧</div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span className="text-green-700">Daily Water</span> Intake
              Calculator
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-600 sm:text-xl">
              Estimate your daily water intake based on your personal factors.
            </p>

            <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
              Enter your age, weight, activity level, exercise duration and
              climate to get a personalized daily water intake estimate.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="lg:border-r lg:border-gray-200 lg:pr-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
                    💧
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Your Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter your details below.
                    </p>
                  </div>
                </div>

                <form onSubmit={calculateWater} className="space-y-5">
                  <div>
                    <label
                      htmlFor="age"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Age
                    </label>

                    <div className="relative">
                      <input
                        id="age"
                        type="number"
                        min="18"
                        max="120"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 pr-16 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      />

                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                        years
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="weight"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Weight
                    </label>

                    <div className="relative">
                      <input
                        id="weight"
                        type="number"
                        min="1"
                        max="500"
                        step="0.1"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight"
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 pr-16 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      />

                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                        kg
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sex"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Sex
                    </label>

                    <select
                      id="sex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Prefer not to specify</option>
                    </select>
                  </div>

                  <div>
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
                      <option value="low">Sedentary / Very Low</option>
                      <option value="light">Lightly Active</option>
                      <option value="moderate">Moderately Active</option>
                      <option value="high">Highly Active</option>
                      <option value="very-high">Very Highly Active</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="exercise"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Exercise Duration
                    </label>

                    <div className="relative">
                      <input
                        id="exercise"
                        type="number"
                        min="0"
                        max="600"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        placeholder="Example: 60"
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 pr-20 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      />

                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                        min/day
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="climate"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Climate
                    </label>

                    <select
                      id="climate"
                      value={climate}
                      onChange={(e) => setClimate(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select climate</option>
                      <option value="normal">Normal / Mild</option>
                      <option value="warm">Warm</option>
                      <option value="hot">Hot</option>
                    </select>
                  </div>

                  <div className="rounded-xl bg-green-50 px-4 py-4">
                    <p className="text-sm leading-6 text-green-800">
                      Water needs vary between people. Physical activity,
                      exercise and hot environments can increase fluid needs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="flex-1 cursor-pointer rounded-xl bg-green-600 px-5 py-4 font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-700"
                    >
                      Calculate Water
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
                      Daily Water
                    </span>

                    <span className="mt-1 text-4xl font-extrabold text-slate-900">
                      {water ?? "--"}
                    </span>

                    <span className="mt-2 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {water ? "L / day" : "Not calculated"}
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3 rounded-xl bg-green-100 px-4 py-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    i
                  </div>

                  <p className="text-sm leading-6 text-green-800">
                    {message ||
                      'Enter your information and click "Calculate Water" to see your estimated daily intake.'}
                  </p>
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-bold text-slate-900">
                    Your Calculation
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-600">
                        Body Weight
                      </span>

                      <span className="text-sm font-bold text-slate-900">
                        {weight ? `${weight} kg` : "--"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-600">Activity</span>

                      <span className="text-sm font-bold capitalize text-slate-900">
                        {activity ? activity.replace("-", " ") : "--"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-600">Exercise</span>

                      <span className="text-sm font-bold text-slate-900">
                        {exercise !== "" ? `${exercise} min` : "--"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-600">
                        250 ml Glasses
                      </span>

                      <span className="text-sm font-bold text-green-700">
                        {glasses ?? "--"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-xl bg-white px-4 py-4">
                  <h3 className="font-bold text-slate-900">Important Note</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    This result is an estimate, not a medical prescription.
                    Water requirements can change with activity, heat, sweating,
                    illness and other individual factors.
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

export default DailyWaterIntake;
