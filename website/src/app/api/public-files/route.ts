// app/api/public-files/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  path: string;
  url?: string;
  size?: number;
  updatedAt: string; // ISO string timestamp
  createdAt: string; // ISO string timestamp
  children?: FileNode[];
}

const TARGET_SUBFOLDER = '';

function readDirectory(currentDir: string, publicBaseDir: string): FileNode[] {
  if (!fs.existsSync(currentDir)) return [];

  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  return entries
    .filter((entry) => !entry.name.startsWith('.'))
    .map((entry) => {
      const fullPath = path.join(currentDir, entry.name);
      const relativeToPublic = path.relative(publicBaseDir, fullPath);

      // Read file metadata for BOTH files and folders
      const stats = fs.statSync(fullPath);
      const updatedAt = stats.mtime.toISOString();
      const createdAt = stats.birthtime.toISOString();

      if (entry.isDirectory()) {
        return {
          name: entry.name,
          type: 'directory',
          path: relativeToPublic,
          updatedAt,
          createdAt,
          children: readDirectory(fullPath, publicBaseDir),
        };
      }

      const webUrl = '/' + relativeToPublic.split(path.sep).join('/');

      return {
        name: entry.name,
        type: 'file',
        path: relativeToPublic,
        url: webUrl,
        size: stats.size,
        updatedAt, // Explicitly assigned to file object
        createdAt, // Explicitly assigned to file object
      };
    });
}

export async function GET(request: NextRequest) {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const { searchParams } = new URL(request.url);
    const subfolder = searchParams.get('folder') ?? TARGET_SUBFOLDER;

    const targetDir = path.join(publicDir, subfolder);

    if (!targetDir.startsWith(publicDir)) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    if (!fs.existsSync(targetDir)) {
      return NextResponse.json({ tree: [], root: subfolder }, { status: 200 });
    }

    const fileTree = readDirectory(targetDir, publicDir);

    return NextResponse.json({ tree: fileTree, root: subfolder });
  } catch (error) {
    console.error('Failed to read public directory:', error);
    return NextResponse.json({ error: 'Internal Server Error while reading assets.' }, { status: 500 });
  }
}
