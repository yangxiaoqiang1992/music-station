import * as React from "react";
export interface HelloProps {
  name?: string;
}
//定义无状态组件
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h3>hello,{this.props.name}</h3>;
  }
}
