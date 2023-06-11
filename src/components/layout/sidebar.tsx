import React, { useState } from "react";

// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     hidden: true,
//     values: [{ id: "white", label: "White" }],
//   },
//   {
//     id: "style",
//     name: "Style",
//     hidden: true,
//     values: [
//       { id: "hoodie", label: "Hoodie" },
//       { id: "tshirt", label: "T-Shirt" },
//     ],
//   },
// ];

const Sidebar: React.FC = () => {
    const filters = [
        {
            id: "color",
            name: "Color",
            hidden: true,
            values: [{ id: "white", label: "White" }],
        },
        {
            id: "style",
            name: "Style",
            hidden: true,
            values: [
                { id: "hoodie", label: "Hoodie" },
                { id: "dressshirt", label: "Dress Shirt" },
                { id: "tshirt", label: "T-Shirt" },
            ],
        },
    ];

    const [filter, setFilter] = useState(filters);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    return (
        <div className="flex w-1/5 flex-col pr-4">
            <div className="py-2">
                <h3 className="border-b border-black text-lg font-semibold text-black-600">
                    Filters
                </h3>
            </div>
            {filter.map((block, i) => (
                <div key={block.id} className="w-full">
                    <button
                        className="flex w-full flex-row items-center justify-between border-b border-black-600 px-4 py-2 hover:text-black-600/75"
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
                        <div className="flex w-full flex-row justify-between">
                            <span className="font-medium">{block.name}</span>
                            <span>{block.hidden ? <div>+</div> : <div>-</div>}</span>
                        </div>
                    </button>
                    {!block.hidden ? (
                        <div className="flex flex-col justify-center space-y-1 py-2">
                            {block.values.map((tag, i) => (
                                <div
                                    key={tag.id}
                                    className="flex w-max items-center justify-center gap-x-6 hover:cursor-pointer"
                                >
                                    <button
                                        key={tag.id}
                                        className="flex w-max items-center justify-center gap-x-6 hover:cursor-pointer"
                                        onClick={(e) => {
                                            // e.preventDefault();

                                            const temp = [...activeFilters];
                                            if (!temp.includes(tag.id)) {
                                                temp.push(tag.id);
                                                console.log("Not Found adding", temp);
                                            } else {
                                                temp.splice(temp.indexOf(tag.id), 1);
                                                console.log("Found deleting", temp);
                                            }
                                            setActiveFilters(temp);

                                            document.getElementById(tag.id)?.focus();
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            id={tag.id}
                                            checked={activeFilters.includes(tag.id)}
                                            className="rounded border-black-50/50 text-red-700 focus:ring-red-700"
                                            onChange={(e) => {
                                                console.log("Changed", e);
                                            }}

                                        // onClick={(e) => console.log("Clicked", e)}
                                        />
                                        <label
                                            // htmlFor={tag.id}
                                            className="h-full items-center justify-center self-center"
                                        >
                                            {tag.label}
                                        </label>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
