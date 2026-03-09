import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import ProductDetail from "./pages/ProductDetail"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="products/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )



}

export default App
