"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),s=require("react"),I="http://localhost:4000";function E(){return"sess_"+Math.random().toString(36).slice(2)+Date.now().toString(36)}function j(){return"msg_"+Math.random().toString(36).slice(2)+Date.now().toString(36)}const S={id:"welcome",role:"assistant",type:"text",message:"Hi there! 👋 How can I help you today?",actions:[]};function A(e){const[i,f]=s.useState([S]),[b,a]=s.useState(!1),[o,n]=s.useState(null),p=s.useRef(E()),u=s.useCallback(async x=>{if(!x||!x.trim()||b)return;const g=x.trim(),k={id:j(),role:"user",type:"text",message:g,actions:[]};f(d=>[...d,k]),a(!0),n(null);try{const d=await fetch(`${I}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({apiKey:e,message:g,sessionId:p.current})});if(!d.ok)throw new Error(`Server error: ${d.status} ${d.statusText}`);const l=await d.json(),w={id:l.id||j(),role:"assistant",type:l.type||"text",message:l.message||"",actions:l.actions||[],card:l.card||null,items:l.items||[]};f(r=>[...r,w])}catch(d){const l={id:j(),role:"assistant",type:"text",message:"I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 🙏",actions:[]};f(w=>[...w,l]),n(d.message),console.error("[ChatWidget] API error:",d)}finally{a(!1)}},[e,b]),c=s.useCallback(()=>{p.current=E(),f([S]),n(null),a(!1)},[]);return{messages:i,loading:b,error:o,sendMessage:u,clearMessages:c}}function $(e="#2d6a4f"){return`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

/* ─────────────────────────────────────────────────────────
   KEYFRAMES
───────────────────────────────────────────────────────── */

@keyframes cbwSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes cbwFadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cbwBounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

@keyframes cbwPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

@keyframes cbwBadgePop {
  0%   { transform: scale(0); }
  70%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* ─────────────────────────────────────────────────────────
   ROOT CONTAINER
───────────────────────────────────────────────────────── */

.cbw-root {
  position: fixed;
  z-index: 2147483647;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cbw-root * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ─────────────────────────────────────────────────────────
   FLOATING BUBBLE BUTTON
───────────────────────────────────────────────────────── */

.cbw-bubble-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${e};
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 0 0 0 ${e}66;
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
  outline: none;
  align-self: flex-end;
}

.cbw-bubble-btn:hover {
  transform: scale(1.08);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 0 0 8px ${e}22;
}

.cbw-bubble-btn:active {
  transform: scale(0.96);
}

.cbw-bubble-btn:focus-visible {
  outline: 3px solid ${e};
  outline-offset: 3px;
}

/* ─────────────────────────────────────────────────────────
   BUBBLE ICONS (chat & close)
───────────────────────────────────────────────────────── */

.cbw-bubble-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity 0.22s ease,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #ffffff;
  line-height: 1;
}

.cbw-icon-chat {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.cbw-icon-close {
  opacity: 0;
  transform: rotate(-90deg) scale(0.7);
  font-size: 1.4rem;
  font-weight: 300;
}

/* Open state — swap icons */
.cbw-bubble-open .cbw-icon-chat {
  opacity: 0;
  transform: rotate(90deg) scale(0.7);
}

.cbw-bubble-open .cbw-icon-close {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* ─────────────────────────────────────────────────────────
   UNREAD BADGE
───────────────────────────────────────────────────────── */

.cbw-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 999px;
  background: #ef4444;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  animation: cbwBadgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  font-family: 'DM Sans', sans-serif;
  line-height: 1;
}

/* ─────────────────────────────────────────────────────────
   CHAT WINDOW
───────────────────────────────────────────────────────── */

.cbw-window {
  width: 360px;
  height: 520px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  animation: cbwSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  transform-origin: bottom right;
}

/* ─────────────────────────────────────────────────────────
   HEADER
───────────────────────────────────────────────────────── */

.cbw-header {
  background: ${e};
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.cbw-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cbw-header-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.1rem;
  color: #ffffff;
  font-style: italic;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  flex-shrink: 0;
  backdrop-filter: blur(8px);
}

.cbw-header-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cbw-header-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.cbw-header-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.cbw-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.3);
  animation: cbwPulse 2.5s ease-in-out infinite;
  flex-shrink: 0;
}

