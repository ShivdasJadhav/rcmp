// components/Navbar.jsx
import { useState, Fragment } from "react";
import { Button, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import rmcp_logo from "../assets/img/rmcp_logo.png";
import { LogOut } from "lucide-react";

// Helper component for multi-level dropdown

const NavDropdown = ({ item }) => {
  const [localOpen, setLocalOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseEnter={() => setLocalOpen(true)}
      onMouseLeave={() => setLocalOpen(false)}
    >
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-sky-100 hover:text-white focus:outline-none">
            {item.title}
            <ChevronDownIcon
              className={`ml-1 h-4 w-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            show={localOpen}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute z-50 mt-2 w-56 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {item.children.map((subItem, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <div>
                        {subItem.path === "/logout" ? (
                          <button
                            onClick={logout}
                            className="flex gap-2 items-center bg-orange-400 px-2 py-1 rounded-md ml-2 my-2 text-white"
                          >
                            <LogOut className="h-4 w-4" /> Logout
                          </button>
                        ) : subItem.children ? (
                          <NestedDropdown
                            title={subItem.title}
                            items={subItem.children}
                          />
                        ) : (
                          <Link
                            to={subItem.path}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600"
                            } block px-4 py-2 text-sm`}
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const NestedDropdown = ({ title, items }) => {
  const [localOpen, setLocalOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setLocalOpen(true)}
      onMouseLeave={() => setLocalOpen(false)}
    >
      <button className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        {title}
        <ChevronDownIcon className="ml-auto h-4 w-4" aria-hidden="true" />
      </button>

      {localOpen && (
        <div className="absolute left-full top-0 z-50 w-56 mt-0 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { admin } = useContext(AuthContext); // Get admin authentication status

  // Navigation structure based on your sitemap
  let authRoutes = {
    title: "Admin",
    path: "/admin",
    children: [
      {
        title: "Vacancies",
        path: "/admin/vacancies/panel",
      },
      {
        title: "Tc Requests",
        path: "/admin/tc-requests/panel",
      },
      {
        title: "Gallery",
        path: "/admin/gallery/panel",
      },
      {
        title: "Admissions",
        path: "/admin/admissions/panel",
      },
      {
        title: "Enquiry",
        path: "/admin/enquiry/panel",
      },
      {
        title: "Logout",
        path: "/logout",
      },
    ],
  };

  const navigation = [
    admin ? authRoutes : {}, // Dynamically append admin or login
    {
      title: "Home",
      path: "/",
    },
    {
      title: "The Academy",
      path: "/academy",
      children: [
        { title: "About RMCP", path: "/academy/about" },
        { title: "Mission Statement", path: "/academy/mission" },
        { title: "Founder Message", path: "/academy/founder-message" },
        { title: "Chairperson Message", path: "/academy/chairperson-message" },
        { title: "Principal's Message", path: "/academy/principal-message" },
        { title: "Accreditation", path: "/academy/accreditation" },
      ],
    },
    {
      title: "Academics",
      path: "/academics",
      children: [
        {
          title: "Methodology",
          path: "/academics/methodology",
          children: [
            { title: "Primary Wing", path: "/academics/methodology/primary" },
            { title: "Middle Wing", path: "/academics/methodology/middle" },
            { title: "Senior Wing", path: "/academics/methodology/senior" },
          ],
        },
        {
          title: "Holistic Development",
          path: "/academics/holistic-development",
        },
        { title: "Technology Integration", path: "/academics/technology" },
        {
          title: "Guidance & Counselling",
          path: "/academics/guidance-counseling",
        },
      ],
    },
    {
      title: "Infrastructure",
      path: "/infrastructure",
      children: [
        { title: "Auditorium", path: "/infrastructure/auditorium" },
        { title: "Sports Facilities", path: "/infrastructure/sports" },
        {
          title: "Facilities",
          path: "/infrastructure/facilities",
          children: [
            {
              title: "Transportation",
              path: "/infrastructure/facilities/transportation",
            },
            {
              title: "Health Clinic",
              path: "/infrastructure/facilities/health",
            },
            { title: "Security", path: "/infrastructure/facilities/security" },
          ],
        },
        { title: "Learning Centre", path: "/infrastructure/learning-centre" },
        { title: "Infrastructure", path: "/infrastructure/overview" },
        { title: "Library", path: "/infrastructure/library" },
      ],
    },
    {
      title: "Admissions",
      path: "/admissions",
      children: [
        {
          title: "Admission",
          path: "/admissions/apply",
          children: [
            { title: "Primary Wing", path: "/admissions/apply/primary" },
            { title: "Middle Wing", path: "/admissions/apply/middle" },
            { title: "Senior Wing", path: "/admissions/apply/senior" },
          ],
        },
        { title: "TC Request", path: "/admissions/tc-request" },
      ],
    },
    {
      title: "Press Coverage",
      path: "/press",
      children: [
        { title: "Press Coverage", path: "/press/coverage" },
        { title: "E-Magazine", path: "/press/magazine" },
      ],
    },
    {
      title: "Vacancies",
      path: "/vacancies",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <nav className="bg-sky-700 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex w-full justify-between items-center">
            <div
              onClick={() => navigate("/")}
              className="flex flex-shrink-0 items-center gap-2 items-center h-fit cursor-pointer"
            >
              {/* Replace with your academy logo */}
              <img
                className="h-8 w-auto logo"
                src={rmcp_logo}
                alt="RMCP Academy"
              />
              <p className="text-md font-semibold text-white">RMCP ACADEMY</p>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center sm:text-sm sm:font-medium whitespace-nowrap">
              {navigation.map((item, index) => (
                <div key={index} className="relative">
                  {item.children ? (
                    <NavDropdown
                      item={item}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                    />
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-sky-100 hover:text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-sky-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item, index) => (
              <div key={index} className="px-3">
                {item.children ? (
                  <MobileSubmenu
                    item={item}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                  />
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-sky-100 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Mobile menu submenu component
const MobileSubmenu = ({ item, mobileMenuOpen, setMobileMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-sky-100 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
        <ChevronDownIcon
          className={`${
            isOpen ? "rotate-180" : ""
          } ml-auto h-5 w-5 transform transition-transform duration-200`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-1">
          {item.children.map((subItem, idx) => (
            <div key={idx}>
              {subItem.children ? (
                <MobileNestedSubmenu
                  subItem={subItem}
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              ) : (
                <Link
                  to={subItem.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-sky-100 hover:bg-gray-100 hover:text-gray-900"
                >
                  {subItem.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile nested submenu component for third level
const MobileNestedSubmenu = ({
  subItem,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-sky-100 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {subItem.title}
        <ChevronDownIcon
          className={`${
            isOpen ? "rotate-180" : ""
          } ml-auto h-5 w-5 transform transition-transform duration-200`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-1">
          {subItem.children.map((nestedItem, idx) => (
            <Link
              key={idx}
              to={nestedItem.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-sky-100 hover:bg-gray-100 hover:text-gray-900"
            >
              {nestedItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
