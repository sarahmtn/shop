import React from "react";
import Layout from "./components/layout/layout";
import Shopping from "./components/Shopping/Shopping";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Shopping />
        </Layout>
      </div>
    );
  }
}
export default App;
