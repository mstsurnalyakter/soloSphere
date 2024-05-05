
import PropTypes from 'prop-types'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from './JobCard';

const TabComponent = () => {
  return (
    <>
      <Tabs>
        <div>
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
            Browse Jobs By Categories
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
            Three categories available for the time being. They are Web
            Development, Graphics Design and Digital Marketing. Browse them by
            clicking on the tabs below.
          </p>
          <div className="flex justify-center mb-6">
            <TabList>
              <Tab>Web Development</Tab>
              <Tab>Graphics Design</Tab>
              <Tab>Digital Marketing</Tab>
            </TabList>
          </div>

          <TabPanel>
           <JobCard/>
          </TabPanel>

          <TabPanel>
           <JobCard/>
          </TabPanel>
          
          <TabPanel>
           <JobCard/>
          </TabPanel>

        </div>
      </Tabs>
    </>
  );
}

TabComponent.propTypes = {}

export default TabComponent