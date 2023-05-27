/* eslint-disable no-unused-vars */


import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ServiceTabs = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
fetch("services.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    setServices(data)
})
    },[])
    return (
      <div className="mt-10 mb-20">
        <Tabs>
          <TabList className="no-underline border-none">
            <div className="flex gap-10 text-xl font-semibold ">
              <Tab>Cavity Protection</Tab>
              <Tab>Cosmetic Dentistry</Tab>
              <Tab>Oral Surgery</Tab>
            </div>
          </TabList>

          <div className="mt-12">
            <TabPanel>
              {services.map((item) => (
                <>
                  <div className="flex flex-col gap-6  px-10 lg:px-0">
                    <img src={item.photo} alt="" />
                    <p className="text-3xl font-bold">{item.serviceName}</p>
                    <p className="text-xl">{item.serviceDetails}</p>
                    <Link className="btn font-bold text-xl btn-outline btn-warning">
                      View Details
                    </Link>
                  </div>
                </>
              ))}
            </TabPanel>
            <TabPanel>
              {services.map((item) => (
                <>
                  <div className="flex flex-col gap-6 px-10 lg:px-0">
                    <img src={item.photo1} alt="" />
                    <p className="text-3xl font-bold">{item.serviceName1}</p>
                    <p className="text-xl">{item.serviceDetails1}</p>
                    <Link className="btn font-bold text-xl btn-outline btn-warning">
                      View Details
                    </Link>
                  </div>
                </>
              ))}
            </TabPanel>
            <TabPanel>
              {services.map((item) => (
                <>
                  <div className="flex flex-col gap-6  px-10 lg:px-0">
                    <img src={item.photo2} alt="" />
                    <p className="text-3xl font-bold">{item.serviceName2}</p>
                    <p className="text-xl">{item.serviceDetails2}</p>
                    <Link className="btn font-bold text-xl btn-outline btn-warning">
                      View Details
                    </Link>
                  </div>
                </>
              ))}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
};

export default ServiceTabs;