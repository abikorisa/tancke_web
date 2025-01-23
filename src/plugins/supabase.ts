// plugins/supabase.ts
import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
	const supabaseUrl = '<YOUR_SUPABASE_URL>'
	const supabaseKey = '<YOUR_SUPABASE_ANON_KEY>'
	const supabase = createClient(supabaseUrl, supabaseKey)

	return {
		provide: {
			supabase,
		},
	}
})
