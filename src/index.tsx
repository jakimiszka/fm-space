import ReactDOM from 'react-dom/client';
import { Container } from './components/container';
import './styles/styles.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Container />);
} else {
    console.error("Root element not found");
}