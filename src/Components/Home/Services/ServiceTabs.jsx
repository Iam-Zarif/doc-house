/* eslint-disable no-unused-vars */


import { data } from "autoprefixer";
import { useEffect, useState } from "react";
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
      <div className="mt-10">
        <Tabs>
          <TabList className="no-underline border-none">
            <div className="flex gap-14 text-xl font-semibold ">
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 3</Tab>
            </div>
          </TabList>

          <div className="mt-6">
            <TabPanel>
              {services.map((item) => (
                <>
                  <div>
                    <img src={item.photo} alt="" />
                    <p>{item.serviceName}</p>
                    <p>{item.serviceDetails}</p>
                  </div>
                </>
              ))}
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
};

export default ServiceTabs;