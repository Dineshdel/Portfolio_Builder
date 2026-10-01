
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, FolderPlus, Loader2 } from 'lucide-react';
import { portfolioApi } from '../services/portfolio';
import { PortfolioCard } from '../components/PortfolioCard';
import { Button } from '../components/ui';

export const PortfoliosPage = () => {
  const queryClient = useQueryClient();

  const { data: portfolios, isLoading, isError } = useQuery({
    queryKey: ['portfolios'],
    queryFn: portfolioApi.getPortfolios
  });

  const createMutation = useMutation({
    mutationFn: portfolioApi.createPortfolio,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['portfolios'] })
  });

  const deleteMutation = useMutation({
    mutationFn: portfolioApi.deletePortfolio,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['portfolios'] })
  });

  const handleCreate = () => {
    createMutation.mutate({ name: 'New Portfolio', templateId: 'modern-developer' });
  };

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-red-800">Failed to load portfolios</h3>
        <p className="mt-2 text-sm text-red-600">There was an error communicating with the server. Please try again later.</p>
        <Button variant="outline" className="mt-4" onClick={() => queryClient.invalidateQueries({ queryKey: ['portfolios'] })}>Retry</Button>
      </div>
    );
  }

  const hasPortfolios = portfolios && portfolios.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Portfolios</h2>
          <p className="text-sm text-slate-500 mt-1">Manage and publish your portfolio websites.</p>
        </div>
        <Button onClick={handleCreate} disabled={createMutation.isPending}>
          {createMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Plus className="w-4 h-4 mr-2" />}
          New Portfolio
        </Button>
      </div>

      {!hasPortfolios ? (
        <div className="mt-12 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 py-24 text-center">
          <FolderPlus className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-4 text-lg font-semibold text-slate-900">No portfolios yet</h3>
          <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">Get started by creating your first portfolio. You can choose from multiple stunning templates.</p>
          <Button onClick={handleCreate} className="mt-6" disabled={createMutation.isPending}>
            <Plus className="w-4 h-4 mr-2" />
            Create Portfolio
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {portfolios.map(portfolio => (
            <PortfolioCard 
              key={portfolio.id}
              portfolio={portfolio}
              onEdit={(id) => console.log('Edit', id)}
              onDelete={(id) => deleteMutation.mutate(id)}
              onDuplicate={(id) => console.log('Duplicate', id)}
              onTogglePublish={(id) => console.log('Toggle Publish', id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
