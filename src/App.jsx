import { BrowserRouter, Routers, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import ProductDetail from "./pages/ProductDetail"


function App() {

  return (
    <BrowserRouter>
      <Routers>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="products/:slug" element={<ProductDetail />} />
        </Route>
      </Routers>
    </BrowserRouter>
  )



}

export default App
