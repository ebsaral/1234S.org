'use client';

import { useEffect, useState } from 'react';
import { useIntlayer, useLocale } from 'next-intlayer';
import { FileNode } from '@/app/api/public-files/route';
import MarkdownProvider from './Custom/MarkdownProvider';
import Title from './Custom/Title';

function formatBytes(bytes: number = 0): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

function formatDate(isoString: string, locale: string): string {
  if (!isoString) return '';
  return new Date(isoString).toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

interface TreeItemProps {
  node: FileNode;
  locale: string;
}

function TreeItem({ node, locale }: TreeItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDirectory = node.type === 'directory';

  if (isDirectory) {
    return (
      <li className='select-none'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex flex-col sm:flex-row sm:items-center justify-between py-1.5 px-2 hover:bg-slate-100 rounded cursor-pointer text-slate-700 font-medium text-sm transition-colors gap-1 sm:gap-2'
        >
          <div className='flex items-center gap-2 overflow-hidden min-w-0'>
            <span className='text-slate-400 w-4 shrink-0 text-center'>{isOpen ? '▼' : '▶'}</span>
            <span className='text-amber-500 shrink-0'>📁</span>
            <span className='truncate'>{node.name}</span>
          </div>
          <span className='text-xs text-slate-400 font-mono pl-6 sm:pl-0 shrink-0'>
            {formatDate(node.updatedAt, locale)}
          </span>
        </div>
        {isOpen && node.children && (
          <ul className='pl-2 sm:pl-4 border-l border-slate-200 ml-2 sm:ml-4 my-1 space-y-0.5'>
            {node.children.map((child) => (
              <TreeItem key={child.path} node={child} locale={locale} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <div className='group flex flex-col sm:flex-row sm:items-center justify-between py-1.5 px-2 hover:bg-slate-50 rounded text-sm gap-1 sm:gap-2'>
        {/* Left: Icon and Link */}
        <div className='flex items-center gap-2 overflow-hidden min-w-0'>
          <span className='w-4 shrink-0'></span>
          <span className='text-slate-400 shrink-0'>📄</span>
          <a
            href={node.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-600 group-hover:text-blue-600 group-hover:underline truncate'
          >
            {node.name}
          </a>
        </div>

        {/* Right: File Size and Modified Date */}
        <div className='flex items-center gap-3 sm:gap-4 pl-6 sm:pl-4 shrink-0 justify-between sm:justify-end'>
          <span className='text-xs text-slate-400 font-mono'>{formatBytes(node.size)}</span>
          <span className='text-xs text-slate-400 font-mono'>{formatDate(node.updatedAt, locale)}</span>
        </div>
      </div>
    </li>
  );
}

export default function PublicFileExplorer() {
  const { locale } = useLocale();
  const content = useIntlayer('public-file-explorer');
  const metadata = useIntlayer('assets-page-metadata');

  const [data, setData] = useState<FileNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/public-files?locale=${locale}`);
        if (!response.ok) throw new Error(content.fetchError.value);
        const result = await response.json();
        setData(result.tree);
      } catch (err: any) {
        setError(err.message || content.unknownError.value);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFiles();
  }, [locale, content.fetchError.value, content.unknownError.value]);

  if (isLoading) {
    return <div className='p-6 text-sm text-slate-500 animate-pulse'>{content.loading}</div>;
  }

  if (error) {
    return <div className='p-4 text-sm text-red-600 bg-red-50 rounded-md border border-red-200'>{error}</div>;
  }

  return (
    <MarkdownProvider>
      <main>
        <Title title={metadata.title.value} />

        <div className='relative w-full mx-auto overflow-hidden px-2 sm:px-4 py-16 bg-gradient-to-br from-gray-400 to-green-100 min-h-screen'>
          <div className='max-w-4xl mx-auto mt-4 sm:mt-16 px-3 sm:px-4 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center rounded-t-lg'>
            <h2 className='text-sm font-semibold text-slate-800'>{content.title}</h2>
            <span className='text-xs text-slate-500 font-mono'>
              <span className='hidden sm:inline'>{content.columnsHeader}</span>
            </span>
          </div>
          <div className='max-w-4xl mx-auto p-2 sm:p-4 overflow-y-auto max-h-[70vh] sm:max-h-[500px] bg-white/90 backdrop-blur-sm rounded-b-lg shadow-sm'>
            {data.length === 0 ? (
              <p className='text-sm text-slate-400 text-center py-4'>{content.empty}</p>
            ) : (
              <ul className='space-y-0.5'>
                {data.map((node) => (
                  <TreeItem key={node.path} node={node} locale={locale} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </MarkdownProvider>
  );
}
