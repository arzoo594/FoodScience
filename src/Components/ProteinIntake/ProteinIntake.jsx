import React, { useState } from "react";
import Swal from "sweetalert2";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const ProteinIntake = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [activity, setActivity] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState("");
  const [goal, setGoal] = useState("");
  const [pregnancy, setPregnancy] = useState("");

  const [protein, setProtein] = useState(null);
  const [factor, setFactor] = useState(null);
  const [message, setMessage] = useState("");

  const calculateProtein = (e) => {
    e.preventDefault();

    const ageValue = Number(age);
    const weightValue = Number(weight);
    const durationValue = Number(exerciseDuration);

    if (
      age === "" ||
      weight === "" ||
      sex === "" ||
      activity === "" ||
      exerciseType === "" ||
      exerciseDuration === "" ||
      goal === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please complete all required fields.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (ageValue < 18) {
      Swal.fire({
        icon: "info",
        title: "Adult Calculator",
        text: "This calculator is designed for adults aged 18 and above.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (ageValue > 120) {
      Swal.fire({
        icon: "error",
        title: "Invalid Age",
        text: "Please enter a valid age.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (weightValue <= 0 || weightValue > 500) {
      Swal.fire({
        icon: "error",
        title: "Invalid Weight",
        text: "Please enter a valid weight between 1 and 500 kg.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (durationValue < 0 || durationValue > 600) {
      Swal.fire({
        icon: "error",
        title: "Invalid Exercise Duration",
        text: "Exercise duration must be between 0 and 600 minutes.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (sex === "female" && pregnancy === "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please select your pregnancy or breastfeeding status.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (pregnancy === "yes") {
      Swal.fire({
        icon: "info",
        title: "Special Nutrition Needs",
        text: "Pregnancy and breastfeeding require individualized nutrition guidance. Please consult a qualified healthcare professional or dietitian.",
        confirmButtonText: "OK",
      });
      return;
    }

    let selectedFactor = 0.8;

    if (ageValue > 65) {
      selectedFactor = 1.0;
    }

    if (activity === "active") {
      selectedFactor = 1.2;
    }

    if (exerciseType === "endurance") {
      selectedFactor = 1.4;
    }

    if (exerciseType === "mixed") {
      selectedFactor = 1.6;
    }

    if (exerciseType === "strength") {
      selectedFactor = 1.8;
    }

    if (exerciseType === "strength" && durationValue >= 90) {
      selectedFactor = 2.0;
    }

    if (goal === "muscle" && exerciseType !== "none") {
      selectedFactor = Math.max(selectedFactor, 1.6);
    }

    if (goal === "performance" && exerciseType !== "none") {
      selectedFactor = Math.max(selectedFactor, 1.6);
    }

    const proteinValue = weightValue * selectedFactor;

    setFactor(selectedFactor);
    setProtein(Math.round(proteinValue));

    if (selectedFactor === 0.8) {
      setMessage(
        "This estimate is based on the general adult protein reference of about 0.8 g/kg/day.",
      );
    } else if (selectedFactor === 1.0) {
      setMessage(
        "This estimate uses a higher reference for older adults. Individual needs can vary.",
      );
    } else if (selectedFactor <= 1.4) {
      setMessage(
        "Regular physical activity and endurance exercise can increase protein needs compared with the general adult reference.",
      );
    } else if (selectedFactor <= 1.6) {
      setMessage(
        "This estimate reflects protein needs commonly used for adults participating in regular exercise.",
      );
    } else {
      setMessage(
        "Higher training demands can require more protein. Individual needs vary with training, body composition and overall diet.",
      );
    }

    Swal.fire({
      icon: "success",
      title: "Protein Intake Calculated!",
      text: `Your estimated protein intake is ${Math.round(
        proteinValue,
      )} g/day.`,
      confirmButtonText: "OK",
    });
  };

  const resetCalculator = () => {
    setAge("");
    setWeight("");
    setSex("");
    setActivity("");
    setExerciseType("");
    setExerciseDuration("");
    setGoal("");
    setPregnancy("");
    setProtein(null);
    setFactor(null);
    setMessage("");
  };

  return (
    <ScrollReveal>
      <section className="relative min-h-screen overflow-hidden bg-[#f2fbf3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#dff3df] opacity-70" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-[#e3f5e4] opacity-70" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-3 text-5xl">🥩</div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span className="text-green-700">Protein Intake</span> Calculator
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-600 sm:text-xl">
              Estimate your daily protein needs based on your personal factors.
            </p>

            <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
              Enter your age, weight, activity, exercise and goal to get an
              estimated daily protein intake.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="lg:border-r lg:border-gray-200 lg:pr-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
                    🥩
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

                <form onSubmit={calculateProtein} className="space-y-5">
                  <div>
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
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="weight"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Weight (kg)
                    </label>

                    <input
                      id="weight"
                      type="number"
                      min="1"
                      max="500"
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 70"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    />
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
                      onChange={(e) => {
                        setSex(e.target.value);
                        if (e.target.value !== "female") {
                          setPregnancy("");
                        }
                      }}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Prefer not to specify</option>
                    </select>
                  </div>

                  {sex === "female" && (
                    <div>
                      <label
                        htmlFor="pregnancy"
                        className="mb-2 block text-sm font-bold text-slate-800"
                      >
                        Pregnancy / Breastfeeding
                      </label>

                      <select
                        id="pregnancy"
                        value={pregnancy}
                        onChange={(e) => setPregnancy(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      >
                        <option value="">Select status</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                  )}

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
                      <option value="low">Sedentary / Low Activity</option>
                      <option value="active">Active</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="exerciseType"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Exercise Type
                    </label>

                    <select
                      id="exerciseType"
                      value={exerciseType}
                      onChange={(e) => setExerciseType(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select exercise type</option>
                      <option value="none">No Regular Exercise</option>
                      <option value="endurance">Endurance / Cardio</option>
                      <option value="mixed">Mixed Training</option>
                      <option value="strength">Strength Training</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="exerciseDuration"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Exercise Duration
                    </label>

                    <div className="relative">
                      <input
                        id="exerciseDuration"
                        type="number"
                        min="0"
                        max="600"
                        value={exerciseDuration}
                        onChange={(e) => setExerciseDuration(e.target.value)}
                        placeholder="e.g. 60"
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 pr-20 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                      />

                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                        min/day
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="goal"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Primary Goal
                    </label>

                    <select
                      id="goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select your goal</option>
                      <option value="general">General Health</option>
                      <option value="muscle">
                        Muscle Maintenance / Growth
                      </option>
                      <option value="performance">Sports Performance</option>
                    </select>
                  </div>

                  <div className="rounded-xl bg-green-50 px-4 py-4">
                    <p className="text-sm leading-6 text-green-800">
                      Protein needs vary with body weight, age, activity,
                      training type and individual circumstances. This
                      calculator provides an adult estimate, not a medical
                      prescription.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="flex-1 cursor-pointer rounded-xl bg-green-600 px-5 py-4 font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-700"
                    >
                      Calculate Protein
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
                      Daily Protein
                    </span>

                    <span className="mt-1 text-4xl font-extrabold text-slate-900">
                      {protein ?? "--"}
                    </span>

                    <span className="mt-2 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {protein ? "g / day" : "Not calculated"}
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3 rounded-xl bg-green-100 px-4 py-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    i
                  </div>

                  <p className="text-sm leading-6 text-green-800">
                    {protein
                      ? `Your estimate uses approximately ${factor} g of protein per kg of body weight.`
                      : 'Enter your information and click "Calculate Protein" to see your estimated daily protein intake.'}
                  </p>
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-bold text-slate-900">
                    Protein Reference
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-700">
                        General Adult
                      </span>

                      <span className="text-sm font-bold text-slate-500">
                        ~0.8 g/kg
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-700">
                        Older Adult
                      </span>

                      <span className="text-sm font-bold text-slate-500">
                        ~1.0–1.2 g/kg
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                      <span className="text-sm text-slate-700">
                        Exercising Adult
                      </span>

                      <span className="text-sm font-bold text-slate-500">
                        ~1.4–2.0 g/kg
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-xl bg-white px-4 py-4">
                  <h3 className="font-bold text-slate-900">Your Inputs</h3>

                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Age</span>
                      <span className="font-semibold">
                        {age ? `${age} years` : "--"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Weight</span>
                      <span className="font-semibold">
                        {weight ? `${weight} kg` : "--"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Exercise</span>
                      <span className="font-semibold capitalize">
                        {exerciseType ? exerciseType.replace("-", " ") : "--"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Goal</span>
                      <span className="font-semibold capitalize">
                        {goal ? goal : "--"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3 border-t border-green-100 pt-5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-400 text-xs font-bold text-slate-500">
                    i
                  </span>

                  <p className="text-xs leading-5 text-slate-500">
                    This calculator is intended for adults 18+. People who are
                    pregnant, breastfeeding, have kidney disease, or have other
                    medical conditions should get individualized advice from a
                    qualified healthcare professional.
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

export default ProteinIntake;
