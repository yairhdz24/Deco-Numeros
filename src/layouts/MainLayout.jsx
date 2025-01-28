import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


// MainLayout component donde manejo el layout de la pagina principal 
export const MainLayout = ({ children }) => {
    return (
        <div className="min-w-full overflow-x-hidden">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    );
};

