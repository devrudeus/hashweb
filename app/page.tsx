'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Trash2,
  Lock,
  Timer,
  Github,
  Blocks,
  Download,
  ChevronRight,
  FileText
} from 'lucide-react'

export default function HashWebLanding() {
  const [activeTab, setActiveTab] = useState<'hashweb' | 'encryption'>('hashweb')
  const [typedText, setTypedText] = useState('')
  const [binaryColumns, setBinaryColumns] = useState<string[][]>([])
  const [mounted, setMounted] = useState(false)
  const fullText = 'Secure, encrypted, and self-destructing file sharing.'

  // Mount effect
  useEffect(() => {
    setMounted(true)
    // Generate binary columns once on client
    const columns = Array(6).fill(0).map(() =>
      Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')
    )
    setBinaryColumns(columns)
  }, [])

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const codeContent = {
    hashweb: `1  import { encrypt } from './crypto'
2
3  interface FileConfig {
4    encryption: 'AES-256',
5    access: 'ONE_TIME_ONLY',
6    logging: 'DISABLED',
7    expiry: number
8  }
9
10 export async function shareFile(file: File) {
11   const encrypted = await encrypt(file)
12   const link = generateLink(encrypted)
13
14   // Auto-destruct after first download
15   return { link, status: 'READY' }
16 }`,
    encryption: `1  import { webcrypto } from 'crypto'
2
3  const algorithm = {
4    name: 'AES-GCM',
5    length: 256
6  }
7
8  export async function encrypt(data: File) {
9    const key = await webcrypto.subtle.generateKey(
10     algorithm,
11     true,
12     ['encrypt', 'decrypt']
13   )
14
15   const iv = webcrypto.getRandomValues(new Uint8Array(12))
16   const encrypted = await webcrypto.subtle.encrypt(
17     { name: 'AES-GCM', iv },
18     key,
19     await data.arrayBuffer()
20   )
21
22   return { encrypted, key, iv }
23 }`
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dotted Grid Background */}
      <div className="fixed inset-0 dotted-grid pointer-events-none" />

      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal Lines */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-primary/8 to-transparent top-[20%] animate-scan-horizontal" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-primary/5 to-transparent top-[60%] animate-scan-horizontal-slow" />

        {/* Vertical Lines */}
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-primary/8 to-transparent left-[30%] animate-scan-vertical" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-primary/5 to-transparent left-[70%] animate-scan-vertical-slow" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-primary/12 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute w-96 h-96 bg-purple-primary/8 rounded-full blur-3xl top-[10%] left-[10%] animate-orb-1" />
        <div className="absolute w-80 h-80 bg-purple-light/8 rounded-full blur-3xl bottom-[20%] right-[15%] animate-orb-2" />
        <div className="absolute w-72 h-72 bg-purple-dark/8 rounded-full blur-3xl top-[60%] left-[60%] animate-orb-3" />
      </div>

      {/* Binary Rain Effect */}
      {mounted && binaryColumns.length > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-8">
          {binaryColumns.map((column, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-purple-primary/30 whitespace-nowrap animate-binary-rain"
              style={{
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            >
              {column.map((bit, j) => (
                <div key={j} className="mb-2">
                  {bit}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-7xl w-full mx-auto">
          {/* Logo with Enhanced Presentation */}
          <div className="flex justify-center mb-20 w-full scale-in relative">
            <div className="relative w-full max-w-5xl px-4">
              <div className="relative group">
                <Image
                  src="/hashweb-logo.png"
                  alt="Hash Web - Secure File Sharing"
                  width={1920}
                  height={1080}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(14,165,233,0.6)) drop-shadow(0 0 60px rgba(14,165,233,0.3))'
                  }}
                  priority
                  quality={95}
                />
                {/* Multi-layer background glow */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/30 via-purple-light/10 to-transparent blur-3xl animate-pulse-slow"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-light/20 via-transparent to-transparent blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge with Enhanced Design */}
          <div className="flex justify-center mb-12 fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="glass-card px-10 py-4 rounded-full border-2 border-purple-primary/40 hover:border-purple-primary hover:bg-purple-primary/5 transition-all duration-300 group cursor-default">
              <span className="gradient-text text-lg font-bold tracking-widest flex items-center gap-3">
                <Lock className="w-5 h-5 text-purple-primary group-hover:rotate-12 transition-transform" />
                ZERO-KNOWLEDGE ENCRYPTION
              </span>
            </div>
          </div>

          {/* Description with Enhanced Typography */}
          <div className="text-center text-xl md:text-3xl max-w-5xl mx-auto mb-8 leading-relaxed min-h-[5rem] flex items-center justify-center">
            <p className="text-white font-bold font-mono tracking-tight">
              {typedText}
              <span className="inline-block w-1 h-7 md:h-9 bg-purple-primary ml-1 animate-pulse"></span>
            </p>
          </div>
          <p className="text-center text-purple-light text-lg md:text-xl mb-16 fade-in font-medium" style={{ animationDelay: '0.5s', opacity: 0 }}>
            Client-side encryption. Zero logs. Total privacy.
          </p>

          {/* CTA Buttons with Enhanced Design */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24 fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <a
              href="https://hashweb-encrypt.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-gradient-to-r from-purple-primary to-purple-light text-white font-mono font-bold border-2 border-purple-light hover:border-purple-neon transition-all duration-300 inline-block rounded-xl shadow-2xl shadow-purple-primary/30 hover:shadow-purple-primary/50 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-light to-purple-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3 justify-center text-lg">
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                Start Encrypting
              </span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1RdjaPPydyYmhj-oN4vgwW4fH83iIClZ-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 glass-card text-purple-light font-mono font-bold border-2 border-purple-primary/60 hover:border-purple-primary hover:bg-purple-primary/15 transition-all duration-300 inline-block rounded-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative flex items-center gap-3 justify-center text-lg">
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                Download Extension
              </span>
            </a>
          </div>


          {/* Mock Code Editor with Enhanced Design */}
          <div className="max-w-5xl mx-auto border-2 border-purple-primary/40 rounded-2xl overflow-hidden fade-in shadow-2xl shadow-purple-primary/10 hover:shadow-purple-primary/20 transition-all duration-500 group" style={{ animationDelay: '0.7s', opacity: 0 }}>
            {/* Editor Header */}
            <div className="border-b-2 border-purple-primary/30 bg-gradient-to-r from-black via-purple-primary/5 to-black px-6 py-3 flex items-center justify-between backdrop-blur-sm">
              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-purple-dark/40 border border-purple-primary/50 group-hover:bg-purple-primary/30 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-purple-dark/40 border border-purple-primary/50 group-hover:bg-purple-primary/30 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-purple-dark/40 border border-purple-primary/50 group-hover:bg-purple-primary/30 transition-colors" />
              </div>
              <span className="text-sm text-purple-light font-mono font-semibold tracking-wide">encryption-suite.ts</span>
            </div>

            {/* Tabs */}
            <div className="border-b-2 border-purple-primary/30 flex bg-black/50 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('hashweb')}
                className={`px-6 py-3 border-r border-purple-primary/30 font-mono text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === 'hashweb'
                    ? 'text-purple-light bg-purple-primary/15 shadow-lg shadow-purple-primary/10'
                    : 'text-gray-light hover:text-purple-light hover:bg-purple-primary/5'
                }`}
              >
                {activeTab === 'hashweb' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-primary to-purple-light shadow-lg shadow-purple-primary/50" />
                )}
                <span className="relative">hashweb.ts</span>
              </button>
              <button
                onClick={() => setActiveTab('encryption')}
                className={`px-6 py-3 font-mono text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === 'encryption'
                    ? 'text-purple-light bg-purple-primary/15 shadow-lg shadow-purple-primary/10'
                    : 'text-gray-light hover:text-purple-light hover:bg-purple-primary/5'
                }`}
              >
                {activeTab === 'encryption' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-primary to-purple-light shadow-lg shadow-purple-primary/50" />
                )}
                <span className="relative">encryption.ts</span>
              </button>
            </div>

            {/* Code Content */}
            <div className="bg-gradient-to-br from-black via-purple-primary/5 to-black p-8 font-mono text-sm md:text-base overflow-x-auto min-h-[400px]">
              <pre className="text-gray-light leading-loose">
                <code key={activeTab} className="tab-content block">
                  {codeContent[activeTab]}
                </code>
              </pre>
            </div>

            {/* Status Bar */}
            <div className="border-t-2 border-purple-primary/30 bg-gradient-to-r from-black via-purple-primary/5 to-black px-6 py-3 flex items-center justify-between text-sm backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-primary animate-pulse"></div>
                  <span className="text-purple-light font-mono font-semibold">ENCRYPTED</span>
                </div>
                <span className="text-gray-light font-mono">TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-primary" />
                <span className="text-purple-light font-mono font-semibold">AES-256-GCM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-4 bg-gradient-to-b from-black via-purple-primary/5 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Core Features</h2>
            <p className="text-gray-light text-lg font-mono">Privacy-first architecture built for security</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card rounded-xl p-8 group hover:border-purple-primary transition-all slide-up hover:scale-105 duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 border border-purple-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">CLIENT-SIDE ENCRYPTION</h3>
              <p className="text-gray-light leading-relaxed">
                Files encrypted in browser. Keys never touch servers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-xl p-8 group hover:border-purple-primary transition-all slide-up hover:scale-105 duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 border border-purple-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ONE-TIME ACCESS</h3>
              <p className="text-gray-light leading-relaxed">
                Links self-destruct after download. No second chances.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-xl p-8 group hover:border-purple-primary transition-all slide-up hover:scale-105 duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 border border-purple-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trash2 className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ZERO LOGS</h3>
              <p className="text-gray-light leading-relaxed">
                No metadata, no records. Privacy by default.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card rounded-xl p-8 group hover:border-purple-primary transition-all slide-up hover:scale-105 duration-300" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 border border-purple-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Timer className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AUTO-DESTRUCT</h3>
              <p className="text-gray-light leading-relaxed">
                Configurable expiry. Files vanish without trace.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-card rounded-xl p-8 group hover:border-purple-primary transition-all slide-up hover:scale-105 duration-300" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 border border-purple-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">OPEN SOURCE</h3>
              <p className="text-gray-light leading-relaxed">
                Fully auditable. No backdoors. Trust through transparency.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-card rounded-xl p-8 group hover:border-purple-primary transition-all slide-up hover:scale-105 duration-300" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 border border-purple-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Blocks className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">WEB3 READY</h3>
              <p className="text-gray-light leading-relaxed">
                Decentralized architecture. Your files, your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Encryption Visual Demo */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-primary/3 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Encryption Flow</h2>
            <p className="text-gray-light text-lg font-mono tracking-wide">End-to-end encryption process visualized</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Plain Text */}
            <div className="glass-card border-2 border-purple-primary/30 p-8 slide-up rounded-2xl hover:border-purple-primary/50 transition-all duration-300 group" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-light/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-gray-light" />
                </div>
                <h3 className="font-bold text-white text-xl font-mono tracking-wide">ORIGINAL FILE</h3>
              </div>
              <div className="border-2 border-purple-primary/20 p-6 bg-black/50 rounded-xl font-mono text-sm backdrop-blur-sm">
                <p className="text-white mb-3 font-semibold text-lg">secret_document.pdf</p>
                <p className="text-gray-light">Plain text, human-readable</p>
                <div className="mt-4 pt-4 border-t border-purple-primary/20">
                  <span className="text-xs text-gray-light/70">Status: Unprotected</span>
                </div>
              </div>
            </div>

            {/* Encrypted */}
            <div className="glass-card border-2 border-purple-primary p-8 slide-up rounded-2xl hover:border-purple-light transition-all duration-300 group shadow-lg shadow-purple-primary/20" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-primary/30 to-purple-light/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-purple-primary" />
                </div>
                <h3 className="font-bold text-white text-xl font-mono tracking-wide">ENCRYPTED DATA</h3>
              </div>
              <div className="border-2 border-purple-primary p-6 bg-gradient-to-br from-purple-primary/10 to-purple-dark/10 rounded-xl font-mono text-sm backdrop-blur-sm">
                <p className="text-purple-light mb-3 break-all font-semibold text-base">8a9f7e3d2c1b5a4f6d8e9c0a...</p>
                <p className="text-purple-light/80">Encrypted with AES-256-GCM</p>
                <div className="mt-4 pt-4 border-t border-purple-primary/30 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-primary animate-pulse"></div>
                  <span className="text-xs text-purple-light font-semibold">Status: Secured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Encryption Flow Process */}
          <div className="mt-16 glass-card border-2 border-purple-primary/40 p-10 md:p-16 rounded-3xl shadow-2xl shadow-purple-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Security Process</h3>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-start justify-between gap-4">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 border-3 border-purple-primary rounded-3xl flex items-center justify-center bg-gradient-to-br from-purple-primary/30 to-purple-dark/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl shadow-purple-primary/40">
                    <span className="text-purple-primary font-mono text-4xl font-bold">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-primary rounded-full animate-pulse shadow-lg shadow-purple-primary/50"></div>
                </div>
                <div className="space-y-3">
                  <p className="text-white text-xl font-mono font-bold tracking-wide">GENERATE KEY</p>
                  <p className="text-base text-purple-light font-mono">256-bit random</p>
                  <div className="mt-4 px-4 py-2 glass-card border border-purple-primary/30 rounded-xl">
                    <p className="text-xs text-gray-light">Cryptographically secure random key generation</p>
                  </div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex items-center justify-center pt-12">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-12 h-12 text-purple-primary animate-pulse" />
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-primary to-purple-light mt-2"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 border-3 border-purple-light rounded-3xl flex items-center justify-center bg-gradient-to-br from-purple-light/30 to-purple-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl shadow-purple-light/40">
                    <span className="text-purple-light font-mono text-4xl font-bold">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-light rounded-full animate-pulse shadow-lg shadow-purple-light/50" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="space-y-3">
                  <p className="text-white text-xl font-mono font-bold tracking-wide">ENCRYPT FILE</p>
                  <p className="text-base text-purple-light font-mono">AES-256-GCM</p>
                  <div className="mt-4 px-4 py-2 glass-card border border-purple-light/30 rounded-xl">
                    <p className="text-xs text-gray-light">Client-side encryption in browser</p>
                  </div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex items-center justify-center pt-12">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-12 h-12 text-purple-light animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-light to-purple-glow mt-2"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 border-3 border-purple-glow rounded-3xl flex items-center justify-center bg-gradient-to-br from-purple-glow/30 to-purple-light/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl shadow-purple-glow/40">
                    <span className="text-purple-glow font-mono text-4xl font-bold">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-glow rounded-full animate-pulse shadow-lg shadow-purple-glow/50" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="space-y-3">
                  <p className="text-white text-xl font-mono font-bold tracking-wide">SECURE UPLOAD</p>
                  <p className="text-base text-purple-light font-mono">Encrypted data</p>
                  <div className="mt-4 px-4 py-2 glass-card border border-purple-glow/30 rounded-xl">
                    <p className="text-xs text-gray-light">Only encrypted data sent to server</p>
                  </div>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="flex items-center justify-center pt-12">
                <div className="flex flex-col items-center">
                  <ChevronRight className="w-12 h-12 text-purple-glow animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-glow to-purple-neon mt-2"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex-1 flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 border-3 border-purple-neon rounded-3xl flex items-center justify-center bg-gradient-to-br from-purple-neon/30 to-purple-glow/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl shadow-purple-neon/40">
                    <span className="text-purple-neon font-mono text-4xl font-bold">4</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-neon rounded-full animate-pulse shadow-lg shadow-purple-neon/50" style={{ animationDelay: '1.5s' }}></div>
                </div>
                <div className="space-y-3">
                  <p className="text-white text-xl font-mono font-bold tracking-wide">SHARE LINK</p>
                  <p className="text-base text-purple-light font-mono">URL + Key</p>
                  <div className="mt-4 px-4 py-2 glass-card border border-purple-neon/30 rounded-xl">
                    <p className="text-xs text-gray-light">Secure sharing with unique link</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Step 1 */}
              <div className="glass-card border-2 border-purple-primary/40 p-6 rounded-2xl group hover:border-purple-primary transition-all">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 border-3 border-purple-primary rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-primary/30 to-purple-dark/30 shadow-xl shadow-purple-primary/40">
                      <span className="text-purple-primary font-mono text-3xl font-bold">1</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-primary rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-white text-lg font-mono font-bold">GENERATE KEY</p>
                    <p className="text-sm text-purple-light font-mono">256-bit random</p>
                    <p className="text-xs text-gray-light mt-3">Cryptographically secure random key generation</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ChevronRight className="w-10 h-10 text-purple-primary animate-pulse rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="glass-card border-2 border-purple-light/40 p-6 rounded-2xl group hover:border-purple-light transition-all">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 border-3 border-purple-light rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-light/30 to-purple-primary/30 shadow-xl shadow-purple-light/40">
                      <span className="text-purple-light font-mono text-3xl font-bold">2</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-white text-lg font-mono font-bold">ENCRYPT FILE</p>
                    <p className="text-sm text-purple-light font-mono">AES-256-GCM</p>
                    <p className="text-xs text-gray-light mt-3">Client-side encryption in browser</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ChevronRight className="w-10 h-10 text-purple-light animate-pulse rotate-90" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Step 3 */}
              <div className="glass-card border-2 border-purple-glow/40 p-6 rounded-2xl group hover:border-purple-glow transition-all">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 border-3 border-purple-glow rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-glow/30 to-purple-light/30 shadow-xl shadow-purple-glow/40">
                      <span className="text-purple-glow font-mono text-3xl font-bold">3</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-white text-lg font-mono font-bold">SECURE UPLOAD</p>
                    <p className="text-sm text-purple-light font-mono">Encrypted data</p>
                    <p className="text-xs text-gray-light mt-3">Only encrypted data sent to server</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ChevronRight className="w-10 h-10 text-purple-glow animate-pulse rotate-90" style={{ animationDelay: '1s' }} />
              </div>

              {/* Step 4 */}
              <div className="glass-card border-2 border-purple-neon/40 p-6 rounded-2xl group hover:border-purple-neon transition-all">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 border-3 border-purple-neon rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-neon/30 to-purple-glow/30 shadow-xl shadow-purple-neon/40">
                      <span className="text-purple-neon font-mono text-3xl font-bold">4</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-neon rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-white text-lg font-mono font-bold">SHARE LINK</p>
                    <p className="text-sm text-purple-light font-mono">URL + Key</p>
                    <p className="text-xs text-gray-light mt-3">Secure sharing with unique link</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-gray-light text-xl font-mono tracking-wide">Understanding our zero-knowledge architecture</p>
          </div>

          <div className="space-y-10">
            {/* How It Works - Main Card */}
            <div className="glass-card rounded-3xl p-10 md:p-14 border-2 border-purple-primary/40 group slide-up hover:border-purple-primary transition-all duration-500 hover:shadow-2xl hover:shadow-purple-primary/20" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <a href="/how-it-works" className="block">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-primary/40">
                    <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-purple-light transition-colors">End-to-End Encryption</h3>
                    <p className="text-purple-light text-base font-mono flex items-center gap-2">
                      Click to see the detailed flow
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
                <div className="md:ml-24 space-y-6 text-gray-light leading-relaxed text-base md:text-lg">
                  <p className="border-l-4 border-purple-primary/50 pl-6 py-2">
                    Every note is assigned a randomly generated 256-bit ID and a 256-bit encryption key.
                    The ID is used solely for storing and retrieving the note, while the content is encrypted on the client side using AES-GCM with the generated key.
                  </p>
                  <p className="border-l-4 border-purple-light/50 pl-6 py-2">
                    Only the encrypted data is sent to the server, which stores it entirely in memory without writing anything to disk.
                    Because the server never receives the encryption key, it is technically unable to decrypt any note contents—even if attempted.
                  </p>
                </div>
              </a>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-8 slide-up border-2 border-purple-primary/30 hover:border-purple-primary/60 transition-all duration-300 group hover:scale-105" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-primary/30 to-purple-dark/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lock className="w-7 h-7 text-purple-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Client-Side Encryption</h4>
                </div>
                <p className="text-gray-light text-base leading-relaxed">Server cannot read note contents. All encryption happens in your browser before upload.</p>
              </div>

              <div className="glass-card rounded-2xl p-8 slide-up border-2 border-purple-light/30 hover:border-purple-light/60 transition-all duration-300 group hover:scale-105" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-light/30 to-purple-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Timer className="w-7 h-7 text-purple-light" />
                  </div>
                  <h4 className="text-xl font-bold">Expiration Timers</h4>
                </div>
                <p className="text-gray-light text-base leading-relaxed">Optional view limits and time-based expiry. Files self-destruct automatically.</p>
              </div>

              <div className="glass-card rounded-2xl p-8 slide-up border-2 border-purple-glow/30 hover:border-purple-glow/60 transition-all duration-300 group hover:scale-105" style={{ animationDelay: '0.5s', opacity: 0 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-glow/30 to-purple-light/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trash2 className="w-7 h-7 text-purple-glow" />
                  </div>
                  <h4 className="text-xl font-bold">Memory Storage</h4>
                </div>
                <p className="text-gray-light text-base leading-relaxed">In-memory only, no disk persistence. Data vanishes after download or expiry.</p>
              </div>

              <div className="glass-card rounded-2xl p-8 slide-up border-2 border-purple-dark/30 hover:border-purple-dark/60 transition-all duration-300 group hover:scale-105" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-dark/30 to-purple-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-7 h-7 text-purple-dark" />
                  </div>
                  <h4 className="text-xl font-bold">Open Source</h4>
                </div>
                <p className="text-gray-light text-base leading-relaxed">Fully auditable and transparent code. No hidden backdoors or tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-primary/30 py-16 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <Image
                  src="/hashweb-logo.png"
                  alt="Hash Web"
                  width={1920}
                  height={1080}
                  className="h-12 w-auto"
                  quality={95}
                />
              </div>
              <p className="text-gray-light text-sm leading-relaxed">
                Zero-knowledge, client-side encrypted file sharing platform.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-light hover:text-purple-light transition-colors text-sm">Home</a>
                <a href="#features" className="block text-gray-light hover:text-purple-light transition-colors text-sm">Features</a>
                <a href="#about" className="block text-gray-light hover:text-purple-light transition-colors text-sm">About</a>
                <a href="/how-it-works" className="block text-gray-light hover:text-purple-light transition-colors text-sm">How It Works</a>
              </nav>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-white font-bold mb-4">Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-primary animate-pulse"></div>
                <span className="text-purple-light text-sm">Secure & Encrypted</span>
              </div>
              <p className="text-gray-light text-xs mt-4">
                Your privacy is our priority.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-8 pt-8 border-t border-purple-primary/30">
            <div className="flex items-center justify-center gap-6">
              {/* bags.fm */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Image
                    src="/bags-icon.png"
                    alt="bags.fm"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/hashweb_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Image
                    src="/x-logo.png"
                    alt="X"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ardtys/hashweb-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Github className="w-6 h-6 text-purple-light" />
                </div>
              </a>
            </div>

            {/* Developed By Section */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Developed by</h3>
              <div className="flex items-center justify-center gap-12 flex-wrap">
                {/* Jeffy Yu */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-purple-primary/30 group-hover:border-purple-primary transition-all group-hover:scale-110">
                    <Image
                      src="/jeffyyu.webp"
                      alt="Jeffy Yu"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-mono font-semibold">jeffy yu</p>
                </div>

                {/* GNON Dev */}
                <a
                  href="https://x.com/GnonLabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-purple-primary/30 group-hover:border-purple-primary transition-all group-hover:scale-110">
                    <Image
                      src="/gnon.webp"
                      alt="GNON Dev"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-mono font-semibold">gnon dev</p>
                </a>

                {/* Rudeus */}
                <a
                  href="https://x.com/rudeuscapital_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-purple-primary/30 group-hover:border-purple-primary transition-all group-hover:scale-110">
                    <Image
                      src="/rudeus.jpeg"
                      alt="Rudeus"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-mono font-semibold">rudeus</p>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-12">
              <p className="text-gray-light mb-2 font-mono text-sm">
                © 2026 HASH WEB. All rights reserved.
              </p>
              <p className="text-xs text-purple-light font-mono tracking-wider">
                ENCRYPTED • EPHEMERAL • OPEN SOURCE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
