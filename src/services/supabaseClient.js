import { createClient } from '@supabase/supabase-js';

// Lấy key từ file .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Thiếu Supabase URL hoặc Key trong file .env!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);