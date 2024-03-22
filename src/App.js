import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarSlider from './components/star-slider';
import LoadMore from './components/load-more';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data.js"
import DarkMode from './components/dark-mode/dark-mode.jsx';
import ScrollIndicator from './components/scroll-indicator/index.jsx';
import TabTest from './components/custom-tabs/tab-test.jsx';
import ModalTest from './components/modal-popup/modal-test.jsx';
import UseOnClickOutsideTest from './components/use-outside-click/test.jsx';
import GitHubProfile from './components/github-profile-finder/index.jsx';
import AutoCompleteSearch from './components/search-autocomplete/index.jsx';
import TicTacToe from './components/tictactoe/index.jsx';
import FeatureFlagGlobalState from './components/feature-flag/context/index.jsx';
import FeatureFlag from './components/feature-flag/index.jsx';
import UseFetchHookTest from './components/use-fetch/test.jsx';
import UseWindowResizeTest from './components/use-responsive/test.jsx';
import ScrollTopBottom from './components/scroll-top-bottom/index.jsx';
import ScrollToSection from './components/scroll-top-bottom/section-scroll.jsx';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random Color component */}
      {/* <RandomColor/> */}

      {/* Star Slider component */}
      {/* <StarSlider noOfStars={10}/> */}

      {/* Image Slider component */}
      {/* <ImageSlider 
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}

      {/* Load More component */}
      {/* <LoadMore noOfStars={10}/> */}

      {/* Tree View component */}
      {/* <TreeView menus={menus}/>  */}

      {/* Dark Mode component */}
      {/* <DarkMode/>  */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>  */}

      {/* Custom Tabs component */}
      {/* <TabTest/>  */}

      {/* Custom Modal component */}
      {/* <ModalTest/>  */}

      {/* Github Profile Search Hook component */}
      {/* <GitHubProfile/>  */}

      {/* Search Autocomplete component */}
      {/* <AutoCompleteSearch/>  */}

      {/* TicTacToe component */}
      {/* <TicTacToe/>  */}

      {/* Feature Flag component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag/>
      </FeatureFlagGlobalState>  */}

      {/* Custom Fetch Hook component */}
      {/* <UseFetchHookTest/>  */}

      {/* Click Outisde Hook component */}
      {/* <UseOnClickOutsideTest/>  */}

      {/* Window Size Hook component */}
      {/* <UseWindowResizeTest/>  */}

      {/* Max Scroll component */}
      {/* <ScrollTopBottom/>  */}

      {/* Section Scroll component */}
      <ScrollToSection/> 

    </div>
  );
}

export default App;
