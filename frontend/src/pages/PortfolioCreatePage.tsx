import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, LayoutTemplate } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { portfolioApi } from '../services/portfolio';
import { Button } from '../components/ui';

const templates = [
  { id: 'modern-developer', name: 'Modern Developer', description: 'Clean, structured, sticky nav' },
  { id: 'minimal-developer', name: 'Minimal Developer', description: 'Mono-spaced, elegant, fast' },
  { id: 'creative-developer', name: 'Creative Developer', description: 'Bold typography, interactive' }
];

export const PortfolioCreatePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedTemplate, setSelectedTemplate] = useState('modern-developer');
  const [name, setName] = useState('My New Portfolio');

  const createMutation = useMutation({
    mutationFn: portfolioApi.createPortfolio,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['portfolios'] });
      navigate(`/dashboard/portfolios/${data.id}`);
    }
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
        <Link to="/dashboard/portfolios" className="text-slate-400 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create New Portfolio</h2>
          <p className="text-sm text-slate-500 mt-1">Select a template to get started</p>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-700">Portfolio Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 sm:text-sm"
        />
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-700">Select Template</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map(t => (
            <div 
              key={t.id} 
              onClick={() => setSelectedTemplate(t.id)}
              className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${selectedTemplate === t.id ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <LayoutTemplate className={`w-8 h-8 ${selectedTemplate === t.id ? 'text-slate-900' : 'text-slate-400'}`} />
                {selectedTemplate === t.id && <div className="bg-slate-900 text-white p-1 rounded-full"><Check className="w-3 h-3" /></div>}
              </div>
              <h3 className="font-bold text-lg text-slate-900">{t.name}</h3>
              <p className="text-sm text-slate-500 mt-2">{t.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 flex justify-end gap-4">
        <Button variant="ghost" onClick={() => navigate('/dashboard/portfolios')}>Cancel</Button>
        <Button 
          onClick={() => createMutation.mutate({ name, templateId: selectedTemplate, slug: name.toLowerCase().replace(/\s+/g, '-') })}
          disabled={createMutation.isPending}
        >
          {createMutation.isPending ? 'Creating...' : 'Create & Edit'}
        </Button>
      </div>
    </div>
  );
};
