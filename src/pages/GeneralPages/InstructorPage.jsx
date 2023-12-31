import React from "react";
import useFetchUsers from "../../hooks/useFetchUsers";

const InstructorPage = () => {
  const [users, refetchUsersData, isUsersLoading] = useFetchUsers();
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "example@email.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Micheal colorand",
      title: "example@email.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Brown Luis",
      title: "example@email.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Lysa sandiago",
      title: "example@email.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Daniel martin",
      title: "example@email.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Vicky tanson",
      title: "example@email.com",
    },
  ];
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-700 text-3xl font-semibold sm:text-4xl">
            Meet Our{" "}
            <span className=" text-white bg-[#F89A2E] px-2">Instructors</span>
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {users.map((item, idx) => {
              if (item.role === "instructor") {
                return (
                  <React.Fragment key={idx}>
                    <li key={idx}>
                      <div className="w-full h-60 sm:h-52 md:h-56">
                        <img
                          src={item.avatar}
                          className="w-full h-full object-cover object-center shadow-md rounded-xl"
                          alt=""
                        />
                      </div>
                      <div className=" flex justify-between items-center">
                        <div className="mt-4">
                          <h4 className="text-lg text-gray-700 font-semibold">
                            {item.name}
                          </h4>
                          <p className="text-[#CF1164] font-medium">
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InstructorPage;
