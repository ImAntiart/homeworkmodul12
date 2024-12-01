import App from './components/app/app';
import './global.css';

// Определяем интерфейс для App
interface AppInterface {
    start(): void;
}

// Создаем экземпляр App с использованием интерфейса
const app: AppInterface = new App();
app.start();
