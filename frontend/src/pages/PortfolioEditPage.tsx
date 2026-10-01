
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Globe } from 'lucide-react';
import { Button } from '../components/ui';
import { useQuery } from '@tanstack/react-query';
import { portfolioApi } from '../services/portfolio';

export const PortfolioEditPage = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app we'd fetch the specific portfolio by ID
  const { data: portfolios, isLoading } = useQuery({
    queryKey: ['portfolios'],
    queryFn: portfolioApi.getPortfolios
  });

  const portfolio = portfolios?.find(p => p.id === id);

  if (isLoading) return <div className="p-8">Loading editor...</div>;
  if (!portfolio) return <div className="p-8">Portfolio not found</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <Link to="/dashboard/portfolios" className="text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Editing: {portfolio.name}</h2>
            <p className="text-sm text-slate-500">Template: {portfolio.templateId}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {portfolio.status === 'PUBLISHED' && (
            <Button variant="outline">
              <Globe className="w-4 h-4 mr-2" /> View Live
            </Button>
          )}
          <Button>
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 h-[calc(100vh-12rem)]">
        {/* Editor Sidebar */}
        <div className="col-span-4 bg-white border border-slate-200 rounded-xl p-4 overflow-y-auto shadow-sm">
          <h3 className="font-semibold mb-4 text-slate-800">Content Sections</h3>
          <div className="space-y-2">
            {['Profile Details', 'Projects', 'Experience', 'Education', 'Skills', 'Theme Settings'].map(section => (
              <button key={section} className="w-full text-left px-4 py-3 rounded-lg border border-slate-100 bg-slate-50 hover:border-slate-300 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700">
                {section}
              </button>
            ))}
          </div>
        </div>
        
        {/* Live Preview Area */}
        <div className="col-span-8 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 relative shadow-inner">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
             <div className="w-16 h-16 mb-4 rounded-full bg-slate-300 animate-pulse"></div>
             <p className="font-medium">Live Template Preview Renderer</p>
             <p className="text-sm opacity-75 mt-2">({portfolio.templateId} template)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
