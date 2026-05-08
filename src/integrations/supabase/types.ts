// Este archivo será auto-generado por la CLI de Supabase.
// npx supabase gen types typescript --project-id <project-id> > src/integrations/supabase/types.ts

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      // Define aquí tus tablas, por ejemplo:
      // contacts: {
      //   Row: { id: number; name: string; email: string; };
      //   Insert: { name: string; email: string; };
      //   Update: { name?: string; email?: string; };
      // };
    };
    Views: { [key: string]: never };
    Functions: { [key: string]: never };
  };
}