/**
 * Icon Mapping and Utilities
 * 
 * Central registry of commonly used Lucide React icons
 * for the Fare website.
 */

import {
  // Core Features
  Database,
  HeartPulse,
  Building2,
  Wheat,
  DollarSign,
  Egg,
  TrendingUp,
  Heart,
  BarChart3,
  
  // Actions
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Download,
  Upload,
  
  // Navigation
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  
  // Social
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  
  // UI Elements
  Star,
  Quote,
  User,
  Users,
  Calendar,
  Clock,
  MapPin,
  Phone,
  
  type LucideIcon,
} from 'lucide-react'

/**
 * Feature Icons
 * Icons used for the 9 main features
 */
export const FEATURE_ICONS = {
  'livestock-tracking': Database,
  'health-management': HeartPulse,
  'shed-organization': Building2,
  'feed-optimization': Wheat,
  'sales-revenue': DollarSign,
  'production-management': Egg,
  'financial-dashboard': TrendingUp,
  'breeding-records': Heart,
  'reports': BarChart3,
} as const

/**
 * Action Icons
 * Icons for buttons, alerts, and user actions
 */
export const ACTION_ICONS = {
  check: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  external: ExternalLink,
  download: Download,
  upload: Upload,
} as const

/**
 * Navigation Icons
 * Icons for navigation elements
 */
export const NAV_ICONS = {
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
} as const

/**
 * Social Media Icons
 * Icons for social media links
 */
export const SOCIAL_ICONS = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  mail: Mail,
} as const

/**
 * UI Element Icons
 * General purpose UI icons
 */
export const UI_ICONS = {
  star: Star,
  quote: Quote,
  user: User,
  users: Users,
  calendar: Calendar,
  clock: Clock,
  mapPin: MapPin,
  phone: Phone,
} as const

/**
 * Get icon by name
 * 
 * @example
 * const icon = getIcon('livestock-tracking')
 * <Icon icon={icon} />
 */
export function getIcon(name: string): LucideIcon {
  const allIcons = {
    ...FEATURE_ICONS,
    ...ACTION_ICONS,
    ...NAV_ICONS,
    ...SOCIAL_ICONS,
    ...UI_ICONS,
  }

  return allIcons[name as keyof typeof allIcons] || Database
}

/**
 * Get feature icon by ID
 * 
 * @example
 * const icon = getFeatureIcon('livestock-tracking')
 */
export function getFeatureIcon(featureId: keyof typeof FEATURE_ICONS): LucideIcon {
  return FEATURE_ICONS[featureId]
}

/**
 * Type-safe icon name
 */
export type IconName = 
  | keyof typeof FEATURE_ICONS
  | keyof typeof ACTION_ICONS
  | keyof typeof NAV_ICONS
  | keyof typeof SOCIAL_ICONS
  | keyof typeof UI_ICONS
