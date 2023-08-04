import React from "react";

import BarLoader from "react-spinners/BarLoader";

interface IProps {
  height?: string;
  children: React.ReactNode;
  loading?: boolean;
}
export const loaderTestId = "loader";

const Loader = ({ height = "h-screen", children, loading = false }: IProps) => {
  return (
    <>
      {loading ? (
        <div
          className={`${height}  w-full flex justify-center items-center`}
          data-testid={loaderTestId}
        >
          <BarLoader color="#0080FE" />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loader;
