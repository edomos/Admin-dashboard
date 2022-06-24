import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ThemeSettings from './components/ThemeSettings'

// import from pages
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from './pages';

import './App.css';

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>

        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 style={{ zIndex: '100' }}">
            <TooltipComponent content="Settings" positon="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-blue-300 text-white bg-blue-900 rounded-full"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* Setup Dynamic Code For Active Menu's Visibility */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Navigation Bar */}

          <div
            className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? 'md:ml-72' : 'flex-2'
              }` //same as below but cleaned up
              //   activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'
              //   : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
        </div>
        <div>

          <Routes>
            {/* Dashboard Routes */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* Pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* Apps */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* Charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
