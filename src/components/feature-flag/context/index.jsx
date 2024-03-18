import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

// A way to manage global state accross multiple components
// It takes in all children components that can access this state
export default function FeatureFlagGlobalState({ children }) {

  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);

      const response = await featureFlagsDataServiceCall();     
      setEnabledFlags(response);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, [])

  return (
    // here value is the data that will be propagated down
    <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
