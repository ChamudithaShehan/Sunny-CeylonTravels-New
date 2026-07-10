const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('useState') || 
      content.includes('useEffect') || 
      content.includes('useRef') || 
      content.includes('usePathname') || 
      content.includes('framer-motion') ||
      content.includes('createContext') ||
      content.includes('useContext') ||
      content.includes('onClick') ||
      content.includes('onSubmit') ||
      content.includes('onChange')) {
      
      if (!content.trim().startsWith('"use client"') && !content.trim().startsWith("'use client'")) {
        content = `"use client";\n\n` + content;
        fs.writeFileSync(filePath, content, 'utf-8');
      }
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

walkDir(path.join(process.cwd(), 'src'));
