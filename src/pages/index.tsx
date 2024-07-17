import TestLess from "./test-less";
import TestEnv from "./test-env";
import TestAlias from "./test-alias";
import TestJson from "./test-json";
import TestGlobal from "./test-global-vars";
import { CaseWrapper } from "@/components";
import TestComponents from "./test-components";

function App() {
  return (
    <CaseWrapper>
      <TestGlobal title="测试注入全局的Less变量" />
      <TestJson title="测试引用JSON数据" />
      <TestAlias title="测试别名" />
      <TestEnv title="测试环境变量" />
      <TestLess title="测试CSS预处理器" />
      <TestComponents title="测试@rokid-library/components" />
    </CaseWrapper>
  );
}

export default App;
