import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.tsx'
import TermosUso from './pages/TermosUso.tsx'
import Layout from './components/Layout.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
              <div className="text-white text-xl">Carregando...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-de-uso" element={<TermosUso />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
