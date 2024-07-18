import {
  REACT_APP_NAME,
  REACT_APP_URL,
  VUE_APP_NAME,
  VUE_APP_URL,
} from "@/utils/constant";
import microApp from "@micro-zoe/micro-app";
import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState<{ content: string }>({ content: "" });
  const onSendReact = () => {
    microApp.forceSetData(
      REACT_APP_NAME,
      { content: "react数据来啦！！！！" },
      (returnData) => {
        console.log("React数据已经发送完成");
        console.log("returnData", returnData);
      }
    );
  };

  const onSendVue = () => {
    microApp.forceSetGlobalData({
      content: "全局数据发送完成",
    });
  };

  const onClear = () => {
    microApp.clearGlobalData();
  };
  useEffect(() => {
    // 监听函数
    function dataListener(data: { content: string }) {
      console.log("来自子应用my-app的数据", data);
      setState(data);
    }

    // 监听来自子应用my-app的数据
    const globalListener = (data: { content: string }) => {
      console.log("==父应用接收全局数据", data);
      setState(data);
    };
    microApp.addDataListener(REACT_APP_NAME, dataListener);
    microApp.addGlobalDataListener(globalListener);
  }, []);
  return (
    <div>
      <h2>我是主应用</h2>
      <button onClick={onSendReact}>发送数据给React子应用</button>
      <button onClick={onSendVue}>发送全局数据给子应用</button>
      <button onClick={onClear}>清空全局数据</button>
      {state.content && (
        <div>
          父应用接收到的消息：
          <div style={{ color: "green" }}>{state.content}</div>
        </div>
      )}
      <div style={{ padding: "88px" }}>
        <micro-app name={REACT_APP_NAME} url={REACT_APP_URL}></micro-app>
      </div>
      <div style={{ padding: "88px" }}>
        <micro-app name={VUE_APP_NAME} url={VUE_APP_URL} iframe></micro-app>
      </div>
    </div>
  );
}

export default App;
