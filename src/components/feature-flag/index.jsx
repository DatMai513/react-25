import { useContext } from "react";
import DarkMode from "../dark-mode/dark-mode";
import TicTacToe from "../tictactoe";
import { FeatureFlagsContext } from "./context";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import menus from "../tree-view/data";

// Main component to test the feature flag functionality
export default function FeatureFlag() {
  // calling the useContext function will extract the data
  // that was set to be propagated
  // note the destructuring syntax again
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <DarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColor",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
  ];

  const checkEnabledFlags = (key) => {
    return enabledFlags[key];
  };

  if (loading) {
    return <p>Loading data, please waite</p>;
  }

  return (
    <div>
      <h1>Feature Flag</h1>

      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
}
