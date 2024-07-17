import { CaseWrapper } from "@/components";

function App() {
  return (
    <div>
      <h2>我是主应用</h2>
      <micro-app name="react-app" url="http://localhost:8000/"></micro-app>
      <micro-app name="vue-app" url="http://localhost:8088/" iframe></micro-app>
    </div>
  );
}

export default App;
