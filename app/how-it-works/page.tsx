'use client'

import Link from 'next/link'
import { ArrowDown, ArrowLeft, Lock, Key, Server, Eye, Shield, FileText, Download, Upload } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dotted Grid Background */}
      <div className="fixed inset-0 dotted-grid pointer-events-none" />

      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-primary/8 to-transparent top-[20%] animate-scan-horizontal" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-primary/5 to-transparent top-[60%] animate-scan-horizontal-slow" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-primary/8 to-transparent left-[30%] animate-scan-vertical" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-primary/5 to-transparent left-[70%] animate-scan-vertical-slow" />
      </div>

      {/* Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute w-96 h-96 bg-purple-primary/8 rounded-full blur-3xl top-[10%] left-[10%] animate-orb-1" />
        <div className="absolute w-80 h-80 bg-purple-light/8 rounded-full blur-3xl bottom-[20%] right-[15%] animate-orb-2" />
        <div className="absolute w-72 h-72 bg-purple-dark/8 rounded-full blur-3xl top-[60%] left-[60%] animate-orb-3" />
      </div>

      {/* Header */}
      <header className="relative border-b border-purple-primary py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-light hover:text-purple-light transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-mono">Back to Home</span>
          </Link>
          <div className="font-mono text-sm text-gray-light">
            <span className="text-purple-primary">$</span> how-it-works --visual
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-4">HOW IT WORKS</h1>
            <p className="text-xl text-gray-light">End-to-End Encryption Flow</p>
          </div>

          {/* Flow Diagram */}
          <div className="space-y-8">
            {/* Step 1: User Upload */}
            <div className="flex flex-col items-center slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="border-2 border-purple-primary p-8 w-full max-w-2xl bg-black hover:bg-purple-primary hover:bg-opacity-5 hover:shadow-lg hover:shadow-purple-glow/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="border border-purple-primary p-3">
                    <Upload className="w-8 h-8 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">STEP 1: User Upload</h3>
                    <p className="text-gray-light">You select a file to share</p>
                  </div>
                </div>
              </div>
              <ArrowDown className="w-8 h-8 my-4 text-gray-light" />
            </div>

            {/* Step 2: Key Generation */}
            <div className="flex flex-col items-center slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="border-2 border-purple-primary p-8 w-full max-w-2xl bg-black hover:shadow-lg hover:shadow-purple-glow/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="border border-purple-primary p-3">
                    <Key className="w-8 h-8 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">STEP 2: Key Generation</h3>
                    <p className="text-gray-light">System generates secure keys</p>
                  </div>
                </div>
                <div className="ml-16 space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-primary">→</span>
                    <span className="text-gray-light">256-bit Note ID:</span>
                    <code className="text-white border border-purple-primary px-2 py-1 text-xs">a7f3...b2e9</code>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-primary">→</span>
                    <span className="text-gray-light">256-bit Encryption Key:</span>
                    <code className="text-white border border-purple-primary px-2 py-1 text-xs">9c4d...7a1f</code>
                  </div>
                </div>
              </div>
              <ArrowDown className="w-8 h-8 my-4 text-gray-light" />
            </div>

            {/* Step 3: Client-Side Encryption */}
            <div className="flex flex-col items-center slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <div className="border-2 border-purple-primary p-8 w-full max-w-2xl bg-black hover:shadow-lg hover:shadow-purple-glow/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="border border-purple-primary p-3">
                    <Lock className="w-8 h-8 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">STEP 3: Client-Side Encryption</h3>
                    <p className="text-gray-light">Your browser encrypts the file</p>
                  </div>
                </div>
                <div className="ml-16 space-y-4">
                  <div className="border border-purple-primary p-4 bg-black">
                    <p className="font-mono text-xs text-gray-light mb-2">Original File:</p>
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      <code className="text-white">sensitive_data.txt</code>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl">↓</span>
                    <p className="text-xs text-gray-light">AES-GCM Encryption</p>
                  </div>
                  <div className="border border-purple-primary p-4 bg-black">
                    <p className="font-mono text-xs text-gray-light mb-2">Encrypted Data:</p>
                    <code className="text-white text-xs break-all">
                      8a9f7e3d2c1b...encrypted...5f4e3d2c1a
                    </code>
                  </div>
                </div>
              </div>
              <ArrowDown className="w-8 h-8 my-4 text-gray-light" />
            </div>

            {/* Step 4: Server Storage */}
            <div className="flex flex-col items-center slide-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <div className="border-2 border-purple-primary p-8 w-full max-w-2xl bg-black hover:shadow-lg hover:shadow-purple-glow/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="border border-purple-primary p-3">
                    <Server className="w-8 h-8 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">STEP 4: Server Storage</h3>
                    <p className="text-gray-light">Encrypted data stored in memory</p>
                  </div>
                </div>
                <div className="ml-16 space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Only encrypted data sent</p>
                      <p className="text-gray-light text-sm">Encryption key NEVER leaves your browser</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Server cannot decrypt</p>
                      <p className="text-gray-light text-sm">No access to encryption key</p>
                    </div>
                  </div>
                  <div className="border border-purple-primary p-3 bg-black font-mono text-xs">
                    <p className="text-gray-light mb-1">Storage:</p>
                    <p className="text-white">RAM only (no disk writes)</p>
                    <p className="text-gray-light mt-2 mb-1">Access:</p>
                    <p className="text-white">Via Note ID only</p>
                  </div>
                </div>
              </div>
              <ArrowDown className="w-8 h-8 my-4 text-gray-light" />
            </div>

            {/* Step 5: Share Link */}
            <div className="flex flex-col items-center slide-up" style={{ animationDelay: '1.0s', opacity: 0 }}>
              <div className="border-2 border-purple-primary p-8 w-full max-w-2xl bg-black hover:shadow-lg hover:shadow-purple-glow/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="border border-purple-primary p-3">
                    <FileText className="w-8 h-8 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">STEP 5: Shareable Link</h3>
                    <p className="text-gray-light">You receive a secure link</p>
                  </div>
                </div>
                <div className="ml-16">
                  <div className="border border-purple-primary p-4 bg-black">
                    <p className="font-mono text-xs text-gray-light mb-2">Link Format:</p>
                    <code className="text-white text-sm break-all">
                      hashweb.com/<span className="text-gray-light">[Note-ID]</span>#<span className="text-white">[Encryption-Key]</span>
                    </code>
                    <div className="mt-4 pt-4 border-t border-purple-primary">
                      <p className="text-xs text-gray-light mb-2">Example:</p>
                      <code className="text-xs text-white break-all">
                        hashweb.com/a7f3b2e9#9c4d7a1f
                      </code>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDown className="w-8 h-8 my-4 text-gray-light" />
            </div>

            {/* Step 6: Recipient Download */}
            <div className="flex flex-col items-center slide-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
              <div className="border-2 border-purple-primary p-8 w-full max-w-2xl bg-black hover:shadow-lg hover:shadow-purple-glow/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="border border-purple-primary p-3">
                    <Download className="w-8 h-8 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">STEP 6: Recipient Access</h3>
                    <p className="text-gray-light">Recipient decrypts locally</p>
                  </div>
                </div>
                <div className="ml-16 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-white">1.</span>
                    <p className="text-gray-light">Server sends encrypted data using Note ID</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white">2.</span>
                    <p className="text-gray-light">Browser uses key from URL to decrypt</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white">3.</span>
                    <p className="text-gray-light">Original file restored in recipient's browser</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white">4.</span>
                    <p className="text-gray-light">Note auto-destructs (one-time access)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Summary */}
            <div className="mt-16 border-2 border-purple-primary p-8 bg-black hover:shadow-lg hover:shadow-purple-glow/30 transition-all fade-in" style={{ animationDelay: '1.4s', opacity: 0 }}>
              <h3 className="text-3xl font-bold mb-6 text-center text-purple-light">🔒 SECURITY GUARANTEE</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-purple-primary p-6 text-center hover:bg-purple-primary hover:bg-opacity-5 transition-all">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-purple-light" />
                  <h4 className="font-bold mb-2">Zero Knowledge</h4>
                  <p className="text-sm text-gray-light">Server never has encryption key</p>
                </div>
                <div className="border border-purple-primary p-6 text-center hover:bg-purple-primary hover:bg-opacity-5 transition-all">
                  <Lock className="w-12 h-12 mx-auto mb-4 text-purple-light" />
                  <h4 className="font-bold mb-2">AES-256-GCM</h4>
                  <p className="text-sm text-gray-light">Military-grade encryption</p>
                </div>
                <div className="border border-purple-primary p-6 text-center hover:bg-purple-primary hover:bg-opacity-5 transition-all">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-purple-light" />
                  <h4 className="font-bold mb-2">Memory Only</h4>
                  <p className="text-sm text-gray-light">No persistent storage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-block border-2 border-purple-primary px-8 py-4 font-bold hover:bg-purple-primary hover:text-white hover:shadow-lg hover:shadow-purple-glow/50 transition-all"
            >
              [ BACK TO HOME ]
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-primary py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-gray-light font-mono">
            HASH WEB © 2026 | END-TO-END ENCRYPTED | OPEN SOURCE
          </p>
        </div>
      </footer>
    </main>
  )
}
