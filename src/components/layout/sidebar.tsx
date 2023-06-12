import React, { useEffect, useRef, useState } from "react";
import filters from "../../data/filters.json";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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

export enum Category {
    STYLE = "STYLE" as any,
    COLOR = "COLOR" as any,
    SIZE = "SIZE" as any,
    // STYLE = "STYLE" as string,
    // STYLE = "STYLE" as string,
}

const Sidebar: React.FC<{
    activeFilters: { [key in Category as string]: string[] };
    setActiveFilters: (data: {
        category: Category;
        tag: { id: string; label: string };
    }) => void;
}> = ({ setActiveFilters, activeFilters }) => {
    const [filter, setFilter] = useState(filters);
    // const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [parent] = useAutoAnimate();

    return (
        <div className="flex w-1/6 flex-col pr-4">
            <div className="py-2">
                <h3 className="border-b border-black text-lg font-semibold text-black-600">
                    Filters
                </h3>
            </div>
            {filter.map((block) => (
                <div key={block.id} ref={parent} className="w-full">
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
                    <div>
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
                                                switch (block.id.toUpperCase()) {
                                                    case Category.COLOR.toString(): {
                                                        setActiveFilters({
                                                            category: Category.COLOR,
                                                            tag: tag,
                                                        });
                                                        break;
                                                    }
                                                    case Category.STYLE.toString(): {
                                                        setActiveFilters({
                                                            category: Category.STYLE,
                                                            tag: tag,
                                                        });
                                                        break;
                                                    }
                                                    case Category.SIZE.toString(): {
                                                        setActiveFilters({
                                                            category: Category.SIZE,
                                                            tag: tag,
                                                        });
                                                        break;
                                                    }
                                                }
                                                document.getElementById(tag.id)?.focus();
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                id={tag.id}
                                                checked={activeFilters[
                                                    block.id.toUpperCase()
                                                ]?.includes(tag.id)}
                                                className="rounded border-black-50/50 text-red-700 focus:ring-red-700"
                                                onChange={(e) => {
                                                    console.log("Changed", e);
                                                    e.preventDefault();
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
                                {/* {JSON.stringify(activeFilters)} */}
                            </div>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
