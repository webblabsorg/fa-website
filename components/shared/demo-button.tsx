'use client'

import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DemoButtonProps {
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export function DemoButton({ size = 'default', className = '' }: DemoButtonProps) {
  const [showModal, setShowModal] = useState(false)

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleOpenDemo = () => {
    window.open('https://lsk.Fare2U.com/auth/login', '_blank')
    setShowModal(false)
  }

  return (
    <>
      <Button
        size={size}
        className={className}
        onClick={handleDemoClick}
      >
        Live Demo
      </Button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Demo Login Details
              </h3>
              <p className="text-slate-600 text-sm">
                Use these credentials to explore Fare2U
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-slate-50 rounded-lg p-6 mb-6 space-y-4">
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase mb-1">
                  Username
                </div>
                <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3">
                  <code className="text-sm text-slate-900 font-mono">
                    admin@example.com
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('admin@example.com')
                    }}
                    className="text-green-600 hover:text-green-700 text-xs font-semibold"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase mb-1">
                  Password
                </div>
                <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3">
                  <code className="text-sm text-slate-900 font-mono">
                    12345
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('12345')
                    }}
                    className="text-green-600 hover:text-green-700 text-xs font-semibold"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleOpenDemo}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Open Demo
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Note */}
            <p className="text-xs text-slate-500 text-center mt-4">
              This is a shared demo environment. Your changes may be visible to others.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