.cbw-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cbw-icon-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: background 0.18s ease, transform 0.15s ease;
  outline: none;
  backdrop-filter: blur(8px);
  line-height: 1;
}

.cbw-icon-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.cbw-icon-btn:active {
  transform: scale(0.95);
}

.cbw-icon-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.7);
  outline-offset: 2px;
}

/* ─────────────────────────────────────────────────────────
   MESSAGES AREA
───────────────────────────────────────────────────────── */

.cbw-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8fafc;
  scroll-behavior: smooth;
}

/* Custom thin scrollbar */
.cbw-messages::-webkit-scrollbar {
  width: 4px;
}
.cbw-messages::-webkit-scrollbar-track {
  background: transparent;
}
.cbw-messages::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}
.cbw-messages::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
.cbw-messages {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

/* ─────────────────────────────────────────────────────────
   MESSAGE WRAP
───────────────────────────────────────────────────────── */

.cbw-message-wrap {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  animation: cbwFadeIn 0.3s ease both;
}

.cbw-user {
  flex-direction: row-reverse;
}

/* ─────────────────────────────────────────────────────────
   BOT AVATAR
───────────────────────────────────────────────────────── */

.cbw-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 0.85rem;
  color: #ffffff;
  font-style: italic;
  flex-shrink: 0;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ─────────────────────────────────────────────────────────
   BUBBLE GROUP
───────────────────────────────────────────────────────── */

.cbw-bubble-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 78%;
}

/* ─────────────────────────────────────────────────────────
   CHAT BUBBLES
───────────────────────────────────────────────────────── */

.cbw-bubble {
  padding: 10px 14px;
  font-size: 0.875rem;
  line-height: 1.55;
  color: #1e293b;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Bot bubble — round all corners except top-left */
.cbw-bot .cbw-bubble {
  border-radius: 4px 16px 16px 16px;
}

/* User bubble — primaryColor bg, round all except bottom-right */
.cbw-user .cbw-bubble {
  background: ${e};
  color: #ffffff;
  border: none;
  border-radius: 16px 16px 4px 16px;
  box-shadow: 0 2px 8px ${e}44;
}

/* ─────────────────────────────────────────────────────────
   TYPING INDICATOR
───────────────────────────────────────────────────────── */

.cbw-typing {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  animation: cbwFadeIn 0.3s ease both;
}

.cbw-typing-dots {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px 16px 16px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.cbw-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #94a3b8;
  animation: cbwBounce 1.2s ease-in-out infinite;
}

.cbw-dot:nth-child(1) { animation-delay: 0s; }
.cbw-dot:nth-child(2) { animation-delay: 0.2s; }
.cbw-dot:nth-child(3) { animation-delay: 0.4s; }

/* ─────────────────────────────────────────────────────────
   ACTION BUTTONS (navigation type)
───────────────────────────────────────────────────────── */

.cbw-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.cbw-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: #ffffff;
  color: ${e};
  border: 1.5px solid ${e};
  border-radius: 999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.18s ease,
    transform 0.15s ease,
    box-shadow 0.18s ease;
  outline: none;
  line-height: 1;
  white-space: nowrap;
}

.cbw-action-btn:hover {
  background: ${e}11;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px ${e}33;
}

.cbw-action-btn:active {
  transform: translateY(0);
}

.cbw-action-btn:focus-visible {
  outline: 2px solid ${e};
  outline-offset: 2px;
}

/* ─────────────────────────────────────────────────────────
   CARD (card type)
───────────────────────────────────────────────────────── */

.cbw-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: block;
  margin-top: 2px;
}

.cbw-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.cbw-card:active {
  transform: translateY(0);
}

.cbw-card-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
  background: #f1f5f9;
}

.cbw-card-body {
  padding: 12px 14px;
}

