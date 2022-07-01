import { useState } from "react";

import classNames from "classnames";

const BugsPriority = () => {
  const [x, setX] = useState("medium");
  const [y, setY] = useState("medium");
  return (
    <>
      <section className="flex flex-col justify-center space-y-4 mt-4">
        <h1 className="mx-auto text-2xl">Bugs Priority</h1>

        <div className=" mx-auto">
          {/* FIXME: fix width */}
          <div className=" max-w-screen-md grid grid-cols-4 ">
            <div className="flex items-center">
              <div>
                <p>
                  <strong>High</strong> Emergency
                </p>
                <p>
                  Bugs that prevent users from placing orders or creating
                  accounts
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
                <p>
                  Bugs that affect overall functionality in a non-core feature
                </p>
              </div>
            </div>
            <div
              className={classNames("priority-card bg-green-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "low" && y === "medium",
              })}
            >
              Backlog
            </div>
            <div
              className={classNames("priority-card bg-indigo-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "medium" && y === "medium",
              })}
            >
              Fix Next Spring
            </div>
            <div
              className={classNames("priority-card  bg-rose-100", {
                "shadow border-orange-500 border-2 animate-pulse":
                  x === "high" && y === "medium",
              })}
            >
              Fix Now
            </div>
            <div className="flex items-center">
              <div>
                <p>
                  <strong>Low</strong> Emergency
                </p>
                <p>Bugs representing no impact on core functionality</p>
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
                  <strong>0% to 10%</strong>
                </p>
                <p>Users</p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <strong>11% to 30%</strong>
                </p>
                <p>Users</p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <strong>31% to 100%</strong>
                </p>
                <p>Users</p>
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
                className="select select-bordered select-sm"
              >
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>
            </div>

            <div>
              <label htmlFor="scope" className="label">
                scope
              </label>
              <select
                name="scope"
                id="scope"
                value={y}
                onChange={(e) => setY(e.target.value)}
                className="select select-bordered select-sm"
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

export default BugsPriority;
