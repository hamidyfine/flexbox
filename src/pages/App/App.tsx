import { Outlet } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <button className="btn">Button</button>
            <Outlet />
        </>
    );
}

export default App;
