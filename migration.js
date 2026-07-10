import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace Tanstack imports
  if (content.includes('createFileRoute') && content.includes('Link')) {
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+["']@tanstack\/react-router["'];?/, 'import Link from "next/link";');
  } else {
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+["']@tanstack\/react-router["'];?\n?/, '');
  }

  // Find the component name used in Route definition
  const match = content.match(/component:\s*([A-Za-z0-9_]+)/);
  if (match) {
    const componentName = match[1];
    
    // Remove the Route export block
    content = content.replace(/export\s+const\s+Route\s*=\s*createFileRoute\([^)]*\)\(\{[\s\S]*?(?=\nfunction|\nconst|\nexport|\n$)/, '');
    
    // Add default export at the bottom if not already exported
    if (!content.includes(`export default ${componentName}`)) {
        content += `\nexport default ${componentName};\n`;
    }
  }

  // Add 'use client' if framer-motion or react hooks are used
  if (content.includes('framer-motion') || content.includes('useRef') || content.includes('useEffect') || content.includes('useState')) {
    if (!content.startsWith("'use client'")) {
      content = `'use client';\n` + content;
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('layout.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(process.cwd(), 'src/app'));
