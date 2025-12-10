/**
 * DevPage Screenshot Capture
 * 
 * Run while you're already logged in and on /dev page
 * Make sure your zoom is at 50% to capture everything
 * 
 * Run: node capture-devpages.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🚀 Capturing DevPage screenshots...\n');
  console.log('📋 Make sure you are logged in and on /dev page!\n');
  
  // Large viewport to capture everything (simulates 50% zoom)
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 3840, height: 2160 },  // 4K = like 50% zoom on 1920x1080
    deviceScaleFactor: 0.5
  });
  const page = await context.newPage();
  
  // Navigate to dev page
  await page.goto(`${BASE_URL}/dev`);
  await delay(2000);
  
  ensureDir('screenshots/devpage');
  
  const tabs = [
    { name: '01-branding', label: 'Branding' },
    { name: '02-theme', label: 'Theme' },
    { name: '03-ai-prompts', label: 'AI Prompts' },
    { name: '04-ai-config', label: 'AI Config' },
    { name: '05-ai-behavior', label: 'AI Behavior' },
    { name: '06-escalated-items', label: 'Escalated Items' },
    { name: '07-ai-memory', label: 'AI Memory' },
  ];
  
  let count = 0;
  
  for (const tab of tabs) {
    console.log(`📸 Capturing: ${tab.label}...`);
    
    try {
      // Click the tab by its text
      const tabButton = await page.locator(`[role="tab"]:has-text("${tab.label}")`).first();
      if (await tabButton.isVisible()) {
        await tabButton.click();
        await delay(1500);
        
        // Take full page screenshot
        await page.screenshot({ 
          path: `screenshots/devpage/${tab.name}.png`,
          fullPage: true 
        });
        console.log(`   ✅ Saved: screenshots/devpage/${tab.name}.png`);
        count++;
      } else {
        console.log(`   ⚠️  Tab "${tab.label}" not found`);
      }
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }
  
  await browser.close();
  console.log(`\n🎉 Done! Captured ${count}/7 DevPage screenshots.`);
}

main().catch(console.error);

