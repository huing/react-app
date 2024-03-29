import React, { Component } from 'react'
import './zIndex.less'

class PageCssZ extends Component {
  render() {
    return (
      <div className="page-css-zIndex">
        <div>
          <div id="div1">
            <h1>Division Element #1</h1>
            <code>
              position: relative;
              <br />
              z-index: 5;
            </code>
          </div>

          <div id="div2">
            <h1>Division Element #2</h1>
            <code>
              position: relative;
              <br />
              z-index: 2;
            </code>
          </div>

          <div id="div3">
            <div id="div4">
              <h1>Division Element #4</h1>
              <code>
                position: relative;
                <br />
                z-index: 6;
              </code>
            </div>

            <h1>Division Element #3</h1>
            <code>
              position: absolute;
              <br />
              z-index: 4;
            </code>

            <div id="div5">
              <h1>Division Element #5</h1>
              <code>
                position: relative;
                <br />
                z-index: 1;
              </code>
            </div>

            <div id="div6">
              <h1>Division Element #6</h1>
              <code>
                position: absolute;
                <br />
                z-index: 3;
              </code>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageCssZ
