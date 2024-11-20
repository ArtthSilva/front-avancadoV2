import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import BannerAd from './components/BannerAd';
import { AuthProvider, useAuth } from './context/AuthContext';  
import Login from './pages/login';
import Inicial from './pages/Inicial';
import Faculdade from './pages/Faculdade';
import DpoLgpd from './pages/DpoLgpd';
import Noticias from './pages/Noticias';
import VisualizaNoticia from './pages/VisualizaNoticia';
import AdminNoticias from './pages/admin/AdminNoticias';
import CadastroNoticia from './pages/admin/CadastroNoticias';
import EditarNoticia from './pages/admin/EditarNoticia';

const AppContent = () => {
  const location = useLocation(); 
  const { userType } = useAuth();  

  const isLoginPage = location.pathname === '/'; 

  return (
    <>
      <CssBaseline />
      {isLoginPage ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: '#f7f7f7',
            minHeight: '100vh',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1 }}
          >
            <Navbar />
          </Box>

          <BannerAd />

          <Box mt={4}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/initial" element={<Inicial />} />
              <Route path="/a-faculdade" element={<Faculdade />} />
              <Route path="/dpo-lgpd" element={<DpoLgpd />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/visualiza-noticia/:id" element={<VisualizaNoticia />} />
              {userType === 'admin' && (
                <>
                  <Route path="/admin-noticias" element={<AdminNoticias />} />
                  <Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
                  <Route path="/editar-noticia/:id" element={<EditarNoticia />} />
                </>
              )}
            </Routes>
          </Box>
        </Container>
      )}
    </>
  );
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
