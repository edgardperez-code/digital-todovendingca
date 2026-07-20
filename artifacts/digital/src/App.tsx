import { Switch, Route } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { DesarrolloWebLecheria } from "@/pages/DesarrolloWebLecheria";
import { TiendaOnlineWhatsapp } from "@/pages/TiendaOnlineWhatsapp";
import { EcommerceVenezuela } from "@/pages/EcommerceVenezuela";
import { Portafolio } from "@/pages/Portafolio";
import { Precios } from "@/pages/Precios";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/desarrollo-web-lecheria" component={DesarrolloWebLecheria} />
        <Route path="/tienda-online-whatsapp" component={TiendaOnlineWhatsapp} />
        <Route path="/ecommerce-venezuela" component={EcommerceVenezuela} />
        <Route path="/portafolio" component={Portafolio} />
        <Route path="/precios" component={Precios} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
