import React from "react";
import { MagliomendesContent } from "./MagliomendesStyles";

export default class MaglioMendes extends React.Component {
  render() {
    return (
      <>
        {this.props.step && (
          <MagliomendesContent>
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
