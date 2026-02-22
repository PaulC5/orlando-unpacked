import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!

// Server-side client with service role key (for API routes)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Types for our submissions table
export interface WizardSubmission {
  id?: string
  created_at?: string
  email: string
  experience?: string
  vibe?: string
  days?: string
  timing?: string
  concerns?: string[]
  group_size?: string
  ages?: string[]
  parks?: string[]
  crowds?: string
  dining?: string[]
  accommodation?: string
  budget?: string
}
