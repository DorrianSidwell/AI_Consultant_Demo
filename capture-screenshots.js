/**
 * DorrianAI Automated Screenshot Capture
 *
 * Prerequisites:
 * 1. Backend running: cd backend && python -m uvicorn api.main:app --reload --port 8000
 * 2. Frontend running: cd frontend && npm run dev
 * 3. Install Playwright: npm install playwright
 *
 * Run: node capture-screenshots.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const CREDENTIALS = { username: 'dev', password: 'dev123' };

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function screenshot(page, name, fullPage = false) {
  const filePath = `screenshots/${name}.png`;
  ensureDir(path.dirname(filePath));
  await page.screenshot({ path: filePath, fullPage });
  console.log(`   ✅ Saved: ${filePath}`);
  return true;
}

async function main() {
  console.log('🚀 Starting automated screenshot capture...\n');

  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  let count = 0;

  try {
    // ===== LOGIN PAGE SCREENSHOTS =====
    console.log('📸 [1/8] Login Page...');
    await page.goto(BASE_URL);
    await delay(2000);
    await screenshot(page, 'auth/01-login-page');
    await screenshot(page, 'hero/hero-banner');
    count += 2;

    // ===== LOGIN =====
    console.log('🔐 Logging in...');
    await page.fill('input[name="username"]', CREDENTIALS.username);
    await page.fill('input[name="password"]', CREDENTIALS.password);
    await page.click('button[type="submit"]');
    await delay(3000);

    // ===== CHAT PAGE =====
    console.log('📸 [2/8] Chat Page...');
    await page.goto(`${BASE_URL}/chat`);
    await delay(2000);
    await screenshot(page, 'chat/03-chat-empty');
    count++;

    // Ask a question
    console.log('   💬 Asking question...');
    await page.fill('textarea', 'How do I book annual leave?');
    await page.keyboard.press('Enter');
    await delay(10000); // Wait for AI response
    await screenshot(page, 'chat/05-chat-ai-response-full');
    count++;

    // Try draft email
    const draftBtn = await page.$('button:has-text("Draft Email")');
    if (draftBtn) {
      await draftBtn.click();
      await delay(3000);
      await screenshot(page, 'chat/14-chat-draft-email-modal');
      count++;
      // Close modal
      await page.keyboard.press('Escape');
      await delay(500);
    }

    // ===== SESSIONS PAGE =====
    console.log('📸 [3/8] Sessions Page...');
    await page.goto(`${BASE_URL}/sessions`);
    await delay(2000);
    await screenshot(page, 'sessions/18-sessions-list');
    count++;

    // ===== DOCUMENTS PAGE =====
    console.log('📸 [4/8] Documents Page...');
    await page.goto(`${BASE_URL}/documents`);
    await delay(2000);
    await screenshot(page, 'documents/21-documents-list');
    count++;

    // ===== KNOWLEDGE GAPS PAGE =====
    console.log('📸 [5/8] Knowledge Gaps Page...');
    await page.goto(`${BASE_URL}/knowledge-gaps`);
    await delay(2000);
    await screenshot(page, 'knowledge-gaps/27-gaps-list');
    count++;

    // ===== USERS PAGE =====
    console.log('📸 [6/8] Users Page...');
    await page.goto(`${BASE_URL}/users`);
    await delay(2000);
    await screenshot(page, 'users/33-users-list');
    count++;

    // ===== SETTINGS PAGE =====
    console.log('📸 [7/8] Settings Page...');
    await page.goto(`${BASE_URL}/settings`);
    await delay(2000);
    await screenshot(page, 'settings/63-settings-page');
    count++;

    // ===== DEVPAGE - ALL 7 TABS =====
    console.log('📸 [8/8] Developer Page (7 tabs)...');
    await page.goto(`${BASE_URL}/developer`);
    await delay(2000);

    const tabNames = [
      { index: 0, file: 'devpage/branding/37-dev-branding-tab' },
      { index: 1, file: 'devpage/theme/40-dev-theme-tab' },
      { index: 2, file: 'devpage/ai-prompts/48-dev-prompts-tab' },
      { index: 3, file: 'devpage/ai-config/50-dev-config-tab' },
      { index: 4, file: 'devpage/ai-behavior/54-dev-behavior-tab' },
      { index: 5, file: 'devpage/escalated/57-dev-escalated-tab' },
      { index: 6, file: 'devpage/ai-memory/59-dev-memory-tab' },
    ];

    for (const tab of tabNames) {
      const tabs = await page.$$('[role="tab"]');
      if (tabs[tab.index]) {
        await tabs[tab.index].click();
        await delay(1500);
        await screenshot(page, tab.file);
        count++;
      }
    }

    // ===== FINAL HERO =====
    console.log('📸 Final hero shot...');
    await page.goto(`${BASE_URL}/chat`);
    await delay(2000);
    await screenshot(page, 'hero/hero-chat-response');
    count++;

  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  await browser.close();
  console.log(`\n🎉 Done! Captured ${count} screenshots.`);
  console.log('📁 Screenshots saved to: screenshots/');
}

main().catch(console.error);