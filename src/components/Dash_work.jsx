import React from "react";

export const Dash_work = () => {
  return (
    <div className="w-full h-screen overflow-auto bg-gray-100">
      <section id="dashboard-top-section" className="p-4">
        <div className="flex justify-between">
          <div>
            <h1>
              Good morning, <span>Filip</span>
            </h1>
          </div>
          <div>
            <input  className="outline-none p-2 rounded-xl"type="search" placeholder="search" />
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-between ">
        <section id="dashboard-middle-section" className="">
          <div className="flex justify-between  gap-4 p-8">
            <div className="w-full bg-blue-900 rounded-2xl p-2 text-white">
              <h1>Earning</h1>
              <p>$6,445</p>
            </div>
            <div className="w-full bg-blue-900 rounded-2xl p-2 text-white">
              <div>Rank</div>
              <div>Projects</div>
            </div>
            <div className=" w-full bg-blue-900 rounded-2xl p-2 text-white">
              <div>
                <h1>Your projects</h1>
              </div>
              <div>
                <h3>project1</h3>
                <p>project description</p>
              </div>
              <div>
                <h3>project1</h3>
                <p>project description</p>
              </div>
            </div>
          </div>
        </section>
        <section id="dashboard-bottom-section w-full" className="p-4">
          <div className="w-full gap-8 flex justify-between">
            <div className="w-full">
              <div className="p-2">
                <h1>Recent projects</h1>
              </div>
              <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white">
                <div className="flex justify-between">
                  <div>
                    <h1>project name</h1>
                    <p>project description</p>
                  </div>
                  <div>
                    <p>Status</p>
                  </div>
                  <div>
                    <p>$4,434</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h1>project name</h1>
                    <p>project description</p>
                  </div>
                  <div>
                    <p>Status</p>
                  </div>
                  <div>
                    <p>$4,434</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="p-2">
                <h1>Recomended projects</h1>
              </div>
              <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white">
                <div className="flex w-full justify-between">
                  <div>
                    <h1>project name</h1>
                    <p>project description</p>
                  </div>
                  <div>
                    <p>Status</p>
                  </div>
                  <div>
                    <p>$4,434</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h1>project name</h1>
                    <p>project description</p>
                  </div>
                  <div>
                    <p>Status</p>
                  </div>
                  <div>
                    <p>$4,434</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
