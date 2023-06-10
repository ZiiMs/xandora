import React, { useState } from "react";

// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     hidden: true,
//     values: [{ id: "white", label: "White", checked: false }],
//   },
//   {
//     id: "style",
//     name: "Style",
//     hidden: true,
//     values: [
//       { id: "hoodie", label: "Hoodie", checked: false },
//       { id: "tshirt", label: "T-Shirt", checked: false },
//     ],
//   },
// ];

const Sidebar: React.FC = () => {
  const filters = [
    {
      id: "color",
      name: "Color",
      hidden: true,
      values: [{ id: "white", label: "White", checked: false }],
    },
    {
      id: "style",
      name: "Style",
      hidden: true,
      values: [
        { id: "hoodie", label: "Hoodie", checked: false },
        { id: "dressshirt", label: "Dress Shirt", checked: false },
        { id: "tshirt", label: "T-Shirt", checked: false },
      ],
    },
  ];

  const [filter, setFilter] = useState(filters);
  return (
    <div className="flex w-fit flex-col pr-4">
      {filter.map((block, i) => (
        <div key={block.id}>
          <button
            className="flex flex-row items-center justify-between px-2 hover:text-black-600/75"
            onClick={(e) => {
              e.preventDefault();
              // const oldFilter = filter[i];
              // if (!oldFilter || oldFilter.hidden === null) {
              //   return;
              // }
              // const updatedValue = { ...oldFilter, hidden: !oldFilter.hidden };
              // const clone = [...filter];
              // if (clone[i]) {
              //   clone[i] = updatedValue;
              //   setFilter(clone);
              // // }
              // const updateFilters = filter.map((fil) => {
              //   return fil.id === block.id
              //     ? { ...fil, hidden: !fil.hidden }
              //     : fil;
              // });
              //
              setFilter((oldFilter) => {
                return oldFilter.map((fil) => {
                  return fil.id === block.id
                    ? { ...fil, hidden: !fil.hidden }
                    : fil;
                });
              });
              console.log("Workign!/c:w", block.hidden);
            }}
          >
            <span>{block.name}</span>
            <span>{block.hidden ? <div>+</div> : <div>-</div>}</span>
          </button>
          {!block.hidden ? (
            <div>
              {block.values.map((tag, i) => (
                <button
                  key={tag.id}
                  className="flex w-max items-center gap-x-4 hover:cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter((oldFilter) => {
                      return oldFilter.map((fil) => {
                        return fil.id === block.id
                          ? {
                              ...fil,
                              values: fil.values.map((val) => {
                                return val.id === tag.id
                                  ? { ...val, checked: !val.checked }
                                  : val;
                              }),
                            }
                          : fil;
                      });
                    });
                  }}
                >
                  <input
                    type="checkbox"
                    defaultValue={tag.id}
                    checked={tag.checked}
                    onChange={(e) => e.preventDefault()}
                  />
                  <span>{tag.label}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ))}
      {/* <input type="checkbox" /> */}
      {/* <label>Test</label> */}
      {/* <input type="checkbox" /> */}
      {/* <input type="checkbox" /> */}
      {/* <input type="checkbox" /> */}
      {/* <input type="checkbox" /> */}
    </div>
  );
};

export default Sidebar;
