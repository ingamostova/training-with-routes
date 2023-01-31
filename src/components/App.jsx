import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Home from 'pages/Home';
// import About from 'pages/About';
// import Products from 'pages/Products';
// import ProductInfo from 'pages/ProductInfo';
// import Mission from './Mission';
// import Reviews from './Reviews';
// import Team from './Team';
import { SharedLayout } from './SharedLayout';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const ProductInfo = lazy(() => import('../pages/ProductInfo'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductInfo />} />
      </Route>
    </Routes>
  );
};
