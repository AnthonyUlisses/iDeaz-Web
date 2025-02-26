import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xeoewreq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Novo contato do site iDeaz'
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        // Limpar o formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      });
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-lg p-6 md:p-8 shadow-lg">
      {status.type && (
        <div className={`mb-6 p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status.message}
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c7173b] focus:border-transparent text-gray-800"
          required
          placeholder="Seu nome"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c7173b] focus:border-transparent text-gray-800"
          required
          placeholder="seu@email.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c7173b] focus:border-transparent text-gray-800"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c7173b] focus:border-transparent text-gray-800"
          required
          placeholder="Sua mensagem..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-[#c7173b] text-white py-3 px-6 text-base rounded-lg hover:bg-[#b31535] transition-colors flex items-center justify-center ${
          loading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {loading ? (
          'Enviando...'
        ) : (
          <>
            Enviar Mensagem
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;