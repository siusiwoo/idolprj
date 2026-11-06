// Supabase 연결 설정 (모든 페이지에서 같이 씀)
const SUPABASE_URL = 'https://mlmqrjfuffrshzpyflnh.supabase.co';
const SUPABASE_KEY = '여기에_Publishable_key_붙여넣기';

// window.supabase = CDN으로 불러온 라이브러리, sb = 우리 프로젝트에 연결된 클라이언트
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
