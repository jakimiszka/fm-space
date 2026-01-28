import ReactDOM from 'react-dom/client';
import { Container } from './components/container';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Container />
        </BrowserRouter>
    );
} else {
    console.error("Root element not found");
}