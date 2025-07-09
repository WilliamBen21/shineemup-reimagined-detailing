export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string
          booking_time: string
          confirmation_number: string | null
          created_at: string
          customer_id: string
          id: string
          notes: string | null
          service_id: string
          status: string
          total_price_cents: number | null
          updated_at: string
          vehicle_make: string | null
          vehicle_model: string | null
          vehicle_year: string | null
        }
        Insert: {
          booking_date: string
          booking_time: string
          confirmation_number?: string | null
          created_at?: string
          customer_id: string
          id?: string
          notes?: string | null
          service_id: string
          status?: string
          total_price_cents?: number | null
          updated_at?: string
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_year?: string | null
        }
        Update: {
          booking_date?: string
          booking_time?: string
          confirmation_number?: string | null
          created_at?: string
          customer_id?: string
          id?: string
          notes?: string | null
          service_id?: string
          status?: string
          total_price_cents?: number | null
          updated_at?: string
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      business_hours: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_active: boolean
          start_time: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          is_active?: boolean
          start_time: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_active?: boolean
          start_time?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      lead_signups: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          signup_type: string
          source: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          signup_type?: string
          source?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          signup_type?: string
          source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          created_at: string
          customer_email: string | null
          customer_name: string
          id: string
          is_approved: boolean
          rating: number
          review_text: string
          service_type: string | null
          updated_at: string
          vehicle_info: string | null
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customer_name: string
          id?: string
          is_approved?: boolean
          rating: number
          review_text: string
          service_type?: string | null
          updated_at?: string
          vehicle_info?: string | null
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string
          id?: string
          is_approved?: boolean
          rating?: number
          review_text?: string
          service_type?: string | null
          updated_at?: string
          vehicle_info?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          category: string
          created_at: string
          description: string | null
          duration_minutes: number
          features: string[] | null
          id: string
          is_active: boolean
          name: string
          price_cents: number
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          duration_minutes: number
          features?: string[] | null
          id?: string
          is_active?: boolean
          name: string
          price_cents: number
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number
          features?: string[] | null
          id?: string
          is_active?: boolean
          name?: string
          price_cents?: number
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_confirmation_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_time_slot_available: {
        Args: {
          check_date: string
          check_time: string
          service_duration: number
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
