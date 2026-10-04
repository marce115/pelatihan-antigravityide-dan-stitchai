/**
 * Application Core Engine
 * AI-Powered Web Development Workshop: Stitch AI × Antigravity IDE
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentSlideIndex = 0;
  const slides = window.SLIDES_DATA || [];
  const totalSlides = slides.length;
  
  let isPresenterMode = false;
  let presenterTimer = 0;
  let timerInterval = null;
  
  // Checklist local storage state
  const checkedItems = JSON.parse(localStorage.getItem('workshop_checklist') || '{}');
  
  // Quiz answers state
  const quizUserAnswers = {};
  
  // DOM Elements
  const slideStage = document.getElementById('slideStage');
  const slideContent = document.getElementById('slideContent');
  const currentSlideNumEl = document.getElementById('currentSlideNum');
  const totalSlidesNumEl = document.getElementById('totalSlidesNum');
  const progressBarFill = document.getElementById('progressBarFill');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnMenuToggle = document.getElementById('btnMenuToggle');
  const btnPresenterToggle = document.getElementById('btnPresenterToggle');
  const btnFullscreenToggle = document.getElementById('btnFullscreenToggle');
  
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerSidebar = document.getElementById('drawerSidebar');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerSlideList = document.getElementById('drawerSlideList');
  
  const presenterPanel = document.getElementById('presenterPanel');
  const presenterNotesBody = document.getElementById('presenterNotesBody');
  const presenterTimerEl = document.getElementById('presenterTimer');
  const nextSlideTitleEl = document.getElementById('nextSlideTitle');

  // Initialize
  function init() {
    totalSlidesNumEl.textContent = String(totalSlides).padStart(2, '0');
    renderDrawerItems();
    updateSlide(0);
    setupEventListeners();
    startPresenterTimer();
  }

  // Timer for Presenter Mode
  function startPresenterTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      presenterTimer++;
      const mins = Math.floor(presenterTimer / 60);
      const secs = presenterTimer % 60;
      if (presenterTimerEl) {
        presenterTimerEl.textContent = 
          `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }, 1000);
  }

  // Render Slide Drawer Menu
  function renderDrawerItems() {
    drawerSlideList.innerHTML = '';
    slides.forEach((slide, idx) => {
      const item = document.createElement('div');
      item.className = `drawer-item ${idx === currentSlideIndex ? 'active' : ''}`;
      item.innerHTML = `
        <span class="drawer-num">${String(idx + 1).padStart(2, '0')}</span>
        <div style="flex:1;">
          <div style="font-weight:600; font-size:0.9rem; color:#fff;">${slide.title}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${slide.category}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        updateSlide(idx);
        closeDrawer();
      });
      drawerSlideList.appendChild(item);
    });
  }

  // Slide Switcher Engine
  function updateSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    currentSlideIndex = index;
    const slide = slides[currentSlideIndex];
    
    // Animate stage out/in
    slideStage.style.opacity = '0';
    slideStage.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      renderSlideContent(slide);
      
      // Update UI Controls
      currentSlideNumEl.textContent = String(currentSlideIndex + 1).padStart(2, '0');
      const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
      progressBarFill.style.width = `${progressPercent}%`;
      
      btnPrev.disabled = currentSlideIndex === 0;
      btnNext.disabled = currentSlideIndex === totalSlides - 1;
      
      // Update Drawer active item
      const drawerItems = drawerSlideList.querySelectorAll('.drawer-item');
      drawerItems.forEach((item, i) => {
        if (i === currentSlideIndex) item.classList.add('active');
        else item.classList.remove('active');
      });
      
      // Update Presenter Notes
      if (presenterNotesBody) {
        presenterNotesBody.innerHTML = `
          <strong style="color:var(--accent-cyan); display:block; margin-bottom:8px;">📌 ${slide.title}</strong>
          <p>${slide.speakerNotes || 'Tidak ada catatan pembicara untuk slide ini.'}</p>
        `;
      }
      
      const nextSlide = slides[currentSlideIndex + 1];
      if (nextSlideTitleEl) {
        nextSlideTitleEl.textContent = nextSlide ? nextSlide.title : '(Akhir Presentasi)';
      }
      
      slideStage.style.opacity = '1';
      slideStage.style.transform = 'scale(1)';
    }, 150);
  }

  // Render Slide Content by Type
  function renderSlideContent(slide) {
    let html = `
      <div class="slide-meta-header">
        <span class="category-tag">${slide.category}</span>
        <span style="font-size:0.8rem; color:var(--text-dim); font-family:var(--font-code);">SMKN 2 SURAKARTA • PPLG</span>
      </div>
    `;

    if (slide.type === 'cover') {
      html += `
        <div class="cover-layout">
          <div class="cover-info">
            <div class="cover-badge">✨ Workshop Edukasi SMK PPLG</div>
            <h1 class="cover-h1">${slide.title}</h1>
            <p class="cover-sub">${slide.subtitle}</p>
            
            <div class="cover-meta-box">
              <div class="cover-meta-item"><strong>Sekolah:</strong> ${window.WORKSHOP_CONFIG.school}</div>
              <div class="cover-meta-item"><strong>Jurusan:</strong> ${window.WORKSHOP_CONFIG.department}</div>
              <div class="cover-meta-item"><strong>Pemateri:</strong> ${window.WORKSHOP_CONFIG.speakerName}${window.WORKSHOP_CONFIG.speakerRole ? ` (${window.WORKSHOP_CONFIG.speakerRole})` : ''}</div>
            </div>
            
            <button class="btn-primary-cta" id="btnStartWorkshop">
              🚀 Mulai Pelatihan Sekarang ➔
            </button>
          </div>
          
          <div class="cover-visual">
            <div class="visual-mockup">
              <div class="window-header">
                <div class="window-dot dot-red"></div>
                <div class="window-dot dot-yellow"></div>
                <div class="window-dot dot-green"></div>
                <span style="font-family:var(--font-code); font-size:0.75rem; color:var(--text-dim); margin-left:8px;">antigravity-ide :: stitch-ai</span>
              </div>
              <div class="mockup-body">
                <div class="code-line" style="width:70%; background:var(--accent-indigo);"></div>
                <div class="code-line" style="width:40%;"></div>
                <div class="code-line" style="width:85%; background:var(--accent-cyan);"></div>
                <div class="code-line" style="width:60%;"></div>
                <div style="margin-top:auto; background:rgba(99,102,241,0.15); border:1px solid var(--accent-indigo); border-radius:6px; padding:10px; font-size:0.8rem; color:var(--accent-cyan);">
                  🤖 AI Agent Active: Generating website layout from CROC prompt...
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'icebreaker') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <p style="color:var(--text-muted); margin-bottom:16px;">Klik pertanyaan di bawah ini untuk menampilkan secara bertahap dalam sesi apersepsi:</p>
        
        <div class="icebreaker-list">
          ${slide.questions.map((q, qidx) => `
            <div class="icebreaker-card" data-qidx="${qidx}">
              <div class="icebreaker-left">
                <div class="icebreaker-icon">${q.icon}</div>
                <div class="icebreaker-text">${q.text}</div>
              </div>
              <span class="icebreaker-badge">Pertanyaan ${qidx + 1}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'roadmap') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="roadmap-container">
          ${slide.steps.map(s => `
            <div class="roadmap-card">
              <div class="roadmap-num">${s.num}</div>
              <div class="roadmap-title">${s.title}</div>
              <div class="roadmap-desc">${s.desc}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'features') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="card-grid">
          ${slide.features.map(f => `
            <div class="glass-card">
              <div class="card-icon">${f.icon}</div>
              <div class="card-title">${f.title}</div>
              <div class="card-desc">${f.desc}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'installation') {
      html += `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h2 class="slide-title">${slide.title}</h2>
            <p class="slide-subtitle" style="margin-bottom:0;">${slide.subtitle}</p>
          </div>
          <a href="${slide.officialUrl}" target="_blank" class="btn-copy" style="text-decoration:none;">
            🌐 Link Unduh Resmi (${slide.officialUrl})
          </a>
        </div>
        
        <div class="install-grid" style="margin-top:16px;">
          ${slide.steps.map(s => `
            <div class="install-card">
              <div class="install-num">${s.num}</div>
              <div class="install-info">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'workspace') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="workspace-container">
          <div class="workspace-diagram">
            <div class="ws-panel active" id="ws_explorer" style="grid-column: 1; grid-row: 1 / span 2; background:rgba(99,102,241,0.12);">
              <div class="ws-panel-title" style="color:var(--accent-indigo);">📂 File Explorer</div>
              <p style="font-size:0.75rem; color:var(--text-dim);">Structure & files</p>
            </div>
            
            <div class="ws-panel" id="ws_editor" style="grid-column: 2; grid-row: 1; background:rgba(34,211,238,0.12);">
              <div class="ws-panel-title" style="color:var(--accent-cyan);">📝 Code Editor</div>
              <p style="font-size:0.75rem; color:var(--text-dim);">HTML / CSS / JS code area</p>
            </div>
            
            <div class="ws-panel" id="ws_agent" style="grid-column: 3; grid-row: 1 / span 2; background:rgba(16,185,129,0.12);">
              <div class="ws-panel-title" style="color:var(--accent-emerald);">🤖 AI Agent Panel</div>
              <p style="font-size:0.75rem; color:var(--text-dim);">Autonomous prompt execution</p>
            </div>
            
            <div class="ws-panel" id="ws_terminal" style="grid-column: 2; grid-row: 2; background:rgba(245,158,11,0.12);">
              <div class="ws-panel-title" style="color:var(--accent-amber);">💻 Integrated Terminal</div>
              <p style="font-size:0.75rem; color:var(--text-dim);">Commands & live server</p>
            </div>
          </div>
          
          <div class="workspace-detail-box" id="wsDetailBox">
            <h3 id="wsDetailTitle" style="color:var(--accent-indigo); margin-bottom:8px;">File Explorer</h3>
            <p id="wsDetailDesc" style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">
              Menampilkan struktur berkas proyek seperti index.html, style.css, dan script.js.
            </p>
          </div>
        </div>
      `;
    } else if (slide.type === 'stitch_intro') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
          <div class="glass-card">
            <h3 style="color:var(--accent-cyan); margin-bottom:12px;">Poin Utama Stitch AI</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
              ${slide.points.map(pt => `
                <li style="font-size:0.9rem; color:var(--text-muted); display:flex; gap:8px;">
                  <span style="color:var(--accent-cyan);">✦</span> ${pt}
                </li>
              `).join('')}
            </ul>
            
            <div style="margin-top:20px; background:rgba(0,0,0,0.3); padding:14px; border-radius:var(--radius-sm); border-left:3px solid var(--accent-cyan);">
              <strong style="font-size:0.8rem; color:var(--accent-cyan); display:block; margin-bottom:4px;">Contoh Prompt Desain:</strong>
              <p style="font-family:var(--font-code); font-size:0.82rem; color:#e2e8f0;">"${slide.samplePrompt}"</p>
            </div>
          </div>
          
          <div class="glass-card" style="display:flex; flex-direction:column; justify-content:center;">
            <h4 style="color:#fff; margin-bottom:12px; font-size:0.95rem;">Visualisasi UI Mockup Hasil Stitch AI:</h4>
            <div style="background:#090a12; border:1px solid var(--border-glass); border-radius:var(--radius-sm); padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px; margin-bottom:12px;">
                <span style="font-weight:700; color:var(--accent-indigo); font-size:0.85rem;">[PORTFOLIO PREVIEW]</span>
                <span style="font-size:0.75rem; color:var(--accent-emerald);">● Generated in 2.4s</span>
              </div>
              <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px;">
                ${slide.mockupElements.map(el => `
                  <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:4px; font-size:0.8rem; color:var(--text-muted); text-align:center;">
                    ${el}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'workflow') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:10px; margin-top:20px;">
          ${slide.flow.map((f, i) => `
            <div class="glass-card" style="padding:14px; text-align:center;">
              <div style="font-size:0.75rem; color:var(--accent-cyan); font-weight:700; margin-bottom:4px;">${f.stage}</div>
              <div style="font-size:0.95rem; font-weight:700; color:#fff; margin-bottom:6px;">${f.label}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${f.desc}</div>
            </div>
          `).join('')}
        </div>
        
        <div style="margin-top:24px; background:rgba(245,158,11,0.1); border:1px solid var(--accent-amber); border-radius:var(--radius-md); padding:16px; display:flex; align-items:center; gap:12px;">
          <span style="font-size:1.5rem;">💡</span>
          <p style="font-size:0.9rem; color:#fef3c7; line-height:1.5;">
            <strong>Catatan Penting:</strong> Hasil generasi AI adalah titik awal (baseline). Pengembang harus selalu meninjau, menguji di browser, dan menyempurnakan struktur kode sesuai standar industri.
          </p>
        </div>
      `;
    } else if (slide.type === 'croc_formula') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="croc-grid">
          ${slide.croc.map(c => `
            <div class="croc-card" data-croc="${c.letter}">
              <div class="croc-letter" style="color:${c.color};">${c.letter}</div>
              <div class="croc-title">${c.title}</div>
              <div class="croc-desc">${c.desc}</div>
            </div>
          `).join('')}
        </div>
        
        <div class="croc-full-prompt-box">
          <div style="flex:1;">
            <div style="font-size:0.75rem; font-weight:700; color:var(--accent-cyan); margin-bottom:4px; text-transform:uppercase;">Gabungan Prompt Formulir CROC:</div>
            <div class="prompt-text-content">"${slide.combinedPrompt}"</div>
          </div>
          <button class="btn-copy" id="btnCopyCrocPrompt">📋 Copy Prompt</button>
        </div>
      `;
    } else if (slide.type === 'prompt_comparison') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="comparison-grid">
          <div class="comp-box bad">
            <span class="comp-badge">❌ Prompt Buruk (Kurang Spesifik)</span>
            <div class="comp-prompt-quote">"${slide.badPrompt.text}"</div>
            <ul class="comp-reasons">
              ${slide.badPrompt.reasons.map(r => `<li>⚠️ ${r}</li>`).join('')}
            </ul>
          </div>
          
          <div class="comp-box good">
            <span class="comp-badge">✅ Prompt Lebih Baik (Struktur CROC)</span>
            <div class="comp-prompt-quote">"${slide.goodPrompt.text}"</div>
            <ul class="comp-reasons">
              ${slide.goodPrompt.reasons.map(r => `<li>✨ ${r}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    } else if (slide.type === 'mcp_explanation') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
          <div class="glass-card">
            <h3 style="color:var(--accent-cyan); margin-bottom:14px;">Diagram Alur Kerja MCP</h3>
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${slide.diagram.map((d, i) => `
                <div style="background:rgba(255,255,255,0.05); padding:12px 16px; border-radius:var(--radius-sm); border-left:3px solid var(--accent-indigo); display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <strong style="color:#fff; font-size:0.9rem;">${d.name}</strong>
                    <div style="font-size:0.78rem; color:var(--text-muted);">${d.role}</div>
                  </div>
                  <span style="font-size:0.8rem; color:var(--accent-cyan);">${i < slide.diagram.length - 1 ? '⬇' : '✓'}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="glass-card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <h3 style="color:var(--accent-emerald); margin-bottom:14px;">Manfaat Utama MCP</h3>
              <div style="display:flex; flex-direction:column; gap:12px;">
                ${slide.benefits.map(b => `
                  <div>
                    <strong style="color:#fff; font-size:0.92rem;">• ${b.title}</strong>
                    <p style="font-size:0.82rem; color:var(--text-muted); margin-top:2px;">${b.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div style="background:rgba(99,102,241,0.12); border:1px solid var(--accent-indigo); border-radius:var(--radius-sm); padding:12px; font-size:0.8rem; color:var(--accent-cyan);">
              🔒 ${slide.note}
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'integration_approaches') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
          ${slide.approaches.map(app => `
            <div class="glass-card" style="border-top:4px solid ${app.color}; display:flex; flex-direction:column;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                <h3 style="font-size:1.05rem; color:#fff;">${app.name}</h3>
                <span style="background:rgba(255,255,255,0.08); color:${app.color}; padding:2px 10px; border-radius:12px; font-size:0.75rem; font-weight:700;">${app.tag}</span>
              </div>
              
              <div style="display:flex; flex-direction:column; gap:8px; flex:1;">
                ${app.steps.map(st => `
                  <div style="font-size:0.85rem; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:8px 12px; border-radius:4px;">
                    ${st}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'hands_on_checklist') {
      html += `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h2 class="slide-title">${slide.title}</h2>
            <p class="slide-subtitle" style="margin-bottom:0;">${slide.subtitle}</p>
          </div>
          <div style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--accent-cyan);">
            Progres: <span id="chkProgressCount">0</span> / ${slide.items.length} Selesai
          </div>
        </div>
        
        <div class="checklist-container">
          ${slide.items.map(item => {
            const isChecked = checkedItems[item.id] || false;
            return `
              <div class="chk-item ${isChecked ? 'checked' : ''}" data-chkid="${item.id}">
                <div class="custom-checkbox">${isChecked ? '✓' : ''}</div>
                <div class="chk-label" style="flex:1;">${item.label}</div>
                <span style="font-size:0.75rem; background:rgba(255,255,255,0.08); padding:2px 8px; border-radius:4px; color:var(--text-dim);">${item.category}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (slide.type === 'agent_prompt') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div class="croc-full-prompt-box">
            <div style="flex:1;">
              <div style="font-size:0.75rem; font-weight:700; color:var(--accent-cyan); margin-bottom:4px; text-transform:uppercase;">Instruksi AI Agent Antigravity:</div>
              <div class="prompt-text-content">"${slide.agentPromptText}"</div>
            </div>
            <button class="btn-copy" id="btnCopyAgentPrompt">📋 Copy Agent Prompt</button>
          </div>
          
          <div>
            <div style="font-size:0.85rem; font-weight:600; color:var(--text-muted); margin-bottom:6px;">Pratinjau Struktur Kode yang Dihasilkan:</div>
            <pre class="code-block-box"><code>${escapeHtml(slide.codePreview)}</code></pre>
          </div>
        </div>
      `;
    } else if (slide.type === 'debugging_guide') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
          ${slide.scenarios.map(sc => `
            <div class="glass-card">
              <div style="color:var(--accent-rose); font-weight:700; font-size:0.95rem; margin-bottom:6px;">⚠️ ${sc.problem}</div>
              <div style="font-size:0.83rem; color:var(--text-dim); margin-bottom:8px;"><strong>Penyebab:</strong> ${sc.cause}</div>
              <div style="font-size:0.85rem; color:var(--accent-emerald); background:rgba(16,185,129,0.1); padding:8px 12px; border-radius:4px;"><strong>Solusi:</strong> ${sc.solution}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'interactive_quiz') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div class="quiz-container" id="quizContainer">
          ${renderQuizQuestions(slide.questions)}
        </div>
      `;
    } else if (slide.type === 'assignment') {
      html += `
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-subtitle">${slide.subtitle}</p>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
          <div class="glass-card">
            <h3 style="color:var(--accent-cyan); margin-bottom:12px;">Persyaratan Tugas Mandiri</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
              ${slide.requirements.map(req => `
                <li style="font-size:0.88rem; color:var(--text-muted); display:flex; gap:8px;">
                  <span style="color:var(--accent-cyan);">✓</span> ${req}
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div class="glass-card">
            <h3 style="color:var(--accent-indigo); margin-bottom:12px;">Rubrik Penilaian Workshop</h3>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${slide.rubrik.map(r => `
                <div style="background:rgba(255,255,255,0.04); padding:8px 12px; border-radius:4px; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <strong style="font-size:0.88rem; color:#fff;">${r.aspect}</strong>
                    <div style="font-size:0.75rem; color:var(--text-muted);">${r.criteria}</div>
                  </div>
                  <span style="font-family:var(--font-code); font-weight:700; color:var(--accent-cyan);">${r.weight}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === 'closing') {
      html += `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
          <div class="cover-badge" style="margin-bottom:16px;">🎓 Workshop Selesai</div>
          <h1 class="cover-h1" style="font-size:3rem; margin-bottom:16px;">${slide.title}</h1>
          
          <div style="max-width:700px; background:rgba(255,255,255,0.03); border:1px solid var(--border-glass); border-radius:var(--radius-md); padding:24px; margin-bottom:32px;">
            <p style="font-size:1.15rem; color:#e2e8f0; line-height:1.6; font-style:italic;">
              "${slide.quote}"
            </p>
          </div>
          
          <div style="display:flex; gap:16px;">
            <button class="btn-primary-cta" id="btnRestartSlide">↺ Kembali ke Cover</button>
            <button class="btn-header" id="btnOpenTocClosing">☰ Daftar Slide</button>
            <button class="btn-header" id="btnOpenQA">💬 Sesi Tanya Jawab</button>
          </div>
        </div>
      `;
    }

    slideContent.innerHTML = html;
    attachInteractiveEvents(slide);
  }

  // Quiz Renderer Helper
  function renderQuizQuestions(questions) {
    return questions.map((q, qidx) => {
      const selected = quizUserAnswers[q.id];
      return `
        <div class="quiz-card">
          <div class="quiz-question-title">${qidx + 1}. ${q.question}</div>
          <div class="quiz-options-list">
            ${q.options.map((opt, optIdx) => {
              let optClass = 'quiz-opt-btn';
              if (selected !== undefined) {
                if (optIdx === q.correct) optClass += ' correct';
                else if (selected === optIdx) optClass += ' wrong';
              }
              return `
                <button class="${optClass}" data-qid="${q.id}" data-opt="${optIdx}">
                  ${opt}
                </button>
              `;
            }).join('')}
          </div>
          ${selected !== undefined ? `
            <div style="margin-top:12px; font-size:0.85rem; color:var(--accent-cyan); background:rgba(34,211,238,0.1); padding:8px 12px; border-radius:4px;">
              💡 <strong>Pembahasan:</strong> ${q.explanation}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // Interactive Events Attachment
  function attachInteractiveEvents(slide) {
    // Start Workshop Button
    const btnStart = document.getElementById('btnStartWorkshop');
    if (btnStart) btnStart.addEventListener('click', () => updateSlide(1));

    // Copy Buttons
    const btnCopyCroc = document.getElementById('btnCopyCrocPrompt');
    if (btnCopyCroc && slide.combinedPrompt) {
      btnCopyCroc.addEventListener('click', () => copyToClipboard(slide.combinedPrompt, 'Prompt CROC disalin!'));
    }

    const btnCopyAgent = document.getElementById('btnCopyAgentPrompt');
    if (btnCopyAgent && slide.agentPromptText) {
      btnCopyAgent.addEventListener('click', () => copyToClipboard(slide.agentPromptText, 'Prompt Agent disalin!'));
    }

    // Icebreaker Reveal
    const iceCards = document.querySelectorAll('.icebreaker-card');
    iceCards.forEach(card => {
      card.addEventListener('click', () => {
        card.style.background = 'rgba(99,102,241,0.25)';
        card.style.borderColor = 'var(--accent-cyan)';
        showToast(`Pertanyaan ${parseInt(card.dataset.qidx) + 1} ditayangkan!`);
      });
    });

    // Workspace Diagram Tabs
    const wsPanels = document.querySelectorAll('.ws-panel');
    const wsDetailTitle = document.getElementById('wsDetailTitle');
    const wsDetailDesc = document.getElementById('wsDetailDesc');
    if (wsPanels.length && slide.panels) {
      wsPanels.forEach(panel => {
        panel.addEventListener('click', () => {
          wsPanels.forEach(p => p.classList.remove('active'));
          panel.classList.add('active');
          const panelData = slide.panels.find(p => p.id === panel.id.replace('ws_', ''));
          if (panelData && wsDetailTitle && wsDetailDesc) {
            wsDetailTitle.textContent = panelData.name;
            wsDetailTitle.style.color = panelData.color;
            wsDetailDesc.textContent = panelData.desc;
          }
        });
      });
    }

    // Checklist Interactive State
    const chkItems = document.querySelectorAll('.chk-item');
    const chkProgressCount = document.getElementById('chkProgressCount');
    
    function updateChkCount() {
      if (!chkProgressCount) return;
      const count = Object.values(checkedItems).filter(Boolean).length;
      chkProgressCount.textContent = count;
    }
    updateChkCount();

    chkItems.forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.chkid;
        checkedItems[id] = !checkedItems[id];
        localStorage.setItem('workshop_checklist', JSON.stringify(checkedItems));
        
        if (checkedItems[id]) {
          item.classList.add('checked');
          item.querySelector('.custom-checkbox').textContent = '✓';
        } else {
          item.classList.remove('checked');
          item.querySelector('.custom-checkbox').textContent = '';
        }
        updateChkCount();
      });
    });

    // Quiz Options Click
    const quizBtns = document.querySelectorAll('.quiz-opt-btn');
    quizBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.qid);
        const opt = parseInt(btn.dataset.opt);
        quizUserAnswers[qid] = opt;
        renderSlideContent(slide);
      });
    });

    // Closing Actions
    const btnRestart = document.getElementById('btnRestartSlide');
    if (btnRestart) btnRestart.addEventListener('click', () => updateSlide(0));
    
    const btnOpenTocClosing = document.getElementById('btnOpenTocClosing');
    if (btnOpenTocClosing) btnOpenTocClosing.addEventListener('click', openDrawer);

    const btnOpenQA = document.getElementById('btnOpenQA');
    if (btnOpenQA) {
      btnOpenQA.addEventListener('click', () => {
        showToast('Sesi Q&A dibuka! Pengajuan pertanyaan adik kelas SMK.');
      });
    }
  }

  // Copy to Clipboard Toast
  function copyToClipboard(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(msg);
    }).catch(() => {
      showToast('Gagal menyalin teks!');
    });
  }

  // Toast Notification System
  function showToast(msg) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2500);
  }

  // Drawer Controls
  function openDrawer() {
    drawerOverlay.classList.add('open');
    drawerSidebar.classList.add('open');
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('open');
    drawerSidebar.classList.remove('open');
  }

  // Presenter Mode Toggle
  function togglePresenterMode() {
    isPresenterMode = !isPresenterMode;
    if (isPresenterMode) {
      presenterPanel.classList.add('open');
      btnPresenterToggle.classList.add('active');
    } else {
      presenterPanel.classList.remove('open');
      btnPresenterToggle.classList.remove('active');
    }
  }

  // Fullscreen Toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error("Fullscreen error:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // HTML Entity Escaper
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Keyboard Event Listener
  function setupEventListeners() {
    btnPrev.addEventListener('click', () => updateSlide(currentSlideIndex - 1));
    btnNext.addEventListener('click', () => updateSlide(currentSlideIndex + 1));
    btnMenuToggle.addEventListener('click', openDrawer);
    drawerCloseBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    btnPresenterToggle.addEventListener('click', togglePresenterMode);
    btnFullscreenToggle.addEventListener('click', toggleFullscreen);

    document.addEventListener('keydown', (e) => {
      // Don't intercept if user typing in input/textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        updateSlide(currentSlideIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        updateSlide(currentSlideIndex - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        togglePresenterMode();
      } else if (e.key === 'm' || e.key === 'M') {
        if (drawerSidebar.classList.contains('open')) closeDrawer();
        else openDrawer();
      } else if (e.key === 'Escape') {
        closeDrawer();
      }
    });
  }

  // Run
  init();
});
