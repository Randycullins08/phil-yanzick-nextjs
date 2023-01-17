import { useState, useEffect } from "react";

import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

export default function Modal(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      {screenWidth > 768 ? (
        <ReactModal
          closeTimeoutMS={200}
          isOpen={props.isOpen}
          onRequestClose={props.onRequestClose}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              ...props.overlay,
            },
            content: {
              position: "absolute",
              top: "5em",
              left: "12em",
              right: "12em",
              bottom: "5em",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "20px",
              ...props.content,
            },
          }}
        >
          {props.children}
        </ReactModal>
      ) : (
        <ReactModal
          closeTimeoutMS={200}
          isOpen={props.isOpen}
          onRequestClose={props.onRequestClose}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              ...props.overlay,
            },
            content: {
              position: "absolute",
              top: "10em",
              left: "1.5em",
              right: "1.5em",
              bottom: "8em",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "20px",
              ...props.content,
            },
          }}
        >
          {props.children}
        </ReactModal>
      )}
    </>
  );
}
