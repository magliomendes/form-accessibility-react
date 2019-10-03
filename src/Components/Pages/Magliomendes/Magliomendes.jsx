import React from "react";
import { MagliomendesContent } from "./MagliomendesStyles";

export default class MaglioMendes extends React.Component {
  render() {
    return (
      <>
        {this.props.step && (
          <MagliomendesContent
            style={
              this.props.step <= 2
                ? { bottom: "2%", position: "absolute", left: 0, right: 0 }
                : { bottom: "35%", position: "absolute", left: 0, right: 0 }
            }
          >
            <p style={!this.props.step ? { color: "#FFD6D9" } : {}}>
              Developed by{" "}
              <a
                style={!this.props.step ? { color: "#FFF" } : {}}
                href="https://www.magliomendes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                magliomendes.com
              </a>
            </p>
          </MagliomendesContent>
        )}
      </>
    );
  }
}
