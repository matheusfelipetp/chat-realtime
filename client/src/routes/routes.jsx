import { Route, Routes } from 'react-router-dom';
import Chat from '../components/Chat/Chat';
import Join from '../components/Join/Join';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};
