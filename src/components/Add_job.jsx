import React from "react";

export const Add_job = () => {
  return (
    <div className="w-full p-4 h-screen overflow-auto">
      <section id="job-heading">
        <div className="pt-2 pb-2 pl-4 pr-4 text-black-100 w-fit rounded-2xl bg-blue-100">
          <h1>Job board</h1>
        </div>
        <div className="flex justify-between pt-4 pl-16 pr-16 pb-8 gap-4">
          <div className="">
            {" "}
            <select name="cars" id="cars">
              <option value="volvo">District</option>
              <option value="saab">Bardoli</option>
              <option value="opel">Andheri</option>
              <option value="audi">Kolkata</option>
            </select>
          </div>
          <div>
            {" "}
            <select name="cars" id="cars">
              <option value="volvo">Block</option>
              <option value="saab">Bardoli</option>
              <option value="opel">Andheri</option>
              <option value="audi">Kolkata</option>
            </select>
          </div>
          <div>
            {" "}
            <select name="cars" id="cars">
              <option value="volvo">Panchayat</option>
              <option value="saab">Bardoli</option>
              <option value="opel">Andheri</option>
              <option value="audi">Kolkata</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>5 jobs for you</p>
          </div>
          <div>
            <p>Sort jobs by date</p>
          </div>
        </div>
      </section>
      <section id="job-list" className="pt-2">
        <div className="h-64 pt-4 pb-4 flex flex-col gap-4 overflow-auto">
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-2xl">
            <div>
              <h1>project name</h1>
            </div>
            <div>
              <p>Status</p>
              <p>2 days ago</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-2xl">
            <div>
              <h1>project name</h1>
            </div>
            <div>
              <p>Status</p>
              <p>2 days ago</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-2xl">
            <div>
              <h1>project name</h1>
            </div>
            <div>
              <p>Status</p>
              <p>2 days ago</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-2xl">
            <div>
              <h1>project name</h1>
            </div>
            <div>
              <p>Status</p>
              <p>2 days ago</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-2xl">
            <div>
              <h1>project name</h1>
            </div>
            <div>
              <p>Status</p>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
