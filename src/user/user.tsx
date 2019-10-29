import React from "react";
import "./user.less";
class EntryApp extends React.Component {
  state = {
    content: "user",
    current: 1
  };
  toggleContent = () => {
    this.setState({ content: "qwe" });
  };
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  sticky = () => {
    var vendorList = ["", "-webkit-", "-ms-", "-moz-", "-o-"],
      vendorListLength = vendorList.length,
      stickyElement = document.createElement("div");

    for (var i = 0; i < vendorListLength; i++) {
      stickyElement.style.position = vendorList[i] + "sticky";
      if (stickyElement.style.position !== "") {
        return true;
      }
    }
    return false;
  };
  componentDidMount() {
    alert(this.sticky());
  }
  render() {
    const { content, current } = this.state;
    return (
      <div
        className="div1-style"
        style={{
          position: "relative"
        }}
      >
        <span className="span1-style" onClick={() => this.toggleContent()}>
          {content}
        </span>
        <div
          style={{
            position: "-webkit-sticky",
            display: "flex",
            justifyContent: "space-arround",
            flexDirection: "row",
            position: "sticky",
            height: "2rem",
            top: "2rem",
            background: "#ccc"
          }}
        >
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div
              key={item}
              href={"#" + item}
              onClick={() =>
                this.setState({ current: item }, () =>
                  this.scrollToAnchor(item)
                )
              }
              style={{
                flex: 1,
                height: "100%",
                background: current === item ? "#fff" : "#ccc"
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div
            id={item}
            key={item}
            style={{
              paddingTop: "10rem",
              height: "20rem",
              flex: 1,
              background:
                "#" + Math.floor(Math.random() * 0xffffff).toString(16)
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}
export default EntryApp;
