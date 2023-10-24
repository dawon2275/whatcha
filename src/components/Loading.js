import React from "react";
import { Oval } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="loading">
      <Oval
        height={80}
        width={80}
        color="#a90c0c"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#a90c0c"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
