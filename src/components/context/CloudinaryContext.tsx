import { createContext, useContext } from 'react';

import { Cloudinary } from '@cloudinary/url-gen';

const CloudContext = createContext<Cloudinary>(new Cloudinary());

type WithChildren<T = {}> = T & { children: JSX.Element };

const CloudProvider = ({ children }: WithChildren) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dv4sl7mab",
    },
    url: {
      secure: true,
    },
  });

  return <CloudContext.Provider value={cld}>{children}</CloudContext.Provider>;
};
const useCloud = () => useContext(CloudContext);

export { CloudProvider, useCloud };
