// import { createContext, useState, useEffect } from "react";

// const StackContext = createContext({
//   stacksInfo: {},
// });
// export default StackContext;

// export function StackInfosContext({ children }) {
//   const [stacksInfo, setStacksInfo] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/technologie").then(({ data }) => {
//       for (let i = 0; i < data.length; i += 1) {
//         setStacksInfo(data);
//       }
//     });
//   }, []);

//   return (
//     <StackContext.Provider value={context}>{children}</StackContext.Provider>
//   );
// }
