import React from "react";
import ActiveRoute from "./ActiveRoute";

const Menu = () => {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <ActiveRoute to="/admin/dashboard">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
          <span className="ml-3">Dashboard</span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/admin/selected-classes">
          <svg
            fill="currentColor"
            className="w-6 h-6 text-gray-500"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 492.049 492.049"
            xml:space="preserve"
          >
            <g>
              <path
                d="M314.763,204.944c13.811,0,25.004-11.194,25.004-24.972c0-13.81-11.192-24.989-25.004-24.989
		c-13.793,0-24.972,11.18-24.972,24.989C289.791,193.749,300.97,204.944,314.763,204.944z"
              />
              <path
                d="M406.638,179.972c0-13.81-11.19-24.989-24.983-24.989c-13.814,0-25.011,11.18-25.011,24.989
		c0,13.777,11.196,24.972,25.011,24.972C395.447,204.944,406.638,193.749,406.638,179.972z"
              />
              <path
                d="M253.014,179.94c0-69.764-56.745-126.508-126.509-126.508C56.74,53.432,0,110.176,0,179.94
		C0,249.7,56.74,306.461,126.505,306.461C196.268,306.461,253.014,249.7,253.014,179.94z M126.505,273.381
		c-51.509,0-93.423-41.916-93.423-93.441c0-51.512,41.914-93.43,93.423-93.43c51.513,0,93.425,41.918,93.425,93.43
		C219.93,231.465,178.018,273.381,126.505,273.381z"
              />
              <path
                d="M78.55,162.008c-9.889,0-17.913,8.045-17.913,17.932c0,9.885,8.024,17.911,17.913,17.911
		c9.899,0,17.913-8.026,17.913-17.911C96.463,170.053,88.449,162.008,78.55,162.008z"
              />
              <path
                d="M126.505,162.008c-9.883,0-17.911,8.045-17.911,17.932c0,9.885,8.028,17.911,17.911,17.911
		c9.903,0,17.913-8.026,17.913-17.911C144.418,170.053,136.408,162.008,126.505,162.008z"
              />
              <path
                d="M174.45,162.008c-9.903,0-17.913,8.045-17.913,17.932c0,9.885,8.01,17.911,17.913,17.911
		c9.897,0,17.911-8.026,17.911-17.911C192.361,170.053,184.348,162.008,174.45,162.008z"
              />
              <path
                d="M487.628,376.807l-74.965-58.166c43.501-30.818,72.04-81.426,72.04-138.669c0-93.704-76.236-169.939-169.94-169.939
		c-41.948,0-80.325,15.359-110,40.639c9.758,5.927,18.833,12.857,26.978,20.753c23.066-17.688,51.783-28.315,83.022-28.315
		c75.462,0,136.86,61.399,136.86,136.863c0,49.75-26.782,93.265-66.596,117.216l-72.155-55.984c-3.312-2.552-7.733-3.1-11.562-1.437
		c-3.831,1.665-6.428,5.298-6.802,9.451l-5.752,64.996c-21.126-4.134-40.555-13.085-57.035-25.73
		c-8.156,7.896-17.234,14.812-26.989,20.738c22.711,19.353,50.509,32.823,81.1,38.122l-10.805,122.258
		c-0.402,4.586,1.984,8.965,6.074,11.114c4.068,2.131,9.031,1.613,12.582-1.326L376.064,411l106.054-13.859
		c4.573-0.598,8.318-3.891,9.529-8.335C492.859,384.365,491.276,379.634,487.628,376.807z"
              />
            </g>
          </svg>
          <span className="ml-3">My Selected Classes</span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/admin/enrolled-classes">
          <svg
            fill="currentColor"
            className="w-6 h-6 text-gray-500"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 310 310"
            xml:space="preserve"
          >
            <path
              d="M300.606,159.727l-45.333-45.333c-5.857-5.858-15.355-5.858-21.213,0L225,123.454V15c0-8.284-6.716-15-15-15H20
	C11.716,0,5,6.716,5,15v240.002c0,8.284,6.716,15,15,15h85V295c0,8.284,6.716,15,15,15h45.333c3.979,0,7.794-1.581,10.607-4.394
	l124.667-124.667C306.465,175.081,306.465,165.585,300.606,159.727z M35,30h160v123.454l-85.606,85.605
	c-0.302,0.301-0.581,0.619-0.854,0.942H35V30z M159.12,280H135v-24.121l109.667-109.666l24.12,24.12L159.12,280z"
            />
          </svg>
          <span className="ml-3">My Enrolled Classes</span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/admin/add-class">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 292.377 292.377"
            xml:space="preserve"
          >
            <g>
              <path
                d="M146.188,0C65.576,0,0,65.582,0,146.188s65.576,146.188,146.188,146.188
		s146.188-65.582,146.188-146.188S226.801,0,146.188,0z M194.962,152.155h-42.806v42.8c0,3.3-2.667,5.967-5.967,5.967
		c-3.3,0-5.967-2.667-5.967-5.967v-42.8H97.415c-3.294,0-5.967-2.673-5.967-5.967s2.673-5.967,5.967-5.967h42.806V97.415
		c0-3.294,2.667-5.967,5.967-5.967c3.3,0,5.967,2.673,5.967,5.967v42.806h42.806c3.3,0,5.967,2.673,5.967,5.967
		S198.261,152.155,194.962,152.155z"
              />
            </g>
          </svg>
          <span className="ml-3">Add Class</span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/admin/my-class">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M311.466667 884.053333v0.192H213.333333c-37.704533 0-68.266667-30.5664-68.266666-68.266666V192c0-37.704533 30.562133-68.266667 68.266666-68.266667h559.944534c37.704533 0 68.266667 30.562133 68.266666 68.266667v161.373867a25.6 25.6 0 0 1-51.1872 0.832h-0.1024V196.352a21.333333 21.333333 0 0 0-21.333333-21.333333H217.693867a21.333333 21.333333 0 0 0-21.333334 21.333333v615.2704a21.333333 21.333333 0 0 0 21.333334 21.333333h91.4432A25.6 25.6 0 1 1 311.466667 884.053333z" />
            <path d="M840.533333 857.728c0 16.6272-6.920533 25.472-23.04 25.472-16.119467 0-25.4592-10.171733-25.4592-25.472 0-102.877867-66.282667-160.6784-169.1008-160.6784-102.818133 0-169.1008 57.800533-169.1008 160.682667 0 13.841067-11.6992 25.467733-25.4592 25.467733-13.76 0-23.04-9.024-23.04-25.472 0-121.582933 96.085333-209.194667 217.6-209.194667s217.6 87.611733 217.6 209.194667z" />
            <path d="M627.165867 691.2a136.494933 136.494933 0 0 1-96.516267-233.019733 136.494933 136.494933 0 1 1 193.0368 193.041066 135.6032 135.6032 0 0 1-96.520533 39.978667z m0.034133-230.4c-51.754667 0-93.866667 42.112-93.866667 93.866667s42.112 93.866667 93.866667 93.866666 93.866667-42.112 93.866667-93.866666-42.112-93.866667-93.866667-93.866667z" />
          </svg>
          <span className="ml-3">My Classes</span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/admin/form">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Form</span>
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
            3
          </span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute
          to="/admin/list"
          className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">List</span>
        </ActiveRoute>
      </li>
      <li>
        <ActiveRoute
          to="/admin/grid"
          className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Grid</span>
        </ActiveRoute>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
        </a>
      </li>
    </ul>
  );
};

export default Menu;
