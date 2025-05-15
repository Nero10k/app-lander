# Supabase Setup Instructions

This document outlines the steps to set up Supabase for the PWR app quiz funnel.

## Prerequisites

1. A Supabase account and project
2. The Supabase URL and anon key (already set up in `src/lib/supabase.ts`)

## Database Schema Setup

To set up the required tables for the quiz funnel, follow these steps:

1. Navigate to your Supabase project dashboard
2. Go to the SQL Editor
3. Click on "New Query"
4. Copy and paste the contents of `src/lib/supabase-schema.sql` into the SQL Editor
5. Run the SQL query

This will create:
- `quiz_users` table - Stores user information (name, email)
- `quiz_answers` table - Stores quiz answers linked to users
- Appropriate indexes for better query performance

## Row Level Security (Optional but Recommended)

For better security, you may want to set up Row Level Security (RLS) policies:

1. Navigate to your Supabase project dashboard
2. Go to the Authentication → Policies section
3. Create policies for each table that restrict access appropriately

Example policy for quiz_users table:
```sql
-- Allow anonymous users to insert but not read, update, or delete
CREATE POLICY "Allow anonymous inserts" 
ON quiz_users FOR INSERT 
TO anon 
WITH CHECK (true);
```

Example policy for quiz_answers table:
```sql
-- Allow anonymous users to insert but not read, update, or delete
CREATE POLICY "Allow anonymous inserts" 
ON quiz_answers FOR INSERT 
TO anon 
WITH CHECK (true);
```

## API Access

The app uses the Supabase client to access these tables. The integration is already set up in:
- `src/lib/supabase.ts` - Client setup
- `src/components/quiz/QuizContainer.tsx` - Data saving logic

## Data Usage

Data is collected at these key points:
1. When users submit their personal information (name and email)
2. When users complete the quiz and submit their answers 