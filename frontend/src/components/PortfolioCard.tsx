import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MoreVertical, Edit2, Globe, Trash2, Copy } from 'lucide-react';
import { Button, Badge } from './ui';
import type { Portfolio } from '../services/portfolio';

interface PortfolioCardProps {
  portfolio: Portfolio;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onTogglePublish: (id: string, currentStatus: string) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio, onEdit, onDelete, onDuplicate, onTogglePublish }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-slate-100 flex items-center justify-center relative">
        {/* Mock thumbnail based on template */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-50" />
        <span className="relative text-slate-400 font-medium font-mono text-sm uppercase tracking-widest">{portfolio.templateId.replace('-developer', '')}</span>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-slate-900 leading-tight">{portfolio.name}</h3>
            <p className="text-sm text-slate-500 mt-1">/{portfolio.slug}</p>
          </div>
          <Badge variant={portfolio.status === 'PUBLISHED' ? 'default' : 'secondary'} className="ml-2 shrink-0">
            {portfolio.status}
          </Badge>
        </div>

        <div className="text-xs text-slate-500 mb-6">
          Updated {formatDistanceToNow(new Date(portfolio.updatedAt), { addSuffix: true })}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="flex-1" onClick={() => onEdit(portfolio.id)}>
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </Button>
          
          {portfolio.status === 'PUBLISHED' && (
            <Button variant="outline" size="icon" title="View Public URL">
              <Globe className="w-4 h-4" />
            </Button>
          )}

          <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setShowMenu(!showMenu)}>
              <MoreVertical className="w-4 h-4" />
            </Button>
            
            {showMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                <div className="absolute right-0 bottom-full mb-2 w-48 rounded-md border border-slate-200 bg-white py-1 shadow-lg z-50">
                  <button onClick={() => { onDuplicate(portfolio.id); setShowMenu(false); }} className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    <Copy className="mr-2 h-4 w-4" /> Duplicate
                  </button>
                  <button onClick={() => { onTogglePublish(portfolio.id, portfolio.status); setShowMenu(false); }} className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    {portfolio.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                  </button>
                  <div className="my-1 h-px bg-slate-200" />
                  <button onClick={() => { onDelete(portfolio.id); setShowMenu(false); }} className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
