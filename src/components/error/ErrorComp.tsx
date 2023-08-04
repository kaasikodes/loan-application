import { Button } from "antd";
import React from "react";

export const defaultErrorMsg = "Oops, an Error Occurred!";

interface IProps {
  message?: string;
  img?: string;
  children: React.ReactNode;
  isError?: boolean;
  link?: {
    text: string;
    url: string;
  };
}

const ErrorComp = ({
  message = defaultErrorMsg,
  link,
  img,
  children,
  isError = false,
}: IProps) => {
  return (
    <>
      {isError ? (
        <div className="min-h-32 flex flex-col gap-4 justify-center items-center">
          <div>
            {img && (
              <img src={img} alt={message} className="object-contain h-80" />
            )}
          </div>

          <span className="text-sky-700 text-xl font-semibold text-center">
            {message}
          </span>

          {link && (
            <Button href={link.url} type="primary">
              {link.text}
            </Button>
          )}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ErrorComp;
