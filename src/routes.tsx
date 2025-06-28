import { Route } from "wouter";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => (
  <>
    <Route path="/" component={Home} />
    <Route path="/properties" component={Properties} />
    <Route path="/property/:id" component={PropertyDetails} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </>
);
