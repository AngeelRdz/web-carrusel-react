import React from "react";

import Status from "./Category/Status/Status";

const Filter = ({
    updateStatus
  }) => {

    console.log('data en Filter', updateStatus);
    let clear = () => {
        updateStatus("");
        window.location.reload(false);
    };

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div className="accordion" id="accordionExample">
                <Status
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
};

export default Filter;
