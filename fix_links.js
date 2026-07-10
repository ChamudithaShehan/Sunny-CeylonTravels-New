import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('@tanstack/react-router')) {
    content = content.replace(/import\s+\{[^}]*Link[^}]*\}\s+from\s+["']@tanstack\/react-router["'];?/, 'import Link from "next/link";');
    content = content.replace(/to="/g, 'href="');
    
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(process.cwd(), 'src/components'));