.cbw-card-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
  line-height: 1.3;
}

.cbw-card-desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 8px;
}

.cbw-card-link {
  font-size: 0.8rem;
  color: ${e};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* ─────────────────────────────────────────────────────────
   LIST (list type)
───────────────────────────────────────────────────────── */

.cbw-list {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2px;
}

.cbw-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  font-size: 0.84rem;
  color: #1e293b;
  cursor: pointer;
  transition: background 0.15s ease;
  border-bottom: 1px solid #f1f5f9;
  font-weight: 400;
  gap: 8px;
}

.cbw-list-item:last-child {
  border-bottom: none;
}

.cbw-list-item:hover {
  background: #f8fafc;
  color: ${e};
}

.cbw-list-item:active {
  background: #f1f5f9;
}

.cbw-list-arrow {
  color: #94a3b8;
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: color 0.15s, transform 0.15s;
}

.cbw-list-item:hover .cbw-list-arrow {
  color: ${e};
  transform: translateX(2px);
}

/* ─────────────────────────────────────────────────────────
   INPUT AREA
───────────────────────────────────────────────────────── */

.cbw-input-area {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
  flex-shrink: 0;
}

.cbw-input {
  flex: 1;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 9px 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  background: #f8fafc;
  resize: none;
  outline: none;
  line-height: 1.5;
  max-height: 100px;
  overflow-y: auto;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.cbw-input::placeholder {
  color: #94a3b8;
}

.cbw-input:focus {
  border-color: ${e};
  box-shadow: 0 0 0 3px ${e}22;
  background: #ffffff;
}

.cbw-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cbw-input::-webkit-scrollbar { width: 3px; }
.cbw-input::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 999px; }

.cbw-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${e};
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background 0.18s ease,
    transform 0.15s ease,
    box-shadow 0.18s ease,
    opacity 0.18s ease;
  outline: none;
  box-shadow: 0 2px 8px ${e}44;
}

.cbw-send-btn:hover:not(:disabled) {
  transform: scale(1.08);
  box-shadow: 0 4px 12px ${e}55;
}

.cbw-send-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.cbw-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.cbw-send-btn:focus-visible {
  outline: 3px solid ${e};
  outline-offset: 3px;
}

/* ─────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────── */

.cbw-footer {
  text-align: center;
  padding: 6px 14px 10px;
  font-size: 0.68rem;
  color: #94a3b8;
  font-weight: 400;
  background: #ffffff;
  letter-spacing: 0.01em;
  flex-shrink: 0;
}

.cbw-footer a {
  color: ${e};
  text-decoration: none;
  font-weight: 500;
}

.cbw-footer a:hover {
  text-decoration: underline;
}

/* ─────────────────────────────────────────────────────────
   DATE DIVIDER
───────────────────────────────────────────────────────── */

.cbw-date-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  color: #94a3b8;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 4px 0;
}

.cbw-date-divider::before,
.cbw-date-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

/* ─────────────────────────────────────────────────────────
   MOBILE BREAKPOINT
───────────────────────────────────────────────────────── */

