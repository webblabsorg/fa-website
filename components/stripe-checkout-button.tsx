'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { createCheckoutSession } from '@/lib/stripe'
import { Loader2 } from 'lucide-react'

interface StripeCheckoutButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  priceId?: string
}

export function StripeCheckoutButton({
  children,
  className,
  size = 'default',
  variant = 'default',
  priceId,
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setIsLoading(true)
      await createCheckoutSession(priceId)
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again or contact support.')
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      className={className}
      size={size}
      variant={variant}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
