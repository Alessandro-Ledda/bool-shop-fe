import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import ProductDetail from "./pages/ProductDetail"
import { ApiProvider } from "./contexts/ApiProvider"


function App() {

  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  )



}

export default App
