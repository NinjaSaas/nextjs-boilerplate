export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      _GroupSessionToUser: {
        Row: {
          A: string;
          B: string;
        };
        Insert: {
          A: string;
          B: string;
        };
        Update: {
          A?: string;
          B?: string;
        };
        Relationships: [
          {
            foreignKeyName: "_GroupSessionToUser_A_fkey";
            columns: ["A"];
            isOneToOne: false;
            referencedRelation: "GroupSession";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "_GroupSessionToUser_B_fkey";
            columns: ["B"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      _SpecializationToTherapist: {
        Row: {
          A: string;
          B: string;
        };
        Insert: {
          A: string;
          B: string;
        };
        Update: {
          A?: string;
          B?: string;
        };
        Relationships: [
          {
            foreignKeyName: "_SpecializationToTherapist_A_fkey";
            columns: ["A"];
            isOneToOne: false;
            referencedRelation: "Specialization";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "_SpecializationToTherapist_B_fkey";
            columns: ["B"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Account: {
        Row: {
          access_token: string | null;
          expires_at: number | null;
          id: string;
          id_token: string | null;
          oauth_token: string | null;
          oauth_token_secret: string | null;
          provider: string;
          providerAccountId: string;
          refresh_token: string | null;
          scope: string | null;
          session_state: string | null;
          token_type: string | null;
          type: string;
          userId: string;
        };
        Insert: {
          access_token?: string | null;
          expires_at?: number | null;
          id: string;
          id_token?: string | null;
          oauth_token?: string | null;
          oauth_token_secret?: string | null;
          provider: string;
          providerAccountId: string;
          refresh_token?: string | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
          type: string;
          userId: string;
        };
        Update: {
          access_token?: string | null;
          expires_at?: number | null;
          id?: string;
          id_token?: string | null;
          oauth_token?: string | null;
          oauth_token_secret?: string | null;
          provider?: string;
          providerAccountId?: string;
          refresh_token?: string | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
          type?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Account_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Appointment: {
        Row: {
          clientId: string;
          id: string;
          reminderPreference: Database["public"]["Enums"]["ReminderPreference"];
          reminderSent: boolean;
          sessionDate: string;
          status: Database["public"]["Enums"]["AppointmentStatus"];
          therapistId: string;
        };
        Insert: {
          clientId: string;
          id: string;
          reminderPreference?: Database["public"]["Enums"]["ReminderPreference"];
          reminderSent?: boolean;
          sessionDate: string;
          status?: Database["public"]["Enums"]["AppointmentStatus"];
          therapistId: string;
        };
        Update: {
          clientId?: string;
          id?: string;
          reminderPreference?: Database["public"]["Enums"]["ReminderPreference"];
          reminderSent?: boolean;
          sessionDate?: string;
          status?: Database["public"]["Enums"]["AppointmentStatus"];
          therapistId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Appointment_clientId_fkey";
            columns: ["clientId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Appointment_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Availability: {
        Row: {
          availabilityType: Database["public"]["Enums"]["AvailabilityType"];
          id: string;
          onlineSessions: boolean;
          therapistId: string;
        };
        Insert: {
          availabilityType: Database["public"]["Enums"]["AvailabilityType"];
          id: string;
          onlineSessions: boolean;
          therapistId: string;
        };
        Update: {
          availabilityType?: Database["public"]["Enums"]["AvailabilityType"];
          id?: string;
          onlineSessions?: boolean;
          therapistId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Availability_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Award: {
        Row: {
          awardDetails: string;
          awardingBody: string;
          date: string;
          id: string;
          therapistId: string;
        };
        Insert: {
          awardDetails: string;
          awardingBody: string;
          date: string;
          id: string;
          therapistId: string;
        };
        Update: {
          awardDetails?: string;
          awardingBody?: string;
          date?: string;
          id?: string;
          therapistId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Award_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      ConsentStatus: {
        Row: {
          consentType: string;
          dateGiven: string;
          id: string;
          status: boolean;
          userId: string;
        };
        Insert: {
          consentType: string;
          dateGiven: string;
          id: string;
          status: boolean;
          userId: string;
        };
        Update: {
          consentType?: string;
          dateGiven?: string;
          id?: string;
          status?: boolean;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ConsentStatus_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Contact: {
        Row: {
          email: string;
          id: string;
          phone: string;
          therapistId: string;
          website: string;
        };
        Insert: {
          email: string;
          id: string;
          phone: string;
          therapistId: string;
          website: string;
        };
        Update: {
          email?: string;
          id?: string;
          phone?: string;
          therapistId?: string;
          website?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Contact_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Education: {
        Row: {
          id: string;
          name: string;
          therapistId: string;
          university: string;
        };
        Insert: {
          id: string;
          name: string;
          therapistId: string;
          university: string;
        };
        Update: {
          id?: string;
          name?: string;
          therapistId?: string;
          university?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Education_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Fee: {
        Row: {
          fee: string;
          id: string;
          service: string;
          therapistId: string;
          time: string;
        };
        Insert: {
          fee: string;
          id: string;
          service: string;
          therapistId: string;
          time: string;
        };
        Update: {
          fee?: string;
          id?: string;
          service?: string;
          therapistId?: string;
          time?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Fee_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Feedback: {
        Row: {
          appointmentId: string;
          comments: string | null;
          date: string;
          id: string;
          rating: number;
        };
        Insert: {
          appointmentId: string;
          comments?: string | null;
          date: string;
          id: string;
          rating: number;
        };
        Update: {
          appointmentId?: string;
          comments?: string | null;
          date?: string;
          id?: string;
          rating?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Feedback_appointmentId_fkey";
            columns: ["appointmentId"];
            isOneToOne: false;
            referencedRelation: "Appointment";
            referencedColumns: ["id"];
          },
        ];
      };
      GroupSession: {
        Row: {
          date: string;
          description: string;
          duration: number;
          id: string;
          maxParticipants: number;
          status: Database["public"]["Enums"]["GroupSessionStatus"];
          therapistId: string;
          title: string;
        };
        Insert: {
          date: string;
          description: string;
          duration: number;
          id: string;
          maxParticipants: number;
          status?: Database["public"]["Enums"]["GroupSessionStatus"];
          therapistId: string;
          title: string;
        };
        Update: {
          date?: string;
          description?: string;
          duration?: number;
          id?: string;
          maxParticipants?: number;
          status?: Database["public"]["Enums"]["GroupSessionStatus"];
          therapistId?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "GroupSession_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Log: {
        Row: {
          actionPerformed: string;
          deviceInfo: string;
          id: string;
          ipAddress: string;
          timestamp: string;
          userId: string;
        };
        Insert: {
          actionPerformed: string;
          deviceInfo: string;
          id: string;
          ipAddress: string;
          timestamp: string;
          userId: string;
        };
        Update: {
          actionPerformed?: string;
          deviceInfo?: string;
          id?: string;
          ipAddress?: string;
          timestamp?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Log_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Message: {
        Row: {
          content: string;
          id: string;
          isRead: boolean;
          receiverId: string;
          senderId: string;
          timestamp: string;
        };
        Insert: {
          content: string;
          id: string;
          isRead: boolean;
          receiverId: string;
          senderId: string;
          timestamp: string;
        };
        Update: {
          content?: string;
          id?: string;
          isRead?: boolean;
          receiverId?: string;
          senderId?: string;
          timestamp?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Message_receiverId_fkey";
            columns: ["receiverId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Message_senderId_fkey";
            columns: ["senderId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Notification: {
        Row: {
          content: string;
          id: string;
          isRead: boolean;
          timestamp: string;
          type: Database["public"]["Enums"]["NotificationType"];
          userId: string;
        };
        Insert: {
          content: string;
          id: string;
          isRead: boolean;
          timestamp: string;
          type: Database["public"]["Enums"]["NotificationType"];
          userId: string;
        };
        Update: {
          content?: string;
          id?: string;
          isRead?: boolean;
          timestamp?: string;
          type?: Database["public"]["Enums"]["NotificationType"];
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Notification_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Payment: {
        Row: {
          billingAddress: string;
          cardDetails: string;
          history: string;
          id: string;
          nextBilling: string;
          plan: string;
          userId: string;
        };
        Insert: {
          billingAddress: string;
          cardDetails: string;
          history: string;
          id: string;
          nextBilling: string;
          plan: string;
          userId: string;
        };
        Update: {
          billingAddress?: string;
          cardDetails?: string;
          history?: string;
          id?: string;
          nextBilling?: string;
          plan?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Payment_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      RangeAvailability: {
        Row: {
          availabilityId: string;
          days: Database["public"]["Enums"]["Day"][] | null;
          endDate: string;
          endTime: string;
          id: string;
          startDate: string;
          startTime: string;
        };
        Insert: {
          availabilityId: string;
          days?: Database["public"]["Enums"]["Day"][] | null;
          endDate: string;
          endTime: string;
          id: string;
          startDate: string;
          startTime: string;
        };
        Update: {
          availabilityId?: string;
          days?: Database["public"]["Enums"]["Day"][] | null;
          endDate?: string;
          endTime?: string;
          id?: string;
          startDate?: string;
          startTime?: string;
        };
        Relationships: [
          {
            foreignKeyName: "RangeAvailability_availabilityId_fkey";
            columns: ["availabilityId"];
            isOneToOne: false;
            referencedRelation: "Availability";
            referencedColumns: ["id"];
          },
        ];
      };
      ResourceLibrary: {
        Row: {
          contentType: Database["public"]["Enums"]["ResourceContentType"];
          description: string;
          id: string;
          language: Database["public"]["Enums"]["Language"];
          tags: string[] | null;
          title: string;
          url: string;
        };
        Insert: {
          contentType: Database["public"]["Enums"]["ResourceContentType"];
          description: string;
          id: string;
          language: Database["public"]["Enums"]["Language"];
          tags?: string[] | null;
          title: string;
          url: string;
        };
        Update: {
          contentType?: Database["public"]["Enums"]["ResourceContentType"];
          description?: string;
          id?: string;
          language?: Database["public"]["Enums"]["Language"];
          tags?: string[] | null;
          title?: string;
          url?: string;
        };
        Relationships: [];
      };
      Review: {
        Row: {
          id: string;
          rating: number;
          reviewText: string;
          therapistId: string;
        };
        Insert: {
          id: string;
          rating: number;
          reviewText: string;
          therapistId: string;
        };
        Update: {
          id?: string;
          rating?: number;
          reviewText?: string;
          therapistId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Review_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Session: {
        Row: {
          expires: string;
          id: string;
          sessionToken: string;
          userId: string;
        };
        Insert: {
          expires: string;
          id: string;
          sessionToken: string;
          userId: string;
        };
        Update: {
          expires?: string;
          id?: string;
          sessionToken?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Session_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      SessionMaterial: {
        Row: {
          description: string;
          id: string;
          therapistId: string;
          title: string;
          type: string;
          uploadDate: string;
          url: string;
        };
        Insert: {
          description: string;
          id: string;
          therapistId: string;
          title: string;
          type: string;
          uploadDate: string;
          url: string;
        };
        Update: {
          description?: string;
          id?: string;
          therapistId?: string;
          title?: string;
          type?: string;
          uploadDate?: string;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "SessionMaterial_therapistId_fkey";
            columns: ["therapistId"];
            isOneToOne: false;
            referencedRelation: "Therapist";
            referencedColumns: ["id"];
          },
        ];
      };
      Specialization: {
        Row: {
          description: string | null;
          id: string;
          name: string;
        };
        Insert: {
          description?: string | null;
          id: string;
          name: string;
        };
        Update: {
          description?: string | null;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      SpecificSlot: {
        Row: {
          availabilityId: string;
          endDateTime: string;
          id: string;
          startDateTime: string;
        };
        Insert: {
          availabilityId: string;
          endDateTime: string;
          id: string;
          startDateTime: string;
        };
        Update: {
          availabilityId?: string;
          endDateTime?: string;
          id?: string;
          startDateTime?: string;
        };
        Relationships: [
          {
            foreignKeyName: "SpecificSlot_availabilityId_fkey";
            columns: ["availabilityId"];
            isOneToOne: false;
            referencedRelation: "Availability";
            referencedColumns: ["id"];
          },
        ];
      };
      Survey: {
        Row: {
          appetite: string;
          comfortWithTechnology: string;
          considerTherapy: string[] | null;
          culturalConsiderations: string | null;
          eatingHabits: string;
          emotionalState: string;
          feelingBad: string;
          feelingDown: string;
          feelingTired: string;
          hurtingYourself: string;
          id: string;
          impactOnLife: string;
          interestOrPleasure: string;
          intimacyProblems: string;
          lastThoughtsOfSuicide: string;
          movingOrSpeaking: string;
          notSeekingTherapyReasons: string[] | null;
          participatedOnline: string;
          physicalHealth: string;
          primaryReason: string[] | null;
          receivedTherapy: string;
          sleepingTrouble: string;
          specificPlansForSuicide: string;
          therapistExpectations: string[] | null;
          troubleConcentrating: string;
          userId: string;
        };
        Insert: {
          appetite: string;
          comfortWithTechnology: string;
          considerTherapy?: string[] | null;
          culturalConsiderations?: string | null;
          eatingHabits: string;
          emotionalState: string;
          feelingBad: string;
          feelingDown: string;
          feelingTired: string;
          hurtingYourself: string;
          id: string;
          impactOnLife: string;
          interestOrPleasure: string;
          intimacyProblems: string;
          lastThoughtsOfSuicide: string;
          movingOrSpeaking: string;
          notSeekingTherapyReasons?: string[] | null;
          participatedOnline: string;
          physicalHealth: string;
          primaryReason?: string[] | null;
          receivedTherapy: string;
          sleepingTrouble: string;
          specificPlansForSuicide: string;
          therapistExpectations?: string[] | null;
          troubleConcentrating: string;
          userId: string;
        };
        Update: {
          appetite?: string;
          comfortWithTechnology?: string;
          considerTherapy?: string[] | null;
          culturalConsiderations?: string | null;
          eatingHabits?: string;
          emotionalState?: string;
          feelingBad?: string;
          feelingDown?: string;
          feelingTired?: string;
          hurtingYourself?: string;
          id?: string;
          impactOnLife?: string;
          interestOrPleasure?: string;
          intimacyProblems?: string;
          lastThoughtsOfSuicide?: string;
          movingOrSpeaking?: string;
          notSeekingTherapyReasons?: string[] | null;
          participatedOnline?: string;
          physicalHealth?: string;
          primaryReason?: string[] | null;
          receivedTherapy?: string;
          sleepingTrouble?: string;
          specificPlansForSuicide?: string;
          therapistExpectations?: string[] | null;
          troubleConcentrating?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Survey_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Therapist: {
        Row: {
          bio: string;
          cancellationPolicy: string | null;
          certifications: string[] | null;
          credentials: string;
          experienceYears: number;
          id: string;
          languages: Database["public"]["Enums"]["Language"][] | null;
          location: string;
          methods: string[] | null;
          professionalExperience: string[] | null;
          qualifications: string[] | null;
          specialties: string[] | null;
          tools: string[] | null;
          userId: string;
        };
        Insert: {
          bio: string;
          cancellationPolicy?: string | null;
          certifications?: string[] | null;
          credentials: string;
          experienceYears: number;
          id: string;
          languages?: Database["public"]["Enums"]["Language"][] | null;
          location: string;
          methods?: string[] | null;
          professionalExperience?: string[] | null;
          qualifications?: string[] | null;
          specialties?: string[] | null;
          tools?: string[] | null;
          userId: string;
        };
        Update: {
          bio?: string;
          cancellationPolicy?: string | null;
          certifications?: string[] | null;
          credentials?: string;
          experienceYears?: number;
          id?: string;
          languages?: Database["public"]["Enums"]["Language"][] | null;
          location?: string;
          methods?: string[] | null;
          professionalExperience?: string[] | null;
          qualifications?: string[] | null;
          specialties?: string[] | null;
          tools?: string[] | null;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Therapist_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      User: {
        Row: {
          age: string | null;
          culturalBackground: string | null;
          education: string | null;
          email: string | null;
          emailVerified: string | null;
          emergencyContactName: string | null;
          emergencyContactPhone: string | null;
          gender: string | null;
          hasSurvey: boolean;
          id: string;
          image: string | null;
          name: string | null;
          occupation: string | null;
          phone: string | null;
          preferredCommunicationMethod: string[] | null;
          preferredLanguage: string | null;
          relationship: string | null;
          userRole: Database["public"]["Enums"]["UserRole"];
        };
        Insert: {
          age?: string | null;
          culturalBackground?: string | null;
          education?: string | null;
          email?: string | null;
          emailVerified?: string | null;
          emergencyContactName?: string | null;
          emergencyContactPhone?: string | null;
          gender?: string | null;
          hasSurvey?: boolean;
          id: string;
          image?: string | null;
          name?: string | null;
          occupation?: string | null;
          phone?: string | null;
          preferredCommunicationMethod?: string[] | null;
          preferredLanguage?: string | null;
          relationship?: string | null;
          userRole?: Database["public"]["Enums"]["UserRole"];
        };
        Update: {
          age?: string | null;
          culturalBackground?: string | null;
          education?: string | null;
          email?: string | null;
          emailVerified?: string | null;
          emergencyContactName?: string | null;
          emergencyContactPhone?: string | null;
          gender?: string | null;
          hasSurvey?: boolean;
          id?: string;
          image?: string | null;
          name?: string | null;
          occupation?: string | null;
          phone?: string | null;
          preferredCommunicationMethod?: string[] | null;
          preferredLanguage?: string | null;
          relationship?: string | null;
          userRole?: Database["public"]["Enums"]["UserRole"];
        };
        Relationships: [];
      };
      VerificationToken: {
        Row: {
          expires: string;
          identifier: string;
          token: string;
        };
        Insert: {
          expires: string;
          identifier: string;
          token: string;
        };
        Update: {
          expires?: string;
          identifier?: string;
          token?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      AppointmentStatus: "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELED";
      AvailabilityType: "RANGE" | "SPECIFIC_SLOTS";
      Day:
        | "MONDAY"
        | "TUESDAY"
        | "WEDNESDAY"
        | "THURSDAY"
        | "FRIDAY"
        | "SATURDAY"
        | "SUNDAY";
      GroupSessionStatus: "SCHEDULED" | "ONGOING" | "COMPLETED" | "CANCELED";
      Language: "ENGLISH" | "FRENCH" | "ARABIC" | "DARIJA";
      NotificationType: "APPOINTMENT" | "PAYMENT" | "SYSTEM";
      ReminderPreference: "EMAIL" | "SMS" | "BOTH" | "NONE";
      ResourceContentType: "ARTICLE" | "VIDEO" | "AUDIO" | "INFOGRAPHIC";
      UserRole: "Owner" | "Admin" | "Therapist" | "User" | "Guest";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
