import React from "react";

const Card = ({ data }) => {
  function renderObjValue(key, value) {
    if (Array.isArray(value)) {
      return (
        <>
          <div className="w-full bg-slate-100 mt-4">
            <div className="bg-indigo-300 p-4 text-slate-50 font-semibold text-xl">
              <p>{key}</p>
            </div>
            <div className="p-4">
              {value.map((item, index) => {
                return (
                  <>
                    {typeof item === "object"
                      ? Object.entries(item).map(([subKey, subValue]) => (
                          <>
                            {subKey === "name" ? (
                              <h4 className="font-semibold">{key}</h4>
                            ) : (
                              <p className="py-2">{subValue}</p>
                            )}
                          </>
                        ))
                      : `${item}  `}
                  </>
                );
              })}
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="container mx-auto m-10 px-24 flex flex-wrap space-x-1">
      <div className="flex justify-center items-center p-4 flex-col">
        <h1 className="text-4xl p-2 w-1/2 font-semibold"> {data.url}</h1>
        <p className="text-base p-2 w-1/2 font-semibold">
          Title : {data.website_title}
        </p>
        <p className="text-base p-2 w-1/2 font-semibold">
          Description : {data.website_description}
        </p>
        <p className="text-base p-2 w-1/2 font-semibold">
          IP Address : {data.whoisdata[1]}
        </p>
        <p className="text-base p-2 w-1/2 font-semibold">
          Geo Location of IP : {data.whoisdata[0]}
        </p>
      </div>

      {Object.entries(data).map(([key, value]) => renderObjValue(key, value))}
    </div>
  );
};

export default Card;
