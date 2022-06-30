import { useState } from "react";

import classNames from "classnames";

const FeaturesPriority = () => {
  const [x, setX] = useState("medium");
  const [y, setY] = useState("medium");
  return (
    <>
      <section className="flex flex-col justify-center space-y-4 mt-4">
        <h1 className="mx-auto text-2xl">Features Priority</h1>

        <div className=" mx-auto">
          {/* FIXME: fix width */}
          <div className=" w-96 grid grid-cols-4 ">
            <div className="flex items-center">
              <div>
                <p>
                  <strong>High</strong> Emergency
                </p>
                <p className="hidden sm:block">
                  Features will affect the company's earnings. The clients will
                  terminate the contract.
                </p>
              </div>
            </div>
            <div
              className={classNames("priority-card bg-indigo-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "low" && y === "high",
              })}
            ></div>
            <div
              className={classNames("priority-card bg-indigo-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "medium" && y === "high",
              })}
            ></div>
            <div
              className={classNames("priority-card bg-rose-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "high" && y === "high",
              })}
            ></div>
            <div className="flex items-center">
              <div>
                <p>
                  <strong>Medium</strong> Emergency
                </p>
                <p className="hidden sm:block">
                  Features may affect future plans.
                </p>
              </div>
            </div>
            <div
              className={classNames("priority-card bg-green-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "low" && y === "medium",
              })}
            >
              Do not
            </div>
            <div
              className={classNames("priority-card bg-indigo-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "medium" && y === "medium",
              })}
            >
              Plan
            </div>
            <div
              className={classNames("priority-card  bg-rose-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "high" && y === "medium",
              })}
            >
              Do
            </div>
            <div className="flex items-center">
              <div>
                <p>
                  <strong>Low</strong> Emergency
                </p>
                <p className="hidden sm:block">
                  Features are no impact on the company's short-term and
                  long-term earnings.
                </p>
              </div>
            </div>
            <div
              className={classNames("priority-card bg-green-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "low" && y === "low",
              })}
            ></div>
            <div
              className={classNames("priority-card bg-indigo-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "medium" && y === "low",
              })}
            ></div>
            <div
              className={classNames("priority-card bg-indigo-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "high" && y === "low",
              })}
            ></div>
            <div></div>
            <div>
              <div>
                <p>
                  <strong>Low</strong> Important
                </p>
                <p className="hidden sm:block">
                  Maybe some clients will be happy, but it is okay if they
                  aren't.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <strong>Medium</strong> Important
                </p>
                <p className="hidden sm:block">
                  Standard functionality in the industry.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <strong>High</strong> Important
                </p>
                <p className="hidden sm:block">
                  Provide users with more than 10 times the benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-control mx-auto">
          <div className="flex justify-center space-x-8">
            <div>
              <label htmlFor="emergency" className="label">
                emergency
              </label>
              <select
                name="emergency"
                id="emergency"
                value={x}
                onChange={(e) => setX(e.target.value)}
                className="select select-bordered"
              >
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>
            </div>

            <div>
              <label htmlFor="scope" className="label">
                important
              </label>
              <select
                name="scope"
                id="scope"
                value={y}
                onChange={(e) => setY(e.target.value)}
                className="select select-bordered"
              >
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPriority;
