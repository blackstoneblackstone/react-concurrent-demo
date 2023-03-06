
import ReactClient from 'react-dom/client'
import App from "./App";
import './index.css';


// // Concurrent Mode enabled  
const rootConcurrent = document.getElementById("root-concurrent") as any;

ReactClient.createRoot(rootConcurrent).render(
<App />);