@media (max-width: 480px) {
  .cbw-window {
    width: 100vw;
    height: 100dvh;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    right: 0;
    animation: none;
  }
}
`}function y(e,i=!1){if(e){if(i){window.open(e,"_blank","noopener,noreferrer");return}if(typeof window.__CHATBOT_NAVIGATE__=="function"){window.__CHATBOT_NAVIGATE__(e);return}if(window.__NEXT_ROUTER__&&typeof window.__NEXT_ROUTER__.push=="function"){window.__NEXT_ROUTER__.push(e);return}window.location.href=e}}function _({msg:e,primaryColor:i,botName:f="Aria"}){const b=e.role==="user";return t.jsxs("div",{className:`cbw-message-wrap ${b?"cbw-user":"cbw-bot"}`,role:"listitem",children:[!b&&t.jsx("div",{className:"cbw-avatar","aria-hidden":"true",children:f.charAt(0).toUpperCase()}),t.jsxs("div",{className:"cbw-bubble-group",children:[e.message&&t.jsx("div",{className:"cbw-bubble",role:b?"note":"article",children:e.message}),e.type==="navigation"&&e.actions&&e.actions.length>0&&t.jsx("div",{className:"cbw-actions",role:"group","aria-label":"Navigation options",children:e.actions.map((a,o)=>t.jsxs("button",{className:"cbw-action-btn",onClick:()=>y(a.url,a.external),"aria-label":`${a.label}${a.external?" (opens in new tab)":""}`,children:[t.jsx("span",{"aria-hidden":"true",children:a.external?"↗":"→"}),a.label]},o))}),e.type==="card"&&e.card&&t.jsxs("div",{className:"cbw-card",onClick:()=>y(e.card.url,e.card.external),role:"button",tabIndex:0,"aria-label":`${e.card.title}${e.card.external?" (opens in new tab)":""}`,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),y(e.card.url,e.card.external))},children:[e.card.image&&t.jsx("img",{className:"cbw-card-img",src:e.card.image,alt:e.card.title||"Card image",loading:"lazy"}),t.jsxs("div",{className:"cbw-card-body",children:[e.card.title&&t.jsx("div",{className:"cbw-card-title",children:e.card.title}),e.card.description&&t.jsx("div",{className:"cbw-card-desc",children:e.card.description}),t.jsxs("span",{className:"cbw-card-link",children:["View ",e.card.external?"↗":"→"]})]})]}),e.type==="list"&&e.items&&e.items.length>0&&t.jsx("div",{className:"cbw-list",role:"list","aria-label":"List options",children:e.items.map((a,o)=>t.jsxs("div",{className:"cbw-list-item",onClick:()=>y(a.url,a.external),role:"listitem button",tabIndex:0,"aria-label":`${a.label}${a.external?" (opens in new tab)":""}`,onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),y(a.url,a.external))},children:[t.jsx("span",{children:a.label}),t.jsx("span",{className:"cbw-list-arrow","aria-hidden":"true",children:a.external?"↗":"→"})]},o))})]})]})}function M({botName:e="Aria"}){return t.jsxs("div",{className:"cbw-typing",role:"status","aria-label":"Bot is typing",children:[t.jsx("div",{className:"cbw-avatar","aria-hidden":"true",children:e.charAt(0).toUpperCase()}),t.jsxs("div",{className:"cbw-typing-dots","aria-hidden":"true",children:[t.jsx("span",{className:"cbw-dot"}),t.jsx("span",{className:"cbw-dot"}),t.jsx("span",{className:"cbw-dot"})]})]})}function B(){return t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),t.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function R({messages:e,loading:i,onSend:f,onClose:b,onClear:a,botName:o="Aria",primaryColor:n="#2d6a4f"}){const[p,u]=s.useState(""),c=s.useRef(null),x=s.useRef(null),g=s.useRef(null);s.useEffect(()=>{x.current&&x.current.scrollIntoView({behavior:"smooth"})},[e,i]),s.useEffect(()=>{const r=setTimeout(()=>{c.current&&c.current.focus()},100);return()=>clearTimeout(r)},[]);const k=s.useCallback(r=>{const m=r.target;u(m.value),m.style.height="auto",m.style.height=Math.min(m.scrollHeight,100)+"px"},[]),d=s.useCallback(r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),l())},[p,i]),l=s.useCallback(()=>{const r=p.trim();!r||i||(f(r),u(""),c.current&&(c.current.style.height="auto",c.current.focus()))},[p,i,f]),w=s.useCallback(()=>{a(),c.current&&c.current.focus()},[a]);return t.jsxs("div",{className:"cbw-window",role:"dialog","aria-label":`Chat with ${o}`,children:[t.jsxs("div",{className:"cbw-header",children:[t.jsxs("div",{className:"cbw-header-left",children:[t.jsx("div",{className:"cbw-header-avatar","aria-hidden":"true",children:o.charAt(0).toUpperCase()}),t.jsxs("div",{className:"cbw-header-info",children:[t.jsx("div",{className:"cbw-header-name",children:o}),t.jsxs("div",{className:"cbw-header-status",children:[t.jsx("span",{className:"cbw-status-dot","aria-hidden":"true"}),"Online · Ready to help"]})]})]}),t.jsxs("div",{className:"cbw-header-actions",children:[t.jsx("button",{className:"cbw-icon-btn",onClick:w,"aria-label":"Start new conversation",title:"New conversation",children:"✦"}),t.jsx("button",{className:"cbw-icon-btn",onClick:b,"aria-label":"Close chat",title:"Close",children:"✕"})]})]}),t.jsxs("div",{className:"cbw-messages",ref:g,role:"list","aria-label":"Chat messages","aria-live":"polite","aria-relevant":"additions",children:[t.jsx("div",{className:"cbw-date-divider","aria-hidden":"true",children:"Today"}),e.map(r=>t.jsx(_,{msg:r,primaryColor:n,botName:o},r.id)),i&&t.jsx(M,{botName:o}),t.jsx("div",{ref:x,"aria-hidden":"true"})]}),t.jsxs("div",{className:"cbw-input-area",children:[t.jsx("textarea",{ref:c,className:"cbw-input",value:p,onChange:k,onKeyDown:d,placeholder:i?`${o} is typing…`:"Type a message…",disabled:i,rows:1,"aria-label":"Message input","aria-multiline":"true","aria-disabled":i}),t.jsx("button",{className:"cbw-send-btn",onClick:l,disabled:i||!p.trim(),"aria-label":"Send message",title:"Send",children:t.jsx(B,{})})]}),t.jsxs("div",{className:"cbw-footer",children:["Powered by"," ",t.jsx("a",{href:"https://yourplatform.com",target:"_blank",rel:"noopener noreferrer",tabIndex:-1,children:"YourPlatform"})]})]})}function D(){return t.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}function O({config:e={},shadow:i=null}){const{apiKey:f,botName:b="Aria",primaryColor:a="#2d6a4f",position:o="bottom-right"}=e,[n,p]=s.useState(!1),[u,c]=s.useState(0),{messages:x,loading:g,error:k,sendMessage:d,clearMessages:l}=A(f);s.useEffect(()=>{const v=$(a),h=document.createElement("style");if(h.textContent=v,i)h.setAttribute("data-cbw","true"),i.appendChild(h);else{h.id="cbw-styles";const N=document.getElementById("cbw-styles");N&&N.remove(),document.head.appendChild(h)}return()=>{h.remove()}},[a,i]),s.useEffect(()=>{if(!n){const v=x.filter(h=>h.role==="assistant"&&h.id!=="welcome").length;c(v)}},[x,n]);const w=s.useCallback(()=>{p(!0),c(0)},[]),r=s.useCallback(()=>{p(!1)},[]),m=s.useCallback(()=>{n?r():w()},[n,w,r]),T=s.useCallback(()=>{l(),c(0)},[l]),C=o==="bottom-left"?{bottom:24,left:24}:{bottom:24,right:24};return t.jsxs("div",{className:"cbw-root",style:C,role:"complementary","aria-label":"Chat widget",children:[n&&t.jsx(R,{messages:x,loading:g,onSend:d,onClose:r,onClear:T,botName:b,primaryColor:a}),t.jsxs("button",{className:`cbw-bubble-btn${n?" cbw-bubble-open":""}`,onClick:m,"aria-expanded":n,"aria-label":n?"Close chat":`Chat with ${b}`,"aria-haspopup":"dialog",children:[t.jsx("span",{className:"cbw-bubble-icon cbw-icon-chat",children:t.jsx(D,{})}),t.jsx("span",{className:"cbw-bubble-icon cbw-icon-close","aria-hidden":"true",children:"✕"}),!n&&u>0&&t.jsx("span",{className:"cbw-badge","aria-label":`${u} unread messages`,children:u>99?"99+":u})]})]})}exports.default=O;exports.navigate=y;exports.useChat=A;
