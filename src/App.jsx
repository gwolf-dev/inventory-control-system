import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { BrowserRouter, Routes, Route } from 'react-router';

import { Home, Login, PageNotFound, Register } from './template';

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
