import React from "react";
import FilterBTN from "../../FilterBTN";

const Status = ({ updateStatus }) => {
    let status = [
        "Alive",
        "Dead",
        "Unknown"
    ];

    console.log('data en Status', updateStatus);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Imagenes
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {updateStatus.map((item, index) => {
                        return (
                            <FilterBTN
                                key={index}
                                index={index}
                                name={updateStatus}
                                task={updateStatus}
                                input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Status;
